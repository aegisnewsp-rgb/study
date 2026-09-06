---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-001
topicName: "Blood Relations"
tier: unified
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "A comprehensive family tree showing all relationship types: self, siblings (brother/sister), parents, grandparents, great-grandparents, children, grandchildren, great-grandchildren, aunts, uncles, nieces, nephews, cousins (first, second), in-laws (mother-in-law, father-in-law, sister-in-law, brother-in-law, son-in-law, daughter-in-law). Each labeled with gender and generation markers."
country: india
generated: "2026-05-26"
lastUpdated: "2026-09-06"
---

# Blood Relations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Blood Relations questions in the GATE General Aptitude (GA) section assess algorithmic deduction, graph traversal, and logical constraint satisfaction. Family networks form directed acyclic graphs where vertices represent individuals and edges define lineage, marital union, or siblinghood. Every relationship deduction resolves into three invariant parameters: generation differential ($\\Delta G \\in \\{-2, -1, 0, +1, +2\\}$), gender specification ($M, F$), and lineage branch (paternal versus maternal).

| Standard Relation Dimension | Mathematical Notation / Graph Convention | Direct Meaning | Classical Exam Trap |
|---|---|---|---|
| **Spousal Bond** | $A \\Leftrightarrow B$ (Double Horizontal Arrow) | $A$ and $B$ are married partners; genders are strictly opposite | Assuming marriage implies blood relation |
| **Sibling Bond** | $A \\leftrightarrow B$ or $A \\text{ --- } B$ (Single Line) | $A$ and $B$ share identical parents | Assuming sibling implies identical gender |
| **Parent-Child Edge** | $A \\downarrow B$ (Vertical Downward Directed Line) | $A$ is parent (upper generation), $B$ is child | Inverting arrow direction ($B$ to $A$) |
| **Male Identifier** | $[+]$ or $\\Box$ (Square / Plus Sign) | Biological male entity | Inferring gender from traditional Indian names |
| **Female Identifier** | $[-]$ or $\\bigcirc$ (Circle / Minus Sign) | Biological female entity | Leaving gender undefined when solving for niece/nephew |

```
Standard Family Tree Generation Notation:
Generation +2: Paternal Grandfather [M+], Maternal Grandmother [F-]
Generation +1: Father [M+], Mother [F-], Paternal Uncle [M+], Maternal Aunt [F-]
Generation  0: Self, Spouse, Brother [M+], Sister [F-], First Cousin
Generation -1: Son [M+], Daughter [F-], Nephew [M+], Niece [F-]
Generation -2: Grandson [M+], Granddaughter [F-]
```

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### 1. Fundamental Lineage Architecture & Terminology

Every family relation problem requires systematic translation of verbal statements into graphical coordinates. Do not attempt mental calculation on chains longer than two links. Construct a generation-tiered family tree using the standard conventions listed below.

| Generation Shift | Paternal Lineage (Father\x27s Side) | Maternal Lineage (Mother\x27s Side) | In-Law / Affinal Lineage |
|---|---|---|---|
| **+2 (Grandparents)** | Paternal Grandfather, Paternal Grandmother | Maternal Grandfather, Maternal Grandmother | Spouse\x27s Grandparents |
| **+1 (Parents & Aunts/Uncles)** | Father, Paternal Uncle (*Chacha/Tau*), Paternal Aunt (*Bua*) | Mother, Maternal Uncle (*Mama*), Maternal Aunt (*Mami/Masi*) | Father-in-law, Mother-in-law |
| **0 (Ego Generation)** | Brother, Sister, Paternal Cousin | Maternal Cousin | Spouse, Brother-in-law, Sister-in-law |
| **-1 (Children & Nieces/Nephews)** | Son, Daughter, Brother\x27s Son (Nephew), Brother\x27s Daughter (Niece) | Sister\x27s Son (Nephew), Sister\x27s Daughter (Niece) | Son-in-law, Daughter-in-law |
| **-2 (Grandchildren)** | Grandson, Granddaughter | Grandson, Granddaughter | Grandson-in-law, Granddaughter-in-law |

#### 2. Rigorous Disambiguation of English Kinship Phrases

English kinship terms contain inherent ambiguities that GATE examiners exploit. The table below provides unambiguous logical interpretations.

