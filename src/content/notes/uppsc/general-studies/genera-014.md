---
exam: uppsc
examName: UPPSC RO/ARO
subject: general-studies
subjectName: "General-Studies"
topic: genera-014
topicName: Hardware & the CPU
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# Hardware & the CPU

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Computer Fundamentals tests the building blocks of digital systems that a **Reviewing Officer (RO)** or **Assistant Reviewing Officer (ARO)** must handle in revenue court record digitisation, e-office files, and e-governance portals. The minimum a candidate must carry to the hall:

- **Von Neumann Architecture**: a stored-program model where data and instructions share the same memory and travel over a common system bus to the **CPU** (ALU + CU + Registers).
- **Memory hierarchy by speed**: Registers > Cache > **RAM** (volatile) > **ROM** (non-volatile) > Secondary storage (HDD/SSD).
- **Unit conversions** (binary, not decimal): **1 KB = 1024 B, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB**, and **1 Byte = 8 bits**.
- **Encoding**: ASCII = 7-bit (128 chars), Extended ASCII = 8-bit (256), Unicode = up to 32-bit (UTF-8/16/32) — relevant when digitising Hindi/English court records.
- **Five generations**: Vacuum Tube → Transistor → IC → Microprocessor → AI.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Hardware & the CPU
A computer is the IPO cycle — **Input → Process → Output** — with storage on the side. The **CPU** contains the **Arithmetic Logic Unit (ALU)** for arithmetic and comparison, the **Control Unit (CU)** that fetches-decodes-executes instructions using the program counter and instruction register, and a small set of high-speed **registers**. **Primary memory** is split into volatile **RAM** (DRAM, SRAM) and non-volatile **ROM** variants — PROM, EPROM, EEPROM. **Cache memory** (L1/L2/L3) sits between CPU and RAM to hide latency. **Secondary memory** (magnetic HDD, solid-state SSD, optical CD/DVD/Blu-ray) is non-volatile bulk storage. **Storage capacity = number of locations × word size (in bits)**.

#### Software Layers
**System software** includes the **Operating System** (Windows, Linux, Ubuntu), device drivers, and language translators: **Assembler** (mnemonics → machine code), **Interpreter** (line-by-line execution, e.g. early Python), and **Compiler** (whole program → object code, e.g. gcc). **Application software** is what an RO actually uses daily — MS Word for orders, Excel for land-roster tables, Tally for accounts, browsers for the **UP e-District, Bhulekh, and Kisan Kalyan** portals.

#### Data Representation
All digital data reduces to bits. Text uses **ASCII** (7-bit, 128 characters, English-centric) or **Unicode** (UTF-8 is dominant on the web). Images are grids of **pixels** with bit-depth (8-bit = 256 shades); audio is **sampled** at frequencies like 44.1 kHz; video is sequential frames. **Number systems** — binary (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16) — interconvert for IP addresses, MAC addresses, and colour codes.

#### Networks & the Internet
**LAN** covers a building, **MAN** a city (often used by municipal networks), **WAN** a country/global (the Internet itself). The **OSI 7-layer model** (Physical, Data Link, Network, Transport, Session, Presentation, Application) and the **TCP/IP 4-layer model** govern how packets travel. A unique **IP address** in IPv4 is 32 bits (≈4.3 × 10⁹ addresses); IPv6 expands to 128 bits. **HTTP** vs **HTTPS** (TLS-encrypted) and **DNS** translate names to IPs. A **firewall** filters traffic, a **router** forwards packets between networks, a **gateway** translates protocols.

#### Typical UPPSC RO/ARO Question Patterns
- Match the generation with the underlying technology.
- Convert a decimal number to binary/hex or vice-versa.
- Identify the smallest/largest storage unit in a list.
- One-liner on full forms: HTTP, HTTPS, URL, SMTP, POP3, PDF, HTML.
- Function of component: ALU vs CU, RAM vs ROM, Compiler vs Interpreter.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Generations of Computers in Depth
**1st Generation (1940s–50s)**: vacuum tubes, magnetic drum memory, machine/assembly language, ENIAC and UNIVAC. **2nd Generation (1955–65)**: transistors replaced tubes; magnetic core memory; languages like COBOL and FORTRAN. **3rd Generation (1965–71)**: **Integrated Circuits (ICs)** packed many transistors on a silicon chip; OS concepts emerged. **4th Generation (1971–present)**: **microprocessors** (Intel 4004 in 1971, then 8086, 8088 powering the original IBM PC) and VLSI; GUI interfaces (Mac, Windows). **5th Generation (ongoing)**: AI, parallel processing, natural-language interfaces, and quantum experiments.

#### Boolean Logic & Digital Building Blocks
Every digital circuit is built from three primitives: **AND** (output 1 only if all inputs are 1), **OR** (output 1 if any input is 1), **NOT** (inverter). Combinations produce NAND, NOR, XOR, XNOR — the universal gates NAND and NOR can implement any Boolean expression. The **sum-of-products** and **Karnaugh-map** methods minimise logic before hardware realisation. This matters for understanding how **memory chips, ALUs, and CPU flags** are physically constructed.

#### Database & Office Automation
**DBMS** (e.g. MySQL, PostgreSQL, Oracle) manages structured records using **SQL**. **RDBMS** adds relations and the **primary key–foreign key** linkage; normalisation (1NF, 2NF, 3NF) removes redundancy. In an RO/ARO workflow, the **Bhulekh / Khasra / Khatauni** registers and the **e-Court / e-Office** systems are essentially relational backends. Office suites break down into word-processing, **spreadsheet** (formulas, cell references like `$A$1`), **presentation software** (slide masters, transitions), and DBMS front-ends.

#### Cyber Security & E-Governance
**Malware** categories: virus, worm, trojan, ransomware, spyware, adware. **Phishing** mimics legitimate sites to steal credentials. Defences include **firewalls, antivirus, multi-factor authentication, encryption** (symmetric AES, asymmetric RSA). **Digital India** pillars — Digital Infrastructure as a Core Utility, Governance & Services on Demand, Digital Empowerment — rest on Aadhaar, DigiLocker, UMANG, and **CSC (Common Service Centres)**. RO/ARO officers handle **DigiLocker-verified land records** and **e-signed notices** daily.

#### Common Mistakes
- Treating **1 KB = 1000 bytes** (that's SI; binary = 1024).
- Confusing **bit** with **baud** (symbols vs bits per second).
- Calling **HTTP** "secure" — only **HTTPS** is encrypted.
- Saying the **CU performs calculations** — the ALU does; the CU controls flow.

#### Practice Prompts
1. Convert the decimal number **172** to binary and hexadecimal. *(Answer: 10101100₂ = AC₁₆.)*
2. A hard disk has **4 platters, 8192 tracks per surface, 256 sectors per track, 512 bytes per sector**. Calculate total capacity. *(Answer: 4 × 2 × 8192 × 256 × 512 = 8,589,934,592 bytes ≈ 8 GB.)*

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
