---
exam: qatar-secondary-certificate
examName: Qatar General Secondary Education Certificate
subject: qssc-mathematics
subjectName: Mathematics
topic: qsscmath-006
topicName: "Calculus — Integration and Differential Equations"
weight: 5
country: qatar
generated: "2026-09-21T10:00:00"
lastUpdated: "2026-09-21"
---

# Calculus — Integration and Differential Equations — Qatar Secondary Certificate Mathematics Notes

Integration reverses differentiation. The MoEHE 2018 Mathematics Curriculum Standards publish the definite and indefinite integral, the Fundamental Theorem of Calculus, integration by substitution, parts and partial fractions, area-under-curve and volume-of-revolution problems, and elementary separable differential equations at the Grade 12 advanced track (MoEHE pp. 58-59). Integration completes the algebra-calculus axis that carries around 69 percent of the Grade 12 advanced Mathematics paper.

> Verify the live assessment weighting and the new unified Grade 10 science curriculum introduced from the 2026-2027 academic year on https://www.edu.gov.qa/ before planning revision.

---

### Lite — Quick Review (1h-1d)

#### Core facts in one pass

- **Antiderivative (indefinite integral):** integral f(x) dx = F(x) + C, where F'(x) = f(x).
- **Fundamental Theorem of Calculus:** integral from a to b of f(x) dx = F(b) - F(a).
- **Standard integrals:** integral x^n dx = x^(n+1) / (n + 1) + C (n not -1); integral 1/x dx = ln|x| + C; integral e^x dx = e^x + C; integral sin x dx = -cos x + C; integral cos x dx = sin x + C.
- **Substitution:** integral f(g(x)) g'(x) dx = integral f(u) du where u = g(x).
- **Integration by parts:** integral u dv = uv - integral v du.
- **Area between curves:** integral from a to b of (top - bottom) dx.
- **Volume of revolution (disc method):** V = pi integral from a to b of [f(x)]^2 dx.

#### Examiner traps

- Forgetting the constant of integration on indefinite integrals.
- Mismatching upper and lower limits when applying the Fundamental Theorem.
- Using integration by parts when the integrand is a simple product like x * e^x — that is fine, but using it when substitution would be faster loses time.

---

### Standard — Regular Study (2d-2mo)

#### Substitution

Evaluate integral 2x e^(x^2) dx. Let u = x^2, du = 2x dx. The integral becomes integral e^u du = e^u + C = e^(x^2) + C.

Evaluate integral sin x cos x dx. Let u = sin x, du = cos x dx. The integral becomes integral u du = u^2 / 2 + C = sin^2(x) / 2 + C. (Equivalently, -cos^2(x) / 2 + C, both correct up to a constant.)

#### Integration by parts

Evaluate integral x e^x dx. Let u = x, dv = e^x dx. Then du = dx, v = e^x. The integral is x e^x - integral e^x dx = x e^x - e^x + C = e^x (x - 1) + C.

Evaluate integral x ln x dx. Let u = ln x, dv = x dx. Then du = 1/x dx, v = x^2 / 2. The integral is (x^2 / 2) ln x - integral (x^2 / 2) * (1/x) dx = (x^2 / 2) ln x - integral x/2 dx = (x^2 / 2) ln x - x^2 / 4 + C.

#### Integration by partial fractions

Evaluate integral 1 / ((x - 1)(x + 2)) dx. Partial fractions: 1 / ((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2). Cover-up: A = 1/3, B = -1/3. Integral = (1/3) ln|x - 1| - (1/3) ln|x + 2| + C = (1/3) ln|(x - 1) / (x + 2)| + C.

#### Area and volume

Area between y = x^2 and y = x from x = 0 to x = 1: integral from 0 to 1 of (x - x^2) dx = [x^2 / 2 - x^3 / 3] from 0 to 1 = 1/2 - 1/3 = 1/6.

Volume of the solid formed by rotating y = sqrt(x) from x = 0 to x = 4 about the x-axis: V = pi integral from 0 to 4 of x dx = pi * [x^2 / 2] from 0 to 4 = 8 pi.

#### Separable differential equations

For dy/dx = xy, separate: dy / y = x dx, integrate: ln|y| = x^2 / 2 + C, so y = A e^(x^2 / 2) where A = +/- e^C.

---

### Deep — Long-Term Mastery (1mo-6mo)

#### Why integration is the second half of calculus

The MoEHE 2018 standards put integration in the Algebra and Calculus strand that carries around 69 percent of the Grade 12 advanced paper. The definite integral is the area under a curve; the indefinite integral is the family of antiderivatives. The two connect via the Fundamental Theorem of Calculus. Differential equations appear at advanced track as separable ODEs — the entry point to dynamical systems.

#### Exam technique

- For substitution, choose u so that du appears as a factor in the integrand.
- For integration by parts, the LIATE rule (Logs, Inverse trig, Algebraic, Trig, Exponential) gives a good default choice for u.
- For area/volume problems, sketch the region and identify top/bottom or outer/inner functions before integrating.

#### Common misconceptions (and the correction)

- "Integral of 1/x is 1/x^2 / 2." No: integral 1/x dx = ln|x| + C. The x^2 / 2 formula needs exponent n not -1.
- "Constant of integration matters only for indefinite integrals." It does, but if you compute a definite integral and then differentiate, you can verify by checking the integrand.
- "Volume of revolution is pi integral f(x) dx." It is pi integral [f(x)]^2 dx (disc method) or 2 pi integral x f(x) dx (shell method).

#### Specification reference

Source: MoEHE Curriculum Standards for Mathematics KG-G12 (MoEHE, 2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf, pp. 58-59. Re-check on https://www.edu.gov.qa/ before committing.

---

*Last updated 2026-09-21. Source: MoEHE Qatar Mathematics Curriculum Standards KG-G12 (2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf. Track regulation and Grade 12 terminal-exam weighting must be re-checked on https://www.edu.gov.qa/ before committing a revision plan to a student (qatar).*
