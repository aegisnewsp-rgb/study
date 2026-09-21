---
exam: ncea-level-2
examName: NCEA Level 2 (Mathematics)
subject: mathematics-l2
subjectName: Mathematics
topic: mathl2-005
topicName: "Apply network methods in solving problems (91260)"
weight: 2
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply network methods in solving problems (91260) — NCEA Level 2 Mathematics Notes

Achievement Standard 91260 is a small internal standard (2 credits) that introduces graph theory. It covers vertices, edges, paths, cycles, trees, spanning trees, the shortest path problem, and the minimum connector problem. The content is unusual at NCEA Level 2 because most of the curriculum is continuous mathematics, but graph theory appears in algorithms, computer science and operations research, and NZQA treats it as a discrete-mathematics strand of the Mathematics subject.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **2 credits**, internally assessed by the school, NZQA moderated.
- Topics: vertices (nodes), edges (links), paths, cycles, trees, spanning trees, Eulerian and Hamiltonian concepts at Level 2, shortest path (Dijkstra's algorithm), minimum connector (Prim's algorithm or Kruskal's algorithm).
- **Merit** requires relational thinking — selecting the right algorithm for the problem.
- **Excellence** requires extended abstract thinking — justifying algorithm choice, generalising the conditions under which an algorithm works.

#### Examiner traps

- Confusing Eulerian (every edge visited exactly once) and Hamiltonian (every vertex visited exactly once).
- Trying to find a spanning tree on a disconnected graph — a spanning tree exists only if the graph is connected.
- Sign errors in Dijkstra's algorithm when comparing tentative distances.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Graph vocabulary

A **graph** is a set of vertices connected by edges. Two vertices are **adjacent** if they share an edge. The **degree** of a vertex is the number of edges incident to it.

A **path** is a sequence of vertices connected by edges, with no vertex repeated. A **cycle** is a closed path (the start and end vertices are the same). A **tree** is a connected graph with no cycles. A **spanning tree** is a subgraph that includes all the vertices and is a tree (i.e., a connected acyclic subgraph with n − 1 edges for n vertices).

#### Eulerian and Hamiltonian concepts

- An **Eulerian path** visits every edge exactly once. An **Eulerian circuit** is a closed Eulerian path.
- A connected graph has an Eulerian circuit if and only if every vertex has even degree.
- A connected graph has an Eulerian path (but not a circuit) if and only if exactly two vertices have odd degree (these are the start and end of the path).
- A **Hamiltonian path** visits every vertex exactly once. A **Hamiltonian circuit** is a closed Hamiltonian path.
- At Level 2, students need to recognise Eulerian and Hamiltonian properties; the full theory of necessary and sufficient conditions for Hamiltonian paths is beyond the syllabus.

#### Shortest path problem

Given a weighted graph, find the path from one vertex to another with the smallest total weight. **Dijkstra's algorithm** is the standard method:

1. Mark the start vertex with distance 0; mark all other vertices with distance infinity.
2. Visit the unvisited vertex with the smallest tentative distance; mark it visited.
3. For each unvisited neighbour, calculate the tentative distance via this vertex; update if smaller than the current tentative.
4. Repeat until the target is marked visited, or all reachable vertices are visited.

#### Minimum connector problem

Given a weighted connected graph, find the spanning tree with the smallest total weight. **Prim's algorithm** (grow a tree from one vertex) and **Kruskal's algorithm** (sort edges by weight and add if no cycle forms) are the standard methods. At Level 2, students need to recognise and apply either method.

#### Worked example: shortest path

Consider a graph with vertices A, B, C, D, E and weighted edges as given. Find the shortest path from A to E using Dijkstra's algorithm:

- A: distance 0 (visited).
- Update neighbours: B → 4, C → 2.
- Visit C (smallest unvisited). Update neighbours: D → 2 + 5 = 7, E → 2 + 10 = 12.
- Visit B (smallest unvisited). Update neighbours: D → min(7, 4 + 3) = 7.
- Visit D (smallest unvisited). Update neighbours: E → min(12, 7 + 1) = 8.
- Visit E. Shortest distance A → E is 8 via C → D → E.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why spanning trees exist only on connected graphs

A spanning tree requires every vertex to be included. If the graph is disconnected, no subgraph can include vertices from two separate components (because there are no edges between components to use). So a spanning tree exists iff the graph is connected.

A connected graph with n vertices has exactly n − 1 edges in any spanning tree (any fewer disconnects it; any more creates a cycle).

#### Algorithm choice

For the shortest path problem:

- **Dijkstra's** works when all weights are non-negative.
- **Bellman-Ford** works when negative weights are allowed but no negative cycles (beyond Level 2).

For the minimum connector problem:

- **Prim's** and **Kruskal's** both work for any connected weighted graph and give the same total weight.
- Prim's is usually faster in dense graphs (many edges); Kruskal's is usually faster in sparse graphs (few edges).

#### Common misconceptions (and the correction)

- "Eulerian and Hamiltonian are the same." No — Eulerian visits every edge once; Hamiltonian visits every vertex once.
- "All graphs have spanning trees." Only connected graphs do.
- "Dijkstra's algorithm always finds the shortest path." Only when all weights are non-negative.
- "Minimum spanning tree is unique." It can be unique or not; both Prim's and Kruskal's will return one if multiple MSTs exist.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91260 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 2 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics. Awarding body: NZQA.*
