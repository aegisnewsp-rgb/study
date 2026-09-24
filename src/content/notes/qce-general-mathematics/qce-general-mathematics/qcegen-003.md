---
exam: qce-general-mathematics
examName: QCE General Mathematics & Specialist Mathematics (QCAA 2025)
subject: qce-general-mathematics
subjectName: General Mathematics
topic: qcegen-003
topicName: Bivariate Data and Sequences and Change, and Earth Geometry
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Unit 3: Bivariate Data and Sequences and Change, and Earth Geometry — QCE General Mathematics (QCAA 2025) Notes

Unit 3 of QCE General Mathematics covers bivariate data, correlation and regression; sequences and series, recurrence relations and change; Earth geometry including great circle distances, time zones and latitude/longitude.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Bivariate data.** Scatter plot; correlation coefficient r. Least-squares regression line y = a + bx.
- **Sequences.** Arithmetic a_n = a + (n − 1)d; geometric a_n = ar^(n − 1).
- **Earth geometry.** Great circle distances, time zones, latitude and longitude.
- **Recurrence.** a_(n+1) = f(a_n).

#### Examiner traps

- Confusing correlation with causation.
- Mixing up arithmetic and geometric sequences.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Bivariate data

Scatter plot shows two variables on the same individual. Correlation coefficient r ∈ [−1, 1]. |r| close to 1 means strong linear association. Least-squares regression line y = a + bx where b = r × (s_y/s_x).

#### Sequences

Arithmetic: a_n = a + (n − 1)d. Geometric: a_n = ar^(n − 1). Recurrence: a_(n+1) = r a_n + b has fixed point b/(1 − r).

#### Earth geometry

Latitude: angular distance north/south of the equator (0° to 90°). Longitude: angular distance east/west of the prime meridian (0° to 180°). Time zones: roughly 15° per hour from Greenwich Mean Time. Great circle distance: shortest distance between two points on a sphere.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 3 prepares for Unit 4 financial mathematics and statistics

- **Bivariate data** is foundational for any later study of regression.
- **Sequences and series** underpin compound interest, depreciation and annuities in Unit 4.
- **Earth geometry** is applied to navigation and GIS problems.

#### Year 11 planning pattern

- **Term 1.** Bivariate data and regression.
- **Term 2.** Sequences and series, recurrence relations.
- **Term 3.** Earth geometry.
- **Term 4.** Revision.

#### Common misconceptions (and the correction)

- "Correlation implies causation." No — correlation is necessary but not sufficient for causation.
- "Arithmetic and geometric sequences are the same." No — arithmetic has constant difference; geometric has constant ratio.

#### Specification reference

This Unit is one of four Units of QCE General Mathematics. Confirm the live syllabus and any in-year updates on qcaa.qld.edu.au.

#### Worked example — least-squares regression from a small table

Five (x, y) pairs are

```
  x : 1    2    3    4    5
  y : 2.1  3.9  6.2  7.8  9.9
```

Means:

```
  x̄ = (1 + 2 + 3 + 4 + 5) / 5 = 3
  ȳ = (2.1 + 3.9 + 6.2 + 7.8 + 9.9) / 5 = 5.98
```

Slope:

```
  b = Σ (xᵢ − x̄)(yᵢ − ȳ) / Σ (xᵢ − x̄)²

  Numerator (using (xᵢ − x̄)(yᵢ − ȳ)):
    (−2)(−3.88) =  7.76
    (−1)(−2.08) =  2.08
     (0)( 0.22) =  0.00
     (1)( 1.82) =  1.82
     (2)( 3.92) =  7.84
    Σ = 19.50

  Denominator Σ (xᵢ − x̄)²:
    4 + 1 + 0 + 1 + 4 = 10

  b = 19.50 / 10 = 1.95
```

Intercept a = ȳ − b x̄ = 5.98 − 1.95 × 3 = 5.98 − 5.85 = 0.13.

So the least-squares line is ŷ = 0.13 + 1.95 x. At x = 6, the predicted value is ŷ = 0.13 + 1.95 × 6 = 11.83.

