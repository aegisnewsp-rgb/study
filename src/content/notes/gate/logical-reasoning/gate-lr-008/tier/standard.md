---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-008
topicName: "Calendar & Clock"
tier: standard
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Clock diagram with hour and minute hand positions at various times. Calendar month grid showing odd day calculation."
country: India
generated: ai-v1
---


## Calendar & Clock

### Concept
Calendar and Clock problems test your ability to work with cyclical time patterns. Calendar problems involve calculating which day of the week a date falls on, accounting for leap years and different month lengths. Clock problems involve tracking the positions of hour and minute hands and finding angles between them. Both require memorizing key formulas and understanding the cyclical nature of time.

For calendars, the core concept is **odd days** — the number of days beyond complete weeks. Since 7 days make a week, any date's day of week shifts by (number of days since reference date) mod 7. A reference date with known day of week lets you calculate any other date.

For clocks, the hour hand moves 360° in 12 hours = 30° per hour = 0.5° per minute. The minute hand moves 360° in 60 minutes = 6° per minute. The relative speed is 5.5° per minute (6 - 0.5), which leads to the angle formula.

### Calendar Types & Approach

**Finding Day of Week for Any Date**
1. Find a reference date (known day of week)
2. Calculate days between reference and target date
3. Account for leap years if crossing February
4. Divide days by 7, remainder = odd days
5. Add odd days to reference day of week

**Leap Year Rules**
- Every 4 years: divisible by 4
- Exception: century years (divisible by 100) are NOT leap unless
- Divisible by 400 → leap year
- Examples: 1900 NOT leap (century, not divisible by 400), 2000 IS leap (divisible by 400), 2024 IS leap (divisible by 4, not century)

**Month Lengths**
- 31 days: Jan, Mar, May, Jul, Aug, Oct, Dec
- 30 days: Apr, Jun, Sep, Nov
- Feb: 28 (29 in leap year)

### Clock Types & Approach

**Angle Between Hands**
Formula: |30×H - 5.5×M| degrees
- If result > 180, subtract from 360 to get smaller angle
- For times like 3:00 exactly (no minutes), angle = 90°
- For times between exact hours, H is the hour (with minutes factored in for hour hand position)

**Reflex Angle vs Acute Angle**
Always give the smaller angle unless question asks for reflex angle. If |30H - 5.5M| > 180, smaller angle = 360 - |30H - 5.5M|.

**Time After/Before Given Positions**
Set up equation: angle difference / relative speed (5.5°/min) = minutes elapsed.

### Step-by-Step Example
**Q:** If 5th of a month falls 3 days after Friday, what day is 19th of the month?

**Approach:**
Step 1 → 5th = Friday + 3 days = Monday.
Step 2 → 5th to 19th = 14 days = exactly 2 weeks.
Step 3 → 2 weeks later = same day of week.
Step 4 → 19th = Monday.

**Answer:** Monday.

### Step-by-Step Clock Example
**Q:** At what time between 3 and 4 o'clock are the hands of a clock exactly 180° apart?

**Approach:**
Step 1 → Let M minutes past 3. Angle = |30×3 - 5.5×M| = |90 - 5.5M|.
Step 2 → Set equal to 180° (for 180° apart): 90 - 5.5M = 180 or 90 - 5.5M = -180.
Step 3 → First case: 5.5M = -90 → M = -16.4 (impossible).
Step 4 → Second case (absolute value = 180, so 5.5M - 90 = 180): 5.5M = 270 → M = 49.09 minutes ≈ 49 minutes 5.5 seconds.
Step 5 → Since angle can also be 180° the other way (minute hand ahead vs behind), also solve: 5.5M - 90 = -180 → 5.5M = -90 → M negative. Only valid solution: ~49 minutes past 3.

**Answer:** 3:49 approximately.

### Common Mistakes
- Forgetting that hour hand moves continuously (not jumping at each hour) → Always account for partial hours.
- Confusing 12-hour and 24-hour format → Morning 9:00 and night 21:00 have different clock angles but same hand positions.
- Mixing up AM/PM → Most problems specify or assume standard time; verify before calculating.
- Leap year off-by-one → A year after a leap year, February has 28 days. The leap year's extra day affects the following year too.
