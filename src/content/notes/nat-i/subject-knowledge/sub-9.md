---




exam: nat-i
examName: NAT-I (NTS)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sub-9
topicName: "Computer Science: Fundamentals"
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.141964"
lastUpdated: "2026-07-24"
diagramPrompt: "Educational diagram illustrating Computer Science: Fundamentals with clear labels, white background, exam-style illustration"




---

# Computer Science: Fundamentals

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NAT-I exam.

**Computer Science Fundamentals** for NAT-I tests factual recall of how computers store, process, and transmit data. The five highest-yield areas are **number systems**, **hardware organisation**, **software types**, **networking basics**, and **data representation**.

| Must-Know Fact | Value |
| --- | --- |
| 1 byte | 8 bits |
| 1 KB (binary) | 1024 bytes |
| IPv4 address length | 32 bits (e.g. 192.168.1.1) |
| ASCII character size | 1 byte per character |

- **CPU** = ALU + Control Unit + Registers; executes instructions.
- **RAM is volatile**, ROM is non-volatile — a classic MCQ trap.
- **Compiler** translates the whole program first; **interpreter** translates line-by-line.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before NAT-I.

#### Number System Conversions

Conversions between Decimal, Binary, Octal, and Hexadecimal appear almost every testing cycle. The rule for decimal-to-binary is: **divide by 2 repeatedly and read remainders bottom-up**. For hex, divide by 16. Hex-to-binary requires **padding each hex digit to exactly 4 bits** (e.g. `A3`₁₆ = `1010 0011`₂) — a frequent source of off-by-one mistakes.

#### Hardware and Software Layers

The **CPU** contains the **ALU** (arithmetic/logic operations), the **Control Unit** (fetches and decodes instructions), and **Registers** (fastest on-chip memory). Primary memory splits into **RAM** (volatile, loses data on power-off) and **ROM** (non-volatile, holds boot firmware). **System software** (operating systems, compilers, device drivers) manages hardware, whereas **application software** performs user-facing tasks such as word processing.

| Layer | Examples | Role |
| --- | --- | --- |
| Hardware | CPU, RAM, Hard disk | Physical components |
| System software | Windows, Linux, Compiler | Manages hardware |
| Application software | MS Word, Chrome | End-user tasks |

#### Programming Language Generations

Languages progress from **1GL (machine code)** through **3GL (C, Java — procedural/structured)** to **5GL (Prolog — natural-language-like)**. Each generation trades control for abstraction.

- **Algorithm representation** uses flowcharts (oval = start/end, rectangle = process, diamond = decision) or pseudocode.
- **Database** systems rely on a **primary key** for unique rows and a **foreign key** to reference another table.
- **Network topologies**: star (central hub), bus (single backbone), ring (closed loop), mesh (every node connected).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students with a longer runway before the test.

#### Storage and Data Representation

Every unit scales by a factor of 1024 in binary interpretation: **1 KB = 1024 B, 1 MB = 1024 KB, 1 GB = 1024 MB**. Storage questions often test whether a 1 MB file of plain ASCII text contains exactly **1,048,576 characters** (because each ASCII char = 1 byte). Unicode UTF-8 characters, by contrast, occupy **1 to 4 bytes** — a key distinction when calculating file size.

#### Networks and the Internet

An **IP address** is a logical address assigned by software; the **MAC address** is the hardware identifier burned into the NIC. The URL `https://www.nts.org.pk/results` breaks down into **scheme (https) → subdomain (www) → domain (nts.org.pk) → path (/results)**. **DNS** translates domain names to IP addresses, while **HTTP/HTTPS** governs request-response communication, with HTTPS adding TLS encryption.

#### Cyber Safety and Common Malware

| Malware Type | Behaviour | Spread Method |
| --- | --- | --- |
| Virus | Attaches to a host file | Requires user action |
| Worm | Self-replicating | Spreads across networks |
| Trojan | Disguised as legitimate software | Social engineering |
| Ransomware | Encrypts files for payment | Phishing emails |

#### Practice Prompts

1. Convert the decimal number **173** into binary and hexadecimal, then convert `7F`₁₆ back into binary and decimal.
2. A 512 MB flash drive holds ASCII text files of exactly 1 MB each. How many files can it store, and what is the equivalent capacity in bytes?

> **Exam Tip:** NAT-I rarely asks code-writing. Focus on recognising definitions, distinguishing look-alike pairs (RAM/ROM, Compiler/Interpreter, IP/MAC), and converting between bases without arithmetic slips.

---

## Continue your study

- **[View this topic in your NAT-I (NTS) roadmap](/roadmap/?exam=nat-i&duration=1mo)** — see where "Computer Science: Fundamentals" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nat-i&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NAT-I (NTS) exam overview](/exams/nat-i/)** — pattern, eligibility, and syllabus
- **[All Subject Knowledge notes](/notes/nat-i/subject-knowledge/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
