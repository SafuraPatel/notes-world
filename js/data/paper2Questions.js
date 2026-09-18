/**
 * PAPER 2 COMPUTER SCIENCE PREVIOUS YEAR QUESTIONS (PYQs)
 * Authentic questions from UGC NET and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, etc.)
 * Organized unit-wise across all 10 units of Paper 2 (CS Code 87).
 * Includes complete 4-option breakdown explanations for every question.
 */

export const paper2Questions = [
  // =========================================================================
  // UNIT 1: DISCRETE STRUCTURES & OPTIMIZATION (p2-u1)
  // =========================================================================
  {
    id: "p2-u1-q1",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures & Optimization",
    examSource: "UGC NET Dec 2023",
    question: "In an undirected graph G with V vertices and E edges, the Handshaking Lemma states that the sum of degrees of all vertices equals 2E. As a direct consequence, the number of vertices with ODD degree must always be:",
    options: [
      { id: "A", text: "Zero" },
      { id: "B", text: "An ODD number" },
      { id: "C", text: "An EVEN number" },
      { id: "D", text: "Equal to E/2" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Zero: While bipartite or regular even graphs may have zero odd vertices, it is not universally true for all graphs.",
      "B": "An ODD number: Mathematically impossible; if the sum of odd degrees is odd, adding to even degrees would yield an odd total, violating 2E.",
      "C": "An EVEN number: Correct! Since ∑ deg(v) = 2E (which is always an even number), the sum of degrees of odd-degree vertices must be even. Therefore, the number of odd-degree vertices must be EVEN.",
      "D": "Equal to E/2: No such algebraic relationship holds in graph theory."
    },
    summaryExplanation: "∑ deg(v) = 2|E|. Since the total sum is even, any contribution from odd-degree vertices must occur in pairs (i.e. an even count)."
  },
  {
    id: "p2-u1-q2",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures & Optimization",
    examSource: "MH-SET 2024",
    question: "A relation R on a non-empty set A is defined as a 'Partial Order Relation' (Poset) if and only if R satisfies which three properties?",
    options: [
      { id: "A", text: "Reflexive, Symmetric, and Transitive" },
      { id: "B", text: "Reflexive, Antisymmetric, and Transitive" },
      { id: "C", text: "Irreflexive, Symmetric, and Transitive" },
      { id: "D", text: "Reflexive, Asymmetric, and Non-transitive" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Reflexive, Symmetric, Transitive: Defines an Equivalence Relation, not a Partial Order.",
      "B": "Reflexive, Antisymmetric, Transitive: Correct! A Partially Ordered Set (Poset) requires: 1. aRa (Reflexive), 2. aRb and bRa ⟹ a=b (Antisymmetric), 3. aRb and bRc ⟹ aRc (Transitive).",
      "C": "Irreflexive, Symmetric, Transitive: Incompatible set of conditions; cannot form a poset.",
      "D": "Reflexive, Asymmetric: Asymmetry is incompatible with reflexivity (asymmetric implies irreflexive)."
    },
    summaryExplanation: "Poset = Reflexive + Antisymmetric + Transitive (represented visually by Hasse Diagrams)."
  },

  // =========================================================================
  // UNIT 2: COMPUTER SYSTEM ARCHITECTURE (p2-u2)
  // =========================================================================
  {
    id: "p2-u2-q1",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET June 2024",
    question: "In a 5-stage instruction pipeline without branch prediction, when a conditional branch instruction is executed and the branch is taken, what is the resulting pipeline issue commonly called?",
    options: [
      { id: "A", text: "Structural Hazard" },
      { id: "B", text: "Data Hazard (RAW)" },
      { id: "C", text: "Control / Branch Hazard" },
      { id: "D", text: "Wired Hazard" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Structural Hazard: Occurs when hardware resource conflicts arise (e.g. single memory port accessed by instruction fetch and data read simultaneously).",
      "B": "Data Hazard: Occurs when an instruction depends on the result of a previous instruction that is still in the pipeline (RAW, WAR, WAW).",
      "C": "Control / Branch Hazard: Correct! Arises from the delay in determining the outcome of a branch/jump instruction, necessitating pipeline flushes or stalls.",
      "D": "Wired Hazard: Not a standard computer architecture hazard."
    },
    summaryExplanation: "Branch instructions alter the Program Counter (PC), causing Control Hazards (resolved by delayed branch, branch prediction, or stalls)."
  },
  {
    id: "p2-u2-q2",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "WB-SET 2023",
    question: "Which addressing mode specifies the memory address of the operand directly inside a CPU register, so that the instruction holds only the register name?",
    options: [
      { id: "A", text: "Immediate Addressing Mode" },
      { id: "B", text: "Register Direct Addressing Mode" },
      { id: "C", text: "Register Indirect Addressing Mode" },
      { id: "D", text: "Indexed Addressing Mode" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Immediate Addressing: The operand value itself is part of the instruction (e.g. MOV R1, #25).",
      "B": "Register Direct: The operand is located inside the register itself (e.g. ADD R1, R2).",
      "C": "Register Indirect: Correct! The register contains the effective memory address where the operand is stored in RAM (e.g. MOV A, @R0).",
      "D": "Indexed Addressing: Effective address = Content of index register + base displacement offset."
    },
    summaryExplanation: "In Register Indirect, the register acts as a pointer storing the memory address of the operand."
  },

  // =========================================================================
  // UNIT 3: PROGRAMMING LANGUAGES & COMPUTER GRAPHICS (p2-u3)
  // =========================================================================
  {
    id: "p2-u3-q1",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages & Computer Graphics",
    examSource: "MH-SET 2024",
    question: "In 2D Computer Graphics transformations, which coordinate representation allows translation, scaling, and rotation transformations to be expressed uniformly as matrix multiplications?",
    options: [
      { id: "A", text: "Cartesian Coordinates (x, y)" },
      { id: "B", text: "Polar Coordinates (r, θ)" },
      { id: "C", text: "Homogeneous Coordinates (x, y, 1)" },
      { id: "D", text: "Spherical Coordinates (r, θ, φ)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Cartesian Coordinates: Translation requires matrix addition, while rotation and scaling require matrix multiplication (non-uniform).",
      "B": "Polar Coordinates: Useful for radial plots, but complicates general affine transformation composition.",
      "C": "Homogeneous Coordinates: Correct! By adding a dummy coordinate (w=1), affine transformations (including translation) become 3x3 matrix multiplications that can be composed seamlessly.",
      "D": "Spherical Coordinates: Used for 3D orbital representations, not 2D transformation composition."
    },
    summaryExplanation: "Homogeneous coordinates enable all affine transformations (Translation, Rotation, Scaling, Shearing) to be chained via matrix multiplication."
  },

  // =========================================================================
  // UNIT 4: DATABASE MANAGEMENT SYSTEMS (p2-u4)
  // =========================================================================
  {
    id: "p2-u4-q1",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET Dec 2023",
    question: "A relational schema R is in Boyce-Codd Normal Form (BCNF) if and only if for every non-trivial functional dependency X → Y holding on R:",
    options: [
      { id: "A", text: "Y is a Prime Attribute" },
      { id: "B", text: "X is a Super Key" },
      { id: "C", text: "X is a Candidate Key and Y is non-prime" },
      { id: "D", text: "R has no multi-valued dependencies" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Y is a Prime Attribute: This is the relaxed second condition of 3NF (which allows X to not be a super key if Y is prime); BCNF strictly disallows this.",
      "B": "X is a Super Key: Correct! In BCNF, the determinant X MUST be a Super Key for every non-trivial functional dependency X → Y.",
      "C": "X is candidate and Y non-prime: Superfluous and incomplete.",
      "D": "No multi-valued dependencies: Defines 4NF, not BCNF."
    },
    summaryExplanation: "BCNF Rule: Determinant X MUST be a Super Key (3NF allows X is Super Key OR Y is Prime Attribute)."
  },
  {
    id: "p2-u4-q2",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "KSET 2023",
    question: "Which transaction ACID property guarantees that once a database transaction has successfully committed, its updates are permanently recorded on non-volatile disk, surviving system power failures?",
    options: [
      { id: "A", text: "Atomicity" },
      { id: "B", text: "Consistency" },
      { id: "C", text: "Isolation" },
      { id: "D", text: "Durability" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Atomicity: Ensures 'All or Nothing' execution of transactions (managed by transaction log rollback).",
      "B": "Consistency: Ensures that database constraints (foreign keys, domain integrity) are preserved before and after execution.",
      "C": "Isolation: Ensures concurrent transactions execute independently without interference (concurrency control).",
      "D": "Durability: Correct! Guarantees that committed data survives crashes, system restarts, and media failures (managed by Write-Ahead Logging & recovery)."
    },
    summaryExplanation: "ACID: Atomicity (All-or-none), Consistency (Preserves rules), Isolation (Independence), Durability (Survivability of commits)."
  },

  // =========================================================================
  // UNIT 5: SYSTEM SOFTWARE & OPERATING SYSTEM (p2-u5)
  // =========================================================================
  {
    id: "p2-u5-q1",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software & Operating System",
    examSource: "UGC NET June 2024",
    question: "Which of the following conditions is NOT one of Coffman's four necessary and sufficient conditions for a deadlock to occur in a system?",
    options: [
      { id: "A", text: "Mutual Exclusion" },
      { id: "B", text: "Hold and Wait" },
      { id: "C", text: "Preemption of Resources" },
      { id: "D", text: "Circular Wait" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Mutual Exclusion: Condition 1: At least one resource must be held in a non-shareable mode.",
      "B": "Hold and Wait: Condition 2: A process must be holding at least one resource and waiting to acquire additional resources held by others.",
      "C": "Preemption of Resources: Correct! The necessary condition is NO PREEMPTION (resources cannot be forcibly taken away until released voluntarily).",
      "D": "Circular Wait: Condition 4: A closed chain of processes exists where each holds a resource needed by the next."
    },
    summaryExplanation: "Coffman Deadlock Conditions: Mutual Exclusion, Hold and Wait, NO Preemption, and Circular Wait."
  },
  {
    id: "p2-u5-q2",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software & Operating System",
    examSource: "MH-SET 2024",
    question: "Belady's Anomaly refers to the counter-intuitive phenomenon where increasing the number of allocated physical page frames leads to an INCREASE in page faults. It occurs primarily in which page replacement algorithm?",
    options: [
      { id: "A", text: "Least Recently Used (LRU)" },
      { id: "B", text: "First-In First-Out (FIFO)" },
      { id: "C", text: "Optimal Page Replacement (OPT)" },
      { id: "D", text: "Least Frequently Used (LFU)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "LRU: Belongs to the class of 'Stack Algorithms'; mathematically immune to Belady's Anomaly.",
      "B": "FIFO: Correct! First-In First-Out is not a stack algorithm, and allocation of more page frames can paradoxically cause more page faults on certain reference strings.",
      "C": "Optimal (OPT): Also a stack algorithm; theoretically guarantees minimal page faults and never exhibits Belady's Anomaly.",
      "D": "LFU: Suffers from recency decay issues, but standard Belady's Anomaly is the hallmark test case for FIFO."
    },
    summaryExplanation: "Stack algorithms (like LRU and OPT) never exhibit Belady's Anomaly. FIFO suffers from Belady's Anomaly."
  },

  // =========================================================================
  // UNIT 6: SOFTWARE ENGINEERING (p2-u6)
  // =========================================================================
  {
    id: "p2-u6-q1",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "WB-SET 2023",
    question: "In module design, what type of Cohesion is achieved when all tasks executed within a module contribute directly to executing a single, well-defined mathematical or conceptual function (e.g. calculateTax)?",
    options: [
      { id: "A", text: "Coincidental Cohesion" },
      { id: "B", text: "Logical Cohesion" },
      { id: "C", text: "Temporal Cohesion" },
      { id: "D", text: "Functional Cohesion" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Coincidental Cohesion: Worst form; elements have no meaningful relationship except accidental grouping in the same file.",
      "B": "Logical Cohesion: Elements perform logically similar tasks (e.g. all error routines grouped together).",
      "C": "Temporal Cohesion: Elements executed at the same time during startup/shutdown (e.g. system init).",
      "D": "Functional Cohesion: Correct! Best form; all parts of the module focus on performing one single essential function."
    },
    summaryExplanation: "Best Software Design: High Cohesion (Functional Cohesion is highest/best) and Low Coupling (Data Coupling is best)."
  },

  // =========================================================================
  // UNIT 7: DATA STRUCTURES & ALGORITHMS (p2-u7)
  // =========================================================================
  {
    id: "p2-u7-q1",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Structures & Algorithms",
    examSource: "UGC NET Dec 2023",
    question: "What is the worst-case time complexity of searching for an element in an un-balanced Binary Search Tree (BST) containing n elements?",
    options: [
      { id: "A", text: "O(1)" },
      { id: "B", text: "O(log n)" },
      { id: "C", text: "O(n)" },
      { id: "D", text: "O(n log n)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "O(1): Constant time search occurs only in hash tables under ideal uniform hashing.",
      "B": "O(log n): This is the average-case complexity, or the worst-case of balanced search trees (like AVL, Red-Black).",
      "C": "O(n): Correct! In the worst-case, an unbalanced BST can degenerate into a skewed linked list (e.g. elements inserted in sorted order), requiring linear traversal O(n).",
      "D": "O(n log n): Typical complexity of comparison-based sorting algorithms (Merge sort, Heap sort)."
    },
    summaryExplanation: "In a skewed BST, tree height h = n, making worst-case search, insertion, and deletion O(n). Self-balancing trees guarantee O(log n)."
  },
  {
    id: "p2-u7-q2",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Structures & Algorithms",
    examSource: "AP-SET 2024",
    question: "According to the Master Theorem for divide-and-conquer recurrences T(n) = aT(n/b) + f(n), what is the time complexity if T(n) = 2T(n/2) + O(n)?",
    options: [
      { id: "A", text: "O(n)" },
      { id: "B", text: "O(n log n)" },
      { id: "C", text: "O(n^2)" },
      { id: "D", text: "O(log n)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "O(n): Occurs when f(n) dominates strictly (Case 3), e.g. T(n) = T(n/2) + O(n).",
      "B": "O(n log n): Correct! Here a = 2, b = 2. Log_b(a) = log_2(2) = 1. Since f(n) = Θ(n^1), this falls under Master Theorem Case 2: T(n) = Θ(n^(log_b a) * log n) = Θ(n log n) (Merge Sort recurrence).",
      "C": "O(n^2): Occurs when a=4, b=2.",
      "D": "O(log n): Binary search recurrence: T(n) = T(n/2) + O(1)."
    },
    summaryExplanation: "T(n) = 2T(n/2) + n is the canonical recurrence for Merge Sort, yielding O(n log n)."
  },

  // =========================================================================
  // UNIT 8: THEORY OF COMPUTATION & COMPILERS (p2-u8)
  // =========================================================================
  {
    id: "p2-u8-q1",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation & Compilers",
    examSource: "UGC NET June 2024",
    question: "Which of the following formal languages is NOT a Regular language and cannot be recognized by any Finite Automaton?",
    options: [
      { id: "A", text: "L = { w ∈ {0, 1}* | w contains an even number of 1s }" },
      { id: "B", text: "L = { 0^n 1^n | n ≥ 1 }" },
      { id: "C", text: "L = { w ∈ {0, 1}* | w ends with '01' }" },
      { id: "D", text: "L = { w ∈ {0, 1}* | length of w is a multiple of 3 }" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Even number of 1s: Regular; easily recognized by a 2-state DFA tracking parity.",
      "B": "L = { 0^n 1^n | n ≥ 1 }: Correct! Requires matching an arbitrary count of 0s with 1s, which demands unbounded memory (a stack). By Pumping Lemma, it is Context-Free (CFL), NOT regular.",
      "C": "Ends with '01': Regular; recognizable by a 3-state DFA.",
      "D": "Length multiple of 3: Regular; recognizable by a modulo-3 counter DFA."
    },
    summaryExplanation: "Finite Automata possess finite memory and cannot count unbounded matching symbols (0^n 1^n requires a Pushdown Automaton)."
  },

  // =========================================================================
  // UNIT 9: DATA COMMUNICATION & COMPUTER NETWORKS (p2-u9)
  // =========================================================================
  {
    id: "p2-u9-q1",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Communication & Computer Networks",
    examSource: "MH-SET 2024",
    question: "In IPv4 Classless Inter-Domain Routing (CIDR), how many usable host IP addresses are available in a subnet having the prefix mask '/26'?",
    options: [
      { id: "A", text: "64" },
      { id: "B", text: "62" },
      { id: "C", text: "30" },
      { id: "D", text: "126" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "64: Total IP addresses (2^(32-26) = 2^6 = 64), but does not deduct network ID and broadcast address.",
      "B": "62: Correct! In a /26 subnet, host bits h = 32 - 26 = 6. Total addresses = 2^6 = 64. Usable host IPs = 2^h - 2 = 64 - 2 = 62 (first address is Network ID, last is Direct Broadcast).",
      "C": "30: Number of usable hosts in a /27 subnet (32 - 2).",
      "D": "126: Number of usable hosts in a /25 subnet (128 - 2)."
    },
    summaryExplanation: "Formula: Usable Hosts = 2^(32 - prefix) - 2. For /26: 2^6 - 2 = 64 - 2 = 62 usable addresses."
  },

  // =========================================================================
  // UNIT 10: ARTIFICIAL INTELLIGENCE (p2-u10)
  // =========================================================================
  {
    id: "p2-u10-q1",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Artificial Intelligence (AI)",
    examSource: "UGC NET Dec 2023",
    question: "In the A* informed search algorithm, an admissible heuristic function h(n) is defined as one that:",
    options: [
      { id: "A", text: "Always overestimates the true lowest cost to reach the goal state" },
      { id: "B", text: "Never overestimates the true lowest cost to reach the goal state (h(n) ≤ h*(n))" },
      { id: "C", text: "Always returns zero for every state in the search space" },
      { id: "D", text: "Is strictly equal to the backward path cost g(n)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Always overestimates: Overestimation can cause A* to overlook the true shortest path, losing optimality.",
      "B": "Never overestimates: Correct! Admissibility requires h(n) ≤ h*(n) for all nodes n. An admissible heuristic is optimistic, guaranteeing that A* finds the optimal lowest-cost path.",
      "C": "Always zero: If h(n) = 0, A* degrades to Dijkstra's Uniform Cost Search (still optimal, but not the definition of admissibility).",
      "D": "Equal to path cost g(n): No such requirement exists."
    },
    summaryExplanation: "An admissible heuristic never overestimates the actual cost to the goal (optimistic), which guarantees A* is optimal."
  },
  {
    id: "p2-u1-q3",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures & Optimization",
    examSource: "UGC NET Dec 2022",
    question: "According to Euler's formula for any connected planar graph with V vertices, E edges, and R regions (faces), which algebraic relationship strictly holds?",
    options: [
      { id: "A", text: "V + E - R = 2" },
      { id: "B", text: "V - E + R = 2" },
      { id: "C", text: "V - E - R = 2" },
      { id: "D", text: "V + E + R = 2" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "V + E - R = 2: Incorrect signs for edges and regions.",
      "B": "V - E + R = 2: Correct! Euler's Polyhedral Formula for connected planar graphs: Vertices - Edges + Regions = 2 (V - E + R = 2).",
      "C": "V - E - R = 2: Incorrect.",
      "D": "V + E + R = 2: Incorrect."
    },
    summaryExplanation: "Euler's planar graph formula: V - E + R = 2. For non-planar graphs or disconnected components: V - E + R = 1 + k."
  },
  {
    id: "p2-u4-q3",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "MH-SET 2023",
    question: "In transaction concurrency control, which protocol guarantees Conflict Serializability of concurrent execution schedules by disallowing acquisition of new locks once a lock has been released?",
    options: [
      { id: "A", text: "Timestamp Ordering Protocol" },
      { id: "B", text: "Two-Phase Locking (2PL) Protocol" },
      { id: "C", text: "Validation-based Protocol" },
      { id: "D", text: "Graph-based Tree Protocol" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Timestamp Ordering: Uses read/write timestamps rather than locks to enforce serializability in order of transaction birth.",
      "B": "Two-Phase Locking (2PL): Correct! Consists of a Growing Phase (locks acquired, none released) and a Shrinking Phase (locks released, none acquired). Guaranteed conflict serializable.",
      "C": "Validation-based: Optimistic concurrency control using read, validation, and write phases.",
      "D": "Graph-based Protocol: Requires tree-structured directed graph on resources."
    },
    summaryExplanation: "Basic 2PL guarantees Conflict Serializability, but may suffer from deadlocks (preventable via Strict 2PL)."
  },
  {
    id: "p2-u5-q3",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software & Operating System",
    examSource: "UGC NET June 2024",
    question: "In memory management, 'Thrashing' is a catastrophic performance degradation state that occurs when:",
    options: [
      { id: "A", text: "The CPU is 100% busy performing mathematical scientific computations" },
      { id: "B", text: "A process spends significantly more time swapping pages in and out than executing instructions" },
      { id: "C", text: "Multiple processes enter a circular deadlock waiting for I/O disk hardware" },
      { id: "D", text: "Internal fragmentation consumes the entirety of available physical RAM" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "100% busy with computations: This describes high CPU utilization, the exact opposite of thrashing (where CPU utilization drops to near zero).",
      "B": "Excessive page swapping: Correct! Thrashing happens when active working sets exceed physical memory; continuous page faults cause the operating system to spend all time paging in/out.",
      "C": "Deadlock: Deadlock causes processes to freeze, but does not cause continuous thrashing disk head movement.",
      "D": "Internal fragmentation: Unused space inside allocated memory blocks, not the cause of thrashing."
    },
    summaryExplanation: "Thrashing occurs when the sum of working sets exceeds physical frames, driving page fault rate up and CPU utilization to near zero."
  },
  {
    id: "p2-u6-q2",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "WB-SET 2023",
    question: "In software metrics and white-box testing, McCabe's Cyclomatic Complexity V(G) for a control flow graph with E edges, N nodes, and P connected components is calculated as:",
    options: [
      { id: "A", text: "V(G) = E + N - 2P" },
      { id: "B", text: "V(G) = E - N + 2P" },
      { id: "C", text: "V(G) = N - E + 2P" },
      { id: "D", text: "V(G) = E - N + P" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "E + N - 2P: Incorrect formula.",
      "B": "V(G) = E - N + 2P: Correct! For a connected single-program graph (P=1), V(G) = E - N + 2. Alternatively, V(G) = Predicate Nodes + 1 = Number of enclosed bounded regions.",
      "C": "N - E + 2P: Inverted edges and nodes.",
      "D": "E - N + P: Missing multiplier of 2 for connected components."
    },
    summaryExplanation: "McCabe's Cyclomatic Complexity formula: V(G) = E - N + 2P = Predicate Nodes + 1."
  },
  {
    id: "p2-u8-q2",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation & Compilers",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following decision problems is completely UNDECIDABLE according to Alan Turing's fundamental computability theory?",
    options: [
      { id: "A", text: "Emptiness problem for Regular languages (Is L(DFA) = ∅?)" },
      { id: "B", text: "Finiteness problem for Context-Free languages (Is L(CFG) finite?)" },
      { id: "C", text: "Halting problem for Turing Machines (Does TM M halt on input w?)" },
      { id: "D", text: "Equivalence problem for Deterministic Finite Automata (Is L(DFA1) = L(DFA2)?)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "DFA Emptiness: Decidable in polynomial time via reachability graph search from start state to final states.",
      "B": "CFG Finiteness: Decidable by checking for cycles in the grammar's dependency derivation graph.",
      "C": "Turing Machine Halting Problem: Correct! Alan Turing proved in 1936 that no general algorithm can decide whether an arbitrary Turing Machine will eventually halt or loop forever on an input string w (Undecidable / Recursively Enumerable but not Recursive).",
      "D": "DFA Equivalence: Decidable in O(n log n) by constructing the symmetric difference automaton."
    },
    summaryExplanation: "The Halting Problem is the cornerstone undecidable problem in theoretical computer science."
  },
  {
    id: "p2-u9-q2",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Communication & Computer Networks",
    examSource: "AP-SET 2024",
    question: "In the Transmission Control Protocol (TCP), which three-way handshake sequence is exchanged to establish a reliable, full-duplex connection between client and server?",
    options: [
      { id: "A", text: "ACK → SYN → FIN" },
      { id: "B", text: "SYN → SYN-ACK → ACK" },
      { id: "C", text: "SYN → ACK → SYN-ACK" },
      { id: "D", text: "PING → PONG → CONNECT" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "ACK → SYN: Client must initiate with a SYN packet requesting synchronization of initial sequence numbers.",
      "B": "SYN → SYN-ACK → ACK: Correct! 1. Client sends SYN (seq=x), 2. Server replies with SYN-ACK (seq=y, ack=x+1), 3. Client acknowledges with ACK (ack=y+1).",
      "C": "SYN → ACK: Incorrect order; server must send SYN-ACK back.",
      "D": "PING → PONG: ICMP echo protocol, not TCP transport handshake."
    },
    summaryExplanation: "TCP Connection Establishment: Client sends SYN → Server responds SYN-ACK → Client sends ACK."
  },
  {
    id: "p2-u10-q2",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Artificial Intelligence (AI)",
    examSource: "MH-SET 2024",
    question: "In the Alpha-Beta pruning adversarial search algorithm for game-playing, a branch at a Min node is pruned (cutoff) when which mathematical relationship holds?",
    options: [
      { id: "A", text: "Alpha < Beta" },
      { id: "B", text: "Alpha ≥ Beta" },
      { id: "C", text: "Alpha = 0" },
      { id: "D", text: "Beta = ∞" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Alpha < Beta: This is the normal search state where further children must still be explored.",
      "B": "Alpha ≥ Beta: Correct! When the best choice found so far by the Maximizer (α) is greater than or equal to the best choice found by the Minimizer (β), the remaining siblings cannot affect the final outcome and are pruned immediately (Alpha or Beta cutoff).",
      "C": "Alpha = 0: Irrelevant to pruning condition.",
      "D": "Beta = ∞: Initial state of beta at root before exploration."
    },
    summaryExplanation: "Alpha-Beta Pruning Rule: Cut off search whenever α ≥ β (Min cutoff or Max cutoff)."
  }
];

