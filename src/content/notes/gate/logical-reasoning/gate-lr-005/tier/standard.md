---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-005
topicName: Statement-Conclusion
tier: standard
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Venn diagram showing relationships between categories in statement-conclusion problems, with three overlapping circles."
country: India
generated: ai-v1
---


## Statement-Conclusion

### Concept
Statement-Conclusion questions give you a set of premises (statements) and ask you to determine which conclusion logically follows. The golden rule: a valid conclusion must be **definitely true** — not probably true, not possibly true, but the only option given the information.

GATE loves testing your ability to avoid assumptions. Just because something "makes sense" doesn't mean it follows logically. You need to check every possible arrangement consistent with the statements and see if the conclusion holds in all of them.

The statements usually involve categorical relationships: "All A are B," "Some A are B," "No A is B," or "Some A are not B." Each of these creates different logical constraints, and combining them requires careful reasoning.

### Types & Approach

**Type 1: All/Some Conversions**
- "All A are B" → "Some B are A" (valid conversion)
- "No A is B" → "No B is A" (valid both ways)
- "Some A are B" ↔ "Some B are A" (valid)
- "Some A are not B" — no direct conversion

**Type 2: Transitive Relations**
Chain relationships together: if All A are B, and All B are C, then All A are C.
Watch out: "Some" doesn't transit easily. "Some A are B" + "Some B are C" tells us nothing about A and C.

**Type 3: Either-Or Conclusions**
If one conclusion must be true and the other must be false, you get an either-or situation. This often happens with complementary pairs like "All X are Y" vs "Some X are not Y."

### Step-by-Step Example
**Q:** Statements:
1. All teachers are educated.
2. Some educated people are patient.
3. No patient people are rude.

Conclusions:
1. Some teachers are patient.
2. No teacher is rude.

**Approach:** 
Step 1 → Draw what you know: Teachers ⊂ Educated. Some Educated ∩ Patient. Patient ∩ Rude = ∅.
Step 2 → Check Conclusion 1: Can some teachers be patient? Yes — teachers are educated, and some educated are patient, so it's possible but not definite. **Invalid** (not necessarily true).
Step 3 → Check Conclusion 2: Since no patient person is rude, and all teachers are educated (some of whom are patient), teachers could still be rude if they're not patient. Wait — if a teacher WERE rude, they'd contradict statement 3. But wait, statement 3 says no patient person is rude, not that all rude people aren't patient. A teacher could be rude AND not patient. So this doesn't necessarily follow either. Actually, re-read: No patient people are rude = Rude people are never patient. Teachers might or might not be patient, so teachers might or might not be rude. **Invalid.**

**Answer:** Neither conclusion follows.

### Common Mistakes
- Assuming what "makes sense" rather than what logically follows → Always verify by asking "Can I imagine the statements true and this conclusion false?"
- Mixing up "Some" with "All" → "Some" just means "at least one," not a quantity.
- Forgetting that "absence of information" is not the same as "negative information" → Just because something isn't stated doesn't mean it's denied.