| Verbal Description in Problem | Strict Logical Meaning | Non-Obvious Implication |
|---|---|---|
| *"Only son of my father"* (Spoken by a male) | The speaker himself | The speaker has zero brothers; may have sisters |
| *"Only son of my father"* (Spoken by a female) | The speaker\x27s brother | The speaker has exactly one brother; zero other male siblings |
| *"Only daughter of my mother"* (Spoken by a female) | The speaker herself | The speaker has zero sisters; may have brothers |
| *"Only child of my grandparents"* | The speaker\x27s father or mother | The speaker has zero aunts and zero uncles |
| *"Brother-in-law"* | (1) Spouse\x27s brother, OR (2) Sister\x27s husband | Requires bifurcated tree analysis if not bounded |
| *"Sister-in-law"* | (1) Spouse\x27s sister, OR (2) Brother\x27s wife | Verify whether relation is through spouse or sibling |
| *"Paternal uncle"* | Father\x27s brother | Excludes mother\x27s brother (*Maternal uncle*) |
| *"A is B\x27s cousin"* | Child of parent\x27s sibling | Generation shift is 0; gender of $A$ and $B$ remains unconstrained |

#### 3. Standard Step-by-Step Worked Problems

**Problem 1 (Direct Kinship Deduction):**  
*Statement:* $A$ is $B$\x27s sister. $B$ is $C$\x27s mother. $D$ is $C$\x27s brother. How is $D$ related to $A$?

*Logical Tree Construction:*
1. Parse $A$ and $B$: $A$ is sister of $B$ $\\Rightarrow A[-] \\leftrightarrow B$ (Both in Generation 0 relative to each other). $A$ is female.
2. Parse $B$ and $C$: $B$ is mother of $C$ $\\Rightarrow B[-]$ (Gender confirmed female). Draw vertical edge downward: $B[-] \\downarrow C$.
3. Parse $D$ and $C$: $D$ is brother of $C$ $\\Rightarrow D[+] \\leftrightarrow C$. $D$ is male.
4. Synthesize: Because $B$ is mother of $C$, and $D$ is sibling of $C$, $B$ is also the mother of $D$.
5. Relate $D$ to $A$: $A$ is the sister of $D$\x27s mother ($B$). Therefore, $A$ is $D$\x27s maternal aunt, and $D$ is $A$\x27s **nephew**.

**Problem 2 (Dialogue / Pointing-Style Statement):**  
*Statement:* Pointing to a photograph of a boy, Suresh said, *"He is the son of the only son of my mother."* How is Suresh related to that boy?

*Logical Tree Construction:*
1. Break down the phrase from the anchor point (*"my mother"*):
   - Anchor: Suresh\x27s mother.
   - Next clause: *"The only son of my mother"*.
2. Evaluate speaker gender: Suresh is a male name, and Suresh\x27s mother has only one son. Therefore, the *"only son"* is Suresh himself.
3. Next clause: *"He is the son of [Suresh]"*.
4. Conclusion: The boy in the photograph is Suresh\x27s son. Suresh is the boy\x27s **father**.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Coded Blood Relations: Operator Algebra and Elimination Rules

High-difficulty GATE questions present relations as symbolic equations. Solving these quickly requires two elimination techniques: **Gender Filtering** and **Generation Differential Calculation**.

Let symbols represent operators:
- $P + Q \\implies P$ is the father of $Q$ ($\\Delta G = +1$, $P$ is male)
- $P - Q \\implies P$ is the mother of $Q$ ($\\Delta G = +1$, $P$ is female)
- $P \\times Q \\implies P$ is the brother of $Q$ ($\\Delta G = 0$, $P$ is male)
- $P \\div Q \\implies P$ is the sister of $Q$ ($\\Delta G = 0$, $P$ is female)

| Operator | Relation Defined | Target Gender ($P$) | Generation Contribution ($\\Delta G$) |
|---|---|---|---|
| **$+$** | Father | Male $[+]$ | $+1$ |
| **$-$** | Mother | Female $[-]$ | $+1$ |
| **$\\times$** | Brother | Male $[+]$ | $0$ |
| **$\\div$** | Sister | Female $[-]$ | $0$ |
| **$=$** | Husband | Male $[+]$ | $0$ |

#### Worked Example: Symbolic Constraint Elimination

**Question:** Which of the following expressions indicates that *"M is the maternal uncle of N"*?
- (A) $M \\times P + Q \\div N$
- (B) $M \\div P + Q \\times N$
- (C) $M \\times P - N$
- (D) $M + P \\times N$

**Step 1: Determine Required Invariants:**
1. **Target Gender**: $M$ is an uncle $\\implies M$ must be **male** ($[+]$).
2. **Lineage**: Maternal uncle means mother\x27s brother ($M$ is brother of someone who is mother of $N$).
3. **Generation Shift**: Uncle is in Generation $+1$ relative to nephew/niece $N$ ($\\Delta G = +1$).

