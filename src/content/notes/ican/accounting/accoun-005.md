---
exam: ican
examName: ICAN (Nigeria)
subject: accounting
subjectName: "Accounting"
topic: accoun-005
topicName: Depreciation
weight: 3
country: nigeria
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-06"
---

# Depreciation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ICAN exam.

Depreciation represents the systematic allocation of the depreciable amount of a tangible property, plant and equipment (PPE) asset over its estimated useful economic life under **IAS 16 (Property, Plant and Equipment)**. Depreciation constitutes a non-cash cost-allocation mechanism to match revenue with asset utilization, not a valuation process reflecting changing open market values. The depreciable base strictly equals **historical acquisition cost (or revalued carrying amount) minus estimated residual value**.

| Standard Depreciation Metric | Mathematical Formulation | Direct Accounting Application | High-Frequency ICAN Trap |
|---|---|---|---|
| **Depreciable Amount** | $\text{Depreciable Base} = \text{Cost} - \text{Residual Value}$ | Base sum amortized over asset lifespan | Omitting residual value subtraction in Straight-Line calculations |
| **Straight-Line Method (SLM)** | $\text{Annual Charge} = \frac{\text{Cost} - \text{Residual Value}}{n}$ | Uniform economic benefit consumption | Applying SLM percentage to reducing carrying value |
| **Reducing Balance Method (RBM)** | $\text{Charge}_t = \text{Carrying Amount}_{t-1} \times r$ | Front-loaded depreciation for rapid early wear | Using $1/n$ instead of $r = 1 - \sqrt[n]{\frac{\text{Residual}}{\text{Cost}}}$ |
| **Units of Production** | $\text{Charge} = (\text{Cost} - \text{RV}) \times \frac{\text{Units Output}}{\text{Total Capacity}}$ | Direct mechanical output wear matching | Using machine operating hours when units produced are specified |
| **Derecognition Rule** | Stops at earlier of disposal or IFRS 5 Held for Sale | No depreciation once classified as held for sale | Charging depreciation during active asset marketing post-IFRS 5 classification |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before ICAN.

#### 1. Scope, Asset Recognition, and Cost Components

Under IAS 16, an item of PPE is recognized as an asset if future economic benefits will flow to the entity and the asset cost can be reliably measured. Cost includes purchase price (less trade discounts), import duties, non-refundable taxes, site preparation, delivery, installation, professional architectural/legal fees, and estimated future dismantling and site restoration obligations (IAS 37).

Subsequent expenditures are capitalized only if they extend asset useful life, increase operating capacity, or represent substantial component replacements. Regular repairs, day-to-day servicing, and maintenance expenses are recognized immediately in profit or loss.

| Accounting Treatment Dimension | Straight-Line Method (SLM) | Reducing Balance Method (RBM) | Units of Production Method |
|---|---|---|---|
| **Annual Depreciation Charge** | Constant equal amount every accounting period | Decreasing charge; highest in Year 1, lowest in final year | Variable charge fluctuating directly with operational output |
| **Carrying Amount Trajectory** | Linear descent to estimated residual value | Exponential asymptotic decay toward residual value | Non-linear decay tied to volume utilization |
| **Total Carrying Cost (Depr + Repairs)** | Rising total cost (fixed depreciation + escalating repairs) | Stabilized total cost (falling depreciation offsets rising repairs) | Variable total cost proportional to activity level |
| **Best-Suited Asset Classes** | Office buildings, leaseholds, office furniture | Heavy motor vehicles, computer servers, industrial machinery | Commercial transport aircraft (flight cycles), mining haulers |

#### 2. Four-Year Comparative Depreciation Schedule

Consider an industrial generator purchased on 1 January 2026 for $₦10,000,000$ with an estimated useful life of $4$ years and a residual scrap value of $₦1,000,000$.

Under Straight-Line:
$$\text{Annual Depreciation} = \frac{₦10,000,000 - ₦1,000,000}{4} = ₦2,250,000 \text{ per annum}$$

Under Reducing Balance (using $r = 43.77\%$ to reach $₦1,000,000$ at year 4):

| Accounting Year | Opening Carrying Amount | SLM Depreciation Charge | SLM Net Book Value | RBM Depreciation Charge ($43.77\%$) | RBM Net Book Value |
|---|---|---|---|---|---|
| **Year 1 (2026)** | $₦10,000,000$ | $₦2,250,000$ | $₦7,750,000$ | $₦4,377,000$ | $₦5,623,000$ |
| **Year 2 (2027)** | $₦7,750,000$ (SLM) / $₦5,623,000$ (RBM) | $₦2,250,000$ | $₦5,500,000$ | $₦2,461,187$ | $₦3,161,813$ |
| **Year 3 (2028)** | $₦5,500,000$ (SLM) / $₦3,161,813$ (RBM) | $₦2,250,000$ | $₦3,250,000$ | $₦1,383,926$ | $₦1,777,887$ |
| **Year 4 (2029)** | $₦3,250,000$ (SLM) / $₦1,777,887$ (RBM) | $₦2,250,000$ | $₦1,000,000$ | $₦777,887$ | $₦1,000,000$ |

#### 3. Component Depreciation and Changes in Accounting Estimates

