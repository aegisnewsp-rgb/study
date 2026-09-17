---
exam: du-ad
examName: DU Admission (Bangladesh)
subject: science
subjectName: Science
topic: scienc-010
topicName: Kirchhoff's Current Law (KCL)
weight: 3
country: bangladesh
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# Kirchhoff's Current Law (KCL)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Kirchhoff's Current Law (KCL) says the **algebraic sum of currents at any node (junction)** equals zero. A **node** is any point where two or more wires meet; a **branch** is a single path connecting two nodes. The law follows from **conservation of electric charge** — charge cannot pile up at a junction.

| Quantity | Symbol | Meaning | SI Unit |
|---|---|---|---|
| Current | *I* | Rate of charge flow through a branch | ampere (A) |
| Node voltage | *V* | Electric potential at the junction | volt (V) |
| Branch count | *n* | Number of wires meeting at the node | dimensionless |

> 💡 **High-Yield Memory Hook:** **"What goes in must come out"** — at every node, ΣI_in = ΣI_out. Equivalently, give entering currents a **+** sign and leaving currents a **−** sign (or vice versa, but stay consistent); their signed sum is **0**. Think **C-N-N**: **C**harge conserved, **N**ode rule, **N**o accumulation.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Statement and Derivation

KCL is a direct consequence of the **continuity equation** for charge. If no charge accumulates at a node, then by definition the net rate of charge entering must equal the net rate leaving. Mathematically:

$$\sum_{k=1}^{n} I_k = 0 \quad \text{(at any node)}$$

where each *I_k* is a signed branch current (entering = + , leaving = −) in **ampere (A)**, and *n* is the number of branches meeting at the node.

Equivalently: **Σ I_in = Σ I_out**, which is the form most often used in DU Admission numerical problems because it avoids sign errors.

#### Concept Comparison Matrix

| Feature | KCL (Current Law) | KVL (Voltage Law) |
|---|---|---|
| Applies to | A **node / junction** | A **closed loop** |
| Physical basis | Conservation of **charge** | Conservation of **energy** |
| Statement | Σ I_k = 0 at a node (A) | Σ V_k = 0 around a loop (V) |
| Variables | Signed currents *I* in **A** | Signed voltage drops *V* in **V** |
| Typical trap | Mixing signs of currents | Forgetting the polarity of EMFs |

#### Steps to Apply KCL in a Circuit

1. **Identify every node** in the circuit and label them (A, B, C …).
2. **Assign a reference direction** to each branch current with an arrow.
3. **Write Σ I_in = Σ I_out** at each node (or Σ I_signed = 0).
4. Combine with **KVL equations** for independent loops to solve unknown currents.
5. A negative answer simply means the actual direction is opposite to the assumed arrow.

#### 🎯 Exam-Level Worked Problem

**Question:** Three branches meet at node X. Current I₁ = 4 A enters, I₂ = 7 A enters, and I₃ leaves the node. Current I₄ = 3 A also enters from a fourth branch. **(a)** Write the KCL equation at node X. **(b)** Find the magnitude of I₃.

#### Solution:
- **(a)** Apply Σ I_in = Σ I_out:
  $$I_1 + I_2 + I_4 = I_3$$
- **(b)** Substitute the values (all in ampere):
  $$4\,\text{A} + 7\,\text{A} + 3\,\text{A} = I_3 \;\Rightarrow\; I_3 = 14\,\text{A}$$

The 14 A leaves node X, which is consistent because more current is being funnelled in (14 A total in) than is leaving through any single earlier branch.

> ⚠️ **Examiner Trap:** Many students write Σ I = 0 around a *loop* instead of at a *node*. Loop equations belong to **KVL**, not KCL. Also, do **not** drop a branch when several currents share a node — every wire touching the junction must appear in the sum, including current-source branches.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Boundary Conditions and Limits

KCL holds **instantaneously** for any lumped circuit, including AC networks with time-varying currents. It breaks down only in **distributed elements** (transmission lines, waveguides) where the node approximation fails because charge can spread along the conductor.

| Condition | Does KCL hold? | Reason |
|---|---|---|
| DC steady state | ✅ Yes | Charge does not accumulate at nodes |
| AC sinusoidal steady state | ✅ Yes | Averaged charge still conserved |
| Transient switching | ✅ Yes | Continuity equation remains valid |
| Distributed / wave regime | ❌ No | Node lumped-element model breaks down |

#### Common Advanced Traps

1. **Supernode analysis:** When a voltage source sits between two nodes, treat them as one supernode and apply KCL to the combined boundary — internal current of the source is unknown.
2. **Floating nodes / open circuits:** A node with only one attached branch forces that branch current to zero; KCL then demands the branch carries no charge.
3. **Current sources:** A branch containing an ideal current source *must* still appear in the KCL sum — its value is fixed by the source, not by Ohm's law.
4. **Sign-convention drift:** Switching the assumed direction of one branch mid-problem invalidates the equations of every node that touches it.

#### Connections to Adjacent Topics

- **KVL (Kirchhoff's Voltage Law):** Together with KCL, KVL generates a solvable **2b** linear system for a planar circuit with *b* branches and *n* nodes, where the number of independent KVL equations is *b − n + 1*.
- **Nodal analysis:** A systematic method that writes KCL directly in terms of node voltages; reduces to solving linear equations of the form **G·V = I**, where **G** is the conductance matrix (S).
- **Charge conservation (continuity equation):** The Maxwell-equation parent of KCL — ∂ρ/∂t + ∇·**J** = 0 — collapses to KCL under the lumped-circuit assumption.

#### Advanced Practice Prompts

1. A node has five branches with currents +3 A, −5 A, +8 A, −2 A, and an unknown *I₅*. Apply Σ I = 0 to find *I₅* and state whether it enters or leaves the node.
2. In a two-node circuit with a 10 V source and resistors R₁ = 2 Ω and R₂ = 3 Ω in parallel branches, set up two KCL equations and solve for the branch currents using node voltages.

---

## Continue your study

- **[View this topic in your DU Admission (Bangladesh) roadmap](/roadmap/?exam=du-ad&duration=1mo)** — see where "Kirchhoff's Current Law (KCL)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=du-ad&duration=1d)** — 1-day sprint covering highest-weight topics
- **[DU Admission (Bangladesh) exam overview](/exams/du-ad/)** — pattern, eligibility, and syllabus
- **[All Science notes](/notes/du-ad/science/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
