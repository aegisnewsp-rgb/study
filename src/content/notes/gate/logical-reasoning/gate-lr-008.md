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
country: india
generated: 2026-05-26
lastUpdated: "2026-07-15"
---

# Calendar & Clock

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Calendar problems** hinge on counting **odd days** (remainder when total days are divided by 7). A **leap year** is divisible by 4, except centuries not divisible by 400. The **month odd-day table** for a non-leap year is fixed, with February contributing 2 odd days (3 in a leap year). Sum odd days of elapsed years, past months, and the given date, then take **mod 7** to reach the day code (0 = Sunday).

**Clock problems** use the **relative speed** between hands: minute hand gains **5.5° per minute** over the hour hand. Hands **coincide every 720/11 minutes** (about 65 min 27.27 sec), so 11 coincidences occur in 12 hours. Opposite-direction alignment (180°) also happens 11 times in 12 hours, while right angles (90°) happen 22 times.

- **Day-code map:** 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat.
- **400-year cycle** has exactly 0 odd days, so calendars repeat every 400 years.
- **GATE tip:** these questions appear 1–2 times in GA; combine odd-day counting with a quick clock-angle check.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Odd-Day Method for Day of Week
Convert elapsed days into a remainder modulo 7. For any year *y*, odd days = *y* + ⌊*y*/4⌋ − ⌊*y*/100⌋ + ⌊*y*/400⌋ (mod 7). Add the month code from the table below and the date itself, then reduce mod 7.

#### Month Odd-Day Table (non-leap year)

| Month | Odd days | Month | Odd days |
|---|---|---|---|
| Jan | 0 | Jul | 3 |
| Feb | 2 (3 if leap) | Aug | 3 |
| Mar | 3 | Sep | 2 |
| Apr | 2 | Oct | 3 |
| May | 3 | Nov | 2 |
| Jun | 2 | Dec | 3 |

> Total odd days in a non-leap year = 1; in a leap year = 2.

#### Clock Relative Speeds
The hour hand moves at **0.5°/min**, the minute hand at **6°/min**, and the second hand at **6°/s**. The minute hand gains **5.5°/min** over the hour hand. Angle between them at *H*:*M*:*S* is **|30H − 5.5M − 5.5S/60|°**.

#### Counting Events in 12 Hours

| Event | Formula | Count in 12 h |
|---|---|---|
| Coincidence | every 720/11 min | 11 |
| Opposite (180°) | every 720/11 min | 11 |
| Right angle (90°) | every 360/11 min | 22 |

> Mistake to avoid: counting the 12 o'clock coincidence twice — there are 11, not 12, in 12 hours.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Century Anchors
Century years ending in 00 are **not leap years** unless divisible by 400. So 1900, 2100, 2200, 2300 are common years, but 2000 and 2400 are leap years. Because the Gregorian cycle has exactly 146097 days (= 20871 × 7), every 400-year block leaves **0 odd days**. The day of the week on 1 Jan 1600 and 1 Jan 2000 was the same — Saturday — making century-anchored problems solvable by reducing the year offset to a single representative base.

#### Clock Mechanics and Gains/Losses
For a clock gaining *n* minutes in *k* days, the indicated time must be multiplied by a correction factor. **True time** when indicated time is *T* minutes = *T* × (*k* × 1440) / (*k* × 1440 − *n*). Mirror logic applies for a losing clock. To solve "when are hands at angle θ between H o'clock and H+1," use:

- Same-side angle θ: **M = 2(30H − θ) / 11** minutes.
- Opposite-side angle θ: **M = 2(30H + θ) / 11** minutes.

#### Common Mistakes

| Trap | Correction |
|---|---|
| Treating 1900/2100 as leap | Only years divisible by 400 are leap centuries |
| Using 6°/min relative speed | Correct value is 5.5°/min |
| Reporting 12 coincidences in 12 h | It is 11 — the 12:00 mark is shared |
| Adding February as +1 always | It is +2 normally, +3 in leap years |

#### Practice Prompts
1. If 1 Jan 2026 is a Thursday, what day of the week is 1 Jan 2030? *(Apply odd-day reduction across 4 years.)*
2. At what time between 4 and 5 o'clock are the hands of a clock exactly 30° apart? *(Use the same-side angle formula with θ = 30, H = 4.)*

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Calendar & Clock" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Logical Reasoning notes](/notes/gate/logical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
