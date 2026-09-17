---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: management
subjectName: "Management"
topic: manage-009
topicName: HR Planning
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# HR Planning

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Human Resource Planning (HRP) is the **systematic process of forecasting future demand for and supply of people** in an organisation and designing action plans so the right number of qualified employees are available at the right time. In RBI Grade B Phase-II (Management), HRP is tested as a sub-function of HRM, not as a synonym for it.

| Term | Meaning (for HRP) |
|---|---|
| Demand Forecasting | Estimating future manpower needs based on strategy, volume, and technology |
| Supply Forecasting | Estimating internal (transfers, promotions) and external (labour market) availability |
| Gap Analysis | Difference between forecasted demand and forecasted supply, expressed in persons |
| Action Plan | Recruitment, selection, training, redeployment, retention, or right-sizing to close the gap |
| Succession Planning | Identifying and developing internal candidates for critical senior roles |

> 💡 **High-Yield Memory Hook:** **"D-S-G-A-M"** — *Demand forecast → Supply forecast → Gap analysis → Action plan → Monitoring & control*. These five steps appear in nearly every 6-mark definitional question on HRP in the RBI Management paper.

The single most-tested formula is the **Demand–Supply Gap**: `Gap (persons) = Forecasted Demand − Forecasted Supply`. A positive value is a **deficit** (recruit/train); a negative value is a **surplus** (redeploy/right-size).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definition and Scope

HRP is the quantitative, forward-looking sub-function of Human Resource Management that links **corporate strategy** to **workforce strategy**. It does not handle payroll, grievances, or industrial relations — those belong to other HRM sub-functions. HRP is classified by horizon as **short-term (≤1 year)**, **intermediate (2–5 years)**, or **long-term (5–10 years)**, with the horizon widening as one moves up from operational to corporate HR planning.

#### Steps of HRP (RBI Examiner-Preferred Order)

1. Analyse organisational objectives and strategic plans.
2. Forecast **demand** for manpower (quantitative + qualitative techniques).
3. Forecast **supply** from internal and external sources.
4. Conduct **gap analysis** — deficit or surplus in persons.
5. Formulate **action plans** — recruitment, training, redeployment, retention, downsizing.
6. **Monitor and control** — review actuals vs forecasts and revise annually.

#### Quantitative vs Qualitative Forecasting Techniques

| Technique | Type | Best Used When |
|---|---|---|
| Ratio / Trend Analysis | Quantitative | Past stable relationship between workload and headcount exists |
| Regression Analysis | Quantitative | Two or more independent variables (sales, output) predict headcount |
| Delphi Technique | Qualitative | No historical data; expert opinion is the primary input |
| Scenario / Forecasting Method | Qualitative | Strategic planning workshop builds multiple futures |
| Markov Model | Quantitative | Internal supply transitions (promotions, transfers, attrition) are trackable |

The **Index Method** for demand forecasting: `Rn = On × (Nn / Oo)`, where Rn = required personnel, On = current personnel in a similar operation, Nn = new activity volume, Oo = old activity volume. All three ratios are dimensionless; Rn comes out as a count of persons.

#### Demand vs Supply Forecasting — Comparison Matrix

| Dimension | Demand Forecasting | Supply Forecasting |
|---|---|---|
| Question answered | *How many* people will we need? | *How many* will be available, and from where? |
| Primary drivers | Strategy, sales plan, technology, expansion | Retirements, attrition, internal mobility, labour market |
| Time horizon | Usually 1–5 years forward | Internal: short-term; External: medium- to long-term |
| Source of data | Business plans, budgets, productivity norms | HRIS records, replacement charts, census data |
| Typical techniques | Ratio, regression, Delphi, managerial judgement | Markov analysis, replacement charts, skills inventory, labour-market analysis |
| Output | Headcount required by skill/grade | Headcount available by skill/grade |

#### 🎯 Exam-Level Worked Problem

