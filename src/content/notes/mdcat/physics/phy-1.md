---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-1
topicName: Measurement
weight: 2
country: pakistan
generated: "2026-03-24T08:32:08.079227"
lastUpdated: "2026-09-06"
diagramPrompt: "Clean educational diagram showing Measurement with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"
---

# Measurement

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Measurement in the PMDC MDCAT physics syllabus covers physical quantities, the International System of Units (SI), dimensional analysis, significant figures, and error analysis. A physical quantity represents any measurable property of nature expressed as the product of a numerical magnitude and a standardized unit ($Q = n \times u$). The SI system defines seven base physical quantities, two supplementary geometric units, and an extensive family of derived units formed by algebraic products or quotients of base units.

| Base Physical Quantity | SI Base Unit | Unit Symbol | Dimensional Symbol | Invariant Physical Standard Foundation |
|---|---|---|---|---|
| **Length** | Metre | $\text{m}$ | $[\text{L}]$ | Path length light travels in vacuum during $1/299,792,458$ second |
| **Mass** | Kilogram | $\text{kg}$ | $[\text{M}]$ | Fixed numerical value of Planck constant $h = 6.62607015 \times 10^{-34} \text{ J}\cdot\text{s}$ |
| **Time** | Second | $\text{s}$ | $[\text{T}]$ | $9,192,631,770$ periods of hyperfine radiation of Caesium-133 ground state |
| **Electric Current** | Ampere | $\text{A}$ | $[\text{A}]$ or $[\text{I}]$ | Fixed elementary charge $e = 1.602176634 \times 10^{-19} \text{ C}$ |
| **Thermodynamic Temperature** | Kelvin | $\text{K}$ | $[\Theta]$ or $[\text{K}]$ | Fixed Boltzmann constant $k = 1.380649 \times 10^{-23} \text{ J}\cdot\text{K}^{-1}$ |
| **Amount of Substance** | Mole | $\text{mol}$ | $[\text{N}]$ | Exactly $6.02214076 \times 10^{23}$ elementary entities (Avogadro number) |
| **Luminous Intensity** | Candela | $\text{cd}$ | $[\text{J}]$ | Monochromatic $540 \times 10^{12} \text{ Hz}$ radiation with radiant intensity $1/683 \text{ W}\cdot\text{sr}^{-1}$ |
| **Plane Angle (Supplementary)** | Radian | $\text{rad}$ | Dimensionless $[1]$ | Subtended arc length equals radius ($s = r \theta$) |
| **Solid Angle (Supplementary)** | Steradian | $\text{sr}$ | Dimensionless $[1]$ | Subtended spherical area equals square of radius ($A = r^2 \Omega$) |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### 1. Systematic vs. Random Errors in Physical Measurements

Experimental uncertainties fall into two distinct statistical categories. Recognizing their origins and mathematical properties is tested every year in the MDCAT.

| Comparative Parameter | Systematic Error (Determinate) | Random Error (Indeterminate) |
|---|---|---|
| **Underlying Origin** | Flaws in measuring apparatus, incorrect calibration, or zero offset | Microscopic thermal fluctuations, air currents, human visual judgment |
| **Directional Bias** | Unidirectional: consistently shifts readings either too high or too low | Bidirectional: observations scatter symmetrically above and below the mean |
| **Statistical Elimination** | Cannot be reduced by taking repeated measurements and calculating the mean | Diminishes with repeated trials; standard error of the mean scales as $1/\sqrt{N}$ |
| **Mathematical Representation** | Constant offset ($x_{\text{measured}} = x_{\text{true}} \pm \delta$) | Gaussian normal distribution with variance $\sigma^2$ around true value |
| **Laboratory Example** | Worn zero mark on a metre rule or improper screw gauge zero alignment | Variations in stopwatch reaction time when timing pendulum oscillations |
| **Remediation Procedure** | Recalibrate instrument; apply zero error correction factor algebraically | Record repeated trials ($N \ge 5$) and calculate the arithmetic mean |

#### 2. Laboratory Measuring Instruments and Least Count Calculations

The least count represents the smallest value measurable directly with an instrument. Higher precision corresponds to a smaller least count.

| Instrument Name | Principle / Construction | Least Count Formula | Typical Least Count | Zero Error Determination & Correction |
|---|---|---|---|---|
| **Metre Rule** | Linear marked scale | Smallest scale division | $1 \text{ mm} = 0.1 \text{ cm}$ | End-error corrected by measuring from an intermediate mark ($10.0 \text{ cm}$) |
| **Vernier Calipers** | Dual scales: Main Scale (MS) and sliding Vernier Scale (VS) | $LC = 1 \text{ MSD} - 1 \text{ VSD} = \frac{1 \text{ MSD}}{N}$ | $0.1 \text{ mm} = 0.01 \text{ cm}$ | Vernier zero to right of main zero: **Positive error** (Subtract); Vernier zero to left: **Negative error** (Add) |
| **Micrometer Screw Gauge** | Nut and screw principle converting rotational to linear displacement | $LC = \frac{\text{Pitch}}{\text{Number of circular divisions}}$ | $0.01 \text{ mm} = 0.001 \text{ cm}$ | Circular zero below datum line: **Positive error** (Subtract); Circular zero above datum line: **Negative error** (Add) |
| **Spherometer** | Triangular 3-legged frame with central micrometric screw | $LC = \frac{\text{Pitch}}{\text{Circular divisions}}$ | $0.01 \text{ mm} = 0.001 \text{ cm}$ | Calibrated against an optically flat plane glass surface |

