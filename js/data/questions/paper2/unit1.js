/**
 * PAPER 2 - UNIT 1: DISCRETE STRUCTURES AND OPTIMIZATION (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Every question has complete 4-option explanations.
 */

export const p2Unit1Questions = [
  {
    id: "p2-u1-q1",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET June 2024",
    question: "How many edges are there in a complete undirected graph K_n with n vertices?",
    options: [
      { id: "A", text: "n" },
      { id: "B", text: "n(n - 1) / 2" },
      { id: "C", text: "n(n - 1)" },
      { id: "D", text: "2^n - 1" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "n: Number of edges in a simple cycle C_n.",
      "B": "n(n - 1) / 2: Correct! In a complete graph K_n, each of the n vertices connects to every other (n - 1) vertex. Since each undirected edge is counted twice, total edges = C(n, 2) = n(n - 1) / 2.",
      "C": "n(n - 1): Number of directed edges in a complete directed graph with no self-loops.",
      "D": "2^n - 1: Number of non-empty subsets in a power set."
    },
    summaryExplanation: "In a complete graph K_n, every pair of distinct vertices is connected by an edge: Total edges = n(n - 1) / 2."
  },
  {
    id: "p2-u1-q2",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "MH-SET 2024",
    question: "A relation R on a set A is an 'Equivalence Relation' if and only if R satisfies which three properties?",
    options: [
      { id: "A", text: "Reflexive, Symmetric, and Transitive" },
      { id: "B", text: "Reflexive, Anti-symmetric, and Transitive" },
      { id: "C", text: "Irreflexive, Symmetric, and Asymmetric" },
      { id: "D", text: "Symmetric, Anti-symmetric, and Equilateral" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Reflexive, Symmetric, Transitive: Correct! These three conditions define an equivalence relation, partitioning the set into disjoint equivalence classes.",
      "B": "Reflexive, Anti-symmetric, Transitive: Defines a Partial Order Relation (Poset).",
      "C": "Irreflexive...: Incompatible combination.",
      "D": "Equilateral: Geometric property, meaningless in relation algebra."
    },
    summaryExplanation: "Equivalence relations require Reflexivity (aRa), Symmetry (aRb ⇒ bRa), and Transitivity (aRb ∧ bRc ⇒ aRc)."
  },
  {
    id: "p2-u1-q3",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET Dec 2023",
    question: "According to Euler's Formula for connected planar graphs, if V is the number of vertices, E is the number of edges, and R is the number of bounded and unbounded regions (faces), which equation holds true?",
    options: [
      { id: "A", text: "V - E + R = 2" },
      { id: "B", text: "V + E - R = 2" },
      { id: "C", text: "V - E - R = 2" },
      { id: "D", text: "V + E + R = 2" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "V - E + R = 2: Correct! Leonhard Euler's fundamental planar graph invariant states that V - E + R = 2 (or V - E + F = 2).",
      "B": "V + E - R = 2: Sign error.",
      "C": "V - E - R = 2: Sign error.",
      "D": "V + E + R = 2: Sign error."
    },
    summaryExplanation: "Euler's planar formula states: V - E + R = 2 for any connected planar graph."
  },
  {
    id: "p2-u1-q4",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "WB-SET 2023",
    question: "In Linear Programming Problem (LPP), if the primal problem is a Maximization problem with '≤' type constraints, its Dual problem will be a:",
    options: [
      { id: "A", text: "Maximization problem with '≤' constraints" },
      { id: "B", text: "Minimization problem with '≥' constraints" },
      { id: "C", text: "Minimization problem with '=' constraints" },
      { id: "D", text: "Unbounded problem with zero variables" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Dual of Max is Min, not Max.",
      "B": "Minimization with '≥': Correct! Primal Max (c^T x, Ax ≤ b) dualizes into Min (b^T y, A^T y ≥ c, y ≥ 0).",
      "C": "Equalities arise only when primal variables are unrestricted in sign.",
      "D": "Unbounded: Duality theorem guarantees duality correspondence."
    },
    summaryExplanation: "The dual of a standard Primal Max (Ax ≤ b) is a Dual Min (A^T y ≥ c)."
  },
  {
    id: "p2-u1-q5",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "KSET 2023",
    question: "How many non-trivial proper subgroups does a cyclic group of prime order p have?",
    options: [
      { id: "A", text: "0 (Zero)" },
      { id: "B", text: "1" },
      { id: "C", text: "p - 1" },
      { id: "D", text: "p" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "0 (Zero): Correct! By Lagrange's Theorem, the order of any subgroup must divide the order of the group. Since p is prime, its only divisors are 1 and p; hence it has no proper non-trivial subgroups.",
      "B": "1: Divisors of p are only 1 and p.",
      "C": "p - 1: Number of generators in the cyclic group.",
      "D": "p: Order of the group."
    },
    summaryExplanation: "By Lagrange's theorem, groups of prime order p have no proper non-trivial subgroups."
  },
  {
    id: "p2-u1-q6",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "AP-SET 2024",
    question: "What is the chromatic number χ(G) of any bipartite graph G containing at least one edge?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "4" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "1: Only a graph with 0 edges (null graph) is 1-colorable.",
      "B": "2: Correct! A graph is bipartite if and only if its vertex set can be partitioned into two independent sets, colorable using exactly 2 colors.",
      "C": "3: Odd cycles require 3 colors and are not bipartite.",
      "D": "4: Upper bound for planar graphs (Four Color Theorem)."
    },
    summaryExplanation: "Every non-empty bipartite graph has a chromatic number of exactly 2."
  },
  {
    id: "p2-u1-q7",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET Dec 2022",
    question: "What is the maximum number of edges in a planar simple graph with V vertices (where V ≥ 3)?",
    options: [
      { id: "A", text: "2V - 4" },
      { id: "B", text: "3V - 6" },
      { id: "C", text: "3V + 6" },
      { id: "D", text: "V(V - 1) / 2" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2V - 4: Bound for triangle-free planar graphs.",
      "B": "3V - 6: Correct! For any connected planar graph where every face boundary has at least 3 edges (2E ≥ 3R), Euler's formula proves E ≤ 3V - 6.",
      "C": "3V + 6: Sign error.",
      "D": "V(V - 1) / 2: Maximum edges in a general complete graph K_n."
    },
    summaryExplanation: "In any simple planar graph with V ≥ 3, the number of edges cannot exceed 3V - 6."
  },
  {
    id: "p2-u1-q8",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "GSET 2023",
    question: "The propositional logic formula (P → Q) is logically equivalent to which of the following expressions?",
    options: [
      { id: "A", text: "¬P ∨ Q" },
      { id: "B", text: "P ∧ ¬Q" },
      { id: "C", text: "¬P ∧ Q" },
      { id: "D", text: "P ∨ ¬Q" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "¬P ∨ Q: Correct! Implication rule: P → Q is false only when P is true and Q is false, exactly matching ¬P ∨ Q.",
      "B": "P ∧ ¬Q: This is the negation ¬(P → Q).",
      "C": "¬P ∧ Q: Not equivalent.",
      "D": "P ∨ ¬Q: This is equivalent to Q → P."
    },
    summaryExplanation: "Material implication equivalence: P → Q ≡ ¬P ∨ Q."
  },
  {
    id: "p2-u1-q9",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET June 2023",
    question: "In a Poset (Partially Ordered Set), a lattice is called a 'Complemented Lattice' if:",
    options: [
      { id: "A", text: "Every element has a unique predecessor" },
      { id: "B", text: "It is bounded (has 0 and 1) and every element a has at least one complement b such that a ∧ b = 0 and a ∨ b = 1" },
      { id: "C", text: "It contains an infinite chain" },
      { id: "D", text: "Every element is prime" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Unique predecessor: Trees.",
      "B": "Bounded with complements: Correct! A complemented lattice is bounded (contains least element 0 and greatest element 1) and every element a has an element b satisfying a ∧ b = 0 and a ∨ b = 1.",
      "C": "Infinite chain: Unrelated to complements.",
      "D": "Prime elements: Atomic lattices."
    },
    summaryExplanation: "A complemented lattice is a bounded lattice where every element possesses at least one complement."
  },
  {
    id: "p2-u1-q10",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "TN-SET 2024",
    question: "What is the number of handshakes exchanged at a conference attended by 12 people if everyone shakes hands with everyone else exactly once?",
    options: [
      { id: "A", text: "66" },
      { id: "B", text: "72" },
      { id: "C", text: "132" },
      { id: "D", text: "144" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "66: Correct! Number of combinations C(12, 2) = (12 * 11) / 2 = 132 / 2 = 66 handshakes.",
      "B": "72: Arithmetic slip.",
      "C": "132: Permutations P(12, 2) without dividing by 2 for undirected handshakes.",
      "D": "144: 12^2."
    },
    summaryExplanation: "Handshake formula = n(n-1)/2 = 12 * 11 / 2 = 66."
  },
  {
    id: "p2-u1-q11",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET Dec 2023",
    question: "A graph G has an 'Eulerian Circuit' (Euler tour) if and only if G is connected and:",
    options: [
      { id: "A", text: "Every vertex has odd degree" },
      { id: "B", text: "Every vertex has even degree" },
      { id: "C", text: "It contains a Hamiltonian cycle" },
      { id: "D", text: "The graph is a tree" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Every vertex odd degree: Impossible; sum of degrees is always even.",
      "B": "Every vertex even degree: Correct! Euler's Theorem states a connected graph has an Euler circuit iff every vertex has an even degree.",
      "C": "Hamiltonian cycle: Visits all vertices, while Eulerian visits all edges.",
      "D": "Tree: A tree has leaf vertices of degree 1 (odd) and cannot have an Euler circuit."
    },
    summaryExplanation: "A connected graph has an Eulerian circuit if and only if every vertex has an even degree."
  },
  {
    id: "p2-u1-q12",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "MH-SET 2023",
    question: "In the Simplex method for solving LPP, the entering basic variable is chosen based on the most negative (or most positive) value of:",
    options: [
      { id: "A", text: "Net evaluation row (z_j - c_j)" },
      { id: "B", text: "Right-hand side vector b" },
      { id: "C", text: "Slack variables" },
      { id: "D", text: "Artificial variables" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Net evaluation row (z_j - c_j): Correct! The index j corresponding to min(z_j - c_j) identifies the entering variable that will most rapidly improve the objective function.",
      "B": "RHS vector b: Used in the minimum ratio test to select the departing variable.",
      "C": "Slack variables: Introduced to convert inequalities into equalities.",
      "D": "Artificial variables: Used in Big-M / Two-Phase simplex."
    },
    summaryExplanation: "The entering variable is determined by examining the reduced costs in the (z_j - c_j) row."
  },
  {
    id: "p2-u1-q13",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "WB-SET 2024",
    question: "What is the generating function for the infinite sequence 1, 1, 1, 1, ... ?",
    options: [
      { id: "A", text: "1 / (1 - x)" },
      { id: "B", text: "1 / (1 + x)" },
      { id: "C", text: "1 / (1 - x)^2" },
      { id: "D", text: "e^x" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "1 / (1 - x): Correct! Sum of infinite geometric series 1 + x + x^2 + x^3 + ... = 1 / (1 - x) for |x| < 1.",
      "B": "1 / (1 + x): Generating function for alternating sequence 1, -1, 1, -1, ...",
      "C": "1 / (1 - x)^2: Generating function for sequence 1, 2, 3, 4, ...",
      "D": "e^x: Exponential generating function."
    },
    summaryExplanation: "The generating function for the constant unit sequence is 1 / (1 - x)."
  },
  {
    id: "p2-u1-q14",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET June 2024",
    question: "Kuratowski's Theorem states that a graph is planar if and only if it does not contain a subgraph homeomorphic to:",
    options: [
      { id: "A", text: "K_5 or K_{3,3}" },
      { id: "B", text: "K_4 or K_{2,2}" },
      { id: "C", text: "K_3 or K_{1,1}" },
      { id: "D", text: "C_5 or C_6" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "K_5 or K_{3,3}: Correct! Kazimierz Kuratowski (1930) proved non-planarity is characterized by subgraphs homeomorphic to K_5 (complete graph on 5 vertices) or K_{3,3} (complete bipartite utility graph).",
      "B": "K_4: K_4 is completely planar.",
      "C": "K_3: K_3 is planar.",
      "D": "Cycles: All simple cycles are planar."
    },
    summaryExplanation: "Kuratowski's theorem characterises non-planarity by the presence of K_5 or K_{3,3} minors."
  },
  {
    id: "p2-u1-q15",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "KSET 2024",
    question: "How many reflexive relations can be defined on a set with n elements?",
    options: [
      { id: "A", text: "2^(n^2)" },
      { id: "B", text: "2^(n(n - 1))" },
      { id: "C", text: "2^(n(n + 1) / 2)" },
      { id: "D", text: "n!" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2^(n^2): Total number of all possible relations on set A.",
      "B": "2^(n(n - 1)): Correct! In an n × n relation matrix, all n diagonal elements (a, a) must be 1. The remaining (n^2 - n) = n(n - 1) off-diagonal entries each have 2 choices. Hence, 2^(n(n - 1)).",
      "C": "2^(n(n + 1)/2): Total number of symmetric relations.",
      "D": "n!: Number of bijective permutations."
    },
    summaryExplanation: "Fixing the n diagonal entries leaves n^2 - n slots, giving 2^(n(n - 1)) reflexive relations."
  },
  {
    id: "p2-u1-q16",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET Dec 2023",
    question: "If a connected planar graph has 10 vertices and each face is bounded by exactly 3 edges, how many edges does the graph have?",
    options: [
      { id: "A", text: "18" },
      { id: "B", text: "20" },
      { id: "C", text: "24" },
      { id: "D", text: "27" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "18: Miscalculation.",
      "B": "20: Miscalculation.",
      "C": "24: Correct! Since every face has 3 edges, 2E = 3R ⇒ R = 2E / 3. By Euler's formula: V - E + R = 2 ⇒ 10 - E + (2E / 3) = 2 ⇒ 10 - (E / 3) = 2 ⇒ E / 3 = 8 ⇒ E = 24.",
      "D": "27: Exceeds 3V - 6 = 24."
    },
    summaryExplanation: "V - E + (2E/3) = 2 ⇒ 10 - E/3 = 2 ⇒ E = 24 edges."
  },
  {
    id: "p2-u1-q17",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "AP-SET 2023",
    question: "What is the Pigeonhole Principle in discrete mathematics?",
    options: [
      { id: "A", text: "If k pigeons are placed into m pigeonholes and k > m, at least one hole must contain more than one pigeon" },
      { id: "B", text: "Every graph has an even number of vertices" },
      { id: "C", text: "A poset must have a unique maximal element" },
      { id: "D", text: "Every group of order n is abelian" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Pigeons and holes: Correct! Dirichlet's principle: distributing n items into m containers where n > m guarantees at least one container receives ≥ ⌈n/m⌉ items.",
      "B": "Even vertices: False (Handshaking lemma states even number of *odd-degree* vertices).",
      "C": "Unique maximal: False.",
      "D": "Abelian: S_3 is non-abelian of order 6."
    },
    summaryExplanation: "The Pigeonhole Principle guarantees collision when items exceed available slots."
  },
  {
    id: "p2-u1-q18",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "MH-SET 2024",
    question: "A group (G, *) in which the binary operation satisfies the commutative law (a * b = b * a for all a, b ∈ G) is called an:",
    options: [
      { id: "A", text: "Abelian Group" },
      { id: "B", text: "Monoid" },
      { id: "C", text: "Semigroup" },
      { id: "D", text: "Normal Subgroup" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Abelian Group: Correct! Named after Niels Henrik Abel; a group with commutative multiplication is an abelian group.",
      "B": "Monoid: Semigroup with an identity element (does not require commutativity or inverses).",
      "C": "Semigroup: Set with associative binary operation.",
      "D": "Normal Subgroup: Subgroup invariant under conjugation."
    },
    summaryExplanation: "Commutative groups are termed Abelian Groups."
  },
  {
    id: "p2-u1-q19",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET June 2023",
    question: "In Boolean algebra, what is the dual of the expression: A + (B · C) = (A + B) · (A + C) ?",
    options: [
      { id: "A", text: "A · (B + C) = (A · B) + (A · C)" },
      { id: "B", text: "A + (B + C) = (A + B) + C" },
      { id: "C", text: "A · (B · C) = (A · B) · C" },
      { id: "D", text: "¬A + (¬B · ¬C) = 1" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "A · (B + C) = (A · B) + (A · C): Correct! Principle of duality: interchange OR (+) with AND (·) and 0 with 1.",
      "B": "Associative law.",
      "C": "Associative law for multiplication.",
      "D": "Complement expression."
    },
    summaryExplanation: "Duality interchanges + and · operators: A + (B · C) becomes A · (B + C) = (A · B) + (A · C)."
  },
  {
    id: "p2-u1-q20",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "GSET 2024",
    question: "A graph G is said to be 'Hamiltonian' if it contains a closed cycle that:",
    options: [
      { id: "A", text: "Visits every edge of G exactly once" },
      { id: "B", text: "Visits every vertex of G exactly once (except the start and end vertex)" },
      { id: "C", text: "Contains no cycles at all" },
      { id: "D", text: "Is a spanning forest" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Visits every edge: Eulerian circuit.",
      "B": "Visits every vertex exactly once: Correct! A Hamiltonian cycle passes through every vertex of the graph without repeating vertices.",
      "C": "No cycles: Acyclic graph (tree).",
      "D": "Spanning forest: Disconnected spanning acyclic subgraph."
    },
    summaryExplanation: "A Hamiltonian cycle visits every vertex of the graph exactly once."
  },
  {
    id: "p2-u1-q21",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "WB-SET 2023",
    question: "In a transportation problem with m sources and n destinations, a basic feasible solution contains at most how many basic allocated cells?",
    options: [
      { id: "A", text: "m + n - 1" },
      { id: "B", text: "m * n" },
      { id: "C", text: "m + n + 1" },
      { id: "D", text: "m * n - 1" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "m + n - 1: Correct! A non-degenerate basic feasible solution in an m × n transportation problem has exactly m + n - 1 independent allocated cells.",
      "B": "m * n: Total number of cells in the matrix.",
      "C": "m + n + 1: Redundant basic variables.",
      "D": "m * n - 1: Incorrect dimension."
    },
    summaryExplanation: "Basic feasible solutions in transportation problems require exactly m + n - 1 allocations."
  },
  {
    id: "p2-u1-q22",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET Dec 2023",
    question: "What is the degree of each vertex in an r-regular graph with n vertices?",
    options: [
      { id: "A", text: "Exactly r" },
      { id: "B", text: "r / 2" },
      { id: "C", text: "n - r" },
      { id: "D", text: "n * r" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Exactly r: Correct! By definition, a graph is regular of degree r if every vertex has degree equal to r.",
      "B": "r/2: Inaccurate.",
      "C": "n - r: Degree in complement graph.",
      "D": "n * r: Exaggeration."
    },
    summaryExplanation: "An r-regular graph is defined as a graph where every vertex has an identical degree of r."
  },
  {
    id: "p2-u1-q23",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "KSET 2023",
    question: "Which theorem guarantees that in any group G, the order of a subgroup H divides the order of the group G?",
    options: [
      { id: "A", text: "Cayley's Theorem" },
      { id: "B", text: "Lagrange's Theorem" },
      { id: "C", text: "Sylow's Theorem" },
      { id: "D", text: "Fermat's Little Theorem" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Cayley's Theorem: Every group is isomorphic to a subgroup of a symmetric group.",
      "B": "Lagrange's Theorem: Correct! |G| = [G : H] * |H|; the order of any subgroup divides the order of a finite group.",
      "C": "Sylow's Theorem: Guarantees existence of p-subgroups.",
      "D": "Fermat's Little Theorem: Number theory congruences (a^(p-1) ≡ 1 mod p)."
    },
    summaryExplanation: "Lagrange's theorem proves that the order of any subgroup divides the group's order."
  },
  {
    id: "p2-u1-q24",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET June 2024",
    question: "What is the total number of non-isomorphic spanning trees for a complete graph K_4 with 4 labeled vertices according to Cayley's Tree Formula?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "16" },
      { id: "C", text: "32" },
      { id: "D", text: "64" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "4: n^(n-2) for n=3.",
      "B": "16: Correct! Cayley's formula: n^(n - 2). For n = 4: 4^(4 - 2) = 4^2 = 16 labeled trees.",
      "C": "32: Miscalculation.",
      "D": "64: 4^3."
    },
    summaryExplanation: "Cayley's formula gives n^(n - 2) = 4^(4 - 2) = 16 labeled trees for K_4."
  },
  {
    id: "p2-u1-q25",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "MH-SET 2023",
    question: "If A and B are two finite sets such that |A| = 5 and |B| = 3, how many total functions f: A → B can be defined?",
    options: [
      { id: "A", text: "15" },
      { id: "B", text: "125 (5^3)" },
      { id: "C", text: "243 (3^5)" },
      { id: "D", text: "60" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "15: 5 * 3.",
      "B": "125: |A|^|B| = 5^3 (inverted formula).",
      "C": "243: Correct! Formula for total functions from A to B is |B|^|A| = 3^5 = 243. Each of the 5 elements in A has 3 independent choices in B.",
      "D": "60: P(5, 3)."
    },
    summaryExplanation: "Total functions = |B|^|A| = 3^5 = 243."
  },
  {
    id: "p2-u1-q26",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "AP-SET 2024",
    question: "In first-order predicate logic, which of the following is logically equivalent to ¬(∀x P(x)) ?",
    options: [
      { id: "A", text: "∃x ¬P(x)" },
      { id: "B", text: "∀x ¬P(x)" },
      { id: "C", text: "¬(∃x P(x))" },
      { id: "D", text: "∃x P(x)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "∃x ¬P(x): Correct! Generalized De Morgan's Law for quantifiers: Negating universal quantification yields existential quantification with negated predicate.",
      "B": "∀x ¬P(x): Means none satisfy P(x).",
      "C": "¬(∃x P(x)): Equivalent to ∀x ¬P(x).",
      "D": "∃x P(x): No negation."
    },
    summaryExplanation: "De Morgan's law for quantifiers: ¬(∀x P(x)) ≡ ∃x ¬P(x)."
  },
  {
    id: "p2-u1-q27",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET Dec 2023",
    question: "The 'Handshaking Lemma' states that in every finite graph, the sum of degrees of all vertices equals:",
    options: [
      { id: "A", text: "The number of vertices (V)" },
      { id: "B", text: "Twice the number of edges (2E)" },
      { id: "C", text: "The number of edges squared (E^2)" },
      { id: "D", text: "V * E" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Vertices count.",
      "B": "2E: Correct! Every edge has two endpoints, contributing exactly 2 to the degree sum of the graph: ∑ deg(v) = 2E.",
      "C": "E^2: Erroneous.",
      "D": "V * E: Erroneous."
    },
    summaryExplanation: "Handshaking Lemma: ∑ deg(v) = 2|E|; implies the count of odd-degree vertices is always even."
  },
  {
    id: "p2-u1-q28",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "WB-SET 2024",
    question: "In an Assignment Problem with n workers and n tasks, which polynomial-time optimization algorithm is traditionally used to find the minimum cost matching?",
    options: [
      { id: "A", text: "Hungarian Algorithm (Kuhn-Munkres)" },
      { id: "B", text: "Dijkstra's Algorithm" },
      { id: "C", text: "Vogel's Approximation Method" },
      { id: "D", text: "Kruskal's Algorithm" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Hungarian Algorithm: Correct! Harold Kuhn's method using matrix row/column reductions to find optimal bipartite matching in O(n^3) time.",
      "B": "Dijkstra: Single-source shortest path.",
      "C": "VAM: Initial feasible solution for transportation problems.",
      "D": "Kruskal: Minimum spanning tree."
    },
    summaryExplanation: "The Hungarian algorithm solves bipartite assignment problems to optimality in O(n^3) time."
  },
  {
    id: "p2-u1-q29",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "UGC NET June 2023",
    question: "Which of the following algebraic structures satisfies associativity and contains an identity element, but does NOT necessarily have inverses for all elements?",
    options: [
      { id: "A", text: "Semigroup" },
      { id: "B", text: "Monoid" },
      { id: "C", text: "Group" },
      { id: "D", text: "Field" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Semigroup: Satisfies closure and associativity, but does not guarantee an identity.",
      "B": "Monoid: Correct! An algebraic structure (M, *) that is associative and contains an identity element e, but elements need not have inverses (e.g., (N, +) with 0).",
      "C": "Group: Requires every element to have an inverse.",
      "D": "Field: Ring with commutative multiplication and non-zero multiplicative inverses."
    },
    summaryExplanation: "A Monoid satisfies closure, associativity, and identity, but does not require element inverses."
  },
  {
    id: "p2-u1-q30",
    paper: "paper2",
    unitId: "p2-u1",
    unitNumber: 1,
    unitName: "Discrete Structures and Optimization",
    examSource: "MH-SET 2024",
    question: "If a connected graph G has 15 vertices and 14 edges, then G must be a:",
    options: [
      { id: "A", text: "Tree" },
      { id: "B", text: "Bipartite cycle C_15" },
      { id: "C", text: "Complete graph K_15" },
      { id: "D", text: "Eulerian graph" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Tree: Correct! A connected graph with n vertices and exactly n - 1 edges is minimally connected and acyclic, defining a tree.",
      "B": "Cycle C_15: Would require n edges (15 edges).",
      "C": "Complete K_15: Requires 15*14/2 = 105 edges.",
      "D": "Eulerian graph: Requires all degrees even, impossible for a tree with leaf nodes."
    },
    summaryExplanation: "Any connected graph with n vertices and n - 1 edges is necessarily a Tree."
  }
];
