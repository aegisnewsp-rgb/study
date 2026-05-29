---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-008
topicName: "Calendar & Clock"
tier: unified
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "Advanced clock diagram showing continuous hour hand movement, minute hand at various positions, and calendar leap year decision tree."
country: India
generated: ai-v1
---

# Calendar & Clock

### 🟢 Lite

### Key Pattern/Rule
**Clock angle**: |30×H - 5.5×M| degrees. For calendars, count odd days from a known reference.

### Memory Trick
For clock angles: "30 miles per hour" — each hour is 30° apart (360/12). Each minute the minute hand moves 6° (360/60), but the hour hand moves 0.5° per minute (30°/60). So angle = |30H - 0.5M - 6M| = |30H - 5.5M|.

### 1-Sentence Summary
Tests time calculation skills: finding day of week from date, calculating angles between clock hands, and working with leap year patterns.

### Quick Example
Q: What angle between hands at 3:15?
A: |30×3 - 5.5×15| = |90 - 82.5| = 7.5°. The minute hand at 3 (15 min), hour hand has moved 3 + 15/60 = 3.25 hours → 97.5°. Angle = 97.5 - 90 = 7.5°.

### Quick Example 2
Q: Jan 1, 2000 was Saturday. What day was Feb 1, 2000?
A: Jan has 31 days. 31 days = 4 weeks + 3 odd days. Saturday + 3 days = Tuesday.

### 🟡 Standard

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
Step 2 → Set the angle equal to 180°: 90 - 5.5M = 180 or 90 - 5.5M = -180.
Step 3 → First case: 5.5M = -90 → M = -16.4, which is impossible (negative time), so it is rejected.
Step 4 → Second case: 90 - 5.5M = -180 → 5.5M = 270 → M = 49.09 minutes ≈ 49 minutes 5.5 seconds.
Step 5 → The only physically valid solution lies about 49 minutes past 3.

**Answer:** 3:49 approximately.

### Common Mistakes
- Forgetting that hour hand moves continuously (not jumping at each hour) → Always account for partial hours.
- Confusing 12-hour and 24-hour format → Morning 9:00 and night 21:00 have different clock angles but same hand positions.
- Mixing up AM/PM → Most problems specify or assume standard time; verify before calculating.
- Leap year off-by-one → A year after a leap year, February has 28 days. The leap year's extra day affects the following year too.

### 🔴 Extended

### Full Concept Explanation
Calendar and Clock problems are deceptively mathematical — they test your understanding of cyclical patterns, modular arithmetic, and precision in calculation. Most students find these approachable because the formulas are simple, but GATE tests often involve tricky interpretations that catch those who memorize without understanding.

**Calendar Mathematics: The Odd Days System**
The week-based calendar creates a modulo-7 structure. Any date's day of week is determined by (base_day + total_days_elapsed mod 7). Total days elapsed must account for the full month lengths, which follow a pattern: Jan(31), Feb(28/29), Mar(31), Apr(30), May(31), Jun(30), Jul(31), Aug(31), Sep(30), Oct(31), Nov(30), Dec(31).

For multi-year calculations, you need to track leap years carefully. The leap year rule (divisible by 4, except centuries unless divisible by 400) creates a 400-year cycle where exactly 97 years are leap years. In 400 years: 400×365 + 97 = 146097 days. 146097 / 7 = 20871 weeks exactly. This means calendars repeat every 400 years (same date falls on same day of week after 400 years, for dates after February 28 in non-century years, or adjusted for century rules).

When calculating across centuries, the "century correction" matters. Since 100 years = 36524 days = 5217 weeks + 5 days (odd days = 5). For 200 years = 10 odd days, 300 years = 15 odd days = 1 week + 1 day (net 1), 400 years = 20 odd days = 2 weeks + 6 days = 0 odd days (perfect cycle reset). This is why year 2000 (divisible by 400) had the same calendar as year 1600 and will match 2400.

**Clock Mathematics: Continuous Motion**
The clock angle formula |30H - 5.5M| assumes H is the hour number (12-hour format). The hour hand does not jump — it moves continuously. At 3:27, the hour hand is not at exactly 3 (which would be 90°), but at 3 + 27/60 = 3.45 hours, which is 103.5°. The standard formula already accounts for this: |30×3 - 5.5×27| = |90 - 148.5| = 58.5°, and since 58.5° < 180° it is already the smaller angle between the hands.