IAS 16 mandates separate depreciation for each asset part with a cost significant to total asset cost. For example, in an industrial facility, the boiler, turbine, and building structure constitute separate components with 10-year, 25-year, and 50-year useful lives respectively.

Under IAS 8, reviews of residual value, useful life, and depreciation methods occur at every financial year-end. Adjustments represent changes in accounting estimates applied **prospectively** over remaining useful life, never retrospectively.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Financial Accounting Depreciation vs. Tax Capital Allowances

In Nigerian professional accounting practice, financial statement depreciation is disallowed for company tax computation under the Companies Income Tax Act (CITA) and the Industrial Development (Income Tax Relief) Act. Entities calculate **Capital Allowances** according to Federal Inland Revenue Service (FIRS) statutory rates.

| Comparative Dimension | Accounting Depreciation (IAS 16) | Tax Capital Allowances (CITA / FIRS) |
|---|---|---|
| **Governing Standard** | International Accounting Standard 16 | Companies Income Tax Act (CITA 2004 as amended) |
| **Statutory Rates** | Entity-determined based on economic reality | Prescribed statutory Initial Allowances and Annual Allowances |
| **Residual Value Treatment** | Deducted prior to applying depreciation rates | Ignored; allowance computed on qualifying capital expenditure |
| **Balancing Adjustments** | Profit or loss on disposal ($P/L = \text{Proceeds} - \text{NBV}$) | Balancing Allowance (tax relief) or Balancing Charge (taxable income) |
| **Deferred Tax Impact** | Creates temporary timing differences under IAS 12 | Generates deferred tax liabilities or assets |

#### Worked ICAN Examination Problem: Component Revaluation & Disposal

*Problem:* On 1 January 2024, Lagos Petrochemicals Ltd acquired a chemical processing plant for $₦60,000,000$. The plant comprises two components:
1. Core Reactor ($₦40,000,000$, useful life $10$ years, nil residual value).
2. Specialized Catalyst Lining ($₦20,000,000$, useful life $4$ years, nil residual value).
Depreciation is charged on the straight-line basis. On 31 December 2025, the catalyst lining was replaced at a cost of $₦28,000,000$. The old lining was scrapped with zero proceeds. Calculate total depreciation charged for the year ended 31 December 2026.

*Step-by-Step Accounting Solution:*
1. Calculate annual depreciation for 2024 and 2025:
   - Core Reactor: $\frac{₦40,000,000}{10} = ₦4,000,000$ per year.
   - Old Catalyst Lining: $\frac{₦20,000,000}{4} = ₦5,000,000$ per year.
   - Total annual depreciation (2024, 2025) $= ₦4,000,000 + ₦5,000,000 = ₦9,000,000$.
2. Derecognition of replaced component at 31 December 2025:
   - Carrying amount of old lining $= ₦20,000,000 - (2 \times ₦5,000,000) = ₦10,000,000$.
   - Derecognition loss charged to Profit or Loss $= ₦10,000,000$.
3. Capitalize new replacement component:
   - Add new catalyst lining to PPE at $₦28,000,000$ with new 4-year useful life starting 1 January 2026.
4. Calculate 2026 depreciation charge:
   - Core Reactor (Year 3): $₦4,000,000$.
   - New Catalyst Lining (Year 1): $\frac{₦28,000,000}{4} = ₦7,000,000$.
   - Total 2026 Depreciation Charge $= ₦4,000,000 + ₦7,000,000 = ₦11,000,000$.
*Final Answer:* Total depreciation charged in 2026 is **$₦11,000,000$**, with an additional derecognition loss of **$₦10,000,000$** recognized in 2025.

#### Common Traps and Examiner Checkpoints

- **Depreciation Commencing Date**: Depreciation starts when the asset is in the location and condition necessary for it to operate in the intended manner, not when commercial production begins. Idle assets continue to be depreciated unless units-of-production method is adopted.
- **Land and Buildings**: Land and buildings are separable assets and must be accounted for separately, even when acquired together. Land has an infinite useful life and is not depreciated, whereas buildings possess a finite useful life.
- **Subsequent Revaluation Surplus**: When an asset is revalued, any depreciation subsequently charged is based on the revalued amount. Entities may transfer the difference between depreciation on revalued amount and depreciation on historical cost directly from Revaluation Surplus to Retained Earnings.

---

### Practice Prompts

1. An item of plant costing $₦8,000,000$ with an estimated residual value of $₦800,000$ has been depreciated under the straight-line method over an 8-year life for 3 years. At the start of year 4, the remaining useful life is revised to 3 additional years, and residual value is revised to $₦500,000$. Calculate the revised depreciation charge for year 4.
2. Outline the accounting entries required under IAS 16 when an enterprise derecognizes an asset with an original cost of $₦15,000,000$, accumulated depreciation of $₦9,000,000$, and sale proceeds of $₦7,500,000$.

---

## Continue your study

- **[ICAN Exam Hub](/exams/ican/)** — complete syllabus outline, examination diet structure, and student resources
- **[All ICAN Accounting Notes](/notes/ican/accounting/)** — financial accounting, management information, taxation, and audit
- **[ICAN Examination Preparation Roadmap](/exams/ican/#roadmap)** — high-yield topic distribution and diet study planner
