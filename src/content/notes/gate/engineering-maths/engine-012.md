---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-012
topicName: "Topic 12"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Fourier Series and Transform Methods

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Fourier series** expresses a periodic function as a sum of sines and cosines. For period `2L`:

```
f(x) = a₀/2 + Σ [aₙ cos(nπx/L) + bₙ sin(nπx/L)]
aₙ = (1/L)∫₀^{2L} f(x)cos(nπx/L)dx
bₙ = (1/L)∫₀^{2L} f(x)sin(nπx/L)dx
```

> ⚡ **GATE quick wins:** Even functions → only aₙ (no sin terms). Odd functions → only bₙ (no cos terms). Half-wave symmetry → only odd harmonics survive (n = 1, 3, 5...).

**Half-range expansions:** On `(0, L)`, you can expand as **sine series only** (odd extension) or **cosine series only** (even extension). GATE gives you a domain `(0, π)` and asks "write the half-range cosine expansion."

**Fourier transforms:**
- **Fourier sine transform** of `f(x)`: `F_s(s) = ∫₀^∞ f(x) sin(sx) dx`
- **Fourier cosine transform**: `F_c(s) = ∫₀^∞ f(x) cos(sx) dx`

**Parseval's identity:** `∫_{-∞}^{∞} |f(x)|² dx = (1/π)∫_{-∞}^{∞} |F(ω)|² dω`. GATE uses this to compute total energy or mean square value.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Fourier Series — Full Derivation

### Dirichlet Conditions
Any reasonably behaved periodic function can be expressed as a Fourier series. Sufficient conditions:
1. Single-valued, finite discontinuities (piecewise continuous)
2. Finite extrema (finite number of maxima/minima)
3. Absolutely integrable over one period

> 📌 GATE won't ask you to verify these — they're just the "when does this work?" guarantees.

### Computing Coefficients
For a function with period `2L`:

| Coefficient | Formula | Used When |
|---|---|---|
| `a₀` | `(1/L)∫₀^{2L} f(x)dx` | DC / average value |
| `aₙ` | `(1/L)∫₀^{2L} f(x)cos(nπx/L)dx` | Even part |
| `bₙ` | `(1/L)∫₀^{2L} f(x)sin(nπx/L)dx` | Odd part |

**Common GATE setup:** `f(x) = x²` on `(-π, π)` expanded as Fourier series. Compute `aₙ` via integration by parts twice. Watch for evenness — since x² is even, `bₙ = 0`.

> ⚡ **Trap alert:** Always check the function's symmetry **before** integrating. Odd × odd = even (keep in integral), odd × even = odd (integral over symmetric interval = 0).

### Half-Range Expansions
When `f(x)` is defined only on `(0, L)`, extend it:

- **Half-range sine series** (odd extension to `(-L, 0)`): `aₙ = 0`, compute only `bₙ`
- **Half-range cosine series** (even extension): `bₙ = 0`, compute only `aₙ`

> 📌 **GATE 2017:** "Find the half-range cosine expansion of f(x) = x on (0, 2)." Here L = 2, so compute `aₙ = (1/2)∫₀^4 x cos(nπx/2) dx`. Result has only cosine terms.

## Fourier Integral and Transforms

### Fourier Integral Theorem
For non-periodic (aperiodic) functions defined on `(-∞, ∞)`:

```
f(x) = (1/π)∫₀^∞ [A(ω)cos(ωx) + B(ω)sin(ωx)] dω
A(ω) = ∫_{-∞}^{∞} f(x)cos(ωx) dx
B(ω) = ∫_{-∞}^{∞} f(x)sin(ωx) dx
```

This is the limiting case of Fourier series as `L → ∞`.

### Fourier Sine and Cosine Transforms

**Fourier sine transform** (for functions on `(0, ∞)`):
```
F_s(ω) = ∫₀^∞ f(x) sin(ωx) dx
f(x) = (2/π)∫₀^∞ F_s(ω) sin(ωx) dω
```

**Fourier cosine transform:**
```
F_c(ω) = ∫₀^∞ f(x) cos(ωx) dx
f(x) = (2/π)∫₀^∞ F_c(ω) cos(ωx) dω
```

> ⚡ **GATE twist:** They sometimes give you `F_s(ω)` or `F_c(ω)` and ask you to invert. Use the inverse formula above. Or ask for the transform of a known function (e.g., transform of `e^{-ax}` for a > 0).

**Standard transforms to know:**

| f(x) | F_c(ω) | F_s(ω) |
|---|---|---|
| `e^{-ax}` (a>0) | `a/(a²+ω²)` | `ω/(a²+ω²)` |
| `1` (0<x<a), `0` (x>a) | `[sin(ωa)]/ω` | `[1-cos(ωa)]/ω` |
| `e^{-a|x|}` | `2a/(a²+ω²)` | — |