**Question:** A public-sector bank has 1,200 business correspondents (BCs) handling 8.4 lakh transactions per month. The bank plans to scale *BC transactions* to 12.6 lakh per month over the next year, expecting a 10% productivity gain from a new mobile app. The HR department forecasts that 80 BCs will retire and another 60 will attrite during the year, but 40 internal candidates are ready for promotion into BC roles. Calculate (a) the manpower demand using the Index Method, and (b) the net HR gap after accounting for supply.

#### Solution:

*Step 1 — Compute the demand using the Index Method.*  
Current personnel On = 1,200. Old volume Oo = 8.4 lakh; new volume Nn = 12.6 lakh.  
`Rn = On × (Nn / Oo) = 1,200 × (12.6 / 8.4) = 1,200 × 1.5 = 1,800 BCs` (gross demand).

*Step 2 — Adjust the gross demand for the 10% productivity gain.*  
Net demand = `1,800 × (1 − 0.10) = 1,800 × 0.90 = 1,620 BCs`.

*Step 3 — Compute supply.*  
Losses = 80 (retirement) + 60 (attrition) = 140.  
Internal supply = 40 (promotions into BC roles).  
Net external supply needed = 1,620 − (Current 1,200 − 140 + 40) = 1,620 − 1,100 = **520 BCs deficit**.

*Step 4 — Apply the gap formula.*  
`Gap (persons) = Forecasted Demand − Forecasted Supply = 1,620 − 1,100 = +520` (deficit).

> ⚠️ **Examiner Trap:** Students frequently apply the 10% productivity adjustment *before* the index ratio, or forget to subtract internal supply from gross requirement. Apply the productivity factor to the **Rn result, not to Oo or Nn**, and always net out internal supply before declaring the external recruitment number.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Integration with Performance Management and Retention

HRP does not end with gap closure. The RBI Phase-II Management paper expects candidates to link HRP to the **Performance Management System (PMS)**, because retention of high performers depends on PMS outputs (ratings, bell-curve placement, key talent flags). If HRP forecasts supply purely from headcount without consulting PMS, high-performer loss is understated and succession pipelines dry up silently.

#### Markov Model for Internal Supply

Internal transitions between HR states (Grade A → Grade B, Grade A → Separation) are tracked as a transition probability matrix P over a planning horizon. The forecast internal supply at time t is `St+1 = St × P`. This is the quantitative backbone of succession planning for senior management in Indian public-sector banks, where external CEO appointments are rare and IBPS-level lateral entry is limited.

#### Barriers to Effective HRP — Bank-Specific Edge Cases

| Barrier | Why it distorts HRP in PSBs |
|---|---|
| Sanctioned strength rigidity | Branch expansion approved by RBI; HR cannot flex post numbers quickly |
| Short tenure of HR heads | Forecasting horizons exceed the average HR Chief General Manager tenure |
| Inaccurate HRIS data | Multiple legacy platforms across merged banks produce conflicting headcounts |
| Union resistance to right-sizing | Surplus declarations are politically and legally contested |
| Cost of lateral hiring at senior levels | Market premiums for specialist roles (Treasury, Risk, IT) blow past budgeted HR costs |

#### Two Advanced Practice Prompts

1. **10-mark essay prompt:** *"Discuss the barriers to effective Human Resource Planning in Indian public-sector banks and suggest a framework to overcome them."* — Use the RBI 2017–2018 HRM reforms context, IBPS recruitment cycle, and the role of HRIS.
2. **6-mark conceptual prompt:** *"Distinguish between HR Planning and Succession Planning. Why is Succession Planning considered a subset of HR Planning?"* — Answer must state that succession planning covers only critical roles, while HRP covers every cadre.

#### Common Mistakes Specific to RBI Grade B

- Writing *Manpower Planning* when the paper asks for **HR Planning / Human Resource Planning** — the latter is the examiner-preferred term.
- Treating HRP as a one-time annual exercise; it is **continuous and rolling**.
- Ignoring **soft HRM** signals (morale, engagement scores) when forecasting attrition — hard numbers alone underestimate voluntary separations.
- Quoting the Training ROI formula without naming units: benefits and costs are in INR, output is a percentage.

---

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "HR Planning" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Management notes](/notes/rbi-grad-b/management/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