**Step 2: Analyze Candidate Options via Invariants:**
- Evaluate Option (A): $M \\times P$ ($M$ is brother of $P$, $\\Delta G=0$) $+ Q$ ($P$ is father of $Q$, $\\Delta G=+1$) $\\div N$ ($Q$ is sister of $N$, $\\Delta G=0$).
  Total $\\Delta G = 0 + 1 + 0 = +1$.
  Here, $P$ is the father of $N$. $M$ is the brother of $N$\x27s father $P$. Thus, $M$ is the *paternal* uncle of $N$. Option (A) is rejected.
- Evaluate Option (C): $M \\times P$ ($M$ is brother of $P$, $M$ is male, $\\Delta G=0$) $- N$ ($P$ is mother of $N$, $P$ is female, $\\Delta G=+1$).
  Total $\\Delta G = 0 + 1 = +1$.
  Here, $P$ is the mother of $N$, and $M$ is the brother of $P$. Therefore, $M$ is the **maternal uncle of $N$**.
- Option (C) matches all requirements. Correct answer is **(C)**.

#### Complex Family Puzzle: Multi-Constraint Grid

**Scenario:** In a family of seven members ($A, B, C, D, E, F, G$), there are two married couples and three generations.
1. $B$ is an engineer and the father of $E$.
2. $F$ is the grandfather of $E$ and is a physician.
3. $D$ is the grandmother of $C$ and is a homemaker.
4. $C$ is the daughter of $A$.
5. $E$ is the brother of $C$.
6. $G$ is the brother of $B$.

*Step-by-Step Resolution Table:*

| Person | Generation Index | Gender | Profession / Status | Kinship Link |
|---|---|---|---|---|
| **$F$** | $+2$ (Grandparent) | Male $[+]$ | Physician | Married to $D$; father of $B$ and $G$ |
| **$D$** | $+2$ (Grandparent) | Female $[-]$ | Homemaker | Married to $F$; mother of $B$ and $G$ |
| **$B$** | $+1$ (Parent) | Male $[+]$ | Engineer | Son of $F$ and $D$; married to $A$ |
| **$A$** | $+1$ (Parent) | Female $[-]$ | Mother | Married to $B$; mother of $E$ and $C$ |
| **$G$** | $+1$ (Parent) | Male $[+]$ | Paternal Uncle | Brother of $B$; son of $F$ and $D$ |
| **$E$** | $0$ (Children) | Male $[+]$ | Son / Brother | Son of $B$ and $A$; brother of $C$ |
| **$C$** | $0$ (Children) | Female $[-]$ | Daughter / Sister | Daughter of $B$ and $A$; sister of $E$ |

#### Exam Traps and Invariant Checkpoints

- **The Name Gender Fallacy**: In competitive aptitude exams, names like "Kiran", "Sneh", or "Bobby" do not specify gender unless explicitly confirmed by a pronoun ("he", "she") or relationship title ("brother", "mother"). Never assign a gender based on cultural convention.
- **Reciprocal Traps**: When the question asks *"How is X related to Y?"*, candidates often select the relation of $Y$ to $X$. If $X$ is $Y$\x27s father, do not choose "son". Always read the exact direction of the relation prompt.
- **In-Law Nuance**: *"Sister-in-law"* can mean brother\x27s wife, husband\x27s sister, or wife\x27s sister. If the problem does not provide disambiguating constraints, examine all valid branches before selecting "Cannot be determined".

---

### Practice Prompts

1. If $A + B$ means $A$ is the mother of $B$; $A - B$ means $A$ is the brother of $B$; $A \\times B$ means $A$ is the father of $B$, what does $P + Q - R \\times S$ indicate about the relationship between $P$ and $S$?
2. A family consists of six members: $U, V, W, X, Y, Z$. $W$ is the wife of $V$. $Z$ is the mother of $U$. $X$ is the daughter of $W$. $Y$ is the brother of $U$. If $U$ is the son of $V$, how many male members are present in this family?

---

## Continue your study

- **[GATE Exam Hub](/exams/gate/)** — full syllabus, paper pattern, marking scheme, and cutoff scores
- **[All GATE General Aptitude Notes](/notes/gate/logical-reasoning/)** — browse sibling topics in reasoning, verbal ability, and engineering mathematics
- **[GATE Preparation Roadmap](/exams/gate/#roadmap)** — structured revision schedule for engineering disciplines