## Parseval's Identity and Energy

### Parseval's Theorem (Fourier Series)
```
(1/L)∫₀^{2L} [f(x)]² dx = (a₀/2)² + Σ_{n=1}^∞ (aₙ² + bₙ²)
```
GATE uses this to find the **sum of an infinite series** — set up the series, evaluate the integral, equate.

> 📌 **GATE classic:** Given Fourier coefficients of `f(x)`, find `Σ (1/n⁴)`. Use Parseval in conjunction with known series sum `Σ 1/n⁴ = π⁴/90`.

### Parseval for Fourier Transforms
```
∫_{-∞}^{∞} [f(x)]² dx = (1/π)∫_{-∞}^{∞} |F(ω)|² dω
```
This is the **Plancherel theorem** — total energy is preserved. Used in signal processing contexts.

## Even and Odd Functions — Key Rules

| Property | Even (f(-x)=f(x)) | Odd (f(-x)=-f(x)) |
|---|---|---|
| Product even×even | Even | — |
| Product odd×odd | Even | — |
| Product even×odd | — | Odd |
| Integral symmetric | 2∫₀^a | 0 |
| Fourier series | Only `aₙ` terms | Only `bₙ` terms |

> ⚡ **Common GATE trap:** A function that is neither even nor odd can still be split: `f(x) = [f(x)+f(-x)]/2 + [f(x)-f(-x)]/2` → even part + odd part.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Convergence of Fourier Series

### Pointwise Convergence
At a point of discontinuity `x₀`, the Fourier series converges to:
```
[f(x₀⁺) + f(x₀⁻)] / 2
```
i.e., the **average of left and right limits**. GATE has asked this exactly: "At a discontinuity, the Fourier series converges to ___."

### Gibbs Phenomenon
Near a discontinuity, the partial sum overshoots by ~9% — this is **Gibbs phenomenon**. It's inherent to Fourier series; you can't eliminate it by taking more terms.

### Differentiation and Integration
- **Term-by-term differentiation:** Valid if the resulting series converges uniformly AND the original function is continuous with piecewise continuous derivative.
- **Integration:** Always valid term-by-term — no extra conditions.

> ⚡ **GATE trap:** Students often assume they can differentiate Fourier series freely. It's NOT always valid. GATE asks this as a trick.

## Harmonic Analysis and Orthogonality

The set `{1, cos(nx), sin(nx)}` for `n ≥ 1` is **orthogonal** on `(-π, π)`:
```
∫_{-π}^{π} sin(mx)cos(nx) dx = 0
∫_{-π}^{π} sin(mx)sin(nx) dx = π δ_mn
∫_{-π}^{π} cos(mx)cos(nx) dx = π δ_mn (m≠0), 2π (m=0)
```

This orthogonality is the reason we can find coefficients by **projecting** `f(x)` onto each basis function — the integrals give the component along each direction.

## Fourier Transform Properties

### Linearity and Shifting
```
F{af + bg} = aF{f} + bF{g}           (linearity)
F{f(x-a)} = e^{-iωa}F(ω)             (time shift)
F{f(x)cos(ω₀x)} = [F(ω-ω₀) + F(ω+ω₀)]/2
```

### Fourier Transform of Derivative
```
F{df/dx} = iωF(ω)
F{d²f/dx²} = -(ω)²F(ω)
```
This is why ODEs become algebraic in the Fourier domain — the backbone of solving PDEs and signal processing.

### Convolution Theorem
```
F{f * g} = F{f}·F{g}
F{f·g} = (1/2π)[F{f} * F{g}]
```
In the frequency domain, convolution becomes multiplication. GATE may ask you to compute the transform of a convolution.

## Complex Form of Fourier Series

Using Euler's formula `e^{inx} = cos(nx) + i sin(nx)`:

```
f(x) = Σ_{n=-∞}^{∞} cₙ e^{inπx/L}
cₙ = (1/2L)∫_{-L}^{L} f(x)e^{-inπx/L} dx
```

This compact form unifies sines and cosines into complex exponentials. GATE occasionally asks complex Fourier series for functions defined on `(-π, π)` — `cₙ = (1/2π)∫_{-π}^{π} f(x)e^{-inx} dx`.

## Previous Year GATE Patterns

| Year | Topic Tested | Format |
|---|---|---|
| 2022 | Fourier series of f(x)=x(π-x) | Find aₙ, bₙ coefficients |
| 2021 | Half-range sine expansion | Expand on (0, π) as sine series |
| 2020 | Parseval's identity | Sum infinite series using Parseval |
| 2019 | Fourier transform of e^{-a\|x\|} | Compute F_c(ω) |
| 2018 | Convergence at discontinuity | Value at jump point |
| 2017 | Fourier sine transform | Find F_s(ω) for given f(x) |

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