#### Worked example — geometric sequence

A car depreciates by 15% each year. It is bought new for $40,000. Its value Vₙ after n years is

```
  Vₙ = 40000 × (1 − 0.15)ⁿ
     = 40000 × 0.85ⁿ
```

After 5 years:

```
  V₅ = 40000 × 0.85⁵
     = 40000 × 0.4437
     ≈ $17,747
```

Common ratio r = 0.85. The first term is V₀ = 40000 (so n starts at 0, not 1).

#### Worked example — recurrence fixed point

A recurrence a_(n+1) = 0.5 a_n + 6 has fixed point a* = 6 / (1 − 0.5) = 12. Iterating from a₀ = 0 gives a₁ = 6, a₂ = 9, a₃ = 10.5, a₄ = 11.25 — converging towards 12. Confirm by reading the recurrence off the question carefully; a_(n+1) = r a_n + b has the fixed point b / (1 − r) whenever r ≠ 1.

#### Worked example — great-circle distance

Two cities are at latitudes φ₁ = 27° S, φ₂ = 34° S and longitudes λ₁ = 153° E, λ₂ = 151° E. The central angle θ between them on a sphere of radius R = 6371 km is

```
  cos θ = sin φ₁ sin φ₂ + cos φ₁ cos φ₂ cos(λ₁ − λ₂)

  sin(−27°) = −0.4540,   sin(−34°) = −0.5592
  cos(−27°) =  0.8910,   cos(−34°) =  0.8290
  λ₁ − λ₂ = 2° → cos(2°) = 0.9994

  cos θ = (−0.4540)(−0.5592) + (0.8910)(0.8290)(0.9994)
         = 0.2539 + 0.7381
         = 0.9920

  θ = arccos(0.9920) ≈ 7.18°
```

Great-circle distance d = R × θ (in radians):

```
  θ_rad = 7.18° × π / 180 ≈ 0.1253 rad
  d     = 6371 × 0.1253 ≈ 798 km
```

#### Common marking-scheme mistakes

- Reporting the regression line as x = a + b y when the response variable is y.
- Using the geometric formula with n starting at 1 when the recurrence begins at n = 0 (or vice versa). Read the first term carefully.
- Confusing angular distance in degrees with arc length in kilometres. Convert with π / 180 before multiplying by R.
- Treating a positive correlation as proof of causation. The markers do not award marks for this.
- Using the recurrence fixed-point formula when r = 1. The denominator vanishes; the recurrence is then a_(n+1) = a_n + b, which diverges linearly.
- Confusing latitude and longitude in navigation questions. Latitude runs N–S; longitude runs E–W.
- Forgetting that a least-squares line is a prediction, not a guarantee. A residual can still be large for an individual data point.

#### 20-minute recap before you walk in

- Memorise the arithmetic and geometric nth-term formulas, and the recurrence fixed-point formula a* = b / (1 − r).
- For regression, remember that b = r × (s_y / s_x). The intercept is then a = ȳ − b x̄.
- Earth geometry: convert degrees to radians before multiplying by R.
- Distinguish correlation from causation in any worded question.
- Recurrence questions always ask for either the explicit formula or the long-run behaviour. Pick the right target before you start.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA General Mathematics syllabus for Unit 3 also lists the following sub-topics, which are touched on above but deserve separate revision:

- The coefficient of determination r² and what fraction of variance it explains.
- Using a least-squares line for interpolation between observed x-values and the caution against extrapolation outside the data range.
- Sum of the first n terms of an arithmetic series Sₙ = n/2 × (2a + (n − 1)d) and the geometric series Sₙ = a(1 − rⁿ) / (1 − r).
- Time-zone arithmetic, including International Date Line adjustments when crossing eastward versus westward.
- Bearing as an alternative to compass direction, and conversion between true bearing and compass bearing.

Confirm the live sub-topic list on the QCAA General Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-20. Source: QCE General Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA). Live syllabus and any in-year updates must be re-checked on the official page before committing a revision plan to a student.*