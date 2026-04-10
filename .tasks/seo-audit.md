# StudyRoadmap SEO Quick Audit — Task Template

## Workspace
`/data/workspace/studyroadmap-astro`

## Mission
Audit key pages for SEO issues, fix quick wins, log findings.

## Step 1: Site Health Check

```bash
# Run all checks in parallel (max 20s)
curl -s --max-time 5 -o /dev/null -w "homepage: %{http_code}\n" https://studyroadmap.in/
curl -s --max-time 5 -o /dev/null -w "exams: %{http_code}\n" https://studyroadmap.in/exams/
curl -s --max-time 5 -o /dev/null -w "notes: %{http_code}\n" https://studyroadmap.in/notes/
curl -s --max-time 5 -o /dev/null -w "sitemap: %{http_code}\n" https://studyroadmap.in/sitemap-0.xml
curl -s --max-time 5 -o /dev/null -w "robots: %{http_code}\n" https://studyroadmap.in/robots.txt
```

## Step 2: Check Pages for Schema

Pick 3 pages: 1 exam page + 1 notes page + 1 hub page.
Fetch and check for:
- Title tag presence and length (50-60 chars)
- Meta description (150-160 chars)
- H1 tag (one per page, contains keyword)
- FAQPage JSON-LD schema
- BreadcrumbList schema

```bash
curl -s https://studyroadmap.in/ | grep -o '<title>.*</title>'
curl -s https://studyroadmap.in/ | grep -o 'name="description"[^>]*content="[^"]*"'
curl -s https://studyroadmap.in/ | grep -o '"@type":"FAQPage"'
```

## Step 3: Quick Fixes (if found)

### YAML frontmatter errors
```bash
grep -r 'diagramPrompt:.*"[^"]*$' src/content/notes/  # unclosed quotes
grep -r 'topicName:.*:."[^"]*"$' src/content/notes/  # unquoted colons
grep -r 'subjectName:.*None' src/content/notes/  # None errors
```

### Missing examPattern/eligibility
```bash
cd /data/workspace/studyroadmap-astro/src/data/exams
grep -rL "examPattern:" india/*.ts | grep -v subjects
grep -rL "eligibility:" india/*.ts | grep -v subjects
```

## Step 4: Log Findings

Append to `/data/workspace/studyroadmap-astro/research-log.md`:
```
## SEO Audit — [TIMESTAMP]

### Site Health
- homepage: 200/xxx
- /exams/: xxx
- /notes/: xxx

### Quick Issues Found
- [issue] → [fix applied or action needed]

### Status
- Build: N pages
- Sitemap: N URLs
```
