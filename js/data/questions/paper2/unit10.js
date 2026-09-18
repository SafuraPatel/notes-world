/**
 * PAPER 2 - UNIT 10: ALGORITHMS AND ADVANCED COMPUTING (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers Asymptotic Complexity, Master Theorem, Dynamic Programming, Greedy, Graph Algorithms, and NP-Completeness.
 */

export const p2Unit10Questions = [
  {
    id: "p2-u10-q1",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET June 2024",
    question: "Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation: T(n) = 2 T(n / 2) + n ?",
    options: [
      { id: "A", text: "Θ(n)" },
      { id: "B", text: "Θ(n log n)" },
      { id: "C", text: "Θ(n^2)" },
      { id: "D", text: "Θ(log n)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Θ(n): Underestimates recursion depth.",
      "B": "Θ(n log n): Correct! For T(n) = aT(n/b) + f(n): a = 2, b = 2, f(n) = n. Compare n^(log_b a) = n^(log_2 2) = n^1 = n. Since f(n) = Θ(n^(log_b a)), Case 2 applies: T(n) = Θ(n^(log_b a) * log n) = Θ(n log n) (classic Merge Sort complexity).",
      "C": "Θ(n^2): Case 1 with larger exponent.",
      "D": "Θ(log n): Sub-linear."
    },
    summaryExplanation: "By Master Theorem Case 2, T(n) = 2T(n/2) + n evaluates to Θ(n log n)."
  },
  {
    id: "p2-u10-q2",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "MH-SET 2024",
    question: "Which algorithmic paradigm is employed in solving the 0/1 Knapsack Problem to guarantee an optimal solution?",
    options: [
      { id: "A", text: "Greedy Method" },
      { id: "B", text: "Dynamic Programming" },
      { id: "C", text: "Divide and Conquer without memoization" },
      { id: "D", text: "Linear Search" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Greedy Method: Solves *Fractional Knapsack* optimally, but fails to guarantee optimality on 0/1 Knapsack.",
      "B": "Dynamic Programming: Correct! 0/1 Knapsack exhibits optimal substructure and overlapping subproblems, solved optimally in O(n·W) pseudo-polynomial time.",
      "C": "Divide and conquer: Exhibits exponential duplicate work without caching.",
      "D": "Linear search: Inapplicable."
    },
    summaryExplanation: "The 0/1 Knapsack problem requires Dynamic Programming to evaluate sub-problems and ensure optimality."
  },
  {
    id: "p2-u10-q3",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET Dec 2023",
    question: "What is the worst-case time complexity of QuickSort on an array of n elements, and when does it typically occur?",
    options: [
      { id: "A", text: "O(n log n), occurring when elements are randomly ordered" },
      { id: "B", text: "O(n^2), occurring when the pivot selected is consistently the smallest or largest element (such as in an already sorted array)" },
      { id: "C", text: "O(n), occurring on reverse sorted arrays" },
      { id: "D", text: "O(log n), occurring on all inputs" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "O(n log n): Average-case complexity of QuickSort.",
      "B": "O(n^2) on sorted/skewed pivot: Correct! Degenerates into unbalanced partitions of sizes 0 and n - 1, producing T(n) = T(n - 1) + O(n) = O(n^2).",
      "C": "O(n): Best-case for three-way partitioning with identical keys, not worst-case.",
      "D": "O(log n): Search complexity."
    },
    summaryExplanation: "QuickSort exhibits O(n²) worst-case complexity when unbalanced partitions repeatedly isolate extreme pivot elements."
  },
  {
    id: "p2-u10-q4",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "WB-SET 2023",
    question: "In computational complexity theory, what does 'Cook's Theorem' (Cook-Levin Theorem) fundamentally establish?",
    options: [
      { id: "A", text: "That P = NP" },
      { id: "B", text: "That the Boolean Satisfiability Problem (SAT) is NP-Complete" },
      { id: "C", text: "That Merge Sort is stable" },
      { id: "D", text: "That Dijkstra's algorithm handles negative edges" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "P = NP: Still the greatest open millennium prize problem.",
      "B": "SAT is NP-Complete: Correct! Stephen Cook (1971) proved that Boolean Satisfiability (SAT) is the first known NP-Complete problem, to which all other NP problems can be reduced in polynomial time.",
      "C": "Merge sort stability: Basic sorting property.",
      "D": "Dijkstra negative edges: Dijkstra fails on negative edge weights."
    },
    summaryExplanation: "Cook's Theorem proved that the Boolean Satisfiability Problem (SAT) is NP-Complete."
  },
  {
    id: "p2-u10-q5",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "KSET 2023",
    question: "What is the time complexity of finding a Minimum Spanning Tree (MST) in a connected graph with V vertices and E edges using Kruskal's Algorithm with a Disjoint-Set Union (DSU) data structure?",
    options: [
      { id: "A", text: "O(V^3)" },
      { id: "B", text: "O(E log E) or O(E log V)" },
      { id: "C", text: "O(V + E)" },
      { id: "D", text: "O(1)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "O(V^3): Floyd-Warshall complexity.",
      "B": "O(E log E) / O(E log V): Correct! Sorting all E edges takes O(E log E) time. Finding cycles via union-find takes O(E α(V)), dominated by the edge sorting phase.",
      "C": "O(V + E): BFS/DFS linear traversal.",
      "D": "O(1): Constant."
    },
    summaryExplanation: "Kruskal's algorithm runs in O(E log V) time, dominated by the initial sorting of all graph edges."
  },
  {
    id: "p2-u10-q6",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "AP-SET 2024",
    question: "In Dynamic Programming, what is the time complexity to find the length of the Longest Common Subsequence (LCS) of two strings of lengths m and n?",
    options: [
      { id: "A", text: "O(m + n)" },
      { id: "B", text: "O(m * n)" },
      { id: "C", text: "O(2^(m + n))" },
      { id: "D", text: "O(log(m + n))" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "O(m + n): Linear string scanning.",
      "B": "O(m * n): Correct! Filling the dynamic programming table L[0..m, 0..n] where each cell L[i, j] takes O(1) time yields total time complexity O(m * n).",
      "C": "O(2^(m+n)): Brute force naive recursive complexity without memoization.",
      "D": "Logarithmic: Sub-linear."
    },
    summaryExplanation: "Dynamic programming solves the Longest Common Subsequence (LCS) problem in O(m * n) time."
  },
  {
    id: "p2-u10-q7",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET Dec 2022",
    question: "Which of the following shortest-path graph algorithms can correctly handle graphs containing negative weight edges (and detect negative weight cycles)?",
    options: [
      { id: "A", text: "Dijkstra's Algorithm" },
      { id: "B", text: "Bellman-Ford Algorithm" },
      { id: "C", text: "Prim's Algorithm" },
      { id: "D", text: "Kruskal's Algorithm" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Dijkstra: Greedy algorithm that assumes non-negative edge weights; fails when negative weights exist.",
      "B": "Bellman-Ford: Correct! Relaxes all E edges V - 1 times, correctly computing single-source shortest paths in O(VE) time and detecting negative cycles on the V-th pass.",
      "C": "Prim: Minimum spanning tree.",
      "D": "Kruskal: Minimum spanning tree."
    },
    summaryExplanation: "The Bellman-Ford algorithm handles negative weight edges and detects negative weight cycles in O(V·E) time."
  },
  {
    id: "p2-u10-q8",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "GSET 2023",
    question: "In algorithm analysis, which asymptotic notation describes an asymptotic tight bound (both upper and lower bound simultaneously)?",
    options: [
      { id: "A", text: "Big-O notation (O)" },
      { id: "B", text: "Big-Omega notation (Ω)" },
      { id: "C", text: "Big-Theta notation (Θ)" },
      { id: "D", text: "Little-o notation (o)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Big-O (O): Asymptotic upper bound (f(n) ≤ c · g(n)).",
      "B": "Big-Omega (Ω): Asymptotic lower bound (f(n) ≥ c · g(n)).",
      "C": "Big-Theta (Θ): Correct! Asymptotic tight bound; f(n) = Θ(g(n)) iff f(n) = O(g(n)) and f(n) = Ω(g(n)).",
      "D": "Little-o (o): Strict upper bound."
    },
    summaryExplanation: "Big-Theta (Θ) denotes an asymptotically tight bound sandwiched between upper and lower constants."
  },
  {
    id: "p2-u10-q9",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET June 2023",
    question: "Strassen's Matrix Multiplication algorithm multiplies two n × n matrices using how many recursive submatrix multiplications?",
    options: [
      { id: "A", text: "8 multiplications, resulting in O(n^3)" },
      { id: "B", text: "7 multiplications, resulting in O(n^(log2 7)) ≈ O(n^2.81)" },
      { id: "C", text: "4 multiplications, resulting in O(n^2)" },
      { id: "D", text: "6 multiplications, resulting in O(n^2.5)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "8 multiplications: Standard divide-and-conquer matrix multiplication.",
      "B": "7 multiplications / O(n^2.81): Correct! Volker Strassen (1969) reduced the 8 recursive products to 7 using linear combinations: T(n) = 7T(n/2) + O(n^2) ⇒ O(n^2.807).",
      "C": "4 multiplications: Theoretical lower bound.",
      "D": "6 multiplications: Infeasible."
    },
    summaryExplanation: "Strassen's algorithm reduces matrix multiplication to 7 subproblems, achieving O(n^2.81) time."
  },
  {
    id: "p2-u10-q10",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "TN-SET 2024",
    question: "What is the optimal substructure property in Dynamic Programming?",
    options: [
      { id: "A", text: "An optimal solution to a problem contains within it optimal solutions to its subproblems" },
      { id: "B", text: "Subproblems do not overlap" },
      { id: "C", text: "The problem can only be solved using recursion trees" },
      { id: "D", text: "The problem has no constraints" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Optimal solution contains optimal sub-solutions: Correct! Essential requirement for DP and greedy algorithms (Bellman's Principle of Optimality).",
      "B": "Non-overlapping subproblems: Characteristic of Divide and Conquer.",
      "C": "Recursion trees: Analysis technique.",
      "D": "No constraints: Unconstrained optimization."
    },
    summaryExplanation: "Optimal substructure dictates that global optimal solutions are composed of optimal solutions to constituent subproblems."
  },
  {
    id: "p2-u10-q11",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following sorting algorithms is 'Stable' (preserves the relative input order of records with equal keys)?",
    options: [
      { id: "A", text: "Heap Sort" },
      { id: "B", text: "Merge Sort" },
      { id: "C", text: "Quick Sort (in-place)" },
      { id: "D", text: "Selection Sort" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Heap Sort: Unstable due to non-adjacent tree swaps.",
      "B": "Merge Sort: Correct! Standard merge step maintains stability by picking elements from the left subarray first when keys are equal (≤).",
      "C": "Quick Sort: Unstable due to long-distance swaps across pivot.",
      "D": "Selection Sort: Unstable when swapping minimum element with current position."
    },
    summaryExplanation: "Merge Sort preserves the relative order of duplicate keys, guaranteeing stability in O(n log n) time."
  },
  {
    id: "p2-u10-q12",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "MH-SET 2023",
    question: "A problem X is defined as 'NP-Complete' if and only if:",
    options: [
      { id: "A", text: "X is in NP, and every problem in NP is polynomial-time reducible to X (X is NP-Hard)" },
      { id: "B", text: "X can be solved deterministically in O(n) time" },
      { id: "C", text: "X cannot be verified in polynomial time" },
      { id: "D", text: "X is decidable on a finite automaton" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "X ∈ NP and NP-Hard: Correct! By definition, a problem is NP-Complete if: (1) It belongs to class NP, and (2) It is NP-Hard (every problem in NP is polynomial-time reducible to it).",
      "B": "Linear time: Belongs to class P.",
      "C": "Cannot verify in polynomial time: Not in NP.",
      "D": "Finite automaton: Regular language."
    },
    summaryExplanation: "A decision problem is NP-Complete if it is both in NP and NP-Hard."
  },
  {
    id: "p2-u10-q13",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "WB-SET 2024",
    question: "In Huffman coding, what data structure is most efficiently used to iteratively extract the two characters with the lowest frequency to construct the optimal prefix tree?",
    options: [
      { id: "A", text: "Min-Heap (Priority Queue)" },
      { id: "B", text: "Stack" },
      { id: "C", text: "Circular Queue" },
      { id: "D", text: "Hash Table" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Min-Heap: Correct! Extracting two minimums and re-inserting their sum takes O(log n) time per step, building the Huffman tree in O(n log n) total time.",
      "B": "Stack: LIFO access.",
      "C": "Circular queue: FIFO access.",
      "D": "Hash table: Unordered keys."
    },
    summaryExplanation: "A Min-Heap (priority queue) repeatedly extracts the lowest frequency elements in O(log n) time during Huffman construction."
  },
  {
    id: "p2-u10-q14",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET June 2024",
    question: "What is the time complexity of the Floyd-Warshall algorithm for finding All-Pairs Shortest Paths in a directed graph with V vertices?",
    options: [
      { id: "A", text: "O(V log V)" },
      { id: "B", text: "O(V^2)" },
      { id: "C", text: "O(V^3)" },
      { id: "D", text: "O(2^V)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "O(V log V): Single source with heap.",
      "B": "O(V^2): Matrix size.",
      "C": "O(V^3): Correct! Floyd-Warshall uses three nested loops of size V: d_{ij}^{(k)} = min(d_{ij}^{(k-1)}, d_{ik}^{(k-1)} + d_{kj}^{(k-1)}), yielding O(V^3) time.",
      "D": "O(2^V): Exponential."
    },
    summaryExplanation: "The Floyd-Warshall all-pairs shortest path algorithm executes three nested loops over V vertices, running in O(V³) time."
  },
  {
    id: "p2-u10-q15",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "KSET 2024",
    question: "In graph theory, what is a 'Topological Sort' of a directed graph?",
    options: [
      { id: "A", text: "A linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge (u, v), vertex u appears before vertex v" },
      { id: "B", text: "Sorting edges by increasing weight" },
      { id: "C", text: "A traversal of an undirected bipartite graph" },
      { id: "D", text: "Detecting bridges in a network" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Linear ordering in DAG where u precedes v: Correct! Can only be performed on DAGs (graphs without directed cycles) using DFS or Kahn's in-degree algorithm in O(V + E) time.",
      "B": "Sorting edges: Kruskal's step.",
      "C": "Undirected traversal: BFS/DFS.",
      "D": "Bridges: Tarjan's bridge algorithm."
    },
    summaryExplanation: "Topological Sort linearly sequences vertices in a DAG such that dependencies (u → v) are preserved."
  },
  {
    id: "p2-u10-q16",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET Dec 2023",
    question: "What is the worst-case time complexity of finding an element in an unsorted array of n elements versus in a Balanced Binary Search Tree (AVL Tree)?",
    options: [
      { id: "A", text: "Unsorted array: O(n); AVL Tree: O(log n)" },
      { id: "B", text: "Unsorted array: O(log n); AVL Tree: O(n)" },
      { id: "C", text: "Unsorted array: O(1); AVL Tree: O(1)" },
      { id: "D", text: "Both are O(n^2)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "O(n) vs O(log n): Correct! Unsorted array requires linear scan O(n); an AVL tree maintains strict height balance (|h_L - h_R| ≤ 1), ensuring height is O(log n) and search is O(log n).",
      "B": "Inverted.",
      "C": "O(1): Constant access.",
      "D": "O(n^2): Quadratic."
    },
    summaryExplanation: "Searching requires O(n) in an unsorted array, but drops to O(log n) in a self-balancing AVL tree."
  },
  {
    id: "p2-u10-q17",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "AP-SET 2023",
    question: "Which algorithmic strategy is used in the N-Queens problem to place N non-attacking queens on an N × N chessboard by abandoning partial solutions as soon as a conflict is detected?",
    options: [
      { id: "A", text: "Greedy Choice" },
      { id: "B", text: "Backtracking" },
      { id: "C", text: "Dynamic Programming" },
      { id: "D", text: "Brute-Force Enumeration" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Greedy Choice: Does not backtrack; fails when early choices lead to dead ends.",
      "B": "Backtracking: Correct! Recursively places queens row by row; whenever a queen attacks another, it prunes the sub-tree and backtracks to try another column.",
      "C": "Dynamic Programming: No optimal substructure.",
      "D": "Brute-force: Evaluates all C(N^2, N) positions, computationally infeasible."
    },
    summaryExplanation: "Backtracking prunes infeasible partial state paths early in the N-Queens problem."
  },
  {
    id: "p2-u10-q18",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "MH-SET 2024",
    question: "What is the maximum number of nodes in a binary tree of height h (where a tree with only a root node has height h = 0)?",
    options: [
      { id: "A", text: "2^h - 1" },
      { id: "B", text: "2^(h + 1) - 1" },
      { id: "C", text: "2^h" },
      { id: "D", text: "2^(h - 1)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2^h - 1: When height is 1-indexed.",
      "B": "2^(h + 1) - 1: Correct! Sum of geometric progression 2^0 + 2^1 + ... + 2^h = 2^(h + 1) - 1 nodes. For h = 0 (root only), 2^1 - 1 = 1 node.",
      "C": "2^h: Number of nodes at level h only.",
      "D": "2^(h - 1): Inaccurate."
    },
    summaryExplanation: "A full binary tree of height h (0-indexed) has at most 2^(h + 1) - 1 total nodes."
  },
  {
    id: "p2-u10-q19",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET June 2023",
    question: "Which of the following problems is known to belong to the complexity class P (solvable deterministically in polynomial time)?",
    options: [
      { id: "A", text: "Traveling Salesperson Problem (Optimization)" },
      { id: "B", text: "Single-Source Shortest Path (Dijkstra's Algorithm)" },
      { id: "C", text: "0/1 Knapsack Problem" },
      { id: "D", text: "Hamiltonian Cycle Problem" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "TSP: NP-Hard.",
      "B": "Dijkstra's Shortest Path: Correct! Runs in polynomial time O(V^2) or O(E + V log V), definitively placing it in class P.",
      "C": "0/1 Knapsack: NP-Complete (pseudo-polynomial).",
      "D": "Hamiltonian Cycle: Classic NP-Complete problem."
    },
    summaryExplanation: "Dijkstra's algorithm runs in polynomial time, placing single-source shortest path in class P."
  },
  {
    id: "p2-u10-q20",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "GSET 2024",
    question: "In the Matrix Chain Multiplication problem, what is the time complexity to find the most efficient parenthesization order for multiplying a sequence of n matrices using Dynamic Programming?",
    options: [
      { id: "A", text: "O(n)" },
      { id: "B", text: "O(n^2)" },
      { id: "C", text: "O(n^3)" },
      { id: "D", text: "O(2^n)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "O(n): Linear.",
      "B": "O(n^2): Space complexity (table size n × n).",
      "C": "O(n^3): Correct! Filling an n × n table where each entry m[i, j] requires trying all split points k between i and j takes O(n) per cell, yielding total time O(n^3).",
      "D": "O(2^n): Catalan number brute force."
    },
    summaryExplanation: "Dynamic programming determines optimal matrix chain parenthesization in O(n³) time and O(n²) space."
  },
  {
    id: "p2-u10-q21",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "WB-SET 2023",
    question: "What is the worst-case number of comparisons required to search for a key in a sorted array of 1,024 elements using Binary Search?",
    options: [
      { id: "A", text: "10 comparisons" },
      { id: "B", text: "11 comparisons" },
      { id: "C", text: "512 comparisons" },
      { id: "D", text: "1,024 comparisons" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "10: log2(1024) = 10, but ⌊log2(1024)⌋ + 1 = 11 maximum comparisons.",
      "B": "11 comparisons: Correct! Binary search worst-case comparisons = ⌊log2 n⌋ + 1 = ⌊log2 1024⌋ + 1 = 10 + 1 = 11 comparisons.",
      "C": "512: Half of array.",
      "D": "1024: Linear search."
    },
    summaryExplanation: "Binary search worst case = ⌊log₂ n⌋ + 1 = 10 + 1 = 11 comparisons for 1,024 elements."
  },
  {
    id: "p2-u10-q22",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET Dec 2023",
    question: "In the Ford-Fulkerson algorithm for finding the Maximum Flow in a flow network, what is an 'Augmenting Path'?",
    options: [
      { id: "A", text: "A directed path from the source to the sink in the residual network along which additional flow can be pushed" },
      { id: "B", text: "The path with the highest vertex degree" },
      { id: "C", text: "A cycle of negative weights" },
      { id: "D", text: "A path containing no edges" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Path in residual network allowing more flow: Correct! By the Max-Flow Min-Cut Theorem, a flow is maximal if and only if no augmenting path exists in the residual graph.",
      "B": "Highest degree: Irrelevant.",
      "C": "Negative cycle: Bellman-Ford concept.",
      "D": "No edges: Trivial."
    },
    summaryExplanation: "An augmenting path is a valid route from source to sink in the residual graph with available residual capacity."
  },
  {
    id: "p2-u10-q23",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "KSET 2023",
    question: "What is the primary operational mechanism of an 'Approximation Algorithm' for an NP-Hard optimization problem?",
    options: [
      { id: "A", text: "It guarantees an optimal solution in polynomial time" },
      { id: "B", text: "It executes in polynomial time and provides a mathematically provable guarantee on the ratio of the solution quality compared to the true optimum (approximation ratio)" },
      { id: "C", text: "It randomly guesses answers without bounds" },
      { id: "D", text: "It converts NP problems into linear programs" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Optimal in polynomial time: Impossible unless P = NP.",
      "B": "Polynomial time with provable ratio: Correct! For instance, a 2-approximation algorithm for Vertex Cover executes in polynomial time and guarantees a solution size at most 2 * OPT.",
      "C": "Random guessing: Heuristic without performance bounds.",
      "D": "Linear programs: Exact relaxation."
    },
    summaryExplanation: "Approximation algorithms run in polynomial time with mathematically certified bounds on solution suboptimality."
  },
  {
    id: "p2-u10-q24",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET June 2024",
    question: "What is the time complexity of Kosaraju's algorithm for finding all Strongly Connected Components (SCCs) in a directed graph G = (V, E)?",
    options: [
      { id: "A", text: "O(V + E)" },
      { id: "B", text: "O(V * E)" },
      { id: "C", text: "O(V^2)" },
      { id: "D", text: "O(E log V)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "O(V + E): Correct! Kosaraju's algorithm executes two Depth-First Searches: (1) DFS on original graph to fill stack by finish times, and (2) DFS on transposed graph G^T in stack order. Both passes run in linear time O(V + E).",
      "B": "O(V * E): Bellman-Ford.",
      "C": "O(V^2): Matrix representation.",
      "D": "O(E log V): MST."
    },
    summaryExplanation: "Kosaraju's algorithm finds all Strongly Connected Components in linear time O(V + E) using two DFS traversals."
  },
  {
    id: "p2-u10-q25",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "MH-SET 2023",
    question: "Which of the following data structures is used to implement Breadth-First Search (BFS) and Depth-First Search (DFS) respectively on a graph?",
    options: [
      { id: "A", text: "BFS: Queue; DFS: Stack (or recursion)" },
      { id: "B", text: "BFS: Stack; DFS: Queue" },
      { id: "C", text: "BFS: Binary Heap; DFS: Hash Table" },
      { id: "D", text: "Both use Stacks exclusively" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Queue and Stack: Correct! BFS explores level-by-level using a FIFO Queue; DFS explores branch-by-branch deeply using a LIFO Stack (or call stack recursion).",
      "B": "Inverted data structures.",
      "C": "Heap and hash table: Priority queue and map.",
      "D": "Both stacks: Would only do DFS."
    },
    summaryExplanation: "BFS relies on a FIFO Queue; DFS relies on a LIFO Stack (or recursion)."
  },
  {
    id: "p2-u10-q26",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "AP-SET 2024",
    question: "In quantum computing, what is the basic unit of quantum information capable of existing in a superposition of |0⟩ and |1⟩ states simultaneously called?",
    options: [
      { id: "A", text: "Qubit (Quantum Bit)" },
      { id: "B", text: "Quark" },
      { id: "C", text: "Quantum Byte" },
      { id: "D", text: "Q-gate" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Qubit: Correct! The fundamental unit of quantum computation: |ψ⟩ = α|0⟩ + β|1⟩, where |α|^2 + |β|^2 = 1.",
      "B": "Quark: Elementary particle in physics.",
      "C": "Quantum Byte: Aggregate concept.",
      "D": "Q-gate: Quantum logic gate."
    },
    summaryExplanation: "A Qubit is the fundamental unit of quantum information, existing in linear superpositions of states."
  },
  {
    id: "p2-u10-q27",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET Dec 2023",
    question: "In the Fractional Knapsack problem with capacity W = 50 and three items: Item 1 (Weight 10, Value 60), Item 2 (Weight 20, Value 100), Item 3 (Weight 30, Value 120), what is the maximum value achievable?",
    options: [
      { id: "A", text: "220" },
      { id: "B", text: "240" },
      { id: "C", text: "260" },
      { id: "D", text: "280" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "220: Suboptimal combination.",
      "B": "240: Correct! Value-to-weight ratios: Item 1 = 60/10 = 6; Item 2 = 100/20 = 5; Item 3 = 120/30 = 4. Pick all of Item 1 (wt 10, val 60). Remaining capacity = 40. Pick all of Item 2 (wt 20, val 100). Remaining capacity = 20. Take 20/30 (2/3) of Item 3: (2/3) * 120 = 80. Total value = 60 + 100 + 80 = 240.",
      "C": "260: Exceeds capacity.",
      "D": "280: Total sum of all items (requires 60 capacity)."
    },
    summaryExplanation: "Greedy choice by value/weight ratio yields: 60 + 100 + (20/30)*120 = 240."
  },
  {
    id: "p2-u10-q28",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "WB-SET 2024",
    question: "What is the amortized time complexity of an operation in a Fibonacci Heap during a sequence of operations?",
    options: [
      { id: "A", text: "O(1) amortized for Insert, Find-Min, Decrease-Key, and Union; O(log n) for Delete-Min" },
      { id: "B", text: "O(n) for all operations" },
      { id: "C", text: "O(log n) for Insert; O(1) for Delete-Min" },
      { id: "D", text: "O(n^2) amortized" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "O(1) amortized for Decrease-Key/Insert: Correct! Michael Fredman and Robert Tarjan designed Fibonacci heaps so that Decrease-Key runs in O(1) amortized time, optimizing Dijkstra's algorithm to O(E + V log V).",
      "B": "O(n): Worst case single operation, not amortized.",
      "C": "Delete-Min is O(log n).",
      "D": "O(n^2): Inaccurate."
    },
    summaryExplanation: "Fibonacci heaps achieve O(1) amortized time for Insert, Union, and Decrease-Key, and O(log n) for Delete-Min."
  },
  {
    id: "p2-u10-q29",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "UGC NET June 2023",
    question: "Which algorithmic paradigm does the 'Job Sequencing with Deadlines' problem utilize to maximize total profit?",
    options: [
      { id: "A", text: "Greedy Algorithm" },
      { id: "B", text: "Divide and Conquer" },
      { id: "C", text: "Linear Search" },
      { id: "D", text: "Breadth First Search" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Greedy Algorithm: Correct! Sorts jobs in descending order of profit and places each job in the latest possible available time slot prior to its deadline.",
      "B": "Divide and conquer: Partitioning paradigm.",
      "C": "Linear search: Inapplicable.",
      "D": "BFS: Graph traversal."
    },
    summaryExplanation: "Job Sequencing with Deadlines sorts jobs greedily by profit, allocating each to its latest available slot."
  },
  {
    id: "p2-u10-q30",
    paper: "paper2",
    unitId: "p2-u10",
    unitNumber: 10,
    unitName: "Algorithms and Advanced Computing",
    examSource: "MH-SET 2024",
    question: "What is the time complexity of the Naive String Matching algorithm searching for a pattern of length m in a text of length n?",
    options: [
      { id: "A", text: "O((n - m + 1) * m)" },
      { id: "B", text: "O(n + m)" },
      { id: "C", text: "O(log n)" },
      { id: "D", text: "O(n * log m)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "O((n - m + 1) * m): Correct! The naive algorithm slides the pattern character by character, comparing up to m characters at each of the (n - m + 1) possible shift positions (worst-case O(n·m)).",
      "B": "O(n + m): KMP (Knuth-Morris-Pratt) / Boyer-Moore time complexity.",
      "C": "O(log n): Suffix tree search.",
      "D": "O(n log m): Inaccurate."
    },
    summaryExplanation: "The naive string matcher compares m characters across (n - m + 1) shifts, giving worst-case O((n - m + 1)m)."
  }
];