When do clock hands overlap? Set the angle to zero: 30H = 5.5M → M = (60/11)H ≈ 5.45 minutes past each hour. Between H and H+1, they overlap at approximately 5.45, 10.9, 16.36, 21.81, 27.27, 32.73, 38.18, 43.64, 49.09, 54.55, 60.0 (which is H+1).

### GATE-Level Practice

**Q1:** If 26th January of a year falls on a Tuesday, what day is 4th March of the same year (non-leap year)?

Answer: Jan 26 is Tuesday. January has 31 days, so Jan 31 is 5 days after Jan 26 → Tuesday + 5 = Sunday. February has 28 days (non-leap), so Feb 1 = Monday, and Feb 28 is 27 days after Feb 1 → Monday + (27 mod 7 = 6) = Sunday. March 1 = Monday. March 4 = Monday + 3 = Thursday. Answer: Thursday.

**Q2:** At what times between 5 and 6 o'clock are the hands at right angles?

Answer: Set |30H - 5.5M| = 90. With H = 5: |150 - 5.5M| = 90. Case 1: 150 - 5.5M = 90 → 5.5M = 60 → M = 10.9 min ≈ 10 min 55 sec. Case 2: 150 - 5.5M = -90 → 5.5M = 240 → M = 43.6 min ≈ 43 min 38 sec. So approximately 5:10:55 and 5:43:38.

**Q3:** What day of week was 15th August 1947 (India's Independence)?

Answer: Use the known anchor 1 Jan 1900 = Monday. Note that 1900 is NOT a leap year (century, not divisible by 400). From 1 Jan 1900 to 1 Jan 1947 is 47 years, containing 11 leap years (1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944). Total days = 47×365 + 11 = 17155 + 11 = 17166. Since 17164 is divisible by 7, 17166 mod 7 = 2 odd days, so 1 Jan 1947 = Monday + 2 = Wednesday.

Now count the days elapsed from 1 Jan 1947 to 15 Aug 1947. Days elapsed (not counting the starting day) = rest of January (30) + Feb(28, non-leap) + Mar(31) + Apr(30) + May(31) + Jun(30) + Jul(31) + 15 in August = 30+28+31+30+31+30+31+15 = 226 days. 226 mod 7 = 2 (since 224 = 7×32). So 15 Aug 1947 = Wednesday + 2 = Friday. Answer: Friday — consistent with the historical record that India's Independence Day, 15 August 1947, fell on a Friday.

The common pitfall here is counting 227 days instead of 226: when measuring the gap from a reference date, the reference day itself is day 0, so January contributes only its 30 remaining days, not all 31.

### Multiple Approaches
**Calendar: Anchor Day Method**: Find a nearby anchor date with known day of week, then calculate forward/backward. Many students memorize "1st March 1900 = Thursday" or similar anchors.

**Calendar: Zeller's Congruence** (for purists): h = (q + ⌊13(m+1)/5⌋ + K + ⌊K/4⌋ + ⌊J/4⌋ + 5J) mod 7, where q=day, m=month (Mar=3,...,Feb=14 with year-1), K=year%100, J=floor(year/100). Returns 0=Saturday, 1=Sunday, etc. Works for any Gregorian date.

**Clock: Relative Speed Method**: Minute hand gains 5.5° per minute on hour hand. At t minutes past H, angle = |0 - 5.5t| mod 360 adjusted for starting offset. Solve |30H - 5.5t| = desired_angle.

### Tricky Cases / Edge Cases
- **12-hour vs 24-hour**: In 12-hour format, H=12 represents 0. So 12:30 has hour hand at 0 + 30×0.5 = 15°, minute hand at 180°. Angle = 165°. The formula still works with H interpreted cyclically.
- **Midnight vs Noon**: 12:00 AM (midnight) has both hands at 0°/360°. 12:00 PM (noon) same. Without AM/PM specification, both times look identical on a clock.
- **February 29th existence**: In leap years, February has 29 days. This adds an extra odd day for any date calculation involving Feb 29 or dates after it in leap years.
- **Year 0 doesn't exist**: Gregorian calendar goes from 1 BC to AD 1 (no year 0). For GATE purposes, assume continuous positive counting unless dealing with BC dates, which rarely appear.

*Content adapted based on your selected roadmap duration.*
