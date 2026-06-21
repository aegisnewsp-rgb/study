---




exam: nat-i
examName: NAT-I (NTS)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sub-10
topicName: "Computer Science: Programming Basics"
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.142336"
lastUpdated: "2026-06-21"
diagramPrompt: "Educational diagram illustrating Computer Science: Programming Basics with clear labels, white background, exam-style illustration"




---

# Computer Science: Programming Basics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Programming basics** is the discipline of converting a problem into an ordered set of machine-executable instructions. The pipeline moves from **problem analysis → algorithm → flowchart/pseudocode → source code → translation → testing**. Three **control structures** govern every program: **sequence**, **selection** (`if/else`, `switch`), and **iteration** (`while`, `do-while`, `for`). A **compiler** translates the whole source file into object code; an **interpreter** executes it line by line. **Variables** store typed data (primitive types: `int`, `float`, `char`, `boolean`; non-primitive: `string`, `array`), and **operators** — arithmetic, relational, logical, assignment — combine them into **expressions**. Watch the **= vs ==** trap and **integer-division truncation** (e.g., `7/2 = 3`). Errors split into **syntax**, **runtime**, and **logical** — syntax is caught at compile time, runtime crashes mid-execution, logical produces wrong answers silently.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Algorithm Representation
An **algorithm** is a finite, ordered, unambiguous set of steps that solves a problem. Before writing code, NAT-I expects you to read two representations:

- **Pseudocode** — language-agnostic text using keywords like `INPUT`, `OUTPUT`, `IF … THEN … ELSE`, `WHILE`, `ENDWHILE`.
- **Flowchart** — geometric symbols governed by **ANSI/ISO standard shapes**:

| Symbol | Shape | Meaning |
|---|---|---|
| Oval / pill (terminator) | ⬭ | Start / Stop |
| Parallelogram | ▱ | Input / Output |
| Rectangle | ▭ | Process / Assignment |
| Diamond | ◇ | Decision (Yes/No branch) |
| Arrow (flowline) | → | Sequence of execution |

#### Control Structures
Every flowcharts reduces to three patterns:
1. **Sequence** — statements execute top-to-bottom.
2. **Selection** — `if (condition) … else …` picks a branch; `switch` dispatches on discrete values.
3. **Iteration** — `for` (counted), `while` (pre-test), `do-while` (post-test; runs at least once).

#### Data, Variables, Operators
A **variable** is a named memory cell bound to a **data type**. **Naming rules**: must begin with a letter or `_`, no spaces, no reserved keyword. **Operators** have fixed precedence — arithmetic > relational > logical > assignment; parentheses override. `&&` (AND), `||` (OR), `!` (NOT) return booleans.

#### Translation Phases
**Source code → Lexical analysis → Syntax analysis → Semantic analysis → Code generation → Object code → Linking → Executable.** An **assembler** translates assembly; an **interpreter** skips object-code production and runs statements directly (slower start, easier debugging).

#### Errors and the SDLC
**Syntax errors** are flagged at compile time. **Runtime errors** (divide-by-zero, index out of bounds) crash mid-execution. **Logical errors** compile and run cleanly but yield wrong output — the hardest to catch. The **Software Development Life Cycle (SDLC)** spans planning, design, coding, testing, deployment, and maintenance; **debugging** sits inside the testing phase.

NAT-I MCQs typically ask you to identify the flowchart symbol for I/O, predict loop output, or spot the operator-precedence mistake.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Pre/Post-Increment Edge Case
`++i` increments then returns the new value; `i++` returns the old value then increments. In `int x = 5; printf("%d", x++);` the output is `5`, but `x` afterwards is `6`. Examiners test this inside expressions like `a = ++i + i++;`, where order matters.

#### Off-by-One and Loop Boundary
A loop `for (i = 0; i < n; i++)` runs exactly **n** times with indices `0…n−1`. Writing `i <= n` adds one extra iteration — the classic **off-by-one** bug. Reverse iteration `for (i = n-1; i >= 0; i--)` requires careful unsigned-vs-signed handling in C/C++.

#### Arrays and Strings
An **array** stores homogeneous elements at contiguous indices `0` to `length−1`. Accessing `arr[n]` is **undefined behavior** — caught as `ArrayIndexOutOfBoundsException` in Java or a segfault in C. **String concatenation** (`s1 + s2`) allocates new memory; **indexing** (`s.charAt(i)`) is O(1).

#### Modular Programming
**Functions** isolate reusable logic, accept **parameters**, and **return** values. **Pass-by-value** copies the argument; **pass-by-reference** hands the original variable. A **void** function returns nothing. Recursion replaces iteration when a problem has self-similar substructure.

#### Worked Micro-Example
Trace `int a = 7, b = 2; float c = a / b;`  
- Integer division: `a / b = 3` (truncated).  
- Implicit cast to `float` stores `3.0`, not `3.5`.  
- Correct form: `float c = (float)a / b;` → `3.5`.

#### Common Traps in NAT-I
- Confusing `=` (assignment, returns assigned value) with `==` (equality check).
- Skipping parentheses around mixed `&&` / `||`, so `a > b || a < c && d` parses as `a > b || (a < c && d)`.
- Forgetting to update the loop variable, producing an infinite loop.
- Dividing by zero at runtime — not a syntax error.

#### Practice Prompts
1. Given the pseudocode `i = 1; WHILE i < 10: i = i*2; PRINT i`, predict the output.
2. Identify which flowchart symbol denotes a decision and what the two outgoing arrows represent.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
