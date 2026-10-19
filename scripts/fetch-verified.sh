#!/usr/bin/env bash
# fetch-verified.sh — fetch a URL whose TLS chain is incomplete, WITHOUT disabling verification.
#
# WHY THIS EXISTS
#   A pulse that hits a server which omits its intermediate CA cert sees curl exit 35 /
#   ssl_verify_result=20 and concludes "source unreachable". That conclusion is wrong:
#   the leaf is frequently authentic, the origin simply failed to send the intermediate.
#   The 2026-10-19 11:50Z vqzo pulse logged row sr-20261019T0420Z (score 6500) as
#   BLOCKED_NO_CITABLE_PRIMARY_REACHABLE purely because knec.ac.ke serves its leaf and
#   nothing else. With the Sectigo intermediate supplied from the leaf's own AIA
#   extension, the same host verifies and serves 179,148 bytes of content.
#
#   That mistake is expensive: a whole content row is parked as "unverifiable" when the
#   source was sitting there the whole time. This script turns that false block into a
#   verified fetch, deterministically and for free.
#
# SECURITY CONTRACT
#   This tool NEVER passes -k / --insecure and NEVER disables peer verification.
#   If the chain cannot be completed from AIA, the script exits non-zero. Supplying a
#   genuine intermediate is the fix; suppressing verification is not. A fetch that
#   "succeeds" here is one whose full chain reached a root already in the OS trust store.
#
# USAGE
#   ./scripts/fetch-verified.sh <url> [-o outfile]
#
# EXIT CODES
#   0  fetched AND verified against a trusted root
#   2  bad usage
#   3  TLS chain could not be completed (genuinely unverifiable)
set -uo pipefail

URL="${1:-}"
if [ -z "$URL" ]; then
  echo "usage: $0 <url> [-o outfile]" >&2
  exit 2
fi
shift || true
OUT=""
while [ $# -gt 0 ]; do
  case "$1" in
    -o) OUT="${2:-}"; shift 2 ;;
    *) echo "unknown arg: $1" >&2; exit 2 ;;
  esac
done

command -v openssl >/dev/null 2>&1 || { echo "fetch-verified: openssl required" >&2; exit 3; }

HOSTPORT="$(printf '%s' "$URL" | sed -E 's#^[a-z]+://##; s#/.*$##')"
HOST="${HOSTPORT%%:*}"
if [ "${HOSTPORT##*:}" = "$HOST" ]; then PORT=443; else PORT="${HOSTPORT##*:}"; fi
# s_client REQUIRES an explicit host:port. Given a bare host it does not fail fast — it
# hangs until killed, so chain.raw comes back empty and a completable host gets reported
# as unverifiable. Build the connect target once, with the port, and use it everywhere.
CONNECT="$HOST:$PORT"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
CAPATH="$TMP/capath"
mkdir -p "$CAPATH"
HTTP_CODE="000"; VERIFY="000"; BYTES=0; FINAL_URL="$URL"

probe() {
  local args=(-sS -m 60 -L -o "$TMP/body" -w '%{http_code} %{ssl_verify_result} %{size_download} %{url_effective}')
  [ -n "${1:-}" ] && args+=(--capath "$1")
  # NOTE: no -k here, ever. See SECURITY CONTRACT above.
  curl "${args[@]}" "$URL" 2>"$TMP/err" >"$TMP/res" || return 1
  read -r HTTP_CODE VERIFY BYTES FINAL_URL <"$TMP/res"
  [ "$VERIFY" = "0" ]
}

emit() {
  printf 'OK url=%s final=%s http=%s verify=%s bytes=%s%s\n' \
    "$URL" "$FINAL_URL" "$HTTP_CODE" "$VERIFY" "$BYTES" "${1:+ chain_completed=$1}"
  [ -n "$OUT" ] && cp "$TMP/body" "$OUT" && printf 'saved %s\n' "$OUT"
  return 0
}

if probe ""; then emit ""; exit 0; fi

echo "fetch-verified: stock verification failed for $HOSTPORT — attempting AIA intermediate completion" >&2
echo "fetch-verified: this never downgrades to an unverified fetch" >&2

