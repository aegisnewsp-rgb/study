---
exam: upcat
examName: UPCAT (UP College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-003
topicName: Functions and Graphs
weight: 5
country: philippines
generated: "2026-10-09T16:00:00"
lastUpdated: 2026-10-09
---

# Functions and Graphs

### 🟢 Lite — Quick Review

The University of the Philippines publishes no mathematics syllabus for UPCAT, no question count and no weightage. That is worth saying plainly, because the function topic below is a StudyRoadmap organisation, not an official blueprint — and anyone selling you a percentage breakdown for the UPCAT mathematics subtest is making it up.

Within mathematics, functions are where an entrance test gets its best return, and the reason is that the same few ideas generate a lot of different-looking items. Linear, quadratic and exponential behaviour covers shop pricing, depreciation, population growth, projectile motion and about a dozen contexts you would not group together if you had only been taught the arithmetic.

**Three shapes, and what each one tells you before you compute anything.**

| Shape | Rate of change | Recognise it by | The error it punishes |
|---|---|---|---|
| Straight line | Constant absolute rate | One context changes by a fixed amount each period | Treating a model as valid outside its domain |
| Parabola | Constant rate of change of the rate | A quantity rises, turns, and falls again | Accepting a negative answer for a quantity that cannot be negative |
| Exponential | Constant *proportional* rate | The same percentage every period | Reading a proportional rate as an absolute one |

**Four checks that cost ten seconds and prevent most lost items.**

- Name both axes and their units before reading anything off the graph — a flipped axis reverses the direction of change
- Check whether the vertical axis is truncated, because that exaggerates a small change into a dramatic one
- Confirm the graph actually covers the value the question asks for, rather than assuming it extends
- Translate the sentence into an expression before computing — every later question is then arithmetic on that one expression

### 🟡 Standard — Regular Study

#### Three shapes and what they mean

A straight line is a constant rate of change. If the graph is distance against time, the slope is a speed. If it is cost against quantity, the slope is a unit price and the intercept is a fixed charge. A linear relationship between two things that curve is a model with a limited range, and an item will test whether you notice the model breaking.

A parabola is a constant rate of change of the rate of change. Because the leading coefficient decides which way it opens, and because a negative value inside the square means there is no real solution, an item that gives you an impossible context is testing exactly that. If quantity cannot be negative and your solution is negative, the model is being applied outside its range — not that you miscalculated.

An exponential is a constant *proportional* rate of change: the same percentage every period. Interest, population growth, bacterial culture and radioactive decay all look like this. The trap is mixing proportional and absolute growth. A population growing 5 per cent a year is not growing by 5 per cent of the original number each year; the base changes every period, which is why the graph curves upward while a linear "add 500 a year" model does not.

#### Reading a graph properly

Start with the axes, in that order, and say what each one is in units. This sounds pedantic and it prevents the single most common error in the topic: reading a graph that has been flipped. A line that falls when you plot time on the horizontal axis rises when you plot it the other way round, and an item that depends on the direction of change will punish you for it.

Then check the scale. A truncated vertical axis exaggerates a small change into a dramatic one. A logarithmic axis means equal steps are equal ratios, not equal amounts — so a straight line on a log plot describes exponential growth.

Then read what is present, not what you expect. If the graph stops at 40 minutes, an item asking about 90 minutes is asking you to extrapolate, and whether you may is part of the answer.

**What the axis choice decides.**

| Axes as drawn | The same data read the other way round |
|---|---|
| Distance against time, line rising | Time against distance, line falling — same trip, opposite-looking direction of change |
| Cost against quantity, slope is unit price | Quantity against cost, slope is the reciprocal, so the line is not the same line |
| Growth on a linear axis, curving upward | The same growth on a log axis, straight |

#### Working with the algebra

Translate the words first. "The taxi charges a fixed ₱150 plus ₱12 per kilometre" is $y = 150 + 12x$, and every subsequent question is arithmetic on that expression. Writing it down costs ten seconds and saves the whole item.

Quadratics factorise in three moves: make the leading coefficient one, find two numbers whose product is $c$ and whose sum is $b$, then bracket them. When it does not factorise, the quadratic formula is not a fallback of last resort — it is the normal method, and the discriminant decides how many real roots exist before you compute anything.

A function and its inverse swap the axes. That is the whole idea: reflect in the line $y = x$. A function has an inverse only if it is one-to-one, which you can see geometrically as a horizontal line crossing the graph at most once. Square root and logarithm are inverses for the same reason.

#### Common mistakes

Forgetting what the units mean when the axes are swapped. Slope is "change in y per unit x" — reverse the axes and the same slope means something different physically.

Assuming a straight line through two points extends forever. Real contexts have domains; a negative number of test tubes or a negative number of people is the point of the item.

Solving for $x$ when the question asked for $y$. Re-read the question before you compute.

Treating the exponential parameter $k$ as a percentage. In $y = a(1 + k)^t$, $k$ is a fraction, not a percent — so 5 per cent monthly growth is $k = 0.05$, and writing $1 + 5$ produces a number large enough to be obviously wrong, which is how you catch it.

Conflating vertical translation with $f(x) = ax$ scaling. Inside the bracket scales the output; outside the bracket moves the whole graph. Swapping them is the most common sign error in the topic.

### 🔴 Extended — Mastery

#### Solving the item, in the order that avoids the traps

A fixed sequence removes most of the avoidable errors in this topic, because each step catches the error the previous step could hide.

1. Write the sentence as an expression before touching any number
2. State the domain the context imposes — kilograms, minutes, people, pesos
3. Decide whether the rate given is absolute or proportional, and choose the shape accordingly
4. Compute, then check the answer against the domain from step 2
5. Re-read the question for which variable was requested, not which one is easy to find

Step 4 is the one candidates drop. A negative number of people is not an arithmetic error to be corrected by reworking — it is the item telling you the model has been applied outside its range.

#### Discriminant, and what each case tells you

For $ax^2 + bx + c = 0$, the discriminant $b^2 - 4ac$ settles how many real solutions exist before any computation.

- Positive discriminant — two distinct real roots, so the model crosses the horizontal axis twice
- Zero discriminant — one repeated root, which is the turning point sitting exactly on the axis
- Negative discriminant — no real roots at all, so the model never reaches the axis and the quantity never changes sign

In a word problem the negative case is a statement about the context, not a failure to solve. A quantity that physically cannot go negative tells you the relevant root is not physically available, which is often the distinction the item is testing.

#### Why an exponential is not a straight line

The mechanism is that the base changes every period. If a population is $P_0$ and grows by a fraction $k$ each period, then after $t$ periods it is $P_0(1+k)^t$ — and because $(1+k)^t$ grows faster than $1 + kt$ for any positive $k$ and $t > 1$, the curve steepens while an "add a fixed amount" model stays straight.

| Statement | Model it belongs to |
|---|---|
| Adds a fixed number of units every period | Linear — constant absolute rate |
| Grows by the same percentage every period | Exponential — constant proportional rate |
| Halves every period | Exponential with a negative proportional rate |
| Rises then falls | Quadratic — the turning point is the maximum |

#### Inverses, and the one-to-one test

Swapping the axes of $y = f(x)$ gives the inverse, and geometrically that is a reflection in the line $y = x$. A function has an inverse only when no horizontal line crosses its graph twice, which is the horizontal-line test.

- A straight line with non-zero slope passes — reflect it and you still have a function
- A parabola fails on its turning half — two inputs share one output, so one of them cannot be recovered
- An exponential with a positive rate passes, and its inverse is a logarithm
- A square-root graph fails below zero, because the branch below it doubles up outputs

The horizontal-line test is worth doing physically rather than algebraically, because most lost inverse items are a root you took without asking whether the other branch was available.

### 🔗 Official Resources

[University of the Philippines Office of Admissions — UPCAT](https://upcat.up.edu.ph/htmls/aboutupcat.html)

UP publishes no mathematics syllabus, question count or per-subtest weightage for UPCAT. The topic organisation and the weights used on this page are StudyRoadmap\'s own prioritisation, not an official blueprint.

## Internal links

- [UPCAT exam hub](/exams/upcat/) — the four official subtests and the five-hour sitting.
- [Word Problems and Reasoning](/notes/upcat/mathematics/) — the long items that consume the time this topic saves you.
- [Statistics and Probability](/notes/upcat/mathematics/) — reading data rather than producing it from a formula.

Everything on this page about UPCAT itself comes from the University of the Philippines Office of Admissions (https://upcat.up.edu.ph/htmls/aboutupcat.html, retrieved 9 October 2026). UP publishes no mathematics syllabus or per-subtest weightage for UPCAT; the weights here are StudyRoadmap's own prioritisation.

---

## Continue your study

- **[View this topic in your UPCAT (UP College Admission Test) roadmap](/roadmap/?exam=upcat&duration=1mo)** — see where this topic sits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=upcat&duration=1d)** — 1-day sprint covering the highest-weight topics
- **[UPCAT (UP College Admission Test) exam overview](/exams/upcat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/upcat/mathematics/)** — browse sibling topics in this subject