---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-001
topicName: "Statistics and Probability"
weight: 4
country: ireland
generated: "2026-09-26T11:20:00"
lastUpdated: "2026-09-26"
---

# Statistics and Probability — Leaving Certificate (Established) Mathematics Notes

Statistics and Probability is one of the five strands of the NCCA Leaving Certificate Mathematics syllabus and, at the weight rating of 4, it sits among the strands that decide whether a Higher-level candidate lands on the H3/H4 boundary. At Higher level the strand extends into bivariate data, correlation, regression and the binomial and normal distributions, while at Ordinary level the reach stops short of correlation coefficients and only the simpler probability machinery is assessed. At Foundation level, candidates meet counts, simple probability and elementary descriptive statistics without ever needing to handle continuous distributions. The marks are dispersed across both papers rather than concentrated in a single question — almost every SEC paper contains one short descriptive item, one inferential item and a probability item in the same sitting.

The strand is unusual among Leaving Cert strands because half of it is procedural and half is interpretive. The procedural half (computing a standard deviation, drawing a regression line, looking up a z-value) is taught the same way it has been for decades. The interpretive half — writing a sentence that says *what* the standard deviation means in the context of the question, or *what* a correlation coefficient tells us about the relationship — is where most candidates lose marks without noticing. Plan revision time accordingly: a calculator drill of "find the mean of these nine numbers" trains the wrong skill.

> Verify live paper patterns and specification details on curriculumonline.ie and examinations.ie before planning revision.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Strand weight & spread**: Carries weight 4/5 in the topic catalogue. Marks are spread across both papers at Ordinary and Higher level — expect at least one short descriptive item, one probability item and one inferential/distribution item in the same sitting.
- **Levels that include each sub-topic**: Descriptive statistics appears at all three levels. Sampling and elementary probability appear at all three. Correlation, regression, binomial and normal distributions are Higher level only — confirm the live Ordinary paper on examinations.ie for any current arrangements.
- **First move on any statistics question**: Sort the data, find n, then compute the mean. Do not reach for the standard deviation formula before the mean — examiners routinely award a "state the mean" mark that is forfeit if you skip to the spread.
- **Calculator protocol**: Leave standard deviation and regression calculations to the calculator; show the formula on paper with the *rounded* numbers substituted, not the raw data. The mark is for the formula line and the substitution, not for the long multiplication.
- **Probability rules to keep separate**: Independent events multiply P(A and B); mutually exclusive events add P(A or B). Common error: applying "add" when two events can occur together, then double-counting.
- **Binomial vs normal trigger words**: "Fixed number of trials" and "success/failure" means binomial. "Continuous measurement" or "approximate the probability that..." with large n often means normal. If both fit, check whether the question explicitly names the distribution.
- **Interpretation line is a mark**: After every standard deviation, correlation coefficient, regression equation or distribution answer, write a one-sentence interpretation. "The standard deviation of 4.2 cm means typical deliveries deviate from the mean by about 4 cm." That sentence is a mark.
- **Sampling language**: "Random sample", "stratified sample" and "systematic sample" each have a defined procedure. State the procedure in one line before you select any numbers — the procedure is the lead-in mark.

#### Examiner traps

- Treating the standard deviation as a property of the *sample* without checking whether the question wants the *population* standard deviation (divided by n) or the *sample* standard deviation (divided by n-1). The syllabus distinguishes these explicitly.
- Reading a histogram and assuming the y-axis gives counts instead of frequency density — the area, not the height, is the count.
- Solving a binomial probability by adding rather than multiplying successive trials. The formula nCr p^r (1-p)^(n-r) handles the multiplication for you.
- Confusing correlation with causation when interpreting a regression line in a contextual question. The examiner credit goes to "the line shows a strong positive relationship between X and Y" not to "X causes Y".
- Using a normal-approximation question as if it were an exact normal: include the continuity correction (subtract 0.5 from a discrete boundary) where the mark scheme demands it.

#### 30-minute triage checklist

- [ ] Can you write the formula for mean, sample standard deviation and Pearson correlation from memory?
- [ ] Do you know when to divide by n and when to divide by n-1 in the standard deviation formula?
- [ ] Can you sketch a scatter plot, draw a line of best fit by eye, and read its equation from the calculator?
- [ ] Can you recognise the trigger words that signal binomial vs normal vs Poisson vs uniform?

---

### 🟡 Standard — Structured Study (1d–1mo)

#### Descriptive statistics in exam context

At Higher level, every paper contains at least one question that lists a frequency table and asks for the mean, the modal class, the median, the standard deviation and an interpretation sentence. The procedural part is reliable: enter the data into your calculator's statistics mode, read the screen, write the formula with the *rounded* result substituted, then state the answer to the requested precision. The interpretive part is where marks are won and lost. After computing a standard deviation, the mark scheme wants a sentence such as "the marks typically deviate from the mean by about 6 marks" — not "s = 6.2". Two marks for the numerical answer, one mark for the contextual sentence.

A common Higher-level item combines descriptive statistics with a probability question on the same dataset. "Given the data above, what is the probability that a randomly selected student scored more than one standard deviation above the mean?" treats the data as a population, not a sample, and the candidate is expected to convert the standard-deviation threshold into a raw score before applying the proportion. Candidates who skip straight to the standard normal table lose the conversion mark.