#### 3. Significant Figures and Computational Rounding Rules

1. **Non-Zero Digits**: All non-zero digits are significant (e.g., $43.82$ has $4$ significant figures).
2. **Embedded Zeros**: Zeros between non-zero digits are significant (e.g., $5004$ has $4$ significant figures).
3. **Leading Zeros**: Zeros preceding the first non-zero digit are not significant; they merely locate the decimal point (e.g., $0.0035$ has $2$ significant figures).
4. **Trailing Zeros**:
   - In numbers with a decimal point, trailing zeros are significant (e.g., $4.200$ has $4$ significant figures).
   - In integers without a decimal point, trailing zeros are ambiguous and require scientific notation ($4.3 \times 10^3$ indicates $2$ significant figures).
5. **Addition and Subtraction Rule**: The final result retains only as many decimal places as the measurement with the least decimal places.
6. **Multiplication and Division Rule**: The final result retains only as many significant figures as the factor with the fewest significant figures.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Error Propagation Calculus and Dimensional Homogeneity

In laboratory experiments, composite physical quantities are computed from multiple primary measurements. Uncertainties propagate through functional relations according to differential rules.

For a physical quantity $Z = f(X, Y)$:

| Functional Form | Mathematical Operation | Absolute Uncertainty $\Delta Z$ | Fractional / Percentage Uncertainty |
|---|---|---|---|
| **Sum / Difference** | $Z = X + Y$ or $Z = X - Y$ | $\Delta Z = \Delta X + \Delta Y$ (Absolute errors add) | $\frac{\Delta Z}{Z} = \frac{\Delta X + \Delta Y}{X \pm Y}$ |
| **Product / Quotient** | $Z = X \cdot Y$ or $Z = \frac{X}{Y}$ | $\Delta Z = Z \left( \frac{\Delta X}{X} + \frac{\Delta Y}{Y} \right)$ | $\frac{\Delta Z}{Z} = \frac{\Delta X}{X} + \frac{\Delta Y}{Y}$ (Relative errors add) |
| **Power Exponent** | $Z = X^n$ | $\Delta Z = |n| X^{n-1} \Delta X$ | $\frac{\Delta Z}{Z} = |n| \frac{\Delta X}{X}$ |
| **General Multi-Variable** | $Z = \frac{X^a Y^b}{W^c}$ | $\Delta Z = Z \left( a\frac{\Delta X}{X} + b\frac{\Delta Y}{Y} + c\frac{\Delta W}{W} \right)$ | $\%\text{ Error}(Z) = a(\%X) + b(\%Y) + c(\%W)$ |

Notice that the variable with the highest exponent contributes the largest share to total uncertainty. In experimental design, always measure the highest-exponent variable using the instrument with the smallest percentage error.

#### Dimensional Analysis Applications and Inherent Limitations

Dimensions express the dependence of a physical quantity on the base dimensions $[\text{M}], [\text{L}], [\text{T}], [\text{A}], [\Theta]$.

1. **Principle of Dimensional Homogeneity**: Every additive term on both sides of a physically valid equation must possess identical dimensions. For example, in $v^2 = u^2 + 2as$, each term has dimensions $[\text{L}^2 \text{T}^{-2}]$.
2. **Deriving Relationships**: If a physical quantity depends on powers of other physical parameters ($T \propto m^a L^b g^c$), equating indices of $[\text{M}], [\text{L}], [\text{T}]$ solves for exponents $a, b, c$.
3. **Inherent Limitations of Dimensional Analysis**:
   - Cannot determine dimensionless proportionality constants (such as $2\pi, \frac{1}{2}, \sqrt{3}$).
   - Cannot analyze transcendental functions ($\\sin(\omega t), e^{-kt}, \ln(x)$) because their arguments must remain strictly dimensionless.
   - Fails if a physical quantity depends on more than three independent variables within mechanics ($[\text{M}], [\text{L}], [\text{T}]$ provide only three equations).

#### Worked MDCAT Numerical Solutions

**Problem 1: Micrometer Screw Gauge Zero Error Correction**  
*Problem:* The pitch of a micrometer screw gauge is $0.5 \text{ mm}$ and its circular scale possesses $50$ equal divisions. When the spindle is brought into contact with the anvil with zero object between them, the $47\text{th}$ division of the circular scale coincides with the reference datum line, and the zero mark of the circular scale lies above the reference line. When measuring the diameter of a metal wire, the main scale reads $2.5 \text{ mm}$ and the $34\text{th}$ circular division coincides with the datum line. Determine the corrected diameter of the wire.