# The server may omit several intermediates. Pull the leaf, follow its AIA caIssuers
# URI, add it, retry. Bounded so a broken or hostile host cannot spin us.
DEPTH=0
while [ "$DEPTH" -lt 5 ]; do
  DEPTH=$((DEPTH + 1))
  # NOTE: s_client exits NON-ZERO on a normal handshake when stdin is closed, so its exit
  # code is not a health signal. Judge it only by what it captured. An earlier version of
  # this script did `|| break` here and reported every broken-chain host as unverifiable.
  timeout 30 openssl s_client -connect "$CONNECT" -servername "$HOST" -showcerts \
    </dev/null 2>/dev/null >"$TMP/chain.raw" || true
  [ -s "$TMP/chain.raw" ] || break

  csplit -z -f "$TMP/c" -b '%d.pem' "$TMP/chain.raw" '/BEGIN CERTIFICATE/' '{*}' >/dev/null 2>&1 || true
  # csplit's FIRST chunk is the banner text before the first BEGIN CERTIFICATE, not a
  # certificate. Taking head -1 picks the banner, openssl cannot parse it, AIA comes back
  # empty, and this script then reports the host as unverifiable — reproducing the very
  # false block it exists to remove. Select the first chunk that actually parses, and
  # prefer one that carries an AIA caIssuers URI.
  LEAF=""
  for cand in "$TMP"/c*.pem; do
    [ -s "$cand" ] || continue
    openssl x509 -in "$cand" -noout -subject >/dev/null 2>&1 || continue
    if openssl x509 -in "$cand" -noout -ext authorityInfoAccess 2>/dev/null | grep -q 'CA Issuers'; then
      LEAF="$cand"; break
    fi
    [ -z "$LEAF" ] && LEAF="$cand"
  done
  [ -n "$LEAF" ] || break

  AIA="$(openssl x509 -in "$LEAF" -noout -ext authorityInfoAccess 2>/dev/null \
        | grep -oE 'http://[^ ]+\.(crt|cer|pem)' | head -1)"
  [ -n "$AIA" ] || { echo "fetch-verified: leaf has no AIA caIssuers URI" >&2; break; }

  echo "fetch-verified: depth $DEPTH — fetching intermediate from $AIA" >&2
  curl -sS -m 30 -o "$TMP/inter.raw" "$AIA" 2>/dev/null || { echo "intermediate fetch failed" >&2; break; }
  # Format must be decided BYTES, not by asking openssl: `openssl x509 -in X -noout`
  # succeeds for DER and PEM alike, so probing with it always concludes "PEM". OpenSSL's
  # hashed capath lookup only reads PEM, so a DER file placed there yields the useless
  # "no start line" error and the fetch never verifies.
  if grep -q "BEGIN CERTIFICATE" "$TMP/inter.raw" 2>/dev/null; then
    cp "$TMP/inter.raw" "$TMP/inter.pem"
  else
    openssl x509 -inform DER -in "$TMP/inter.raw" -out "$TMP/inter.pem" 2>/dev/null \
      || { echo "fetch-verified: intermediate is neither PEM nor DER" >&2; break; }
  fi

  # Only accept a cert that actually issued our leaf.
  ISSUER="$(openssl x509 -in "$LEAF" -noout -issuer 2>/dev/null | sed 's/^issuer=//')"
  ISUBJ="$(openssl x509 -in "$TMP/inter.pem" -noout -subject 2>/dev/null | sed 's/^subject=//')"
  if [ "${ISUBJ# }" != "${ISSUER# }" ]; then
    echo "fetch-verified: AIA cert subject does not match leaf issuer" >&2
    echo "  leaf issuer : $ISSUER" >&2
    echo "  fetched sub : $ISUBJ" >&2
    break
  fi

  HASH="$(openssl x509 -hash -noout -in "$TMP/inter.pem" 2>/dev/null)"
  [ -n "$HASH" ] && ln -sf "$TMP/inter.pem" "$CAPATH/$HASH.0"

  if probe "$CAPATH"; then emit "$DEPTH"; exit 0; fi
done

echo "fetch-verified: FAILED — chain could not be completed to a trusted root for $HOSTPORT" >&2
echo "fetch-verified: treat the source as genuinely unverifiable; do NOT cite it." >&2
exit 3