#### Probability rules and decision flow

Probability questions on the Leaving Certificate test four operations: independent events (multiply), mutually exclusive events (add), conditional probability (the formula P(A|B) = P(A and B) / P(B)), and tree diagrams with/without replacement. The exam's favourite question type is the two-stage tree: pick a ball from a bag, do not replace it, pick a second ball — find P(both red). The procedural skill is the same as Junior Cycle; the Leaving Certificate addition is the *conditional* follow-up ("given the first ball was red, what is the probability the second ball is also red?"), which is one further step on the same tree.

Counting principles — permutations and combinations — sit alongside probability in this strand at Ordinary level. The rule of thumb: if *order matters*, use nPr; if *order does not matter*, use nCr. The Leaving Certificate rarely tests it in isolation; it almost always appears as the first line of a probability calculation.

#### Bivariate data, correlation and regression (Higher)

Correlation and regression form the largest single sub-topic in the Higher-level Statistics and Probability strand. The exam presents a scatter plot or a table of paired data, asks the candidate to compute Pearson's correlation coefficient *r*, interpret its strength and direction, then write the regression line of y on x and use it to make a prediction. Two procedural points trap candidates every year: (a) compute r before computing the regression line — the regression line mark often depends on r being quoted first; (b) when extrapolating the regression line outside the range of the data, write "this prediction is unreliable because it is an extrapolation" — the mark scheme wants that explicit caveat.

The regression line of *y* on x is the line a candidate should default to unless the question explicitly says otherwise. Regression of x on y is also assessed but is rarer; check the question's wording before computing.

#### Distributions (Higher): binomial and normal

Binomial distribution questions present a fixed-n repeated-trials scenario — quality control on a production line, multiple-choice guessing, free-throw success — and ask for P(exactly k), P(at most k) or P(at least k). The procedural skill is to identify n, p and r, then read P(X = r) directly from tables. The mark scheme distinguishes between "list the values of n, p and r" (one mark) and "compute P" (one mark); candidates who skip the identification lose the lead-in mark.

Normal distribution questions at Higher level present a continuous measurement with a mean and standard deviation and ask for P(X is between two values) or for the value of X corresponding to a stated probability. Two procedural skills are tested: reading z-values from tables and working backwards (given P, find the corresponding z, then convert to x). The continuity correction is required when a discrete variable is being approximated by a continuous distribution; the exam usually signals this by saying "approximate using the normal distribution" rather than "find the exact probability".

---

### 🔴 Deep Dive — Full Mastery (1mo+)

#### Higher-level end-of-paper synthesis

The hardest Statistics and Probability questions at Higher level combine a probability scenario with a hypothesis-test-style question. The pattern: "A factory claims that at least 90% of its products meet the standard. A random sample of 50 items is taken and 42 meet the standard. Test, at the 5% significance level, whether the claim is plausible." Candidates who frame this as a binomial probability — P(X ≤ 42 | n = 50, p = 0.9) — followed by a comparison to 0.05 score full marks. Candidates who skip the framing and try to compute confidence intervals lose the lead-in marks.

A second Higher-level trap is the regression question with an outlier. The mark scheme specifically rewards candidates who *comment on the outlier* before computing the regression line — removing the outlier, recomputing r, then discussing whether the original or revised regression is more appropriate. Candidates who ignore the outlier still get the computational marks but forfeit the discussion mark.

#### Common mistakes catalogue

Working through past SEC marking schemes reveals the same handful of errors appearing every year:

1. **Standard deviation divide-by confusion**: dividing by n when the question clearly describes a *sample*. Read the verbs: "estimate" implies sample; "the population consists of" implies population.
2. **Histogram mis-read**: reading bar heights as counts when the y-axis is frequency density. Convert: frequency = density × class width.
3. **Probability tree branches not summing to 1**: forgetting that conditional probabilities on the second draw depend on what was drawn first, and that the *unconditional* probability of a path is the product of branches.
4. **Correlation sign confusion**: confusing r = +0.8 with r = -0.8. The sign of the covariance term in the formula decides this — sketch the scatter before trusting the calculator.
5. **Normal approximation continuity correction**: omitting the ±0.5 shift. The examiner's marking note typically highlights this as the single most common error at Higher level.

#### Long-run mastery schedule

A four-week pre-mock plan for Statistics and Probability at Higher level:

- **Week 1**: Run every past paper's statistics question with a timer; mark strictly for "interpretation sentence present" and "units stated". A two-mark question answered with a bare number is a zero in the interpretive slot.
- **Week 2**: Drill the binomial and normal tables. Cover the four table-lookup variants: P(X ≤ k), P(X ≥ k), find x given P(X ≤ x) = p, and find x given P(X ≥ x) = p.
- **Week 3**: Work through every Higher-level past paper's Question 7 or 8 (whichever the SEC places statistics on that year) under timed conditions. Confirm the live paper pattern on examinations.ie before committing a slot.
- **Week 4**: Mock-exam week. Solve three past papers under exam conditions; mark yourself against the published marking scheme; write a one-page "errors I keep making" list, then re-drill those errors specifically.