*Step-by-Step Solution:*
1. Calculate the least count ($LC$):
   $$LC = \frac{\text{Pitch}}{\text{Total Circular Divisions}} = \frac{0.5 \text{ mm}}{50} = 0.01 \text{ mm}$$
2. Determine the zero error:
   Because the zero mark lies *above* the datum line, the zero error is **negative**.
   The number of divisions preceding zero is $50 - 47 = 3$ divisions.
   $$\text{Zero Error} = -(3 \times 0.01 \text{ mm}) = -0.03 \text{ mm}$$
3. Calculate observed reading:
   $$\text{Observed} = \text{MSR} + (\text{CSR} \times LC) = 2.5 \text{ mm} + (34 \times 0.01 \text{ mm}) = 2.5 \text{ mm} + 0.34 \text{ mm} = 2.84 \text{ mm}$$
4. Apply zero correction:
   $$\text{Corrected Reading} = \text{Observed Reading} - (\text{Zero Error})$$
   $$\text{Corrected Reading} = 2.84 \text{ mm} - (-0.03 \text{ mm}) = 2.84 \text{ mm} + 0.03 \text{ mm} = 2.87 \text{ mm}$$
*Final Answer:* The corrected wire diameter is **$2.87 \text{ mm}$**.

**Problem 2: Error Propagation in Density Determination**  
*Problem:* The mass of a uniform cylindrical solid rod is measured as $m = 200.0 \pm 0.4 \text{ g}$. Its radius is $r = 1.00 \pm 0.01 \text{ cm}$ and its length is $L = 10.00 \pm 0.05 \text{ cm}$. Calculate the density of the material and the maximum percentage uncertainty in the computed density.

*Step-by-Step Solution:*
1. State the formula for cylindrical volume and density:
   $$V = \pi r^2 L \implies \rho = \frac{m}{\pi r^2 L}$$
2. Calculate percentage uncertainty for each measured variable:
   $$\%\Delta m = \frac{0.4}{200.0} \times 100\% = 0.20\%$$
   $$\%\Delta r = \frac{0.01}{1.00} \times 100\% = 1.00\%$$
   $$\%\Delta L = \frac{0.05}{10.00} \times 100\% = 0.50\%$$
3. Apply power rule for error propagation:
   $$\%\Delta \rho = \%\Delta m + 2(\%\Delta r) + \%\Delta L$$
   $$\%\Delta \rho = 0.20\% + 2(1.00\%) + 0.50\% = 0.20\% + 2.00\% + 0.50\% = 2.70\%$$
4. Compute nominal density value:
   $$V = \pi (1.00)^2 (10.00) = 31.416 \text{ cm}^3$$
   $$\rho = \frac{200.0 \text{ g}}{31.416 \text{ cm}^3} = 6.366 \text{ g/cm}^3$$
5. Compute absolute uncertainty in density:
   $$\Delta \rho = 6.366 \times \frac{2.70}{100} = 0.172 \text{ g/cm}^3$$
*Final Answer:* The density is **$(6.37 \pm 0.17) \text{ g/cm}^3$** with a maximum percentage uncertainty of **$2.70\%$**.

#### High-Yield Exam Pitfalls and Checkpoints

- **Zero Correction Sign Inversion**: A positive zero error means the instrument over-reads; therefore, you must subtract the error from the observed reading. A negative zero error means the instrument under-reads; therefore, you must add the absolute correction.
- **Vernier Reading Formula**: Always verify whether the main scale is calibrated in millimetres or centimetres. If $1 \text{ MSD} = 1 \text{ mm}$, $LC = 0.1 \text{ mm} = 0.01 \text{ cm}$.
- **Angles and Trigonometric Arguments**: All trigonometric functions ($\sin \theta, \cos \theta$) require dimensionless arguments. If an equation contains $\sin(k x)$, the constant $k$ must have dimensions of $[\text{L}^{-1}]$.

---

### Practice Prompts

1. An experiment measures acceleration due to gravity using a simple pendulum: $g = 4\pi^2 \frac{L}{T^2}$. If length $L$ has a percentage error of $1.5\%$ and time period $T$ has a percentage error of $2.0\%$, compute the maximum percentage error in the calculated value of $g$.
2. Write the dimensional formula for Planck constant $h$, gravitational constant $G$, and coefficient of viscosity $\eta$. Identify which pair of physical quantities among work, torque, and angular momentum share identical dimensions.

---

## Continue your study

- **[MDCAT Exam Hub](/exams/mdcat/)** — full PMDC syllabus, eligibility requirements, and aggregate score formula
- **[All MDCAT Physics Notes](/notes/mdcat/physics/)** — vectors, motion, work and energy, thermodynamics, and electromagnetism
- **[MDCAT Physics Preparation Strategy](/exams/mdcat/#roadmap)** — high-yield topic distribution and formula memory frameworks
