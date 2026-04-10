# StudyRoadmap Content Wave — Task Template

## Mission
Improve 10-20 placeholder/thin content pages per run, focusing on the worst-scoring pages.

## Workspace
`/data/workspace/studyroadmap-astro`

## Step 1: Find Target Pages

```bash
cd /data/workspace/studyroadmap-astro
# Option A: Use scores file if it exists
head -20 /tmp/page_scores.csv

# Option B: Find placeholder pages
grep -rl 'Topic N\|placeholder\|TBD\|coming soon' src/content/notes/ 2>/dev/null | head -20

# Option C: Find tiny files (< 2KB)
find src/content/notes -name "*.md" -size -2k | head -20
```

Pick 10-15 files that:
- Are placeholders (< 2KB, < 20 lines of real content)
- OR have `subjectName: None` errors
- OR contain generic "Topic N" text

## Step 2: Analyze Reference Pages

Before rewriting, read 2-3 well-written pages from the SAME exam to understand:
- YAML frontmatter format used
- Content structure and depth
- Writing style (exam-specific tips, formula lists, etc.)

```bash
# Example: reference pages for NEET Biology
ls src/content/notes/neet/biology/ | head -5
```

## Step 3: Rewrite Each Page

For each target page, rewrite with:
- **YAML frontmatter**: `exam`, `examName`, `subjectName`, `topicName` (quote if colon), `diagramPrompt`, `country`, `generated`
- **Content**: 800+ words covering:
  1. Topic overview (what + why for exam)
  2. Key concepts with explanations
  3. Important formulas/points (where relevant)
  4. Exam tips and common mistakes
  5. Study priority/order recommendation
  6. Related topics

**Do NOT**:
- Add AI-generated-sounding padding
- Use generic phrases like "In today's world", "It is important to note that"
- Add apologetic phrases like "This is a placeholder"

## Step 4: Build Verification

After rewriting 5+ pages:
```bash
cd /data/workspace/studyroadmap-astro
npm run build 2>&1 | tail -5
```
If build fails, check the error and fix the offending file.

## Step 5: Commit + Push

```bash
cd /data/workspace/studyroadmap-astro
git add -A
git commit -m "Content quality: rewrite N placeholder pages"
git push  # may fail if no origin
```

## Step 6: Report

Reply with:
- List of files rewritten
- Total content added (lines/words)
- Build status
- Any errors encountered
