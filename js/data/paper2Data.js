/**
 * PAPER 2 DATASET - Notes World
 * Computer Science and Applications (Code 87)
 * Exhaustive Official Syllabus Coverage (150 In-Depth Theory Topics + 60 Repeated Tricks across All 10 Units).
 * Formatted strictly as pure bullet and point notes.
 */

export const paper2Data = {
  "paperTitle": "Paper 2: Computer Science and Applications",
  "paperCode": "CS-87",
  "units": [
    {
      "id": "p2-u1",
      "unitNumber": 1,
      "name": "Discrete Structures & Optimization",
      "icon": "🎲",
      "theoryNotes": [
        {
          "title": "Mathematical Logic, Connectives & Propositional Equivalence",
          "points": [
            "• Propositional Connectives: Negation (¬ / ~), Conjunction (∧), Disjunction (∨), Exclusive OR (⊕), Implication (P → Q ≡ ¬P ∨ Q), Biconditional (P ↔ Q ≡ (P → Q) ∧ (Q → P)).",
            "• Conditional Statements: Given implication P → Q:",
            "  - Contrapositive: ¬Q → ¬P (Always Logically Equivalent to P → Q).",
            "  - Converse: Q → P (Not logically equivalent).",
            "  - Inverse: ¬P → ¬Q (Contrapositive of Converse; logically equivalent to Converse).",
            "• Tautology, Contradiction & Contingency: Tautology = True under all truth value assignments; Contradiction = False under all assignments; Contingency = Neither tautology nor contradiction.",
            "• De Morgan's Propositional Laws: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q; ¬(P ∨ Q) ≡ ¬P ∧ ¬Q."
          ]
        },
        {
          "title": "Normal Forms & Propositional Resolution Refutation",
          "points": [
            "• Conjunctive Normal Form (CNF - Product of Sums): Conjunction of clauses, where each clause is a disjunction of literals (e.g., (A ∨ ¬B) ∧ (¬A ∨ C)).",
            "• Disjunctive Normal Form (DNF - Sum of Products): Disjunction of clauses, where each clause is a conjunction of literals (e.g., (A ∧ ¬B) ∨ (¬A ∧ C)).",
            "• Full Minterms & Maxterms: Minterms (Product terms containing all variables) vs Maxterms (Sum terms containing all variables).",
            "• Propositional Resolution (Robinson): Inference rule: From (A ∨ B) and (¬A ∨ C), infer resolvent (B ∨ C). Resolution refutation is sound and refutation-complete for propositional logic."
          ]
        },
        {
          "title": "Predicate Logic, Quantifiers & Inference Rules",
          "points": [
            "• Quantifiers: Universal Quantifier (∀x - 'For all x') and Existential Quantifier (∃x - 'There exists an x').",
            "• Quantifier Negation Rules: ¬(∀x P(x)) ≡ ∃x ¬P(x); ¬(∃x P(x)) ≡ ∀x ¬P(x).",
            "• Quantifier Commutativity: ∀x ∀y P(x, y) ≡ ∀y ∀x P(x, y); ∃x ∃y P(x, y) ≡ ∃y ∃x P(x, y). Note: ∀x ∃y P(x, y) is NOT equivalent to ∃y ∀x P(x, y).",
            "• Rules of Inference: Modus Ponens ([(P → Q) ∧ P] ⟹ Q); Modus Tollens ([(P → Q) ∧ ¬Q] ⟹ ¬P); Hypothetical Syllogism ([(P → Q) ∧ (Q → R)] ⟹ P → R); Disjunctive Syllogism ([(P ∨ Q) ∧ ¬P] ⟹ Q)."
          ]
        },
        {
          "title": "Set Theory, Power Sets, Relations & Closures",
          "points": [
            "• Power Set Cardinality: If |S| = n, then |P(S)| = 2^n. If S = ∅, |P(∅)| = 2^0 = 1 (containing only ∅).",
            "• Relation Properties on Set A (|A| = n): Total possible relations = 2^(n²).",
            "  - Reflexive: ∀a ∈ A: (a, a) ∈ R. Number of reflexive relations = 2^(n² - n).",
            "  - Symmetric: (a, b) ∈ R ⟹ (b, a) ∈ R. Number of symmetric relations = 2^[n(n+1)/2].",
            "  - Antisymmetric: (a, b) ∈ R and (b, a) ∈ R ⟹ a = b. Number = 2^n × 3^[n(n-1)/2].",
            "  - Transitive: (a, b) ∈ R and (b, c) ∈ R ⟹ (a, c) ∈ R.",
            "• Equivalence Relation: Reflexive, Symmetric, and Transitive. Partitions set A into mutually disjoint Equivalence Classes whose union is A.",
            "• Relation Closures: Reflexive Closure (R ∪ Δ), Symmetric Closure (R ∪ R⁻¹), Transitive Closure (Warshall's Algorithm O(n³))."
          ]
        },
        {
          "title": "Partial Orders (Posets), Hasse Diagrams & Lattices",
          "points": [
            "• Poset (Partially Ordered Set): A set with a relation that is Reflexive, Antisymmetric, and Transitive (R-AS-T).",
            "• Hasse Diagram: Simplified directed graph of a finite poset where loops (reflexivity) and transitive edges are omitted, and elements are arranged vertically from lower to higher.",
            "• Poset Extremal Elements: Maximal element (no element is strictly greater), Minimal element (no element is strictly smaller), Greatest / Maximum element (unique element greater than all others), Least / Minimum element (unique element smaller than all others). A poset may have multiple maximal/minimal elements, but at most ONE greatest/least element.",
            "• Lattice: A poset in which EVERY pair of elements {a, b} has a unique Least Upper Bound (LUB / Join / a ∨ b) and a unique Greatest Lower Bound (GLB / Meet / a ∧ b).",
            "• Special Lattices: Bounded Lattice (has least 0 and greatest 1), Distributive Lattice (join distributes over meet and vice versa), Complemented Lattice (every element has a complement such that a ∨ a' = 1 and a ∧ a' = 0), Boolean Lattice / Boolean Algebra (Complemented + Distributive bounded lattice; cardinality of finite Boolean algebra is ALWAYS 2^n)."
          ]
        },
        {
          "title": "Group Theory, Algebraic Structures & Lagrange's Theorem",
          "points": [
            "• Algebraic Hierarchy: Groupoid (Binary operation is Closed) → Semigroup (Closed + Associative) → Monoid (Closed + Associative + Identity e) → Group (Closed + Associative + Identity + Inverses for all elements) → Abelian Group (Group + Commutative).",
            "• Order of Group |G|: Cardinality of set G. Order of Element a: Smallest positive integer m such that a^m = e.",
            "• Cyclic Group: Generated by powers of a single generator element g (G = ⟨g⟩). If |G| = n, number of generators = Euler's totient function φ(n). Every cyclic group is Abelian.",
            "• Subgroup (H ≤ G): A subset H of G that forms a group under the same operation. Test: a, b ∈ H ⟹ a · b⁻¹ ∈ H.",
            "• Lagrange's Theorem: If G is a finite group and H is a subgroup of G, then the order of H divides the order of G (|H| divides |G|).",
            "• Rings & Fields: Ring (Abelian group under addition, semigroup under multiplication, distributive); Field (Commutative ring with unity where every non-zero element has multiplicative inverse; e.g., (R, +, ·), (Q, +, ·), Galois Fields GF(p^n))."
          ]
        },
        {
          "title": "Combinatorics, Pigeonhole Principle & Inclusion-Exclusion",
          "points": [
            "• Fundamental Principles of Counting: Rule of Sum (mutually exclusive choices: n1 + n2) and Rule of Product (sequential independent choices: n1 × n2).",
            "• Permutations & Combinations: P(n, r) = n! / (n - r)! (order matters); C(n, r) = n! / [r! (n - r)!] (order does not matter). Pascal's Identity: C(n, k) = C(n-1, k-1) + C(n-1, k). Total subsets = 2^n.",
            "• Generalized Pigeonhole Principle: If N objects are placed into k boxes, at least one box contains at least ⌈N / k⌉ objects.",
            "• Principle of Inclusion-Exclusion: For 3 sets: |A ∪ B ∪ C| = (|A| + |B| + |C|) - (|A ∩ B| + |B ∩ C| + |A ∩ C|) + |A ∩ B ∩ C|.",
            "• Derangements: Permutations of n elements such that NO element appears in its original position: D_n = n! × [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!]. D1=0, D2=1, D3=2, D4=9, D5=44."
          ]
        },
        {
          "title": "Recurrence Relations & Generating Functions",
          "points": [
            "• Linear Homogeneous Recurrences with Constant Coefficients: a_n + c1 a_{n-1} + c2 a_{n-2} = 0. Solve characteristic polynomial r² + c1 r + c2 = 0.",
            "  - Distinct Real Roots r1, r2: a_n = A(r1)^n + B(r2)^n.",
            "  - Repeated Real Roots r1 = r2 = r: a_n = (A + B n)(r)^n.",
            "• Linear Non-Homogeneous Recurrences: Total Solution = Homogeneous Solution (a_n^(h)) + Particular Solution (a_n^(p)).",
            "• Generating Functions: Formal power series G(x) = ∑_{n=0}^∞ a_n x^n. Sequence of all 1s has G(x) = 1 / (1 - x); sequence a_n = a^n has G(x) = 1 / (1 - ax)."
          ]
        },
        {
          "title": "Graph Theory: Fundamentals, Handshaking Lemma & Special Graphs",
          "points": [
            "• Undirected Graphs: G = (V, E). Degree of vertex deg(v) = number of incident edges.",
            "• Handshaking Lemma: In any undirected graph, Sum of all vertex degrees = 2 × |E|. Consequence: The number of vertices with ODD degree is ALWAYS EVEN.",
            "• Complete Graph (Kn): Every pair of distinct vertices connected by an edge. Number of edges = n(n - 1) / 2. Regular of degree n - 1.",
            "• Bipartite Graph: Vertices partitioned into 2 disjoint sets V1 and V2 such that every edge connects a vertex in V1 to a vertex in V2. Theorem: A graph is bipartite IF AND ONLY IF it contains NO cycles of odd length.",
            "• Complete Bipartite Graph (Km, n): Total vertices = m + n; Total edges = m × n.",
            "• Regular Graph: Every vertex has the same degree k (k-regular). Edges = (n × k) / 2."
          ]
        },
        {
          "title": "Planar Graphs, Euler's Formula & Graph Coloring",
          "points": [
            "• Planar Graph: A graph that can be drawn in a single 2D plane such that no two edges cross/intersect.",
            "• Euler's Planar Formula: V - E + R = 2 (where V = Vertices, E = Edges, R = Faces/Regions including the unbounded outer face).",
            "• Planar Edge Invariant Bounds:",
            "  - For any simple connected planar graph with V ≥ 3: E ≤ 3V - 6.",
            "  - If triangle-free (no cycle of length 3): E ≤ 2V - 4.",
            "• Kuratowski's Theorem: A finite graph is planar IF AND ONLY IF it contains NO subgraph homeomorphic to (or reducible to) K5 (complete graph on 5 vertices) or K3,3 (complete bipartite utility graph).",
            "• Chromatic Number χ(G): Minimum number of colors needed to color vertices such that no two adjacent vertices share the same color. Bipartite graph = 2; Tree = 2; Cycle with even n = 2; Cycle with odd n = 3; Complete graph Kn = n; Planar Graph ≤ 4 (Four Color Theorem)."
          ]
        },
        {
          "title": "Eulerian Graphs, Hamiltonian Graphs & Trees",
          "points": [
            "• Eulerian Path: A trail visiting every EDGE in the graph exactly once. Exists iff graph is connected and has exactly 0 or 2 vertices of odd degree.",
            "• Eulerian Circuit: A closed walk visiting every EDGE exactly once and returning to start. Exists iff graph is connected and EVERY vertex has an EVEN degree.",
            "• Hamiltonian Graph: A graph containing a closed cycle visiting every VERTEX exactly once (except start/end). Determining Hamiltonian cycle is NP-Complete. Dirac's Theorem: If deg(v) ≥ n/2 for all v, G is Hamiltonian.",
            "• Trees: Connected acyclic undirected graph. A tree with n vertices has exactly n - 1 edges. Every pair of vertices connected by unique simple path.",
            "• Spanning Trees: Subgraph containing all vertices of G that is a tree. Cayley's Formula: Complete graph Kn has n^(n-2) distinct spanning trees."
          ]
        },
        {
          "title": "Linear Programming (LPP), Simplex Method, Duality & Transportation",
          "points": [
            "• LPP Formulation: Maximize/Minimize Z = CX subject to AX ≤ B and X ≥ 0. Feasible region is always a Convex Polytope; optimal solution always occurs at an Extreme (Corner) Point.",
            "• Primal to Dual Conversion Rules:",
            "  - Primal: Maximize Z = CX subject to AX ≤ B, X ≥ 0.",
            "  - Dual: Minimize W = YB subject to YA ≥ C, Y ≥ 0.",
            "• Duality Theorems: Weak Duality (CX ≤ YB for all feasible X, Y); Strong Duality (If primal has optimal solution X*, dual has optimal solution Y* and Z_max = W_min); Infeasibility Theorem (If primal is unbounded, dual is INFEASIBLE).",
            "• Transportation Models: Finding Initial Basic Feasible Solution (IBFS): North-West Corner Rule (simplest), Least Cost Method (greedy), Vogel's Approximation Method (VAM - uses row/column penalties; yields closest to optimal). MODI / u-v Method for optimality test.",
            "• Assignment Problem: Hungarian Method ($O(n^3)$ algorithm based on matrix reduction)."
          ]
        },
        {
          "title": "Dilworth's Theorem, Poset Chains & Antichains",
          "points": [
            "• Chain: Subset of elements in a poset where every pair is comparable.",
            "• Antichain: Subset of elements where no two distinct elements are comparable.",
            "• Dilworth's Theorem: The minimum number of chains needed to partition a finite poset equals the maximum size of an antichain.",
            "• Exam Pattern: Widely tested in combinatorics and discrete mathematics."
          ]
        },
        {
          "title": "Generating Functions, Catalan Numbers & Partitions",
          "points": [
            "• Catalan Numbers Formula: C_n = (1/(n+1)) * (2n choose n) -> Sequence: 1, 1, 2, 5, 14, 42, 132.",
            "• Applications: Number of structurally unique Binary Search Trees with n keys = C_n; valid parenthesis matchings of length 2n = C_n; polygon triangulations = C_(n-2).",
            "• Ordinary Generating Function: G(x) = ∑ a_n * x^n."
          ]
        },
        {
          "title": "Convex Sets, Extreme Points & Basic Feasible Solutions in LPP",
          "points": [
            "• Convex Set: A set S where the line segment joining any two points x, y ∈ S lies entirely within S (λx + (1-λ)y ∈ S for 0 ≤ λ ≤ 1).",
            "• Extreme Point: A point in a convex set that cannot be expressed as a non-trivial convex combination of two distinct points (vertices of polytope).",
            "• Fundamental LPP Theorem: Optimal solution to an LPP always occurs at an extreme point (corner point) of the feasible region."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Planar Graph Region Formula",
          "mnemonic": "R = E - V + 2 ('Regions = Edges minus Vertices plus 2')",
          "explanation": "Direct rearrangement of Euler's formula V - E + R = 2.",
          "proTip": "If every region has degree ≥ k, then 2E ≥ k × R."
        },
        {
          "title": "Handshaking Even Sum Test",
          "mnemonic": "Sum of degrees MUST be EVEN! If sum is odd, Graph CANNOT exist!",
          "explanation": "Sum of degrees = 2E (always even). Odd degree vertices must be even in number.",
          "proTip": "Instantly eliminate any degree sequence option whose total sum is an odd number."
        },
        {
          "title": "Eulerian vs Hamiltonian Shortcut",
          "mnemonic": "Euler = EDGES (Even degrees)! Hamilton = VERTICES (Visited once)!",
          "explanation": "Eulerian visits every edge once; Hamiltonian visits every vertex once.",
          "proTip": "A connected graph has an Euler path if exactly 0 or 2 vertices have odd degree."
        },
        {
          "title": "Duality Shortcut Table",
          "mnemonic": "Max (≤) ↔ Min (≥) | Unbounded ⟹ Dual Infeasible!",
          "explanation": "Primal Maximization with ≤ constraints transforms into Dual Minimization with ≥ constraints.",
          "proTip": "Number of variables in Dual = Number of constraints in Primal."
        },
        {
          "title": "Spanning Trees in Complete Graph Kn",
          "mnemonic": "Total Spanning Trees = n^(n - 2) (Cayley's Formula)",
          "explanation": "K3 has 3^(3-2) = 3; K4 has 4^(4-2) = 16; K5 has 5^(5-2) = 125.",
          "proTip": "Direct formula tested in multiple State SET and UGC NET sessions."
        },
        {
          "title": "Derangements Shortcut for n=1 to 5",
          "mnemonic": "D1=0, D2=1, D3=2, D4=9, D5=44",
          "explanation": "Number of ways to arrange n items so none is in its original place.",
          "proTip": "Memorizing 0, 1, 2, 9, 44 saves 5 minutes of inclusion-exclusion formula expansion."
        }
      ]
    },
    {
      "id": "p2-u2",
      "unitNumber": 2,
      "name": "Computer System Architecture",
      "icon": "🖥️",
      "theoryNotes": [
        {
          "title": "Digital Logic Minimization, K-Maps & Combinational Building Blocks",
          "points": [
            "• Boolean Minimization: De Morgan's Laws, Consensus Theorem (AB + ¬AC + BC = AB + ¬AC), Transposition Theorem ((A + B)(¬A + C) = AC + ¬AB).",
            "• Karnaugh Maps (K-Maps): Gray-code ordered adjacent cells. Group sizes must be powers of 2 (1, 2, 4, 8, 16). Essential Prime Implicant (contains at least one minterm covered by no other prime implicant).",
            "• Universal Gates: NAND and NOR. Any boolean function can be implemented using NAND only or NOR only. Minimum NAND gates: NOT (1), AND (2), OR (3), XOR (4), XNOR (5).",
            "• Multiplexers (Data Selectors): 2^n to 1 MUX has n select lines. Universal combinational building block: any n-variable boolean function can be implemented using a 2^(n-1) to 1 MUX with one variable connected to data inputs.",
            "• Decoders & Encoders: n to 2^n Decoder generates all 2^n minterms. Active-low enable input. Priority Encoder: assigns output code to the highest-priority active input line."
          ]
        },
        {
          "title": "Arithmetic Circuits: Adders, Subtractors & Carry Lookahead",
          "points": [
            "• Half Adder: Sum = A ⊕ B, Carry = A · B (Needs 1 XOR + 1 AND gate).",
            "• Full Adder: Sum = A ⊕ B ⊕ Cin, Carry = AB + Cin(A ⊕ B). Can be constructed using 2 Half Adders and 1 OR gate.",
            "• Ripple Carry Adder: N-bit adder chaining N full adders. Carry ripples sequentially from bit 0 to N-1; total propagation delay = N × t_FA.",
            "• Carry Lookahead Adder (CLA): Generates all carry bits in parallel using Carry Generate G_i = A_i · B_i and Carry Propagate P_i = A_i ⊕ B_i: C_{i+1} = G_i + P_i C_i. Propagation delay is constant O(1), independent of word length N."
          ]
        },
        {
          "title": "Sequential Logic: Flip-Flops, Master-Slave & Counters",
          "points": [
            "• Latches vs Flip-Flops: Latches are level-triggered; Flip-Flops are edge-triggered (clocked).",
            "• SR Flip-Flop: S=0,R=0 (Hold); S=1,R=0 (Set); S=0,R=1 (Reset); S=1,R=1 (Indeterminate / Forbidden). Characteristic Eq: Q_{n+1} = S + R'Q_n with SR = 0.",
            "• JK Flip-Flop: J=1, K=1 toggles output (Q_{n+1} = Q'_n). Race-Around Condition: Occurs in level-triggered JK when clock pulse width t_p > flip-flop propagation delay t_ff; output toggles continuously during single clock pulse. Solved by Master-Slave JK Flip-Flop or edge-triggering.",
            "• D Flip-Flop: Data / Delay flip-flop. Q_{n+1} = D. T Flip-Flop: Toggle flip-flop. Q_{n+1} = T ⊕ Q_n (frequency divider).",
            "• Counters: Asynchronous / Ripple Counter (clock applied only to LSB; cumulative propagation delay N × t_ff; maximum operating frequency f_max = 1 / (N × t_ff)); Synchronous Counter (clock applied simultaneously to all flip-flops). Mod-N Counter counts N distinct states (requires ⌈log2 N⌉ flip-flops). Ring Counter (N flip-flops = N states); Johnson / Twisted Ring Counter (N flip-flops = 2N states)."
          ]
        },
        {
          "title": "Number Representation, 2's Complement Arithmetic & Fixed-Point",
          "points": [
            "• Signed Representations (for n-bit words):",
            "  - Sign-Magnitude: MSB is sign (0 = +, 1 = -). Range: -(2^(n-1) - 1) to +(2^(n-1) - 1). Has two representations for zero (+0 and -0).",
            "  - 1's Complement: Invert all bits. Range: -(2^(n-1) - 1) to +(2^(n-1) - 1). Two zeros (+0 and -0). Requires End-Around Carry.",
            "  - 2's Complement: 1's complement + 1. Range: -2^(n-1) to +(2^(n-1) - 1). Unique representation for zero (00...0). Standard in modern CPUs.",
            "• Overflow Condition: Occurs in signed 2's complement addition when adding two positive numbers yields negative result, or adding two negative numbers yields positive result. Formula: V = C_in ⊕ C_out (where C_in is carry into MSB and C_out is carry out of MSB)."
          ]
        },
        {
          "title": "IEEE 754 Floating Point Standard (Single & Double Precision)",
          "points": [
            "• Single Precision (32 bits):",
            "  - 1 bit Sign (S): 0 = Positive, 1 = Negative.",
            "  - 8 bits Exponent (E): Biased by +127 (Excess-127). Stored E = Real Exponent + 127. Range of E: 1 to 254.",
            "  - 23 bits Fraction / Mantissa (M): Normalized with implicit leading 1 (1.M).",
            "  - Numerical Value = (-1)^S × (1.M) × 2^(E - 127).",
            "• Double Precision (64 bits):",
            "  - 1 bit Sign (S) + 11 bits Exponent (E, Biased by +1023) + 52 bits Fraction (M). Value = (-1)^S × (1.M) × 2^(E - 1023).",
            "• Special Reserved Values:",
            "  - If E = all 1s (255) and M = 0 ⟹ ±Infinity (Overflow).",
            "  - If E = all 1s (255) and M ≠ 0 ⟹ NaN (Not a Number - e.g., 0/0, √-1).",
            "  - If E = 0 and M = 0 ⟹ ±0.",
            "  - If E = 0 and M ≠ 0 ⟹ Denormalized / Subnormal number: Value = (-1)^S × (0.M) × 2^(-126)."
          ]
        },
        {
          "title": "Instruction Cycle, Addressing Modes & CPU Control Unit",
          "points": [
            "• Basic Instruction Cycle: Fetch (PC → MAR, Read RAM → MBR, MBR → IR, PC = PC + 1) → Decode (IR opcode decoded) → Read Effective Address (if indirect) → Execute → Check for Interrupts.",
            "• Addressing Modes & Effective Address (EA):",
            "  - Implied / Inherent: Opcode specifies operand implicitly (e.g., CLC, NOP, RET).",
            "  - Immediate: Operand itself is embedded in instruction (e.g., ADD #5). EA = None.",
            "  - Direct / Absolute: Address field contains effective address in memory (e.g., LOAD 2000). EA = Address field.",
            "  - Indirect: Address field points to memory location that contains effective address (e.g., LOAD @2000). EA = M[Address field]. Requires 2 memory accesses.",
            "  - Register Direct: Operand stored in CPU register (fastest).",
            "  - Register Indirect: Register contains memory address of operand. EA = [R].",
            "  - Indexed Addressing: EA = Base Register + Index Register (array indexing).",
            "  - Base Register Addressing: EA = Base Register + Offset/Displacement (relocation).",
            "  - Relative Addressing: EA = Program Counter (PC) + Offset (position-independent branch instructions).",
            "  - Auto-Increment / Auto-Decrement: Register contains EA; register is incremented/decremented by operand size (implements stacks/queues).",
            "• Control Unit: Hardwired Control (fixed logic gates, decoders, multiplexers; ultra-fast, inflexible) vs Microprogrammed Control (microinstructions stored in Control Memory ROM; flexible, easily modified, slower)."
          ]
        },
        {
          "title": "Instruction Pipelining, Speedup Ratio & Pipeline Hazards",
          "points": [
            "• Pipelining Performance: An n-instruction program executed on a k-stage pipeline with clock cycle time τ:",
            "  - Execution Time T_k = [k + (n - 1)] × τ.",
            "  - Non-Pipelined Execution Time T_1 = n × k × τ.",
            "  - Speedup Ratio S = T_1 / T_k = (n × k) / [k + n - 1]. For very large n (n ≫ k): Max Speedup S_max = k (number of pipeline stages).",
            "  - Pipeline Efficiency η = Speedup / k = n / (k + n - 1). Throughput = n / T_k.",
            "• 3 Classic Pipeline Hazards:",
            "  1. Structural Hazard (Resource Conflict): Hardware cannot support all concurrent stage combinations (e.g., single memory bus for instruction fetch and data operand load). Solved by separate L1 Harvard instruction and data caches, or pipeline stalls (bubbles).",
            "  2. Data Hazard (Data Dependency): Instruction depends on results of preceding instruction still in pipeline:",
            "     - RAW (Read After Write - True dependency): Solved by Operand Forwarding / Bypassing (forwarding ALU output directly to next instruction ALU input) or software compiler scheduling (NOP insertion).",
            "     - WAR (Write After Read - Anti-dependency): Solved by Register Renaming.",
            "     - WAW (Write After Write - Output dependency): Solved by in-order commit / Register Renaming.",
            "  3. Control Hazard (Branch Hazard): Caused by conditional branches altering sequential PC execution. Solved by Static/Dynamic Branch Prediction, Delayed Branching (Branch Delay Slot), Branch Target Buffer (BTB)."
          ]
        },
        {
          "title": "Memory Hierarchy, Cache Mapping Architectures & AMAT",
          "points": [
            "• Principle of Locality of Reference: Temporal Locality (recently referenced memory locations likely to be referenced again soon - loops, stack); Spatial Locality (memory locations physically adjacent to recently referenced locations likely to be referenced soon - array traversals, sequential code).",
            "• Cache Mapping Techniques (CPU generates physical address):",
            "  - Direct Mapping: Memory block j maps to cache line (j mod N). Fast, simple address decode. Severe conflict misses. Address format: Tag | Line Index (log2 N) | Word/Byte Offset (log2 Block_Size).",
            "  - Fully Associative Mapping: Memory block can be placed in ANY cache line. Zero conflict misses. Requires expensive content-addressable memory (CAM) comparators. Address format: Tag | Word Offset.",
            "  - Set-Associative Mapping (k-way): Cache divided into sets of k lines. Block j maps to set (j mod S). Balances speed and hit ratio. Address format: Tag | Set Index (log2 S) | Word Offset.",
            "• Average Memory Access Time (AMAT): AMAT = Hit Time + Miss Rate × Miss Penalty.",
            "  - For Multi-Level Caches (L1 and L2): AMAT = t_L1 + MissRate_L1 × (t_L2 + MissRate_L2 × t_RAM)."
          ],
          "diagram": {
            "type": "stack",
            "title": "Computer Memory Hierarchy (Speed vs Capacity vs Cost)",
            "badge": "Top = Fastest | Base = Largest",
            "layers": [
              { "level": "Level 0", "badge": "< 1 ns", "title": "CPU Registers", "desc": "Inside CPU core; fastest access, highest cost/bit", "accent": "#ec4899" },
              { "level": "Level 1", "badge": "1 - 5 ns", "title": "Cache Memory (L1, L2, L3)", "desc": "SRAM based; buffers active instructions and data", "accent": "#8b5cf6" },
              { "level": "Level 2", "badge": "50 - 100 ns", "title": "Main Memory (RAM)", "desc": "DRAM based; volatile operational program space", "accent": "#3b82f6" },
              { "level": "Level 3", "badge": "10 - 100 µs", "title": "Solid State Storage (SSD / Flash)", "desc": "Non-volatile fast secondary storage; NAND flash", "accent": "#06b6d4" },
              { "level": "Level 4", "badge": "5 - 10 ms", "title": "Magnetic Hard Disk (HDD)", "desc": "Magnetic platters; high capacity, low cost/GB", "accent": "#10b981" },
              { "level": "Level 5", "badge": "Seconds", "title": "Magnetic Tape / Cloud Archive", "desc": "Tertiary cold storage for long-term backup", "accent": "#64748b" }
            ]
          }
        },
        {
          "title": "Cache Write Policies, Replacement & Virtual Memory Integration",
          "points": [
            "• Cache Write Policies on Hit:",
            "  - Write-Through: Updates cache and main memory simultaneously on every write operation. Simple, memory traffic heavy; buffered by Write Buffer.",
            "  - Write-Back (Copy-Back): Updates cache only. Main memory updated ONLY when the dirty/modified cache line is evicted/replaced. Uses Dirty Bit.",
            "• Cache Write Policies on Miss: Write-Allocate (fetches block into cache, then writes - paired with Write-Back); No-Write-Allocate (writes directly to RAM without caching - paired with Write-Through).",
            "• Cache Replacement Policies: LRU (Least Recently Used), FIFO, Random, LFU.",
            "• Virtual Memory Integration: Translation Lookaside Buffer (TLB) caches virtual-to-physical page translations. Physically Indexed Physically Tagged (PIPT), Virtually Indexed Physically Tagged (VIPT)."
          ]
        },
        {
          "title": "RAID Storage Architectures (RAID 0 to RAID 10)",
          "points": [
            "• RAID (Redundant Array of Independent Disks): Combines multiple physical disks into single logical unit for performance and fault tolerance.",
            "• RAID 0 (Striping): Data broken into blocks striped across disks. High read/write throughput; ZERO redundancy (1 disk failure crashes entire array).",
            "• RAID 1 (Mirroring): Complete duplicate copy of data on secondary disk. 100% redundancy; tolerates 1 disk failure; high storage cost.",
            "• RAID 2 (Bit-level striping with Hamming code error correction): Obsolete.",
            "• RAID 3 (Byte-level striping with dedicated parity disk): Synchronized spindle rotation.",
            "• RAID 4 (Block-level striping with dedicated parity disk): Dedicated parity disk becomes write bottleneck.",
            "• RAID 5 (Block-level striping with distributed parity): Parity blocks distributed evenly across all N disks. Minimum 3 disks. Effective storage = (N - 1) × Disk_Size. Tolerates 1 disk failure.",
            "• RAID 6 (Block-level striping with dual distributed parity): Uses Reed-Solomon codes. Minimum 4 disks. Effective storage = (N - 2) × Disk_Size. Tolerates TWO concurrent disk failures.",
            "• RAID 10 (1+0 - Striped Mirrors): Minimum 4 disks. Combines mirroring redundancy with striping speed."
          ]
        },
        {
          "title": "I/O Organization, Asynchronous Data Transfer & Interrupts",
          "points": [
            "• Memory-Mapped I/O vs Isolated / I/O-Mapped I/O:",
            "  - Memory-Mapped I/O: Single common address space shared between memory and I/O devices. Same instructions (LOAD, STORE) access both. Reduces memory space available for RAM.",
            "  - Isolated I/O: Distinct address spaces for memory and I/O. Special CPU instructions (IN, OUT). Common in Intel x86.",
            "• Asynchronous Transfer: Strobe Control (single control line initiated by source or destination; no handshake confirmation) vs Handshaking (two control lines: Request and Acknowledge; robust, eliminates data loss).",
            "• Interrupts: Hardware vs Software interrupts. Maskable (can be disabled by software) vs Non-Maskable (NMI - cannot be ignored, reserved for catastrophic hardware failures like parity error/power loss). Vectored Interrupt (device supplies memory address of its Interrupt Service Routine ISR) vs Non-Vectored Interrupt (fixed ISR address)."
          ]
        },
        {
          "title": "Direct Memory Access (DMA) Architecture & Vector Processing",
          "points": [
            "• Direct Memory Access (DMA): Specialized hardware controller that transfers high-speed data blocks directly between I/O peripherals and main memory without CPU intervention.",
            "• DMA Controller Components: Bus Request (BR), Bus Grant (BG), Address Register, Word Count Register, Control/Status Register.",
            "• DMA Operating Modes:",
            "  - Burst Mode: DMA controller retains control of system bus for the entire block transfer. Highest speed, locks out CPU.",
            "  - Cycle Stealing Mode: DMA controller steals single bus cycles from the CPU between machine instructions. Balances CPU progress and I/O speed.",
            "  - Transparent / Hidden Mode: DMA transfers data only during clock phases when CPU is not using the system bus.",
            "• Vector Processing: Hardware instructions operating on entire 1D arrays (vectors) simultaneously using pipelined vector registers. Flynn's Taxonomy: SISD (traditional uniprocessor), SIMD (vector processors, GPUs), MISD (fault-tolerant systems), MIMD (multi-core, clusters)."
          ]
        },
        {
          "title": "Instruction Formats: Zero, One, Two, and Three Address Machines",
          "points": [
            "• Zero-Address Machine: Uses a Stack architecture where operands are implicitly popped from Top of Stack (TOS) and result pushed (e.g., ADD).",
            "• One-Address Machine: Uses an Accumulator (AC) register as implicit source and destination (e.g., ADD X -> AC <- AC + M[X]).",
            "• Two-Address Machine: Destination operand is also one of the source operands (e.g., MOV R1, R2; ADD R1, R2 -> R1 <- R1 + R2).",
            "• Three-Address Machine: Distinct source and destination fields (e.g., ADD R1, R2, R3 -> R1 <- R2 + R3); high instruction word length."
          ]
        },
        {
          "title": "Control Unit Architecture: Hardwired vs Microprogrammed Design",
          "points": [
            "• Hardwired Control Unit: Implemented via fixed combinational logic circuits, decoders, and flip-flops; extremely fast execution speed; rigid and difficult to modify or extend.",
            "• Microprogrammed Control Unit: Control signals generated by reading microinstructions from a Control Memory (ROM); highly flexible and modular; slower clock cycle.",
            "• Horizontal vs Vertical Microprogramming: Horizontal (1 bit per control signal, no decoder, fast, wide word); Vertical (encoded control fields, requires decoders, slower, compact word)."
          ]
        },
        {
          "title": "Memory Interleaving, NUMA & High-Performance Architectures",
          "points": [
            "• Memory Interleaving: Dividing main memory into multiple autonomous modules/banks that can be accessed concurrently.",
            "• Low-Order Interleaving: Consecutive memory addresses mapped to consecutive physical banks; ideal for streaming pipeline instruction prefetching.",
            "• NUMA (Non-Uniform Memory Access): Multi-processor architecture where memory access time depends on memory location relative to processor."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "IEEE 754 Bit Layout Mnemonic",
          "mnemonic": "Single (32): 1 Sign + 8 Exp + 23 Mantissa | Double (64): 1 Sign + 11 Exp + 52 Mantissa",
          "explanation": "Bias for single precision is 127; bias for double precision is 1023.",
          "proTip": "Exponent value of all 1s (255) represents Infinity or NaN."
        },
        {
          "title": "Cache Tag Bit Calculation Shortcut",
          "mnemonic": "Tag Bits = Total Address Bits - (Index Bits + Offset Bits)",
          "explanation": "Offset = log2(Block Size in bytes); Index = log2(Number of Sets).",
          "proTip": "In Fully Associative cache, Index bits = 0! Tag = Address - Offset."
        },
        {
          "title": "Pipeline Max Speedup Peg",
          "mnemonic": "Max Theoretical Speedup = k (Number of Stages)",
          "explanation": "A 5-stage pipeline can run at most 5 times faster than a non-pipelined processor.",
          "proTip": "If pipeline stages have unequal delays, the clock cycle time is bottlenecked by the SLOWEST stage."
        },
        {
          "title": "RAID Fault Tolerance Shortcut",
          "mnemonic": "RAID 0 = 0 Faults | RAID 1 & 5 = 1 Disk Fault | RAID 6 = 2 Disk Faults",
          "explanation": "RAID 5 requires minimum 3 disks; RAID 6 requires minimum 4 disks.",
          "proTip": "Effective storage in RAID 5 with N disks of size S is (N - 1) × S."
        },
        {
          "title": "2's Complement Overflow Formula",
          "mnemonic": "Overflow = Carry-In to MSB ⊕ Carry-Out from MSB",
          "explanation": "If C_in ≠ C_out, overflow has occurred in signed addition.",
          "proTip": "Adding numbers of opposite signs can NEVER produce an overflow."
        },
        {
          "title": "Flynn's Taxonomy 4 Categories",
          "mnemonic": "SISD (Uni) | SIMD (Vector/GPU) | MISD (Rare) | MIMD (Multi-core)",
          "explanation": "Single/Multiple Instruction, Single/Multiple Data streams.",
          "proTip": "Modern multicore PCs belong to the MIMD architectural class."
        }
      ]
    },
    {
      "id": "p2-u3",
      "unitNumber": 3,
      "name": "Programming Languages & Computer Graphics",
      "icon": "🎨",
      "theoryNotes": [
        {
          "title": "Programming Language Paradigms, Syntax & Semantics",
          "points": [
            "• Language Paradigms: Imperative / Procedural (C, Pascal - step-by-step state changes), Object-Oriented (Java, C++ - objects encapsulating state and behavior), Functional (Haskell, LISP, Scheme - pure functions, immutability, first-class functions, recursion), Logic (Prolog - declarative horn clauses, facts, rules, goal resolution).",
            "• Syntax vs Semantics: Syntax = Formal grammar rules defining valid character sequences (Context-Free Grammars, BNF); Semantics = Underlying meaning and behavioral execution of syntactically valid code (Static semantics: compile-time type checking; Dynamic semantics: run-time meaning).",
            "• Binding Time: Static Binding (occurs before runtime: compile-time, link-time - early binding) vs Dynamic Binding (occurs at runtime - late binding, virtual methods)."
          ]
        },
        {
          "title": "Object-Oriented Programming Principles & Polymorphism",
          "points": [
            "• 4 Core OOP Pillars: Encapsulation (bundling data and methods, data hiding via private/protected access modifiers), Abstraction (exposing essential interface while concealing internal complexity via abstract classes and interfaces), Inheritance (deriving new classes from existing classes, 'is-a' hierarchy, code reuse), Polymorphism (ability of an entity to take multiple forms).",
            "• Polymorphism Typologies:",
            "  - Compile-Time / Static Polymorphism: Function Overloading (same function name, distinct parameter signatures) and Operator Overloading. Resolved at compile time.",
            "  - Run-Time / Dynamic Polymorphism: Method Overriding (derived class redefines base class virtual method with identical signature). Resolved at runtime using Virtual Function Table (vtable) and virtual pointer (vptr).",
            "• Multiple Inheritance & Diamond Problem: Resolved in C++ using Virtual Base Classes; resolved in Java by disallowing multiple class inheritance and using Interfaces."
          ]
        },
        {
          "title": "C/C++ Pointers, Dynamic Memory & Storage Classes",
          "points": [
            "• Pointers & Pointer Arithmetic: A pointer holds the memory address of another variable. Incrementing a pointer `p + 1` advances the address by `sizeof(*p)` bytes.",
            "• Dynamic Memory Allocation (Heap):",
            "  - `malloc(size)`: Allocates contiguous block of uninitialized raw bytes.",
            "  - `calloc(num, size)`: Allocates memory and initializes every byte to ZERO.",
            "  - `realloc(ptr, new_size)`: Resizes existing allocated block.",
            "  - `free(ptr)`: Deallocates heap memory. Dangling Pointer = pointer pointing to deallocated memory. Memory Leak = allocated memory never freed and lost to the OS.",
            "• Storage Classes in C: auto (local stack, default), register (CPU register storage request), static (persists across function calls throughout program lifetime, initialized to 0), extern (global variable defined in another file)."
          ]
        },
        {
          "title": "Java Architecture: JVM, Garbage Collection & Multithreading",
          "points": [
            "• Java Platform Independence: 'Write Once, Run Anywhere' (WORA). Java source (.java) compiles to intermediate Bytecode (.class), which is executed by the Java Virtual Machine (JVM) using Just-In-Time (JIT) compilation.",
            "• Garbage Collection (GC): Automatic memory reclamation in the Heap. Employs Mark-and-Sweep algorithm, Generational Garbage Collection (Young Generation: Eden, Survivor spaces; Old Generation / Tenured; Metaspace).",
            "• Multithreading in Java: Thread creation via extending `Thread` class or implementing `Runnable` interface. Thread States: New → Runnable → Running → Blocked/Waiting → Terminated. Synchronization via `synchronized` keyword and wait(), notify(), notifyAll() methods."
          ]
        },
        {
          "title": "Web Programming: HTML, XML, Servlets & Client-Side Scripting",
          "points": [
            "• XML vs HTML: HTML is display-oriented with predefined tags; XML is data-description-oriented with extensible, user-defined tags. Well-Formed XML (syntactically conforms to XML specifications) vs Valid XML (strictly conforms to an associated DTD or XML Schema XSD).",
            "• Java Servlets & JSP: Servlets run on server container (Tomcat) generating dynamic HTTP responses. Lifecycle: `init()` → `service()` (doGet, doPost) → `destroy()`. JavaServer Pages (JSP) compiles into a servlet at first execution.",
            "• Client-Side Scripting (JavaScript): Single-threaded, event-driven runtime using an Event Loop and Call Stack. Asynchronous callbacks, Promises, and async/await."
          ]
        },
        {
          "title": "Raster Scan vs Random Scan Display Systems",
          "points": [
            "• Raster Scan Displays: Electron beam sweeps across the entire screen row by row from top to bottom (Horizontal Retrace and Vertical Retrace). Screen is a matrix of discrete pixels stored in Frame Buffer / Bit Map. Refresh rate = 60 to 120 Hz. Suffers from Aliasing / Jaggies.",
            "• Random Scan / Vector / Calligraphic Displays: Electron beam directed ONLY to parts of the screen where lines are to be drawn. Picture definition stored as drawing commands in Display Buffer / Display File. Sharp, continuous, smooth lines without aliasing. Higher cost."
          ]
        },
        {
          "title": "Line Drawing Algorithms: DDA vs Bresenham's Algorithm",
          "points": [
            "• DDA (Digital Differential Analyzer) Line Algorithm: Based on differential equation Δy = m · Δx. For |m| ≤ 1: step x by 1, compute y_{k+1} = y_k + m. Uses floating-point arithmetic and round-off operations; slow in hardware.",
            "• Bresenham's Line Algorithm: Pure integer arithmetic using a decision parameter d_k = 2Δy - Δx. If d_k < 0: next pixel is (x_k + 1, y_k), update d_{k+1} = d_k + 2Δy. If d_k ≥ 0: next pixel is (x_k + 1, y_k + 1), update d_{k+1} = d_k + 2Δy - 2Δx. Ultra-fast, implemented directly in graphics cards.",
            "• Midpoint Circle Algorithm: Employs 8-way octant symmetry. Evaluates circle function f(x, y) = x² + y² - r² at midpoint between candidates. Initial decision parameter d_0 = 1 - r (using integer arithmetic)."
          ]
        },
        {
          "title": "2D Affine Transformations & Homogeneous Coordinates",
          "points": [
            "• Homogeneous Coordinates: Represents 2D point (x, y) as a 3D column vector [x, y, 1]^T, enabling translation, rotation, and scaling to be expressed uniformly as matrix multiplications.",
            "• 2D Transformation Matrices:",
            "  - Translation: [1 0 dx; 0 1 dy; 0 0 1].",
            "  - Scaling: [Sx 0 0; 0 Sy 0; 0 0 1] (Uniform scaling if Sx = Sy).",
            "  - Rotation (Counter-Clockwise by θ): [cosθ -sinθ 0; sinθ cosθ 0; 0 0 1].",
            "  - Reflection: Across X-axis [1 0 0; 0 -1 0; 0 0 1]; Across Y-axis [-1 0 0; 0 1 0; 0 0 1]; Across Origin [-1 0 0; 0 -1 0; 0 0 1]; Across line y = x [0 1 0; 1 0 0; 0 0 1].",
            "  - Shear: X-Shear [1 shx 0; 0 1 0; 0 0 1]; Y-Shear [1 0 0; shy 1 0; 0 0 1].",
            "• Matrix Properties: Transformation matrix multiplication is Associative (A · B · C = (A · B) · C), but NOT Commutative (A · B ≠ B · A)."
          ]
        },
        {
          "title": "3D Transformations & Projections (Parallel vs Perspective)",
          "points": [
            "• 3D Homogeneous Coordinates: [x, y, z, 1]^T with 4 × 4 transformation matrices. 3D rotation about X-axis, Y-axis, or Z-axis.",
            "• Projections (Mapping 3D scene onto 2D view plane):",
            "  - Parallel Projection: Projectors are parallel. Preserves relative proportions and parallelism of lines. Used in CAD, engineering blueprints. Includes Orthographic (front, top, isometric) and Oblique (Cavalier - 45° full length, Cabinet - 63.4° half length).",
            "  - Perspective Projection: Projectors converge to a single Centre of Projection (COP). Creates natural depth perception, foreshortening (distant objects appear smaller), and Vanishing Points (1-point, 2-point, 3-point perspective)."
          ]
        },
        {
          "title": "Clipping Algorithms: Cohen-Sutherland & Sutherland-Hodgman",
          "points": [
            "• Cohen-Sutherland Line Clipping: Divides 2D plane into 9 regions using 4-bit region code (TBRL: Top, Bottom, Right, Left):",
            "  - Trivial Accept: Both endpoints have code 0000 (code1 | code2 == 0000) ⟹ Line entirely inside window.",
            "  - Trivial Reject: Both endpoints share an outside boundary (code1 & code2 ≠ 0000) ⟹ Line entirely outside window.",
            "  - Clipping Required: If neither, line intersects window edge; compute intersection using line equations.",
            "• Sutherland-Hodgman Polygon Clipping: Clips a polygon against each window boundary (Left, Right, Bottom, Top) sequentially. Evaluates 4 vertex transition cases:",
            "  1. In to In: Output second vertex.",
            "  2. In to Out: Output intersection point.",
            "  3. Out to Out: Output nothing.",
            "  4. Out to In: Output intersection point and second vertex."
          ]
        },
        {
          "title": "Visible Surface Detection (Hidden Surface Removal)",
          "points": [
            "• Object-Space Methods: Operates in object coordinate space at arbitrary precision (e.g., Back-Face Culling / Detection: computes dot product of surface normal N with view vector V: If N · V > 0, face is front-facing; if N · V ≤ 0, face is back-facing and culled). Eliminates ~50% of faces.",
            "• Image-Space Methods: Operates pixel-by-pixel on projection plane:",
            "  - Depth-Buffer (Z-Buffer) Algorithm: Maintains Frame Buffer (colors) and Z-Buffer (depth values initialized to -∞). For each polygon pixel, if z > depth_buffer[x, y], update color and z. Simple hardware implementation, O(Pixels), handles arbitrary polygons.",
            "  - A-Buffer Algorithm: Extension of Z-buffer supporting anti-aliasing and transparent surfaces via linked list of surface fragments per pixel.",
            "  - Scan-Line Method: Combines scan-line polygon filling with depth comparisons."
          ]
        },
        {
          "title": "Illumination Models & Shading Algorithms (Gouraud vs Phong)",
          "points": [
            "• Phong Illumination Model: Total Reflected Light = Ambient Light (constant background) + Diffuse Reflection (Lambert's Cosine Law: I_d = I_p · k_d · (N · L)) + Specular Reflection (shiny highlight: I_s = I_p · k_s · (R · V)^n, where n is shininess coefficient).",
            "• Shading Algorithms:",
            "  - Flat / Constant Shading: Calculates single illumination value per polygon; fast, exhibits noticeable Mach Band effect.",
            "  - Gouraud Shading (Intensity Interpolation): Calculates color intensities at polygon vertices and linearly interpolates intensities across polygon face. Smooths edges, but can miss specular highlights in the middle of polygon.",
            "  - Phong Shading (Normal Vector Interpolation): Linearly interpolates surface normal vectors across polygon face and recalculates illumination at EVERY individual pixel. Accurately renders specular highlights; computationally demanding."
          ]
        },
        {
          "title": "Java Memory Architecture & Garbage Collection Algorithms",
          "points": [
            "• JVM Memory Areas: Heap (Eden, Survivor S0/S1, Tenured/Old Gen), Stack (method call frames, local variables), Method Area/Metaspace (class metadata), Program Counter (PC).",
            "• Mark and Sweep: Stop-the-world phase identifying reachable objects from GC roots, followed by freeing unmarked memory blocks.",
            "• Generational Garbage Collection: Young generation collected frequently via fast Minor GC; Old generation collected via Major/Full GC."
          ]
        },
        {
          "title": "Anti-Aliasing Techniques in Computer Graphics",
          "points": [
            "• Aliasing Artifacts: Jagged stair-step edges (jaggies) resulting from undersampling high-frequency spatial detail on discrete pixel grids.",
            "• Supersampling (SSAA): Rendering scene at multiple times the display resolution and downsampling with box/Gaussian filter averaging.",
            "• Subpixel Anti-Aliasing: Exploiting physical Red-Green-Blue subpixel striping on LCD screens to effectively triple horizontal resolution."
          ]
        },
        {
          "title": "Parametric Curves: Hermite, Bezier & B-Spline Formulations",
          "points": [
            "• Bezier Curve: Defined by Bernstein polynomials: P(t) = ∑ B_(i,n)(t) * P_i for 0 ≤ t ≤ 1; curve lies strictly within the Convex Hull of control points.",
            "• Affine Invariance: Transforming control points transforms the entire curve identically.",
            "• B-Spline Advantage: Provides Local Control where moving one control point alters only neighboring curve segments rather than global curve."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Cohen-Sutherland 4-bit Code Order",
          "mnemonic": "TBRL: 'Top, Bottom, Right, Left' (Bit 3, 2, 1, 0)",
          "explanation": "Top (8 = 1000), Bottom (4 = 0100), Right (2 = 0010), Left (1 = 0001).",
          "proTip": "If code1 & code2 ≠ 0, line is GUARANTEED outside the window (trivial reject)."
        },
        {
          "title": "2D Rotation Matrix Sign Peg",
          "mnemonic": "Top row has MINUS sine: [cos, -sin; sin, cos]",
          "explanation": "Standard counter-clockwise rotation about origin.",
          "proTip": "For clockwise rotation by θ, replace θ with -θ (Top row becomes [cos, sin; -sin, cos])."
        },
        {
          "title": "Z-Buffer vs Back-Face Culling Peg",
          "mnemonic": "Z-Buffer = Image Space (Pixel by pixel) | Back-Face = Object Space",
          "explanation": "Z-Buffer complexity depends on screen resolution (pixels), not polygon count.",
          "proTip": "Back-face culling eliminates roughly 50% of opaque polygon faces in a single dot product test."
        },
        {
          "title": "Gouraud vs Phong Shading Shortcut",
          "mnemonic": "Gouraud = Interpolates COLOR | Phong = Interpolates NORMALS",
          "explanation": "Gouraud interpolates intensity at vertices; Phong interpolates normal vectors at every pixel.",
          "proTip": "Phong shading accurately renders specular highlights; Gouraud often misses them."
        },
        {
          "title": "Bresenham Decision Parameter",
          "mnemonic": "d_0 = 2Δy - Δx | If d < 0, only X steps; if d ≥ 0, both X and Y step",
          "explanation": "Integer math decision variable for line slope 0 ≤ m ≤ 1.",
          "proTip": "Eliminates all division and floating-point math in line drawing."
        },
        {
          "title": "Sutherland-Hodgman 4 Vertex Cases",
          "mnemonic": "In-In (V2) | In-Out (Intersect) | Out-Out (None) | Out-In (Intersect + V2)",
          "explanation": "Outputs for clipping polygon edges against boundary.",
          "proTip": "Only 'Out to In' yields TWO output vertices."
        }
      ]
    },
    {
      "id": "p2-u4",
      "unitNumber": 4,
      "name": "Database Management Systems (DBMS)",
      "icon": "🗄️",
      "theoryNotes": [
        {
          "title": "Three-Schema Architecture, Data Independence & Data Models",
          "points": [
            "• ANSI/SPARC Three-Schema Architecture:",
            "  1. Internal / Physical Level: Physical storage structures, access paths, indexing, data clustering.",
            "  2. Conceptual / Logical Level: Global community view describing what data is stored, entities, relationships, constraints.",
            "  3. External / View Level: Tailored sub-schemas describing customized views for specific end-user groups.",
            "• Data Independence:",
            "  - Logical Data Independence: Capacity to modify the conceptual schema without altering external schemas or application programs.",
            "  - Physical Data Independence: Capacity to modify the internal physical schema (indexes, storage) without altering the conceptual schema.",
            "• Data Models: Hierarchical (Tree structure, 1:N), Network (Graph structure, CODASYL, M:N), Relational (Codd 1970 - Tables/Relations), Object-Relational, NoSQL (Key-Value, Document, Columnar, Graph)."
          ]
        },
        {
          "title": "ER and Enhanced ER (EER) Modeling & Constraints",
          "points": [
            "• Entity Types: Strong Entity (independent existence, has a primary key) vs Weak Entity (existence-dependent on owner entity, lacks primary key, identified by Partial Key / Discriminator via Double Rectangle and Double Diamond identifying relationship).",
            "• Attributes: Simple vs Composite (e.g., Name: First, Last), Single-Valued vs Multi-Valued (Double Oval), Stored vs Derived (Dashed Oval - e.g., Age derived from DOB).",
            "• Cardinality Ratios: 1:1, 1:N, M:N. Participation Constraints: Total Participation (Double Line - existence dependency) vs Partial Participation (Single Line).",
            "• Enhanced ER (EER) Concepts: Generalization (Bottom-up synthesis of generalized entity) vs Specialization (Top-down breakdown). Disjointness Constraint (Disjoint 'd' vs Overlapping 'o') and Completeness Constraint (Total vs Partial specialization)."
          ]
        },
        {
          "title": "Relational Data Model, Constraints & Relational Algebra",
          "points": [
            "• Relational Constraints: Domain Constraint, Key Constraint (no two distinct tuples have identical candidate key values), Entity Integrity Constraint (Primary Key cannot be NULL), Referential Integrity Constraint (Foreign Key must either match a valid primary key in referenced relation or be completely NULL).",
            "• Relational Algebra Fundamental Operators (Turing-complete relational query language):",
            "  - Selection (σ_condition(R)): Filters rows satisfying boolean condition. Commutative.",
            "  - Projection (π_attributes(R)): Filters columns and automatically eliminates duplicate tuples.",
            "  - Union (R ∪ S), Set Difference (R - S), Cartesian Product (R × S): Require Union Compatibility (same arity and compatible domains).",
            "  - Rename (ρ): Renames relation and attributes.",
            "• Derived Operators: Natural Join (R ⋈ S - equality on common attributes, projection of single common copy), Theta Join, Equi-Join, Outer Joins (Left, Right, Full), Division Operator (R ÷ S - useful for queries containing 'FOR ALL / EVERY')."
          ]
        },
        {
          "title": "Relational Calculus: Tuple Relational Calculus (TRC) vs Domain Relational Calculus (DRC)",
          "points": [
            "• Tuple Relational Calculus (TRC): Non-procedural declarative query language specifying WHAT information is retrieved: { t | P(t) }, where t is a tuple variable and P(t) is a first-order formula with existential (∃) and universal (∀) quantifiers.",
            "• Domain Relational Calculus (DRC): Specifies queries over domain variables: { <x1, x2, ..., xn> | P(x1, x2, ..., xn) }.",
            "• Codd's Equivalence Theorem: Relational Algebra, Safe TRC, and Safe DRC are mathematically equivalent in expressive power.",
            "• Safety of Expressions: An expression in relational calculus is Safe if it yields a finite number of tuples and all values in the result come from the active domain of the database."
          ]
        },
        {
          "title": "SQL Declarative Language: DDL, DML, DCL, TCL & Subqueries",
          "points": [
            "• DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE (fast, deallocates pages, cannot be rolled back in standard SQL), RENAME.",
            "• DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE (can be rolled back, logs row operations).",
            "• DCL (Data Control Language): GRANT, REVOKE. TCL (Transaction Control): COMMIT, ROLLBACK, SAVEPOINT.",
            "• SQL Joins: INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, CROSS JOIN.",
            "• Subqueries: Correlated Subquery (inner query references column from outer query; executes once per outer row) vs Non-Correlated Subquery (independent, executes once).",
            "• Aggregates & Grouping: WHERE filters rows before aggregation; HAVING filters groups after GROUP BY aggregation."
          ]
        },
        {
          "title": "Functional Dependencies & Armstrong's Inference Axioms",
          "points": [
            "• Functional Dependency (FD): X → Y means values of attribute set X uniquely determine values of Y.",
            "• Armstrong's Axioms (Sound and Complete):",
            "  1. Reflexivity: If Y ⊆ X, then X → Y (Trivial FD).",
            "  2. Augmentation: If X → Y, then XZ → YZ for any Z.",
            "  3. Transitivity: If X → Y and Y → Z, then X → Z.",
            "• Secondary Rules: Decomposition (X → YZ ⟹ X → Y and X → Z), Union (X → Y and X → Z ⟹ X → YZ), Pseudo-transitivity (X → Y and WY → Z ⟹ WX → Z).",
            "• Attribute Closure (X+): Set of all attributes functionally determined by X under a given set of FDs F. Used to compute Candidate Keys and test equivalence of FD sets.",
            "• Minimal / Canonical Cover: Equivalent set of FDs containing no redundant FDs and no extraneous attributes on LHS."
          ]
        },
        {
          "title": "Relational Normalization: 1NF, 2NF, 3NF & BCNF",
          "points": [
            "• Candidate Key: Minimal superkey (no proper subset is a superkey). Prime Attribute = belongs to at least one candidate key; Non-Prime = belongs to no candidate key.",
            "• 1NF (First Normal Form): Every attribute value must be atomic (no multi-valued or composite attributes).",
            "• 2NF (Second Normal Form): In 1NF and contains NO Partial Dependency (No Proper Subset of Any Candidate Key → Non-Prime Attribute).",
            "• 3NF (Third Normal Form): In 2NF and contains NO Transitive Dependency. For every non-trivial FD X → Y: either X is a Superkey OR Y is a Prime Attribute.",
            "• BCNF (Boyce-Codd Normal Form): Strictly stronger than 3NF. For every non-trivial FD X → Y: X MUST be a Superkey.",
            "• Normal Form Inclusion: BCNF ⊂ 3NF ⊂ 2NF ⊂ 1NF."
          ]
        },
        {
          "title": "Advanced Normalization: 4NF, 5NF & Decomposition Properties",
          "points": [
            "• Multi-Valued Dependency (MVD: X ↠ Y): Attribute set Y is independent of attribute set Z for a given X.",
            "• 4NF (Fourth Normal Form): In BCNF and contains NO non-trivial multi-valued dependencies (for every X ↠ Y, X must be a superkey).",
            "• 5NF / Project-Join Normal Form (PJNF): In 4NF and contains no non-trivial Join Dependencies (JD).",
            "• Lossless-Join Decomposition (Non-Additive Join): Decomposition of R into R1 and R2 is lossless IF AND ONLY IF (R1 ∩ R2) is a superkey of R1 or R2.",
            "• Dependency Preservation: Decomposition preserves dependencies if the union of closures of functional dependencies in decomposed relations equals the closure of original FDs: (F1 ∪ F2)+ = F+. 3NF is ALWAYS achievable with both Lossless Join and Dependency Preservation. BCNF guarantees Lossless Join, but may NOT preserve dependencies."
          ]
        },
        {
          "title": "Transaction Processing, ACID Properties & Schedules",
          "points": [
            "• ACID Properties:",
            "  - Atomicity: 'All or Nothing'. Transaction executes completely or is rolled back completely. Handled by Recovery Manager using Write-Ahead Logging (WAL).",
            "  - Consistency: Execution preserves database invariants and integrity constraints. Handled by application programmer and DBMS constraints.",
            "  - Isolation: Intermediate states of concurrent transactions are invisible to each other. Handled by Concurrency Control.",
            "  - Durability: Committed updates persist permanently even through catastrophic system crashes. Handled by Redo log.",
            "• Transaction States: Active → Partially Committed (after final statement) → Committed (after successful write to log) OR Active → Failed → Aborted (Rolled back).",
            "• Schedules: Serial Schedule (no interleaved operations, always consistent) vs Non-Serial Schedule (concurrently interleaved)."
          ]
        },
        {
          "title": "Conflict & View Serializability & Precedence Graphs",
          "points": [
            "• Conflicting Operations: Two operations conflict if they belong to different transactions, operate on the same data item, and at least one is a WRITE (W-R, R-W, W-W).",
            "• Conflict Equivalence: Schedules S1 and S2 are conflict equivalent if S1 can be transformed into S2 by swapping non-conflicting adjacent operations.",
            "• Conflict Serializability: A schedule is conflict serializable if it is conflict equivalent to some serial schedule.",
            "• Precedence Graph (Serialization Graph): Directed graph where nodes are transactions and directed edge Ti → Tj exists if an operation of Ti conflicts with and precedes an operation of Tj. Theorem: A schedule is Conflict Serializable IF AND ONLY IF its precedence graph contains NO CYCLES.",
            "• View Serializability: Weaker, more general condition based on Read-From and Final-Write relations. Every conflict serializable schedule is view serializable, but not vice versa. Determining view serializability is NP-Complete (solvable in polynomial time if no blind writes exist).",
            "• Recoverable Schedule: For every transaction Tj that reads data written by Ti, Ti must commit BEFORE Tj commits. Cascadeless Schedule: Transactions read ONLY committed data (prevents cascading rollbacks). Strict Schedule: Transactions neither read nor write data until previous writer commits."
          ]
        },
        {
          "title": "Concurrency Control: Two-Phase Locking (2PL), Timestamp & Deadlocks",
          "points": [
            "• Lock Types: Shared Lock (S - multiple transactions can read concurrently) vs Exclusive Lock (X - single transaction exclusive read/write).",
            "• Basic Two-Phase Locking (2PL): Growing Phase (locks acquired, none released) and Shrinking Phase (locks released, none acquired). Lock Point = end of growing phase. Guarantees Conflict Serializability, but can suffer from Cascading Aborts and Deadlocks.",
            "• Strict 2PL: Releases all Exclusive (X) locks ONLY after transaction commits or aborts. Prevents cascading rollbacks (Cascadeless and Strict).",
            "• Rigorous 2PL: Holds ALL Shared (S) and Exclusive (X) locks until commit/abort. Guarantees serial execution order.",
            "• Timestamp Ordering Protocol (Thomas Write Rule): Assigns unique monotonic timestamp TS(Ti). Ensures conflict serializability without deadlocks by aborting and restarting conflicting younger transactions. Thomas Write Rule allows out-of-order writes if value is obsolete (generates view serializable schedules).",
            "• Deadlock Handling in DBMS: Wait-For Graph (cycle indicates deadlock). Prevention: Wait-Die (Non-preemptive: older waits, younger dies) vs Wound-Wait (Preemptive: older wounds/preempts younger, younger waits)."
          ]
        },
        {
          "title": "Indexing Architectures: B-Trees, B+ Trees & Data Warehousing",
          "points": [
            "• Index Classification: Primary Index (ordered key on ordered file), Clustering Index (ordered non-key on ordered file), Secondary Index (dense/sparse index on unordered file).",
            "• B-Tree: Balanced search tree where each node holds search keys and record pointers. Minimizes disk I/O.",
            "• B+ Tree: Data record pointers stored ONLY at leaf nodes; internal nodes store only keys and child block pointers as routing index. Leaf nodes are chained into a doubly linked list for fast range traversals. Higher fan-out, lower tree height.",
            "• Order of B+ Tree (p): Maximum block pointers in internal node: p × P_block + (p - 1) × Key_Size ≤ Block_Size.",
            "• Data Warehousing: Star Schema (central fact table joined directly to unnormalized dimension tables) vs Snowflake Schema (dimension tables are normalized into sub-tables). OLAP Operations: Roll-Up (aggregation), Drill-Down (finer grain), Slice (single dimension slice), Dice (multi-dimensional sub-cube), Pivot (rotation)."
          ]
        },
        {
          "title": "Multivalued Dependencies (MVD) & Fourth/Fifth Normal Forms (4NF & 5NF)",
          "points": [
            "• Multivalued Dependency (X ->> Y): Occurs when presence of Y is independent of other attributes Z given X (trivial if Y ⊆ X or X ∪ Y = R).",
            "• Fourth Normal Form (4NF): In BCNF and for every non-trivial MVD X ->> Y, X must be a Super Key.",
            "• Fifth Normal Form (5NF / Project-Join Normal Form): Relation cannot be non-loss decomposed into any number of smaller projection schemas without losing information."
          ]
        },
        {
          "title": "Timestamp-Based Concurrency Control & Thomas Write Rule",
          "points": [
            "• Basic Timestamp Ordering (TO): Read(Q) permitted if TS(T) ≥ W-timestamp(Q); Write(Q) permitted if TS(T) ≥ R-timestamp(Q) and TS(T) ≥ W-timestamp(Q).",
            "• Thomas Write Rule: If TS(T) < W-timestamp(Q), rather than aborting T, simply ignore and discard the stale Write operation (generates view serializable schedules).",
            "• Deadlock Free: Timestamp ordering protocols are inherently deadlock-free because transactions never wait in blocking cycles."
          ]
        },
        {
          "title": "Distributed Databases, Replication & Two-Phase Commit (2PC)",
          "points": [
            "• ACID across Nodes: Ensuring distributed atomic transactions across multiple network database partitions.",
            "• 2PC Protocol: Phase 1 (Prepare/Vote request sent by Coordinator; Cohorts reply VOTE_COMMIT or VOTE_ABORT); Phase 2 (Global Commit or Global Abort broadcast).",
            "• CAP Theorem (Brewer): A distributed data store can simultaneously guarantee at most two out of three: Consistency, Availability, and Partition Tolerance."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Normal Form 10-Second Test",
          "mnemonic": "2NF = No Partials | 3NF = Superkey or Prime | BCNF = Left Side MUST be Superkey!",
          "explanation": "Look at each FD X → Y: If any non-prime depends on part of a key, fails 2NF. If X is not superkey and Y is non-prime, fails 3NF.",
          "proTip": "If all attributes in a relational schema are Prime, the relation is AUTOMATICALLY in 3NF!"
        },
        {
          "title": "Precedence Graph Serialization Rule",
          "mnemonic": "No Cycle = Serializable | Cycle = Not Serializable!",
          "explanation": "Draw directed edges for (W-R, R-W, W-W) conflicts. If topological sort exists, it is serializable.",
          "proTip": "Every Conflict Serializable schedule is View Serializable, but not vice versa."
        },
        {
          "title": "B+ Tree Leaf Node Rule",
          "mnemonic": "Data Pointers ONLY at Leaf Nodes!",
          "explanation": "Internal nodes in a B+ tree never hold record data pointers, enabling maximum branching factor.",
          "proTip": "Range queries (BETWEEN x AND y) are vastly superior in B+ trees due to linked leaf nodes."
        },
        {
          "title": "Lossless Join 3-Condition Check",
          "mnemonic": "(R1 ∩ R2) MUST be a Superkey of R1 OR R2!",
          "explanation": "Common attribute set must uniquely identify at least one of the decomposed relations.",
          "proTip": "If common attributes form a candidate key of R1, the decomposition is guaranteed lossless."
        },
        {
          "title": "Wait-Die vs Wound-Wait Rule",
          "mnemonic": "Wait-Die (Older Waits, Younger Dies) | Wound-Wait (Older Wounds, Younger Waits)",
          "explanation": "Deadlock prevention protocols based on timestamps.",
          "proTip": "In Wound-Wait, older transactions never wait; they preempt younger transactions immediately."
        },
        {
          "title": "Schedules Hierarchy Peg",
          "mnemonic": "Serial ⊂ Strict ⊂ Cascadeless ⊂ Recoverable",
          "explanation": "Inclusion hierarchy of transaction schedule recovery properties.",
          "proTip": "Strict 2PL produces schedules that are both conflict serializable and strict."
        }
      ]
    },
    {
      "id": "p2-u5",
      "unitNumber": 5,
      "name": "System Software & Operating System",
      "icon": "⚙️",
      "theoryNotes": [
        {
          "title": "System Software: Assemblers, Loaders, Linkers & Macro Processors",
          "points": [
            "• Two-Pass Assembler: Pass 1 defines symbols and builds the Symbol Table (records labels and Location Counter LC values), determines storage lengths; Pass 2 generates machine opcodes, translates operands using symbol table, resolves external references, and creates object module.",
            "• Loaders & Linkers: Linker combines multiple independent object modules and libraries, resolving cross-module external symbol references to output a single executable binary. Loader loads executable into RAM and initiates execution. Types: Absolute Loader (fixed load origin), Relocating Loader (modifies relocatable addresses via relocation bits/tables), Dynamic Linking (loads shared library DLLs/.so on demand at runtime).",
            "• Macro Processors: Performs pre-processing string substitution: expands macro definitions and macro calls with actual arguments before assembly."
          ]
        },
        {
          "title": "OS Architecture, System Calls & Process Management (PCB)",
          "points": [
            "• OS Kernel Architectures: Monolithic Kernel (all OS services run in single kernel address space; fast, vulnerable to driver crashes - Linux, Unix) vs Microkernel (only minimal IPC, memory management, scheduling in kernel; servers run in user space; modular, message-passing overhead - Mach, QNX).",
            "• Dual-Mode Operation: User Mode (restricted instructions) and Kernel / Supervisor Mode (privileged instructions, I/O access). Mode switch triggered by System Calls (Software Interrupt / Trap).",
            "• Process Control Block (PCB): Process state, PID, Program Counter (PC), CPU registers, CPU scheduling info, memory management info, accounting info, I/O status info.",
            "• Context Switching: Hardware and OS state-saving overhead of stopping running process and loading PCB of next scheduled process."
          ]
        },
        {
          "title": "CPU Scheduling Algorithms: Preemptive vs Non-Preemptive",
          "points": [
            "• Scheduling Criteria: CPU Utilization, Throughput (processes completed per time unit), Turnaround Time (Completion Time - Arrival Time), Waiting Time (Turnaround Time - Burst Time), Response Time (First response - Arrival Time).",
            "• Non-Preemptive Scheduling:",
            "  - FCFS (First-Come First-Served): Suffers from Convoy Effect (short jobs queued behind single long CPU-bound job).",
            "  - SJF (Shortest Job First): Optimal minimum average waiting time among all non-preemptive algorithms. Suffers from Starvation of long burst jobs.",
            "• Preemptive Scheduling:",
            "  - SRTF (Shortest Remaining Time First): Preemptive SJF. Re-evaluates remaining times upon new arrivals.",
            "  - Round Robin (RR): Time-quantum (q) based. Fair, low response time. If q is very large, RR degenerates to FCFS; if q is tiny, excessive context-switch overhead.",
            "  - Priority Scheduling: Preemptive or non-preemptive. Suffers from starvation (solved by Aging: gradually increasing priority of waiting processes).",
            "  - Multi-Level Feedback Queue (MLFQ): Multiple priority queues with dynamic quantum; I/O-bound jobs stay at top; CPU-bound jobs sink to lower priority queues."
          ]
        },
        {
          "title": "Threads & Multithreading Models",
          "points": [
            "• Process vs Thread: Process is heavy-weight with independent address space; Thread is light-weight unit of CPU utilization within a process sharing code, data, and open files, but having private PC, register set, and stack.",
            "• Multithreading Models:",
            "  - Many-to-One: Many user-level threads mapped to single kernel thread. Managed entirely in user space; fast switching; blocking system call blocks entire process.",
            "  - One-to-One: Each user thread mapped to a kernel thread (Linux, Windows). True concurrency on multicore systems; kernel resource overhead.",
            "  - Many-to-Many: Multiplexes many user threads over smaller/equal number of kernel threads."
          ]
        },
        {
          "title": "Process Synchronization, Critical Section & Classical IPC Problems",
          "points": [
            "• Critical Section Problem (3 Mandatory Criteria):",
            "  1. Mutual Exclusion: If process Pi is executing in its critical section, no other processes can execute in their critical sections.",
            "  2. Progress: If no process is in critical section, only processes not in their remainder section can participate in selecting next entrant, and selection cannot be postponed indefinitely.",
            "  3. Bounded Waiting: A bound must exist on the number of times other processes enter critical section after a process has made a request.",
            "• Peterson's Solution: Two-process software synchronization algorithm satisfying all 3 criteria using `flag[2]` and `turn`.",
            "• Hardware Synchronization: Atomic TestAndSet and CompareAndSwap instructions.",
            "• Semaphores (Dijkstra): Integer variable accessed only via atomic operations wait() / P() (decrements; blocks if S ≤ 0) and signal() / V() (increments; unblocks waiting process). Counting Semaphore vs Binary Semaphore (Mutex).",
            "• Classical IPC Problems: Bounded-Buffer (Producer-Consumer), Readers-Writers (Reader priority vs Writer priority), Dining Philosophers (5 philosophers, 5 chopsticks; deadlock avoided by asymmetric pickup or limiting to 4 diners)."
          ]
        },
        {
          "title": "Deadlocks: Necessary Conditions, Resource Allocation Graph & Banker's Algorithm",
          "points": [
            "• 4 Coffman Necessary Conditions (Deadlock occurs iff ALL 4 hold simultaneously):",
            "  1. Mutual Exclusion: Non-shareable resource.",
            "  2. Hold and Wait: Process holding at least one resource is waiting for additional resources held by others.",
            "  3. No Preemption: Resources cannot be forcibly taken; released only voluntarily by holding process.",
            "  4. Circular Wait: Closed chain of processes P0 → P1 → ... → Pn → P0 waiting for resources.",
            "• Resource Allocation Graph (RAG): Directed graph with Process nodes and Resource nodes (with dot instances). Request edge (P → R) and Assignment edge (R → P). If RAG has NO cycles ⟹ NO deadlock. If single instance per resource and cycle exists ⟹ DEADLOCK exists.",
            "• Deadlock Handling Strategies:",
            "  - Deadlock Prevention: Invalidate at least ONE of the 4 Coffman conditions (e.g., circular wait prevented by total resource ordering).",
            "  - Deadlock Avoidance (Banker's Algorithm - Dijkstra): Dynamic state evaluation ensuring system stays in a Safe State (exists a safe sequence where remaining requests can be satisfied). Matrices: Allocation, Max, Available, Need = Max - Allocation.",
            "  - Deadlock Detection & Recovery: Wait-For Graph (single instance); Process termination or resource preemption."
          ]
        },
        {
          "title": "Memory Management: Contiguous Allocation & Fragmentation",
          "points": [
            "• Base and Limit Registers: Provide hardware logical address protection.",
            "• Contiguous Allocation Strategies:",
            "  - First-Fit: Allocates first available hole that is big enough. Fast.",
            "  - Best-Fit: Allocates smallest hole that is big enough. Produces smallest leftover fragments.",
            "  - Worst-Fit: Allocates largest available hole. Produces largest leftover fragment.",
            "• Fragmentation Types:",
            "  - Internal Fragmentation: Allocated memory block is larger than requested memory; unused memory inside the allocated partition.",
            "  - External Fragmentation: Total free memory space is sufficient to satisfy request, but is non-contiguous. Solved by Compaction (relocatable dynamic partitions) or Paging."
          ]
        },
        {
          "title": "Paging, Multi-Level Page Tables & Inverted Page Tables",
          "points": [
            "• Paging (Non-Contiguous Memory Allocation): Physical memory divided into fixed-sized blocks called Frames; Logical memory divided into same-sized blocks called Pages. Eliminates external fragmentation completely.",
            "• Address Translation: CPU generates Logical Address = Page Number (p) + Page Offset (d). Page Table maps p → Frame Number (f). Physical Address = Frame Number (f) + Offset (d). Offset bits d = log2(Page_Size).",
            "• Translation Lookaside Buffer (TLB): High-speed hardware associative cache for page table entries.",
            "  - Effective Memory Access Time (EMAT): EMAT = Hit_Rate × (t_TLB + t_RAM) + (1 - Hit_Rate) × (t_TLB + 2 × t_RAM).",
            "• Multi-Level Paging: Page tables of large address spaces are themselves paged (Hierarchical Paging).",
            "• Inverted Page Table: Single global table containing one entry per physical memory frame rather than per logical page; indexed by frame number. Drastically reduces memory footprint."
          ]
        },
        {
          "title": "Virtual Memory: Demand Paging & Page Replacement Algorithms",
          "points": [
            "• Demand Paging: Pages brought into RAM only when referenced during execution. Valid-Invalid bit in page table indicates presence in RAM.",
            "• Page Fault: Trap raised when CPU references an invalid page. OS handles page fault by finding free frame, reading page from swap disk, updating page table, and restarting instruction.",
            "• Page Replacement Algorithms:",
            "  - FIFO (First-In First-Out): Replaces oldest page. Suffers from Belady's Anomaly (allocating MORE frames can cause MORE page faults!).",
            "  - Optimal (OPT / MIN / Belady's Optimal): Replaces page that will not be used for longest future duration. Guarantees lowest page faults; theoretical benchmark.",
            "  - LRU (Least Recently Used): Replaces page not used for longest past period. Stack algorithm; immune to Belady's anomaly.",
            "  - Second-Chance / Clock Algorithm: Approximates LRU using reference bit (0 or 1).",
            "  - LFU (Least Frequently Used) vs MFU (Most Frequently Used)."
          ]
        },
        {
          "title": "Thrashing, Working-Set Model & Page Fault Frequency",
          "points": [
            "• Thrashing: A condition where CPU spends more time swapping pages in and out than executing instructions. Occurs when degree of multiprogramming is too high and sum of working sets exceeds physical memory.",
            "• Working-Set Model (Peter Denning): Working set W(t, Δ) is the set of pages referenced by process in most recent Δ time units (working-set window). If total demand D = ∑ |W_i| > Total RAM frames, thrashing occurs; OS suspends a process.",
            "• Page Fault Frequency (PFF): Dynamic frame allocation setting upper and lower threshold bounds on process page fault rates."
          ]
        },
        {
          "title": "Storage Management & Disk Scheduling Algorithms",
          "points": [
            "• Magnetic Disk Physical Geometry: Platters, Tracks, Cylinders, Sectors (typically 512B or 4KB).",
            "• Disk Access Time: Seek Time (head to target cylinder - largest delay) + Rotational Latency (disk platter spins sector under head: Average Latency = 1 / (2 × RPM) seconds) + Transfer Time.",
            "• Disk Scheduling Algorithms (to minimize total head seek distance):",
            "  - FCFS: Fair, simple, high head movements.",
            "  - SSTF (Shortest Seek Time First): Services request with minimum seek time from current position. Greedy; optimal seek time; causes Starvation of distant cylinders.",
            "  - SCAN (Elevator): Head moves in one direction servicing all requests until it hits the END/BOUNDARY of the disk, then reverses direction.",
            "  - C-SCAN (Circular SCAN): Moves in one direction to end, then returns directly to beginning WITHOUT servicing requests on return trip. Provides uniform wait times.",
            "  - LOOK & C-LOOK: Like SCAN and C-SCAN, but head only goes as far as the FINAL pending request in that direction, reversing immediately without touching disk boundary."
          ]
        },
        {
          "title": "File System Implementation: Allocation Methods & Free Space Management",
          "points": [
            "• File Allocation Methods:",
            "  - Contiguous Allocation: Each file occupies contiguous set of blocks. Best read performance; requires knowing file size in advance; suffers from external fragmentation.",
            "  - Linked Allocation: Each file is a linked list of disk blocks containing pointer to next block. Zero external fragmentation; no direct/random access; pointer overhead (FAT - File Allocation Table stores pointers in memory table).",
            "  - Indexed Allocation (UNIX Inode): Each file has index block containing pointers to all its data blocks. Direct access, no external fragmentation. Combined Inode: Direct blocks (12) + Single Indirect + Double Indirect + Triple Indirect pointers.",
            "• Free Space Management: Bit Vector / Bitmap (1 bit per block: 0 = free, 1 = allocated), Linked Free List, Grouping, Counting."
          ]
        },
        {
          "title": "Critical Section Synchronization: Peterson's & Bakery Algorithms",
          "points": [
            "• Peterson's Algorithm: Software solution for 2 processes using shared variables `flag[2]` and `turn`; satisfies Mutual Exclusion, Progress, and Bounded Waiting.",
            "• Lamport's Bakery Algorithm: Generalizes critical section solution to N concurrent processes assigning ascending numbered lottery tokens.",
            "• Hardware Instructions: TestAndSet and CompareAndSwap executing atomic read-modify-write memory cycles."
          ]
        },
        {
          "title": "Thrashing Prevention, Page Fault Frequency & Working Set Model",
          "points": [
            "• Thrashing Definition: High paging activity where CPU spends more time swapping pages in and out than executing instructions (CPU utilization plummets).",
            "• Working Set Model (Peter Denning): Set of pages referenced by a process during most recent time window Δ; if total demand exceeds available frames, suspend a process.",
            "• Page Fault Frequency (PFF): Dynamically assigning additional frames if page fault rate exceeds upper threshold; trimming frames if below lower threshold."
          ]
        },
        {
          "title": "File System Structure: Contiguous, Linked & Indexed Allocation (i-nodes)",
          "points": [
            "• Contiguous Allocation: Fast sequential access; suffers from external fragmentation and difficulty in file size dynamic expansion.",
            "• Linked Allocation: Pointer in each block to next; no external fragmentation; slow random access; pointer overhead.",
            "• Indexed Allocation (UNIX i-nodes): Dedicated index block contains direct block pointers, single indirect pointer, double indirect, and triple indirect pointers."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Deadlock 4 Conditions Mnemonic",
          "mnemonic": "MHNC: 'Mutual exclusion, Hold & wait, No preemption, Circular wait'",
          "explanation": "Break ANY one condition to prevent deadlocks entirely.",
          "proTip": "Circular wait is prevented by imposing a strict total ordering on all resource types."
        },
        {
          "title": "Belady's Anomaly Immunity Rule",
          "mnemonic": "LRU and Optimal NEVER suffer from Belady's Anomaly!",
          "explanation": "Stack algorithms satisfy the inclusion property. Only FIFO and Second-Chance suffer from Belady's anomaly.",
          "proTip": "If question asks 'Which algorithm exhibits Belady's anomaly?', choose FIFO."
        },
        {
          "title": "SCAN vs LOOK Disk Boundary Rule",
          "mnemonic": "SCAN hits the WALL (Boundary); LOOK stops at the LAST Request!",
          "explanation": "SCAN travels all the way to cylinder 0 or Max; LOOK turns around immediately at last cylinder.",
          "proTip": "LOOK saves track traversal overhead compared to SCAN."
        },
        {
          "title": "Rotational Latency Formula",
          "mnemonic": "Average Latency = 1 / (2 × RPS) seconds = 30,000 / RPM milliseconds",
          "explanation": "Disk rotates half a turn on average to position sector under read/write head.",
          "proTip": "At 7200 RPM, average rotational latency = 30,000 / 7200 ≈ 4.17 ms."
        },
        {
          "title": "EMAT Formula with TLB",
          "mnemonic": "EMAT = h × (t_tlb + t_mem) + (1 - h) × (t_tlb + 2 × t_mem)",
          "explanation": "On TLB miss, two memory accesses are needed (page table + actual operand).",
          "proTip": "For 2-level paging, miss penalty has 3 memory accesses!"
        },
        {
          "title": "SJF Optimality Peg",
          "mnemonic": "SJF gives MINIMUM Average Waiting Time!",
          "explanation": "Mathematically proven optimal average wait time for non-preemptive schedules.",
          "proTip": "Shortest Remaining Time First (SRTF) gives optimal waiting time for preemptive schedules."
        }
      ]
    },
    {
      "id": "p2-u6",
      "unitNumber": 6,
      "name": "Software Engineering",
      "icon": "🏗️",
      "theoryNotes": [
        {
          "title": "Software Process Models: Waterfall, Prototyping, RAD & V-Model",
          "points": [
            "• Classical Waterfall Model: Linear-sequential, phase containment. Systematic, rigid; no working software until late; strictly unsuitable for projects with volatile requirements.",
            "• Prototyping Model: Working mock-up developed rapidly for early customer evaluation to elicit and clarify ambiguous user requirements.",
            "• RAD (Rapid Application Development): Component-based rapid development model emphasizing short cycle times (60-90 days) using visual CASE tools and parallel modular teams.",
            "• V-Model: Demonstrates explicit relationship between Verification phases (Left wing: Requirements → System Design → Architecture → Module Design) and Validation testing phases (Right wing: Unit Testing → Integration Testing → System Testing → Acceptance Testing)."
          ]
        },
        {
          "title": "Evolutionary & Risk-Driven Models: Spiral Model (Barry Boehm)",
          "points": [
            "• Spiral Model (Barry Boehm): Evolutionary, iterative software process model characterized by explicit Risk Analysis at every cycle.",
            "• 4 Quadrants per Spiral (Counter-Clockwise):",
            "  1. Objective Setting: Determine objectives, alternatives, and operational constraints.",
            "  2. Risk Assessment & Resolution: Identify risks (technical, financial, management) and evaluate alternatives via prototyping/simulation.",
            "  3. Development & Validation: Engineering of the next-level product.",
            "  4. Planning Next Phase: Review progress and plan the next spiral iteration.",
            "• Applicability: Best suited for large, complex, expensive, high-risk mission-critical systems."
          ]
        },
        {
          "title": "Agile Methodologies: Agile Manifesto, Scrum & Kanban",
          "points": [
            "• 4 Core Values of Agile Manifesto (2001): 1. Individuals and interactions over processes and tools, 2. Working software over comprehensive documentation, 3. Customer collaboration over contract negotiation, 4. Responding to change over following a plan.",
            "• Scrum Framework: Iterative development organized in time-boxed Sprints (2-4 weeks).",
            "  - Scrum Roles: Product Owner (manages Product Backlog, represents customer), Scrum Master (servant-leader, facilitates ceremonies, removes blockers), Development Team (cross-functional, self-organizing).",
            "  - Scrum Artifacts: Product Backlog (prioritized user stories), Sprint Backlog (selected stories for sprint), Increment, Burndown Chart (plots remaining effort vs time).",
            "  - Scrum Ceremonies: Sprint Planning, Daily Standup (15 min: what done yesterday, what today, any impediments), Sprint Review, Sprint Retrospective.",
            "• Extreme Programming (XP): Pair programming, test-driven development (TDD), continuous integration, small releases."
          ]
        },
        {
          "title": "Requirements Engineering & IEEE 830 SRS Document Standards",
          "points": [
            "• Requirements Engineering Process: Inception → Elicitation (interviews, workshops, questionnaires) → Elaboration → Negotiation → Specification → Validation.",
            "• Functional vs Non-Functional Requirements: Functional = What the software MUST do (inputs, processing algorithms, outputs); Non-Functional = Quality attributes and constraints (performance, security, usability, reliability, scalability).",
            "• IEEE 830 Characteristics of Quality SRS: Correct, Unambiguous (single interpretation), Complete, Consistent, Ranked for importance/stability, Verifiable / Testable, Modifiable, Traceable (forward and backward traceability matrix)."
          ]
        },
        {
          "title": "Software Architectural Design: Cohesion Hierarchy (Best to Worst)",
          "points": [
            "• Cohesion: Degree of functional relatedness and focus of elements within a single software module. Desirable Goal: HIGH Cohesion.",
            "• 7 Cohesion Levels (Highest / Best to Lowest / Worst):",
            "  1. Functional Cohesion (Best): All elements contribute toward execution of a single well-defined task (e.g., compute_cosine()).",
            "  2. Sequential Cohesion: Output data of one operation serves as direct input to the next operation.",
            "  3. Communicational Cohesion: Operations operate on the same input data or produce the same output data structure.",
            "  4. Procedural Cohesion: Operations are grouped because they execute in a specific sequential order.",
            "  5. Temporal Cohesion: Operations are grouped together because they execute at the same time (e.g., system startup initialization).",
            "  6. Logical Cohesion: Operations perform logically similar activities (e.g., an error-handling module handling all printer, disk, network errors).",
            "  7. Coincidental Cohesion (Worst): Operations have no meaningful relationship to each other (e.g., utility module grouping unrelated functions)."
          ]
        },
        {
          "title": "Software Architectural Design: Coupling Hierarchy (Best to Worst)",
          "points": [
            "• Coupling: Measure of the degree of interdependence between separate software modules. Desirable Goal: LOW / LOOSE Coupling.",
            "• 6 Coupling Levels (Lowest / Best to Highest / Worst):",
            "  1. Data Coupling (Best): Modules communicate entirely through simple scalar data parameters (e.g., passing int, float).",
            "  2. Stamp Coupling: Modules share a composite data structure (record/struct), but each module only uses a subset of fields.",
            "  3. Control Coupling: One module passes a control flag that explicitly directs the internal execution logic of another module.",
            "  4. External Coupling: Modules share external communication formats, protocols, or device interfaces.",
            "  5. Common Coupling: Multiple modules share and read/write global data variables (uncontrolled side-effects).",
            "  6. Content / Pathological Coupling (Worst): One module directly accesses, branches into, or modifies the internal code/data of another module."
          ]
        },
        {
          "title": "Software Metrics: Function Point (FP) Analysis (Albrecht)",
          "points": [
            "• Function Point Analysis (Albrecht 1979): Technology-independent software size estimation based on delivered functional user requirements.",
            "• 5 Information Domain Characteristics (Counted as Simple, Average, or Complex):",
            "  1. External Inputs (EI): Data entering system from outside to update internal files.",
            "  2. External Outputs (EO): Processed data leaving system to user (reports, bills).",
            "  3. External Inquiries (EQ): Input-output combination retrieving data without updating files.",
            "  4. Internal Logical Files (ILF): User-identifiable groups of logical data maintained internally inside system boundaries.",
            "  5. External Interface Files (EIF): Files maintained by another application referenced by system.",
            "• FP Formula: Unadjusted Function Points (UFP) = ∑ (Count × Weight). FP = UFP × [0.65 + 0.01 × ∑(Fi)], where ∑(Fi) is the sum of 14 General System Characteristics (Complexity Adjustment Factor CAF ranges from 0.65 to 1.35)."
          ]
        },
        {
          "title": "COCOMO Cost Estimation Models (Barry Boehm)",
          "points": [
            "• Constructive Cost Model (COCOMO): Empirical model predicting Effort (Person-Months PM) and Development Time (Months T) based on size in KLOC (Kilo Lines of Code).",
            "• Basic COCOMO Formula: Effort E = a × (KLOC)^b; Time T = c × (E)^d.",
            "• 3 Software Development Modes:",
            "  1. Organic Mode: Small, experienced teams working in familiar, relaxed software environments with stable requirements (a = 2.4, b = 1.05, c = 2.5, d = 0.38).",
            "  2. Semi-Detached Mode: Medium-sized teams with mixed experience working on moderately complex projects with mixed requirements (a = 3.0, b = 1.12, c = 2.5, d = 0.35).",
            "  3. Embedded Mode: Highly constrained, complex mission-critical systems embedded in hardware with tight regulations (a = 3.6, b = 1.20, c = 2.5, d = 0.32).",
            "• Intermediate & Detailed COCOMO: Incorporates 15 Cost Drivers (Effort Multipliers EAF) covering product, hardware, personnel, and project attributes."
          ]
        },
        {
          "title": "Software Testing Strategies: Black-Box vs White-Box Testing",
          "points": [
            "• Verification ('Are we building the product right?') vs Validation ('Are we building the right product?').",
            "• Black-Box Testing (Functional / Specification-Based): Tests software without knowledge of internal code logic.",
            "  - Equivalence Class Partitioning: Divides input domain into valid and invalid partitions; test cases derived from each partition.",
            "  - Boundary Value Analysis (BVA): Tests boundary values of input partitions (min, min+, nominal, max-, max) where bugs disproportionately cluster.",
            "• White-Box Testing (Structural / Glass-Box): Tests internal procedural logic, paths, conditions.",
            "  - Statement Coverage: Every executable statement executed at least once.",
            "  - Branch / Decision Coverage: Every decision branch (True and False) evaluated at least once.",
            "  - Basis Path Testing (Tom McCabe): Derives independent execution paths from Control Flow Graph (CFG)."
          ]
        },
        {
          "title": "McCabe's Cyclomatic Complexity & Testing Levels",
          "points": [
            "• Cyclomatic Complexity V(G): Quantitative measure of the number of linearly independent paths through program source code.",
            "• 3 Equivalent Calculation Formulas:",
            "  1. Graph Formula: V(G) = E - N + 2P (where E = Edges, N = Nodes, P = Connected components; for single program P = 1 ⟹ V(G) = E - N + 2).",
            "  2. Predicate Formula: V(G) = Number of Predicate Nodes (Decision points: if, while, for) + 1.",
            "  3. Region Formula: V(G) = Number of Enclosed Regions + 1 (including unbounded outer region).",
            "• Testing Hierarchy: Unit Testing (individual modules) → Integration Testing (combining modules: Top-Down using Stubs, Bottom-Up using Drivers, Big-Bang) → System Testing (entire integrated system: Stress, Load, Performance) → Acceptance Testing (Alpha by internal users, Beta by external end-users in real environment)."
          ]
        },
        {
          "title": "Software Quality Models & CMMI Maturity Levels",
          "points": [
            "• McCall's Quality Factors: 11 factors grouped into 3 perspectives: Product Operation (Correctness, Reliability, Efficiency, Integrity, Usability), Product Revision (Maintainability, Flexibility, Testability), Product Transition (Portability, Reusability, Interoperability).",
            "• CMMI 5 Process Maturity Levels (Carnegie Mellon SEI):",
            "  1. Initial (Level 1): Ad-hoc, chaotic, heroic efforts, unpredictable cost and schedule.",
            "  2. Managed / Repeatable (Level 2): Basic project management established; requirements, costs, schedules tracked at project level.",
            "  3. Defined (Level 3): Organizational standard processes documented and standardized across entire company.",
            "  4. Quantitatively Managed (Level 4): Process and product quality quantitatively measured, controlled, and predicted using statistical metrics.",
            "  5. Optimizing (Level 5): Continuous process improvement through innovative technological and procedural changes."
          ]
        },
        {
          "title": "Software Maintenance Types & Re-Engineering",
          "points": [
            "• 4 Types of Software Maintenance (Lientz & Swanson):",
            "  1. Corrective Maintenance (20%): Fixing latent residual bugs and defects reported by users.",
            "  2. Adaptive Maintenance (25%): Modifying software to adapt to changes in environmental context (OS upgrade, new hardware, new legal tax rules).",
            "  3. Perfective Maintenance (50% - Largest effort!): Enhancing performance, adding new user features, improving documentation.",
            "  4. Preventive Maintenance / Software Re-engineering (5%): Restructuring and updating software to prevent future problems (code refactoring).",
            "• Reverse Engineering: Analyzing existing target system to recover high-level abstractions, architecture, and design specifications."
          ]
        },
        {
          "title": "Software Maintenance Types: Corrective, Adaptive, Perfective, Preventive",
          "points": [
            "• Corrective Maintenance (approx 20%): Diagnosing and fixing latent residual bugs and defects discovered during production deployment.",
            "• Adaptive Maintenance (approx 25%): Modifying software to accommodate changes in runtime environment, OS, hardware, or regulatory statutes.",
            "• Perfective Maintenance (approx 50%): Implementing new user feature enhancements, improving performance, and refining user interface.",
            "• Preventive Maintenance (approx 5%): Refactoring code and updating documentation to forestall future obsolescence and maintainability decay."
          ]
        },
        {
          "title": "Software Risk Management & The RMMM Plan",
          "points": [
            "• RMMM Framework: Risk Mitigation (preventative avoidance), Monitoring (tracking risk indicators), and Management (contingency disaster response).",
            "• Risk Exposure (RE): RE = P * C, where P is the probability of risk occurrence and C is the financial impact cost.",
            "• Risk Projection: Rating risks on two-dimensional matrix of likelihood (Low/Med/High) vs impact (Catastrophic/Critical/Marginal/Negligible)."
          ]
        },
        {
          "title": "Object-Oriented Design Metrics: Chidamber & Kemerer (CK) Suite",
          "points": [
            "• Weighted Methods per Class (WMC): Sum of cyclomatic complexities of all methods defined within a class (high WMC indicates maintenance difficulty).",
            "• Depth of Inheritance Tree (DIT): Maximum length from class node to root of inheritance hierarchy (high DIT increases design complexity).",
            "• Number of Children (NOC) & Coupling Between Objects (CBO): High CBO impairs modular reusability; Lack of Cohesion in Methods (LCOM) measures method dissimilarity."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Coupling Hierarchy (Best to Worst)",
          "mnemonic": "DSC - ECC: 'Data < Stamp < Control < External < Common < Content'",
          "explanation": "Remember: Data is best; Content is worst.",
          "proTip": "Common coupling involves global variables; Stamp coupling involves record data structures."
        },
        {
          "title": "Cohesion Hierarchy (Best to Worst)",
          "mnemonic": "FSC - PTLC: 'Functional > Sequential > Communicational > Procedural > Temporal > Logical > Coincidental'",
          "explanation": "Remember: Functional is best; Coincidental is worst.",
          "proTip": "High cohesion and low coupling is the fundamental design principle."
        },
        {
          "title": "Cyclomatic Complexity Quick Count",
          "mnemonic": "V(G) = Predicate Nodes + 1 = Regions in Control Flow Graph",
          "explanation": "Count decision points (if, while, for) and add 1.",
          "proTip": "For compound conditions (if A and B), count each predicate separately."
        },
        {
          "title": "CMMI 5 Levels Peg",
          "mnemonic": "I - M - D - Q - O: 'Initial, Managed, Defined, Quantitatively Managed, Optimizing'",
          "explanation": "Carnegie Mellon 5 software maturity stages.",
          "proTip": "Level 2 is at project level; Level 3 is standardized at entire organization level."
        },
        {
          "title": "Maintenance Effort Share",
          "mnemonic": "Perfective (50%) > Adaptive (25%) > Corrective (20%) > Preventive (5%)",
          "explanation": "Perfective maintenance consumes the largest portion of software maintenance budget.",
          "proTip": "Adding a new feature requested by a customer is ALWAYS Perfective maintenance."
        },
        {
          "title": "Integration Testing Stubs vs Drivers",
          "mnemonic": "Top-Down uses STUBS | Bottom-Up uses DRIVERS",
          "explanation": "Stubs simulate lower-level unbuilt modules; Drivers simulate caller main programs.",
          "proTip": "Stubs replace called routines; Drivers replace calling routines."
        }
      ]
    },
    {
      "id": "p2-u7",
      "unitNumber": 7,
      "name": "Data Communication & Computer Networks",
      "icon": "🌐",
      "theoryNotes": [
        {
          "title": "Data Communication Fundamentals & Transmission Media",
          "points": [
            "• Signals: Analog (continuous sine wave) vs Digital (discrete pulses). Signal impairment: Attenuation (loss of energy over distance, measured in dB), Distortion (change in wave shape), Noise (thermal, induced, crosstalk, impulse).",
            "• Transmission Modes: Simplex (unidirectional: keyboard to monitor), Half-Duplex (bidirectional, one at a time: Walkie-Talkie), Full-Duplex (bidirectional simultaneously: telephone).",
            "• Transmission Media:",
            "  - Guided (Bounded): Twisted Pair Cable (UTP/STP - Cat 5/6, RJ-45 connector; crosstalk reduced by twisting), Coaxial Cable (central copper conductor, braided shield, BNC connector), Optical Fiber (glass core, cladding; operates on Total Internal Reflection TIR; immune to EMI, ultra-high bandwidth).",
            "  - Unguided (Wireless): Radio Waves (3 kHz to 1 GHz - omnidirectional, penetrates walls), Microwaves (1 GHz to 300 GHz - line-of-sight, parabolic dish), Infrared (300 GHz to 400 THz - short range, cannot penetrate walls).",
            "• Multiplexing: FDM (Frequency Division Multiplexing - analog), WDM (Wavelength Division Multiplexing - fiber optics), TDM (Time Division Multiplexing - digital: Synchronous vs Statistical / Asynchronous TDM)."
          ]
        },
        {
          "title": "OSI 7 Layers vs TCP/IP Protocol Architecture & PDUs",
          "points": [
            "• OSI Reference Model (Open Systems Interconnection - ISO):",
            "  - Layer 7: Application (Network access for software apps: HTTP, FTP, SMTP, DNS).",
            "  - Layer 6: Presentation (Data syntax translation, character encoding, encryption/decryption, compression: SSL/TLS, JPEG, MPEG).",
            "  - Layer 5: Session (Dialog management, half/full duplex control, synchronization checkpoints, token management).",
            "  - Layer 4: Transport (End-to-end process-to-process delivery, port addressing, segmentation/reassembly, connection management, flow/error control: TCP, UDP).",
            "  - Layer 3: Network (Source-to-destination host routing, logical IP addressing, packet forwarding, fragmentation: IPv4, IPv6, ICMP, OSPF).",
            "  - Layer 2: Data Link (Node-to-node hop framing, physical MAC addressing, flow control, error detection: Ethernet, PPP, HDLC).",
            "  - Layer 1: Physical (Transmission of raw bitstream over physical media, voltage levels, pin configurations, bit synchronization).",
            "• Protocol Data Units (PDUs): Application/Presentation/Session = Data / Message; Transport = Segment (TCP) / Datagram (UDP); Network = Packet; Data Link = Frame; Physical = Bits."
          ]
        },
        {
          "title": "Physical Layer: Data Rate Limits & Channel Capacity",
          "points": [
            "• Nyquist Bitrate Formula (Noiseless Channel): Bitrate = 2 × Bandwidth × log2(V) bits/sec (where V is number of discrete signal levels).",
            "• Shannon Channel Capacity (Noisy Channel): Capacity C = Bandwidth × log2(1 + SNR) bits/sec (where SNR is the linear signal-to-noise ratio: Signal Power / Noise Power).",
            "• Decibel Conversion: SNR_dB = 10 × log10(SNR). (e.g., 30 dB ⟹ SNR = 10^(30/10) = 1,000. C = B × log2(1 + 1000) ≈ B × log2(1001) ≈ 9.97 × B).",
            "• Transmission Delays: Total Latency = Transmission Delay (L / B) + Propagation Delay (d / v) + Queuing Delay + Processing Delay."
          ]
        },
        {
          "title": "Data Link Layer: Error Detection & Correction Techniques",
          "points": [
            "• Parity Check: Simple Parity (detects single-bit errors; fails on even-bit errors); 2D Parity (detects and corrects single-bit errors).",
            "• Internet Checksum: 16-bit 1's complement sum of 16-bit words. Transmitter inverts sum; receiver checks if sum of all words + checksum equals all 1s (0 in 1's complement).",
            "• Cyclic Redundancy Check (CRC): Polynomial division using modulo-2 binary arithmetic (XOR). Transmitter appends r zeros (where r is degree of generator polynomial G(x)) to data D, divides by G(x), and replaces zeros with remainder R. Receiver divides received frame by G(x); remainder 0 indicates no error. Detects all single-bit, double-bit, odd-bit errors, and burst errors of length ≤ r.",
            "• Hamming Code (Richard Hamming): Single error-correcting code using parity bits placed at powers-of-2 bit positions (1, 2, 4, 8, 16...).",
            "• Hamming Distance: Number of bit positions in which two codewords differ. To detect e errors: d_min ≥ e + 1. To correct t errors: d_min ≥ 2t + 1."
          ]
        },
        {
          "title": "Flow Control: Sliding Window Protocols (Stop-and-Wait, GBN, SR)",
          "points": [
            "• Sliding Window Efficiency: Let a = Propagation Delay / Transmission Delay = T_p / T_t. Total cycle time = T_t + 2 × T_p = T_t(1 + 2a).",
            "• Stop-and-Wait Protocol: Sender window = 1, Receiver window = 1. Efficiency η = 1 / (1 + 2a). Requires 1-bit sequence numbers (0 and 1). Throughput = (1 / (1 + 2a)) × Bandwidth.",
            "• Go-Back-N (GBN) Protocol: Sender window W_s = N, Receiver window W_r = 1. Pipelined; receiver accepts frames ONLY in strict sequential order, discarding out-of-order frames. Uses Cumulative Acknowledgments. On timeout, re-transmits ALL N unacknowledged frames. Efficiency η = N / (1 + 2a). Minimum Sequence Numbers = N + 1 (using ⌈log2(N + 1)⌉ bits).",
            "• Selective Repeat (SR) Protocol: Sender window W_s = N, Receiver window W_r = N. Receiver buffers out-of-order frames within window. Uses Individual / Selective Acknowledgments. On timeout, re-transmits ONLY the specific damaged frame. Efficiency η = N / (1 + 2a). Minimum Sequence Numbers = 2N (using ⌈log2(2N)⌉ bits)."
          ]
        },
        {
          "title": "Medium Access Control: ALOHA, CSMA/CD & CSMA/CA",
          "points": [
            "• Pure ALOHA (Norm Abramson 1970): Stations transmit whenever frames are ready. Vulnerable time = 2 × T_fr. Throughput S = G · e^(-2G). Maximum Throughput S_max = 1 / (2e) ≈ 18.4% at G = 0.5.",
            "• Slotted ALOHA: Time divided into discrete slots equal to frame transmission time T_fr; stations transmit only at slot boundaries. Vulnerable time = T_fr. Throughput S = G · e^(-G). Maximum Throughput S_max = 1 / e ≈ 36.8% at G = 1.0.",
            "• CSMA (Carrier Sense Multiple Access): 'Listen before talk'. 1-Persistent (transmits immediately when channel idle; 100% collision if two wait), Non-Persistent (waits random time if busy), p-Persistent (slotted channels: transmits with probability p when idle).",
            "• CSMA/CD (Collision Detection - Ethernet IEEE 802.3): 'Listen while talking'. Minimum Frame Size Condition: Transmission Time T_t ≥ 2 × Propagation Delay T_p ⟹ Frame Size L ≥ 2 × Bandwidth × Propagation Delay. Binary Exponential Backoff: after i-th collision, chooses random slot k ∈ [0, 2^i - 1] (capped at i = 10; aborts after 16 collisions).",
            "• CSMA/CA (Collision Avoidance - Wireless LAN IEEE 802.11): Collision detection impossible in wireless due to signal attenuation. Uses Interframe Spaces (DIFS, SIFS), Contention Window, and RTS/CTS (Request-to-Send / Clear-to-Send) handshaking to solve the Hidden Terminal Problem."
          ]
        },
        {
          "title": "Network Layer: IPv4 Addressing, Subnetting & CIDR",
          "points": [
            "• IPv4 Structure: 32-bit address organized into 4 octets. Dotted decimal representation.",
            "• Classful Addressing: Class A (0.0.0.0 to 127.255.255.255, /8, 126 nets, 16M hosts/net), Class B (128.0.0.0 to 191.255.255.255, /16, 16K nets, 65K hosts/net), Class C (192.0.0.0 to 223.255.255.255, /24, 2M nets, 254 hosts/net), Class D (224.0.0.0 to 239.255.255.255 - Multicast), Class E (240.0.0.0 to 255.255.255.255 - Reserved).",
            "• CIDR (Classless Inter-Domain Routing): Prefix notation /n specifies n network/prefix bits and (32 - n) host bits.",
            "• Subnet Calculations: Subnet Mask bitwise ANDed with IP yields Network Address. Total hosts in subnet = 2^(32 - n); Usable hosts = 2^(32 - n) - 2 (subtracting all-0s Network ID and all-1s Directed Broadcast Address).",
            "• Subnetting Magic Number: Block Size = 256 - Subnet Mask Octet Value."
          ]
        },
        {
          "title": "Routing Algorithms: Distance Vector (RIP), Link State (OSPF) & BGP",
          "points": [
            "• Distance Vector Routing (RIP - Routing Information Protocol): Based on distributed Bellman-Ford algorithm. Each node shares its routing table vector with immediate neighbors periodically. Metric = Hop Count (Maximum 15 hops; 16 = Infinity). Suffers from Count-to-Infinity problem and slow convergence. Solutions: Split Horizon (do not advertise route back to neighbor learned from) and Poison Reverse.",
            "• Link State Routing (OSPF - Open Shortest Path First): Each router floods Link State Advertisements (LSA) to ALL routers in domain; each router constructs identical topological map of entire network and independently computes shortest path tree using Dijkstra's Algorithm. Metric = Cost (inversely proportional to bandwidth). Fast convergence, no routing loops, supports hierarchical areas (Area 0 = Backbone area).",
            "• Path Vector Routing (BGP - Border Gateway Protocol): Exterior gateway protocol routing between autonomous systems (AS). Advertises full path of AS numbers; prevents loops."
          ]
        },
        {
          "title": "Transport Layer: UDP vs TCP Architecture & Port Addressing",
          "points": [
            "• Transport Layer Responsibilities: Process-to-process communication via 16-bit Port Numbers (0 to 65535: Well-Known Ports 0-1023, Registered Ports 1024-49151, Dynamic/Private Ports 49152-65535).",
            "• UDP (User Datagram Protocol): Connectionless, unreliable, lightweight, zero connection overhead, message-oriented. 8-Byte fixed header (Source Port, Destination Port, Length, Checksum). Ideal for real-time traffic: DNS (53), DHCP (67/68), TFTP (69), SNMP (161), VoIP, video streaming.",
            "• TCP (Transmission Control Protocol): Connection-oriented, reliable, byte-stream, full-duplex, flow-controlled, congestion-controlled. Header size = 20 to 60 bytes. Flags: URG, ACK, PSH, RST, SYN, FIN."
          ]
        },
        {
          "title": "TCP Connection Management, Flow Control & Congestion Control",
          "points": [
            "• TCP 3-Way Handshake: Client sends SYN (seq = x) → Server responds with SYN + ACK (seq = y, ack = x + 1) → Client sends ACK (ack = y + 1).",
            "• TCP Connection Termination: 4-Way Handshake: Client sends FIN → Server sends ACK → Server sends FIN → Client sends ACK and enters TIME_WAIT state (2 × MSL) to ensure final ACK delivery.",
            "• TCP Flow Control: End-to-end flow control using dynamic Sliding Window: Receiver Advertised Window (rwnd) advertised in TCP header prevents receiver buffer overflow.",
            "• TCP Congestion Control (Jacobson's Algorithm): Effective Window = min(cwnd, rwnd).",
            "  - Slow Start: cwnd starts at 1 MSS and DOUBLES every Round-Trip Time RTT (exponential growth: 1, 2, 4, 8...) until reaching slow-start threshold (ssthresh).",
            "  - Congestion Avoidance: Once cwnd ≥ ssthresh, cwnd increases LINEARLY by 1 MSS per RTT (Additive Increase).",
            "  - On Timeout (Severe Congestion): ssthresh set to cwnd / 2; cwnd reset back to 1 MSS (restart Slow Start).",
            "  - Fast Retransmit & Fast Recovery (3 Duplicate ACKs): Immediate retransmission of missing segment without waiting for timer; ssthresh = cwnd / 2; cwnd set to ssthresh + 3 MSS (Multiplicative Decrease)."
          ]
        },
        {
          "title": "Application Layer Protocols & Domain Name System (DNS)",
          "points": [
            "• DNS (Domain Name System - Port 53): Distributed hierarchical database mapping domain names to IP addresses. Hierarchy: Root Servers (13 named authorities a.root-servers.net to m.root-servers.net) → Top-Level Domain (TLD: .com, .org, .edu, .in) → Authoritative DNS servers. Resolution: Recursive Query (server contacts others on client's behalf) vs Iterative Query (server returns referral IP of next server). DNS Records: A (IPv4), AAAA (IPv6), CNAME (canonical alias), MX (mail exchange), PTR (reverse lookup IP to name).",
            "• HTTP/1.1 vs HTTP/2 vs HTTP/3: HTTP/1.1 introduced persistent TCP connections (`Keep-Alive`) and pipelining; HTTP/2 introduced binary framing, multiplexing over single TCP connection, header compression (HPACK); HTTP/3 runs over QUIC (UDP-based) to eliminate TCP head-of-line blocking.",
            "• FTP (File Transfer Protocol): Two separate connections: Control Connection (Port 21 - commands, persists throughout session) and Data Connection (Port 20 in Active FTP; ephemeral port in Passive FTP - opens/closes per file transfer)."
          ]
        },
        {
          "title": "Network Security: Cryptography, Firewalls & IPsec",
          "points": [
            "• Cryptography Pillars: Confidentiality (encryption), Integrity (hashing), Authentication (digital certificates), Non-Repudiation (digital signatures).",
            "• Symmetric Key Encryption: Single shared secret key for encryption and decryption. Fast, key distribution challenge. Algorithms: DES (56-bit key, 64-bit block, 16 Feistel rounds), 3DES (112 or 168-bit key), AES (Rijndael - 128, 192, 256-bit key, SPN network, non-Feistel).",
            "• Asymmetric Key Encryption (Public Key): Separate Public Key (encryption) and Private Key (decryption). RSA Algorithm (Rivest, Shamir, Adleman): Based on difficulty of factoring product of two huge prime numbers n = p × q; computes Euler's totient φ(n) = (p - 1)(q - 1); selects public e (gcd(e, φ(n)) = 1); private d = e^(-1) mod φ(n). Ciphertext C = M^e mod n; Plaintext M = C^d mod n.",
            "• Diffie-Hellman Key Exchange: Allows two parties to establish shared secret key over insecure channel based on discrete logarithm difficulty.",
            "• Message Digests & Digital Signatures: Cryptographic Hash Functions (SHA-256, MD5 - irreversible, collision-resistant). Digital Signature = Hash of message encrypted with sender's PRIVATE key.",
            "• Firewalls: Packet Filtering (Network/Transport layer: inspects IP/Port/Flags; stateless), Stateful Inspection (tracks TCP session state), Application Gateway / Proxy Firewall (inspects application payloads)."
          ]
        },
        {
          "title": "IPv6 Header Architecture, Dual-Stack & Transition Mechanisms",
          "points": [
            "• IPv6 Header Characteristics: Fixed 40-byte base header; 128-bit addresses; eliminates header checksum, hop-by-hop segmentation, and broadcast.",
            "• Header Fields: Version (4 bits), Traffic Class (8 bits), Flow Label (20 bits), Payload Length (16 bits), Next Header (8 bits), Hop Limit (8 bits).",
            "• Transition Strategies: Dual Stack (nodes run IPv4 and IPv6 concurrently), Tunneling (encapsulating IPv6 packets inside IPv4 frames), NAT64 (translation gateway)."
          ]
        },
        {
          "title": "Network Address Translation (NAT/PAT) & Port Forwarding",
          "points": [
            "• Private IPv4 Ranges (RFC 1918): Class A (10.0.0.0/8), Class B (172.16.0.0/12), Class C (192.168.0.0/16).",
            "• NAT Operation: Translates private non-routable IP addresses to public routable IP addresses across boundary routers.",
            "• Port Address Translation (PAT / NAT Overload): Maps multiple internal private IP addresses to a single public IP address using distinct ephemeral source port numbers."
          ]
        },
        {
          "title": "Cryptographic Hash Functions, HMAC & Message Integrity",
          "points": [
            "• One-Way Property (Pre-image Resistance): Computationally infeasible to find message m given hash h such that H(m) = h.",
            "• Collision Resistance: Computationally infeasible to find any two distinct messages m1 ≠ m2 such that H(m1) = H(m2).",
            "• Common Standards: MD5 (128-bit hash, cryptographically broken), SHA-1 (160-bit), SHA-256 (256-bit secure standard), HMAC (keyed-hash message authentication)."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Subnetting Magic Number Shortcut",
          "mnemonic": "Magic Number = 256 - Subnet Mask Octet Value!",
          "explanation": "Tells you the exact block size and network increments instantly.",
          "proTip": "Example: /27 mask is 255.255.255.224. Magic Number = 256 - 224 = 32. Subnets are 0, 32, 64, 96..."
        },
        {
          "title": "Sliding Window Protocol Window Sizes",
          "mnemonic": "Stop-and-Wait: (1, 1) | Go-Back-N: (N, 1) | Selective Repeat: (N, N)",
          "explanation": "Parentheses represent (Sender Window Size, Receiver Window Size).",
          "proTip": "Minimum sequence numbers: GBN needs N + 1; Selective Repeat needs 2N."
        },
        {
          "title": "CSMA/CD Minimum Frame Size Peg",
          "mnemonic": "Frame Size ≥ 2 × Bandwidth × Propagation Delay",
          "explanation": "Transmission time must be at least twice one-way propagation time.",
          "proTip": "If bandwidth doubles or distance doubles, minimum frame size must also double."
        },
        {
          "title": "Pure vs Slotted ALOHA Max Efficiency",
          "mnemonic": "Pure ALOHA = 18.4% (1/2e) | Slotted ALOHA = 36.8% (1/e)",
          "explanation": "Slotted ALOHA doubles the throughput of Pure ALOHA by eliminating partial overlaps.",
          "proTip": "Pure ALOHA vulnerable time is 2T; Slotted ALOHA vulnerable time is T."
        },
        {
          "title": "TCP 3-Way Handshake Flags",
          "mnemonic": "SYN → SYN + ACK → ACK",
          "explanation": "Standard 3-step sequence for establishing reliable connection.",
          "proTip": "Each SYN and FIN flag consumes exactly ONE sequence number!"
        },
        {
          "title": "Hamming Error Formula",
          "mnemonic": "To Detect: d_min ≥ e + 1 | To Correct: d_min ≥ 2t + 1",
          "explanation": "Relationship between minimum Hamming distance and error handling capability.",
          "proTip": "To correct 2-bit errors, minimum distance must be at least 2(2) + 1 = 5."
        }
      ]
    },
    {
      "id": "p2-u8",
      "unitNumber": 8,
      "name": "Theory of Computation & Compilers",
      "icon": "⚙️",
      "theoryNotes": [
        {
          "title": "Chomsky Hierarchy of Formal Languages & Automata Models",
          "points": [
            "• Type 3 (Regular Languages): Recognized by Deterministic / Non-Deterministic Finite Automata (DFA / NFA). Production rules: A → aB or A → a (Right Linear) or A → Ba or A → a (Left Linear). Memory: Zero auxiliary memory.",
            "• Type 2 (Context-Free Languages - CFL): Recognized by Pushdown Automata (PDA). Production rules: A → α, where A ∈ V_N and α ∈ (V_N ∪ V_T)*. Memory: Single infinite Stack (LIFO).",
            "• Deterministic CFL (DCFL): Recognized by DPDA. Strictly smaller than CFL (DPDA ⊂ NPDA). Unambiguous.",
            "• Type 1 (Context-Sensitive Languages - CSL): Recognized by Linear Bounded Automata (LBA - Turing machine with tape bounded by input length). Production rules: αAβ → αγβ, where |αAβ| ≤ |αγβ| (non-contracting).",
            "• Type 0 (Unrestricted / Recursively Enumerable - RE): Recognized by Turing Machines (TM). Production rules: α → β where α contains at least one non-terminal. Memory: Infinite 2-way read/write tape.",
            "• Power Hierarchy: Regular ⊂ DCFL ⊂ CFL ⊂ CSL ⊂ Recursive ⊂ Recursively Enumerable (RE)."
          ]
        },
        {
          "title": "Regular Languages, DFA, NFA & DFA State Minimization",
          "points": [
            "• DFA vs NFA Equivalence: For every NFA with n states, there exists an equivalent DFA with at most 2^n states (Subset Construction / Powerset Construction). DFA and NFA have IDENTICAL expressive power.",
            "• Epsilon-NFA: Transitions on empty string ε; equivalent to standard NFA and DFA.",
            "• DFA Minimization: Produces the unique minimal state DFA (Myhill-Nerode Theorem). Table-Filling Algorithm (Marking unreachable states and distinguishing pairs of states (p, q) where δ(p, a) ∈ F and δ(q, a) ∉ F).",
            "• Regular Expressions: Identities: (r*)* = r*; (r + s)* = (r* s*)* = (r* + s*)*; r(s + t) = rs + rt. Arden's Theorem: If P and Q are regular expressions over Σ and P does not contain ε, then the equation R = Q + RP has unique solution R = QP*."
          ]
        },
        {
          "title": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
          "points": [
            "• Pumping Lemma for Regular Languages: Let L be a regular language. There exists a pumping length p such that any string s ∈ L with |s| ≥ p can be divided into 3 pieces s = xyz satisfying:",
            "  1. |y| > 0 (y is non-empty)",
            "  2. |xy| ≤ p",
            "  3. For all i ≥ 0, xy^i z ∈ L.",
            "• Application: Used exclusively to prove that a given language is NOT regular by contradiction (e.g., L = {a^n b^n | n ≥ 0}, L = {w w^R}, L = {a^(p) | p is prime} are NOT regular)."
          ]
        },
        {
          "title": "Context-Free Grammars (CFG), Ambiguity & Normal Forms (CNF, GNF)",
          "points": [
            "• Context-Free Grammar (CFG): 4-tuple G = (V, Σ, R, S).",
            "• Ambiguous Grammar: A grammar is ambiguous if there exists at least one string in L(G) that has two or more distinct Parse Trees (or two distinct Leftmost Derivations). Inherent Ambiguity: A CFL is inherently ambiguous if EVERY grammar generating it is ambiguous (e.g., L = {a^i b^j c^k | i=j or j=k}).",
            "• Chomsky Normal Form (CNF): Every production is of the form A → BC or A → a (where A, B, C ∈ V and a ∈ Σ). If a string w has length |w| = n, exactly 2n - 1 derivation steps are required to generate w in CNF.",
            "• Greibach Normal Form (GNF): Every production is of the form A → aα (where a ∈ Σ and α ∈ V*). Exactly n derivation steps to generate string of length n."
          ]
        },
        {
          "title": "Pushdown Automata (PDA) & Pumping Lemma for CFLs",
          "points": [
            "• PDA: 7-tuple M = (Q, Σ, Γ, δ, q0, z0, F), where Γ is the stack alphabet.",
            "• Acceptance Criteria: Acceptance by Final State vs Acceptance by Empty Stack. For NPDA, both acceptance mechanisms are equivalent.",
            "• DPDA vs NPDA: NPDA is strictly more powerful than DPDA (e.g., L = {w w^R} requires NPDA; L = {w c w^R} can be recognized by DPDA).",
            "• Pumping Lemma for Context-Free Languages: Any string s ∈ L with |s| ≥ p can be written as s = uvwxy satisfying |vx| ≥ 1, |vwx| ≤ p, and for all i ≥ 0, u v^i w x^i y ∈ L. Proves languages like {a^n b^n c^n | n ≥ 0} and {a^n b^n c^n d^n} are NOT context-free."
          ]
        },
        {
          "title": "Turing Machines (TM), Halting Problem & Undecidability",
          "points": [
            "• Standard Turing Machine (Alan Turing 1936): 7-tuple M = (Q, Σ, Γ, δ, q0, B, F). Infinite 2-way tape with read/write head.",
            "• Church-Turing Thesis: Any algorithmic computation that can be performed by any physical computing device can be simulated by a Turing Machine.",
            "• Variants: Multi-tape TM, Non-Deterministic TM, Multi-dimensional TM. All variants are equivalent in computational power to the standard single-tape deterministic TM.",
            "• Halting Problem of Turing Machine (H_TM): Given TM M and input w, does M halt on w? Proved UNDECIDABLE by Alan Turing using Cantor's Diagonalization argument.",
            "• Post Correspondence Problem (PCP): Undecidable for alphabet size ≥ 2. Modified PCP (MPCP) is also undecidable.",
            "• Rice's Theorem: Any non-trivial semantic property of the language recognized by a Turing Machine is UNDECIDABLE (e.g., Is L(M) empty? Is L(M) regular? Is L(M) finite?)."
          ]
        },
        {
          "title": "Comprehensive Language Closure Properties Table",
          "points": [
            "• Regular Languages: CLOSED under ALL operations: Union, Intersection, Complement, Concatenation, Kleene Star, Reversal, Difference, Homomorphism, Inverse Homomorphism.",
            "• Context-Free Languages (CFL): CLOSED under Union, Concatenation, Kleene Star, Reversal, Homomorphism. NOT CLOSED under Intersection, Complement, or Set Difference.",
            "• Deterministic Context-Free (DCFL): CLOSED under Complement, Inverse Homomorphism. NOT CLOSED under Union, Intersection, Concatenation, Kleene Star, Difference.",
            "• Context-Sensitive Languages (CSL): CLOSED under ALL Boolean operations: Union, Intersection, Complement, Concatenation, Star, Reversal.",
            "• Recursive Languages: CLOSED under ALL Boolean operations: Union, Intersection, Complement, Concatenation, Star.",
            "• Recursively Enumerable (RE): CLOSED under Union, Intersection, Concatenation, Star. NOT CLOSED under Complement or Difference."
          ]
        },
        {
          "title": "Decidability & Undecidability Decision Matrix",
          "points": [
            "• Regular Languages: Membership (w ∈ L?), Emptiness (L = ∅?), Finiteness (Is L finite?), Equivalence (L1 = L2?), Disjointness (L1 ∩ L2 = ∅?) are ALL DECIDABLE.",
            "• Context-Free Languages (CFL): Membership, Emptiness, Finiteness are DECIDABLE. Equivalence, Ambiguity, Disjointness, and 'Is L regular?' are UNDECIDABLE.",
            "• DCFL: Membership, Emptiness, Finiteness, and Equivalence are DECIDABLE. Disjointness is UNDECIDABLE.",
            "• CSL & Recursive: Membership is DECIDABLE. Emptiness, Finiteness, Equivalence are UNDECIDABLE.",
            "• Recursively Enumerable (RE): Membership is Semi-Decidable (Turing-Recognizable). Emptiness, Finiteness, Equivalence are completely UNDECIDABLE."
          ]
        },
        {
          "title": "Compiler Architecture: 6 Phases & Symbol Table Management",
          "points": [
            "• Front End (Machine Independent) vs Back End (Machine Dependent).",
            "• 6 Sequential Phases of a Compiler:",
            "  1. Lexical Analysis (Scanner): Reads stream of source characters; strips comments/whitespace; groups lexemes into Tokens (Pairs: <token_name, attribute_value>) using Regular Expressions and DFAs (LEX / Flex tool).",
            "  2. Syntax Analysis (Parser): Imposes hierarchical structure via Context-Free Grammars; generates Parse Tree / Abstract Syntax Tree (AST); handles syntax errors (YACC / Bison).",
            "  3. Semantic Analysis: Checks semantic consistency using Type Checking, Type Coercion, and Scope Resolution.",
            "  4. Intermediate Code Generation (ICG): Generates machine-independent intermediate representation (Three-Address Code TAC: Quadruples, Triples, Indirect Triples).",
            "  5. Code Optimization: Transforms intermediate code to improve speed and reduce size without changing program semantics.",
            "  6. Code Generation: Maps intermediate instructions to target machine assembly/opcodes, assigns registers, handles memory layouts.",
            "• Symbol Table: Central data structure tracking identifier names, data types, scope levels, memory offsets. Hash Table implementation."
          ]
        },
        {
          "title": "Syntax-Directed Translation (SDT): S-Attributed vs L-Attributed Definitions",
          "points": [
            "• Syntax-Directed Definition (SDD): Context-free grammar augmented with semantic rules associated with productions.",
            "• Synthesized Attributes: Computed exclusively from the attribute values of the children of the node in parse tree (or from node's own lexical value). Evaluated in bottom-up post-order traversal.",
            "• Inherited Attributes: Computed from attribute values of the node's parent and/or left siblings. Evaluated in top-down pre-order traversal.",
            "• S-Attributed SDD: Uses ONLY synthesized attributes. Can be naturally evaluated during bottom-up LR parsing without modifying grammar.",
            "• L-Attributed SDD: In every production A → X1 X2 ... Xn, each inherited attribute of Xi depends ONLY on attributes of parent A and/or left siblings X1, ..., X_{i-1} (never right siblings). Can be evaluated during top-down LL parsing.",
            "• Inclusion Rule: Every S-attributed definition is L-attributed, but NOT vice versa."
          ]
        },
        {
          "title": "Top-Down Parsers: LL(1) Parsing, First and Follow Sets",
          "points": [
            "• Top-Down Parsing: Constructs parse tree from root to leaves (leftmost derivation).",
            "• LL(1) Parser: Left-to-right scan, Leftmost derivation, 1 lookahead token. Non-backtracking predictive parser.",
            "• First Set Rules: First(α) is the set of terminal symbols that begin strings derived from α. If α derives ε, then ε ∈ First(α).",
            "• Follow Set Rules: Follow(A) is the set of terminals that can appear immediately to the right of non-terminal A in some sentential form. Follow(Start_Symbol) always contains $ (End-marker). Epsilon ε is NEVER in any Follow set.",
            "• LL(1) Grammatical Conditions: A grammar G is LL(1) IF AND ONLY IF for every production A → α | β:",
            "  1. First(α) ∩ First(β) = ∅ (No common start terminals).",
            "  2. If β derives ε, then First(α) ∩ Follow(A) = ∅.",
            "• Incompatibilities: A grammar CANNOT be LL(1) if it contains Left Recursion (A → Aα) or is not Left-Factored. Must eliminate left recursion and perform left factoring first."
          ]
        },
        {
          "title": "Bottom-Up Shift-Reduce Parsers (LR Parsers) & Code Optimization",
          "points": [
            "• Bottom-Up Parsing: Constructs parse tree from leaves to root, reducing handles (rightmost derivation in reverse).",
            "• Shift-Reduce Parsing Operations: Shift (push next input token onto stack), Reduce (replace handle on top of stack with LHS non-terminal), Accept, Error. Conflicts: Shift-Reduce (SR) and Reduce-Reduce (RR).",
            "• LR Parsers Hierarchy (Power: LR(0) < SLR(1) < LALR(1) < CLR(1)):",
            "  - LR(0): Simple items. Reduce actions placed across ALL lookahead columns.",
            "  - SLR(1) (Simple LR): Reduces on production A → α ONLY in columns belonging to Follow(A).",
            "  - LALR(1) (Lookahead LR): Merges LR(1) states having identical core items. Number of states equals SLR(1) and LR(0). Can introduce RR conflicts, NEVER SR conflicts.",
            "  - CLR(1) / LR(1): Canonical LR. Most powerful deterministic parser. Encodes lookahead inside items [A → α · β, a]. State count is huge.",
            "• Code Optimization Techniques: Local Optimization (Basic Blocks), Loop Optimization (Code motion / loop-invariant hoisting, Loop unrolling, Strength reduction - e.g., replacing x * 2 with x + x), Global Common Subexpression Elimination, Dead Code Elimination, Constant Folding."
          ]
        },
        {
          "title": "Myhill-Nerode Theorem & DFA Minimization State Equivalence",
          "points": [
            "• Right Invariant Equivalence Relation: x R_L y iff for all z ∈ Σ*, (xz ∈ L ⇔ yz ∈ L).",
            "• Theorem Statement: A language L is regular if and only if the number of equivalence classes of R_L is finite.",
            "• DFA Minimization: The number of states in the minimal DFA accepting L is exactly equal to the number of equivalence classes of R_L."
          ]
        },
        {
          "title": "Grammar Transformation: Ambiguity, Left Recursion & Chomsky Normal Form (CNF)",
          "points": [
            "• Elimination of Left Recursion: Converts A -> Aα | β into A -> βA' and A' -> αA' | ε.",
            "• Chomsky Normal Form (CNF): Every production must be of the form A -> BC (two non-terminals) or A -> a (single terminal).",
            "• Derivation Length: In CNF, a string w of length n is derived in exactly 2n - 1 derivation steps."
          ]
        },
        {
          "title": "Syntax Directed Definitions (SDD) Evaluation Orders & Parse DAGs",
          "points": [
            "• S-Attributed SDD: Uses only synthesized attributes; evaluated in bottom-up post-order traversal using an LR parser stack.",
            "• L-Attributed SDD: Attributes may be synthesized or inherited from left siblings or parent; evaluated in top-down depth-first traversal.",
            "• Dependency Graph: Directed acyclic graph whose topological sort defines valid attribute evaluation order across parse tree nodes."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "CFL Closure Golden Trap",
          "mnemonic": "CFL is NOT CLOSED under 'I-C-E': Intersection & Complement!",
          "explanation": "CFL is closed under Union, Concatenation, Star; NOT closed under Intersection and Complement.",
          "proTip": "Intersection of a CFL with a Regular language is ALWAYS a CFL!"
        },
        {
          "title": "Parser Hierarchy & States Shortcut",
          "mnemonic": "Power: LR(0) < SLR(1) < LALR(1) < CLR(1)\nStates: LR(0) = SLR(1) = LALR(1) ≪ CLR(1)",
          "explanation": "Mnemonic: 'Zero Students Like Advanced Compilers'.",
          "proTip": "LALR merges states of CLR with identical cores without introducing SR conflicts."
        },
        {
          "title": "Follow Set Golden Rule",
          "mnemonic": "Follow of Start Symbol ALWAYS contains $ | Epsilon NEVER in Follow!",
          "explanation": "Follow(S) always contains $. Epsilon can be in First, never in Follow.",
          "proTip": "Follow set is used for reduce actions in SLR(1) parsing."
        },
        {
          "title": "CNF String Derivation Steps",
          "mnemonic": "Derivation Steps = 2n - 1 (for string of length n)",
          "explanation": "In Chomsky Normal Form, generating a string of length n requires exactly 2n - 1 steps.",
          "proTip": "For Greibach Normal Form (GNF), it requires exactly n steps."
        },
        {
          "title": "Decidability for Regular Languages",
          "mnemonic": "EVERYTHING is Decidable for Regular Languages!",
          "explanation": "Emptiness, Finiteness, Membership, Equivalence are all strictly Decidable for regular languages.",
          "proTip": "If question asks about undecidability in Regular languages, the answer is None."
        },
        {
          "title": "LL(1) Left Recursion Rule",
          "mnemonic": "Left Recursive Grammar CANNOT be LL(1)!",
          "explanation": "Production A → Aα causes infinite loops in predictive parsers.",
          "proTip": "Eliminating left recursion is the first mandatory step before building LL(1) parsing table."
        }
      ]
    },
    {
      "id": "p2-u9",
      "unitNumber": 9,
      "name": "Data Science & Artificial Intelligence",
      "icon": "🤖",
      "theoryNotes": [
        {
          "title": "Artificial Intelligence Foundations & Agent Architectures",
          "points": [
            "• AI Definitions & Turing Test (Alan Turing 1950): Operational test of machine intelligence based on natural language conversation indistinguishable from a human.",
            "• Rational Agents: An agent that acts to achieve the best expected outcome based on its percept sequence and built-in knowledge. Agent Function: f : P* → A.",
            "• PEAS Framework: Performance Measure, Environment, Actuators, Sensors.",
            "• Environment Properties: Fully Observable vs Partially Observable, Deterministic vs Stochastic, Episodic vs Sequential, Static vs Dynamic, Discrete vs Continuous, Single-Agent vs Multi-Agent (competitive or cooperative).",
            "• Agent Architectures: Simple Reflex Agents, Model-Based Reflex Agents, Goal-Based Agents, Utility-Based Agents, Learning Agents."
          ]
        },
        {
          "title": "Uninformed (Blind) Search Algorithms: BFS, DFS, DLS & IDS",
          "points": [
            "• Search Performance Criteria: Completeness (always finds solution if one exists?), Optimality (finds lowest cost solution?), Time Complexity, Space Complexity (b = branching factor, d = depth of shallowest goal, m = maximum tree depth).",
            "• Breadth-First Search (BFS): Queue-based (FIFO). Complete (for finite b). Optimal (for uniform step costs). Time: O(b^d); Space: O(b^d) (Memory bottleneck).",
            "• Depth-First Search (DFS): Stack-based (LIFO). Incomplete (can get trapped in infinite loops). Not optimal. Time: O(b^m); Space: O(bm) (Highly memory-efficient linear space).",
            "• Depth-Limited Search (DLS): DFS with predetermined cutoff limit l. Incomplete if d > l.",
            "• Iterative Deepening Search (IDS): Repeatedly runs DLS with increasing limits l = 0, 1, 2, ... d. Combines completeness and optimality of BFS with linear O(bd) space of DFS. Preferred uninformed search for large state spaces.",
            "• Uniform Cost Search (Dijkstra): Priority Queue based on path cost g(n). Complete and optimal for arbitrary positive step costs."
          ]
        },
        {
          "title": "Informed (Heuristic) Search: Greedy Best-First & A* Search",
          "points": [
            "• Heuristic Function h(n): Problem-specific estimate of the lowest cost from node n to a goal state. h(Goal) = 0.",
            "• Greedy Best-First Search: Expands node closest to goal based solely on heuristic: f(n) = h(n). Incomplete, not optimal; prone to dead-ends. Time O(b^m), Space O(b^m).",
            "• A* Search: Evaluates nodes using f(n) = g(n) + h(n), where g(n) is exact cost to reach n from start and h(n) is estimated cost to goal.",
            "• A* Optimality Theorems:",
            "  - Tree-Search Optimality: A* is optimal IF heuristic h(n) is Admissible (never overestimates true cost: h(n) ≤ h*(n) for all n).",
            "  - Graph-Search Optimality: A* is optimal IF heuristic h(n) is Consistent / Monotonic (satisfies triangle inequality: h(n) ≤ c(n, a, n') + h(n')). Consistency implies Admissibility.",
            "• Dominance: If h2(n) ≥ h1(n) for all n and both are admissible, h2 dominates h1 and expands fewer (or equal) nodes."
          ]
        },
        {
          "title": "Adversarial Search: Minimax Algorithm & Alpha-Beta Pruning",
          "points": [
            "• Minimax Algorithm: Deterministic, 2-player zero-sum perfect information games (Chess, Tic-Tac-Toe). MAX attempts to maximize utility; MIN attempts to minimize utility. Recursive depth-first exploration to depth d: Time O(b^d), Space O(bd).",
            "• Alpha-Beta Pruning: Prunes branches that cannot influence final decision without altering the optimal Minimax value.",
            "  - Alpha (α): Best (highest) value MAX can guarantee along path (initialized to -∞). Updated ONLY at MAX nodes.",
            "  - Beta (β): Best (lowest) value MIN can guarantee along path (initialized to +∞). Updated ONLY at MIN nodes.",
            "  - Pruning Condition: Cutoff occurs whenever α ≥ β.",
            "  - Optimal Move Ordering: Best-case time complexity is O(b^(d/2)), effectively doubling the searchable game depth."
          ]
        },
        {
          "title": "Knowledge Representation: Propositional & First-Order Predicate Logic",
          "points": [
            "• First-Order Logic (FOL / FOPL): Objects, Relations, Functions, Quantifiers (∀, ∃), Constants, Variables, Connectives.",
            "• Unification Algorithm: Syntactic process of finding a substitution θ that makes two logical expressions identical: UNIFY(P, Q) = θ such that Pθ = Qθ. Most General Unifier (MGU). Occurs Check: Prevents unifying variable x with term containing x (e.g., x with f(x)).",
            "• Converting First-Order Logic to Conjunctive Normal Form (CNF): 8 Steps:",
            "  1. Eliminate implications (P → Q ≡ ¬P ∨ Q).",
            "  2. Move negations inward (De Morgan's & quantifier negations).",
            "  3. Standardize variables (rename conflicting variable names).",
            "  4. Skolemization: Eliminate existential quantifiers (replace isolated ∃x with Skolem Constant; replace ∃y under scope of ∀x with Skolem Function f(x)).",
            "  5. Drop universal quantifiers (all variables assumed universally quantified).",
            "  6. Distribute ∨ over ∧ to produce CNF clauses."
          ]
        },
        {
          "title": "Resolution Refutation in First-Order Logic & Horn Clauses",
          "points": [
            "• Resolution Refutation (Alan Robinson 1965): Proof by contradiction for theorem proving.",
            "  - Step 1: Negate the goal/query to be proven (¬Goal).",
            "  - Step 2: Convert knowledge base and ¬Goal into CNF clauses.",
            "  - Step 3: Repeatedly select two clauses with complementary literals, unify them, and resolve to generate new resolvent clause.",
            "  - Step 4: Continue until the Empty Clause (Contradiction / Falsehood / □) is derived, proving the original goal is TRUE.",
            "• Horn Clauses: A clause containing AT MOST ONE positive literal. Definite Clause (exactly one positive literal: A ∨ ¬B ∨ ¬C ≡ (B ∧ C) → A); Goal Clause (zero positive literals: ¬B ∨ ¬C). Foundation of Logic Programming (Prolog - uses SLD Resolution)."
          ]
        },
        {
          "title": "Fuzzy Sets, Membership Functions & Operations (Zadeh)",
          "points": [
            "• Crisp Sets vs Fuzzy Sets (Lotfi Zadeh 1965): Classical crisp set has binary characteristic function μ_A(x) ∈ {0, 1}; Fuzzy set allows continuous degrees of membership μ_A(x) ∈ [0, 1].",
            "• Fuzzy Set Operations (Standard Zadeh Operators):",
            "  - Union: μ_{A ∪ B}(x) = max(μ_A(x), μ_B(x)).",
            "  - Intersection: μ_{A ∩ B}(x) = min(μ_A(x), μ_B(x)).",
            "  - Complement: μ_{¬A}(x) = 1 - μ_A(x).",
            "• Classical Laws Failure: Law of Excluded Middle (A ∪ ¬A = Universal) and Law of Contradiction (A ∩ ¬A = ∅) do NOT hold in fuzzy logic!",
            "• Special Fuzzy Subsets: Support of A = {x | μ_A(x) > 0}; Core of A = {x | μ_A(x) = 1}; α-Cut = {x | μ_A(x) ≥ α}; Strong α-Cut = {x | μ_A(x) > α}."
          ]
        },
        {
          "title": "Fuzzy Inference Systems (Mamdani vs Sugeno) & Defuzzification",
          "points": [
            "• Fuzzy Rule-Based Systems: IF premise THEN consequent (Fuzzification → Rule Evaluation → Aggregation → Defuzzification).",
            "• Mamdani Fuzzy Model: Consequent of fuzzy rule is a fuzzy set; uses min-max inference; requires defuzzification.",
            "• Sugeno / Takagi-Sugeno Model: Consequent is a crisp mathematical function of inputs (e.g., z = ax + by + c); computationally efficient, no defuzzification needed.",
            "• Defuzzification Methods (Converting fuzzy output set into crisp scalar value):",
            "  - Centroid / Centre of Gravity (COG): Most popular. Computes centre of area under aggregate membership curve: z* = (∫ z · μ(z) dz) / (∫ μ(z) dz).",
            "  - Mean of Maxima (MOM): Average of all z values where membership function reaches maximum.",
            "  - Bisector of Area (BOA): Divides area under membership curve into two equal halves."
          ]
        },
        {
          "title": "Machine Learning Paradigms: Supervised, Unsupervised & Reinforcement",
          "points": [
            "• Supervised Learning: Model trained on labeled input-output dataset (X, y). Tasks: Regression (continuous target) and Classification (discrete categorical target).",
            "• Unsupervised Learning: Discovers hidden patterns, intrinsic clusters, or dimensional structures from unlabeled data (X). Tasks: Clustering (k-Means, Hierarchical), Dimensionality Reduction (PCA), Association Rule Mining (Apriori: Support, Confidence, Lift).",
            "• Reinforcement Learning: Software agent learns optimal behavioral policy π(s) by interacting with dynamic environment through trial-and-error, receiving Rewards (+) or Penalties (-). Markov Decision Process (MDP), Bellman Equation, Q-Learning.",
            "• Overfitting vs Underfitting: Bias-Variance Tradeoff. High Bias = Underfitting; High Variance = Overfitting (memorizes noise, poor generalization). Regularization: L1 Lasso (L1 penalty, drives weights to zero, feature selection) vs L2 Ridge (L2 penalty, shrinks weights)."
          ]
        },
        {
          "title": "Classic Machine Learning Algorithms: Regression, Decision Trees & k-NN",
          "points": [
            "• Linear Regression: Models linear relationship y = w^T x + b. Minimized using Ordinary Least Squares (OLS) or Gradient Descent.",
            "• Logistic Regression: Binary classification using Sigmoid / Logistic activation function: σ(z) = 1 / (1 + e^(-z)). Outputs class probability between 0 and 1.",
            "• Decision Trees (ID3 / C4.5 / CART): Recursive partitioning of feature space.",
            "  - Entropy H(S): Measure of impurity: H(S) = - ∑ p_i · log2(p_i). Pure set has Entropy = 0; equally split binary set has Entropy = 1.",
            "  - Information Gain: Reduction in entropy after splitting on attribute A: Gain(S, A) = H(S) - ∑ (|S_v| / |S|) · H(S_v). Selected attribute maximizes Information Gain.",
            "• k-Nearest Neighbors (k-NN): Instance-based lazy learner; stores all training samples; classifies test instance based on majority vote of k nearest neighbors (Euclidean, Manhattan, Minkowski distance)."
          ]
        },
        {
          "title": "Artificial Neural Networks (ANN): Perceptrons & Backpropagation",
          "points": [
            "• McCulloch-Pitts Neuron & Perceptron (Frank Rosenblatt 1958): Linear classifier: y = f(∑ w_i x_i + b). Perceptron Convergence Theorem: guaranteed to converge if training data is Linearly Separable. Fails on XOR problem (Minsky & Papert 1969).",
            "• Multilayer Perceptron (MLP): Feedforward network with one or more hidden layers and non-linear activation functions. Universal Approximation Theorem: MLP with single hidden layer can approximate any continuous function.",
            "• Activation Functions: Sigmoid (smooth, saturated gradients), Tanh (-1 to +1, zero-centred), ReLU (Rectified Linear Unit: f(x) = max(0, x) - avoids vanishing gradient for x > 0), Leaky ReLU, Softmax (normalizes output vector to probability distribution).",
            "• Backpropagation Algorithm (Rumelhart, Hinton, Williams 1986): Supervised training using Gradient Descent and Chain Rule of Calculus to propagate error gradient backward from output layer to hidden layers and update synaptic weights: Δw_{ij} = -η · (∂E / ∂w_{ij})."
          ]
        },
        {
          "title": "Genetic Algorithms (GA): Evolutionary Optimization",
          "points": [
            "• Genetic Algorithms (John Holland 1975): Adaptive heuristic search based on Darwinian natural selection and genetics ('Survival of the Fittest').",
            "• Components of GA:",
            "  - Population: Set of candidate solutions represented as Chromosomes (traditionally Binary Bitstrings).",
            "  - Fitness Function: Objective function evaluating how well a chromosome solves the problem.",
            "  - Selection Operators: Selects fitter individuals for mating: Roulette Wheel Selection (probability proportional to fitness: p_i = f_i / ∑ f), Tournament Selection, Rank Selection.",
            "  - Crossover / Recombination: Combines genetic material of two parents to produce offspring (Single-point crossover, Two-point crossover, Uniform crossover).",
            "  - Mutation: Randomly inverts individual bits with low probability (Mutation Rate p_m ≈ 0.001 - 0.01) to maintain genetic diversity and prevent premature convergence to local optima."
          ]
        },
        {
          "title": "Constraint Satisfaction Problems (CSP) & Forward Checking",
          "points": [
            "• CSP Definition: Set of variables X = {X1, ..., Xn}, domains D = {D1, ..., Dn}, and constraints C restricting allowable value assignments.",
            "• Classical Examples: N-Queens problem, Map Coloring, Cryptarithmetic puzzles, Sudoku.",
            "• Constraint Propagation: Arc Consistency (AC-3 algorithm) ensuring every value in variable domain has a compatible value in neighboring variable domain."
          ]
        },
        {
          "title": "Support Vector Machines (SVM), Hyperplanes & The Kernel Trick",
          "points": [
            "• Maximum Margin Classifier: Finds separating hyperplane w·x + b = 0 maximizing geometric margin 2/||w|| between closest data points (Support Vectors).",
            "• Soft-Margin SVM: Uses slack variables ξ_i and penalty parameter C to balance margin maximization with training error tolerance.",
            "• Kernel Trick: Projects non-linearly separable inputs into high-dimensional feature space using kernel functions: Linear, Polynomial, Radial Basis Function (RBF/Gaussian)."
          ]
        },
        {
          "title": "Deep Learning Architectures: CNN Convolutions, Pooling & Receptive Fields",
          "points": [
            "• Convolutional Layer: Applies spatial learnable filter kernels to compute feature activation feature maps (preserves translation invariance).",
            "• Pooling Layer: Max-pooling or average-pooling to downsample spatial dimensions, reduce parameter count, and provide spatial distortion tolerance.",
            "• Output Dimension Formula: Output Size = ((Input Size - Filter Size + 2*Padding) / Stride) + 1."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Alpha-Beta Pruning Cutoff Trigger",
          "mnemonic": "Prune When Alpha ≥ Beta!",
          "explanation": "Alpha is updated ONLY at MAX nodes; Beta is updated ONLY at MIN nodes.",
          "proTip": "Alpha-beta pruning does NOT change the optimal value found by Minimax; it only reduces evaluated nodes."
        },
        {
          "title": "A* Admissibility Golden Rule",
          "mnemonic": "h(n) ≤ h*(n): 'Never Overestimate!'",
          "explanation": "Heuristic must be optimistic (underestimate or equal true cost to goal) for A* tree search to be optimal.",
          "proTip": "If h(n) = 0 for all nodes, A* degenerates into Uniform Cost Search (Dijkstra)."
        },
        {
          "title": "Fuzzy Operations Zadeh Peg",
          "mnemonic": "Union = MAX | Intersection = MIN | Complement = 1 - μ",
          "explanation": "Standard fuzzy set operations formulated by Lotfi Zadeh.",
          "proTip": "Law of Excluded Middle (A ∪ ¬A = Universal) does NOT hold in fuzzy logic!"
        },
        {
          "title": "IDS Space vs BFS Space Peg",
          "mnemonic": "BFS Space = O(b^d) Exponential | IDS Space = O(bd) Linear!",
          "explanation": "Iterative Deepening Search re-runs DFS to achieve BFS optimality in linear space.",
          "proTip": "IDS is the algorithm of choice when search space is large and depth is unknown."
        },
        {
          "title": "Entropy Shortcut for Decision Trees",
          "mnemonic": "Pure (100% same class) = 0 | 50-50 Split = 1 (Maximum Impurity)",
          "explanation": "Entropy reaches minimum (0) for pure nodes and maximum (1) for equal binary distribution.",
          "proTip": "Information Gain = Parent Entropy - Weighted Children Entropy."
        },
        {
          "title": "Perceptron XOR Limitation",
          "mnemonic": "Single Layer Perceptron CANNOT solve XOR!",
          "explanation": "XOR is non-linearly separable. Requires Multilayer Perceptron with hidden layer.",
          "proTip": "Perceptron works only on linearly separable functions like AND and OR."
        }
      ]
    },
    {
      "id": "p2-u10",
      "unitNumber": 10,
      "name": "Algorithms & Advanced Computing",
      "icon": "⚡",
      "theoryNotes": [
        {
          "title": "Asymptotic Notations & Mathematical Definitions",
          "points": [
            "• Asymptotic Efficiency: Analyzes resource consumption (Time and Space) as input size n approaches infinity (n → ∞).",
            "• 5 Asymptotic Notations:",
            "  - Big-O (O): Asymptotic Upper Bound. f(n) = O(g(n)) iff there exist positive constants c and n0 such that 0 ≤ f(n) ≤ c · g(n) for all n ≥ n0.",
            "  - Big-Omega (Ω): Asymptotic Lower Bound. f(n) = Ω(g(n)) iff there exist positive constants c and n0 such that 0 ≤ c · g(n) ≤ f(n) for all n ≥ n0.",
            "  - Big-Theta (Θ): Asymptotically Tight Bound. f(n) = Θ(g(n)) iff f(n) = O(g(n)) AND f(n) = Ω(g(n)) (c1 · g(n) ≤ f(n) ≤ c2 · g(n)).",
            "  - Little-o (o): Strict Upper Bound. f(n) = o(g(n)) iff lim_{n→∞} [f(n) / g(n)] = 0.",
            "  - Little-omega (ω): Strict Lower Bound. f(n) = ω(g(n)) iff lim_{n→∞} [f(n) / g(n)] = ∞."
          ]
        },
        {
          "title": "Growth Rates of Standard Functions & Asymptotic Ranking",
          "points": [
            "• Growth Rate Order (Slowest to Fastest):",
            "  c (Constant 1) < log(log n) < log n < (log n)^k < √n < n < n log n < n² < n³ < 2^n < e^n < 3^n < n! < n^n.",
            "• Stirling's Approximation: n! ≈ √(2πn) · (n / e)^n ⟹ log(n!) = Θ(n log n).",
            "• Comparison Rules: Any polynomial dominates any polylogarithm: (log n)^k = o(n^ε) for any k > 0 and ε > 0. Any exponential dominates any polynomial: n^k = o(a^n) for any a > 1."
          ]
        },
        {
          "title": "Recurrence Relations: Master Theorem & Recursion Trees",
          "points": [
            "• Master Theorem for Divide-and-Conquer: T(n) = a T(n/b) + f(n), where a ≥ 1, b > 1:",
            "  - Case 1: If f(n) = O(n^(log_b(a) - ε)) for some ε > 0 ⟹ T(n) = Θ(n^(log_b a)).",
            "  - Case 2: If f(n) = Θ(n^(log_b a) · (log n)^k) for some k ≥ 0 ⟹ T(n) = Θ(n^(log_b a) · (log n)^(k+1)).",
            "  - Case 3: If f(n) = Ω(n^(log_b(a) + ε)) for some ε > 0 and regularity condition holds (a f(n/b) ≤ c f(n) for c < 1) ⟹ T(n) = Θ(f(n)).",
            "• Recursion Tree Method: Visualizes total work across tree levels. Number of leaves = a^(log_b n) = n^(log_b a). Height of tree = log_b n."
          ]
        },
        {
          "title": "Divide-and-Conquer Algorithms: Sorting Benchmark & Complexities",
          "points": [
            "• Merge Sort: Divides array into two halves, recursively sorts, merges in linear time. Recurrence: T(n) = 2T(n/2) + Θ(n). Time: Θ(n log n) in Best, Average, and Worst cases. Auxiliary Space: O(n). STABLE.",
            "• Quick Sort (Tony Hoare): Selects pivot, partitions array around pivot, recursively sorts subarrays. Best/Avg Time: O(n log n); Worst Case Time: O(n²) (occurs when array is already sorted or reverse-sorted and first/last element chosen as pivot). Auxiliary Space: O(log n) stack. UNSTABLE. Randomized Quick Sort achieves expected O(n log n) time.",
            "• Heap Sort: Builds Max-Heap in O(n) time; repeatedly extracts maximum and reheapifies in O(log n). Time: O(n log n) in all cases. Auxiliary Space: O(1) in-place. UNSTABLE.",
            "• Comparison-Based Sorting Lower Bound: Any comparison-based sorting algorithm requires at least Ω(n log n) comparisons in worst case (Decision Tree Model: 2^h ≥ n! ⟹ h ≥ log2(n!) = Ω(n log n)).",
            "• Non-Comparison Linear Sorts: Counting Sort O(n + k), Radix Sort O(d(n + k)), Bucket Sort O(n) average."
          ]
        },
        {
          "title": "Greedy Paradigm: Knapsack, Huffman Coding & Interval Scheduling",
          "points": [
            "• Greedy Choice Property & Optimal Substructure: Locally optimal choice at each step leads to globally optimal solution.",
            "• Fractional Knapsack: Greedy choice by sorting items by value-to-weight ratio (v_i / w_i). Solved in O(n log n).",
            "• Huffman Coding: Greedy algorithm constructing prefix-free optimal binary tree for data compression. Builds tree bottom-up by repeatedly extracting two lowest-frequency nodes from Min-Priority Queue in O(n log n).",
            "• Activity Selection / Interval Scheduling: Selects maximum non-overlapping activities. Greedy strategy: sort activities by FINISH TIME and select compatible activities in O(n log n)."
          ]
        },
        {
          "title": "Minimum Spanning Trees (MST): Prim's vs Kruskal's Algorithms",
          "points": [
            "• Minimum Spanning Tree (MST): Subgraph connecting all V vertices with V - 1 edges having minimal total edge weight. Cut Property: For any cut in graph, the lightest edge crossing the cut belongs to the MST.",
            "• Kruskal's Algorithm: Sorts all edges in non-decreasing order of weight; iteratively adds edge if it does not form a cycle. Uses Disjoint-Set Union-Find (DSU) with Path Compression and Union by Rank. Time: O(E log E) = O(E log V). Optimal for Sparse Graphs (E ≈ V).",
            "• Prim's Algorithm: Grows a single connected tree from starting vertex; repeatedly adds cheapest edge connecting a tree vertex to non-tree vertex using Min-Heap. Time: O(E log V) with Binary Heap; O(E + V log V) with Fibonacci Heap. Optimal for Dense Graphs (E ≈ V²)."
          ]
        },
        {
          "title": "Dynamic Programming: Principle of Optimality & Classical Problems",
          "points": [
            "• Dynamic Programming (Richard Bellman): Applicable when problem exhibits: 1. Optimal Substructure, 2. Overlapping Subproblems. Approaches: Top-Down with Memoization vs Bottom-Up Tabulation.",
            "• 0/1 Knapsack Problem: Items cannot be divided. Greedy fails. DP recurrence: V[i, w] = max(V[i-1, w], v_i + V[i-1, w - w_i]). Time: O(n · W) (Pseudo-polynomial time; NP-Complete).",
            "• Longest Common Subsequence (LCS): Computes length of longest subsequence shared by strings X (length m) and Y (length n). Recurrence: If x_i = y_j: c[i, j] = c[i-1, j-1] + 1; Else: c[i, j] = max(c[i-1, j], c[i, j-1]). Time: O(m · n).",
            "• Matrix Chain Multiplication: Optimal parenthesization of n matrices A1 × A2 × ... × An to minimize scalar multiplications. Solved in O(n³) time and O(n²) space."
          ]
        },
        {
          "title": "Graph Shortest Path Algorithms: Dijkstra, Bellman-Ford & Floyd-Warshall",
          "points": [
            "• Single-Source Shortest Path (Non-Negative Weights): Dijkstra's Algorithm. Greedy/DP using min-priority queue. Time: O((V + E) log V) with Binary Heap; O(E + V log V) with Fibonacci Heap. CANNOT handle negative weight edges.",
            "• Single-Source Shortest Path (Arbitrary Weights): Bellman-Ford Algorithm. Relaxes all E edges V - 1 times. Time: O(V · E). Detects Negative Weight Cycles (if relaxation possible in V-th pass).",
            "• All-Pairs Shortest Paths: Floyd-Warshall Algorithm. Dynamic programming algorithm using intermediate vertices: d_{ij}^{(k)} = min(d_{ij}^{(k-1)}, d_{ik}^{(k-1)} + d_{kj}^{(k-1)}). Time: O(V³); Space: O(V²). Handles negative edge weights, detects negative cycles on diagonal d_{ii} < 0."
          ]
        },
        {
          "title": "Advanced Graph Algorithms: DFS Edge Classification & Topological Sort",
          "points": [
            "• Depth-First Search (DFS) Edge Classification (using Discovery time d[u] and Finishing time f[u]):",
            "  - Tree Edge: Leading to unvisited vertex.",
            "  - Back Edge: Leading to an ancestor in DFS tree (u to v where d[v] < d[u] < f[u] < f[v]). Theorem: A directed graph has a cycle IF AND ONLY IF DFS discovers a BACK EDGE.",
            "  - Forward Edge: Leading to a non-child descendant in DFS tree.",
            "  - Cross Edge: Leading to all other vertices.",
            "• Topological Sort: Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, vertex u appears before v. Computed by running DFS and ordering vertices by DECREASING finishing times f[u]. Time: O(V + E). Kahn's Algorithm uses in-degrees."
          ]
        },
        {
          "title": "Strongly Connected Components (Kosaraju's & Tarjan's Algorithms)",
          "points": [
            "• Strongly Connected Component (SCC): Maximal set of vertices C such that every pair of vertices u, v ∈ C is mutually reachable (path u → v and path v → u exist).",
            "• Kosaraju's Two-Pass DFS Algorithm:",
            "  1. Run DFS on graph G and push vertices to stack in order of finishing times.",
            "  2. Compute Transpose Graph G^T (reverse direction of all edges).",
            "  3. Pop vertices from stack and run DFS on G^T. Each DFS traversal trees out an SCC.",
            "  - Time: O(V + E). Space: O(V).",
            "• Tarjan's Algorithm: Computes SCCs in a SINGLE DFS pass using Discovery Times and Low-Link Values (lowest discovery time reachable from subtree)."
          ]
        },
        {
          "title": "Complexity Classes: P, NP, NP-Hard & NP-Complete",
          "points": [
            "• Class P (Polynomial Time): Set of decision problems solvable in polynomial time O(n^k) by a Deterministic Turing Machine.",
            "• Class NP (Non-Deterministic Polynomial): Set of decision problems solvable in polynomial time by a Non-Deterministic Turing Machine (or equivalently, whose candidate solution can be VERIFIED in polynomial time by a deterministic TM).",
            "• Polynomial-Time Reduction (X ≤_p Y): Problem X reduces to problem Y in polynomial time if any instance of X can be transformed into an instance of Y in polynomial time such that X has answer Yes iff Y has answer Yes.",
            "• NP-Hard: Problem Y is NP-Hard if EVERY problem X in NP can be polynomial-time reduced to Y (X ≤_p Y for all X ∈ NP). NP-Hard problems need not be in NP (can be undecidable like Halting Problem).",
            "• NP-Complete (NPC): Problem Y is NP-Complete IF AND ONLY IF: 1. Y ∈ NP, AND 2. Y is NP-Hard. Hardest problems in NP.",
            "• Open Millennium Problem: P vs NP. If ANY NP-Complete problem is solved in polynomial time, then P = NP."
          ]
        },
        {
          "title": "Cook-Levin Theorem & Classic NP-Complete Problems",
          "points": [
            "• Cook-Levin Theorem (Stephen Cook 1971): Proved that Boolean Satisfiability (SAT / Circuit-SAT) is NP-Complete. First problem proven to be NP-Complete without prior reduction.",
            "• Classic NP-Complete Problems (Richard Karp 1972 21 Reductions):",
            "  - 3-SAT (3-Conjunctive Normal Form Satisfiability).",
            "  - Vertex Cover Problem: Subset of vertices covering every edge (decision version).",
            "  - Clique Problem: Fully connected complete subgraph of size k.",
            "  - Independent Set Problem: Set of vertices with no edges between any pair.",
            "  - Hamiltonian Cycle Problem & Traveling Salesperson Problem (Decision TSP: Is there a tour of cost ≤ K?).",
            "  - Subset Sum Problem (Is there a subset summing to target T?).",
            "  - Graph Coloring (Determining if graph can be colored with k colors for k ≥ 3; 2-coloring is in P).",
            "  - Set Cover Problem and Knapsack Decision Problem."
          ]
        },
        {
          "title": "Randomized Algorithms: Las Vegas vs Monte Carlo Paradigms",
          "points": [
            "• Las Vegas Algorithms: Always produce the strictly correct answer; running time is a random variable (e.g., Randomized QuickSort with expected O(n log n)).",
            "• Monte Carlo Algorithms: Deterministic running time; probability of producing an incorrect answer bounded by small ε (e.g., Miller-Rabin Primality Test).",
            "• Random Pivot Selection: Eliminates vulnerability to worst-case O(n^2) inputs in QuickSort."
          ]
        },
        {
          "title": "String Matching Algorithms: KMP, Rabin-Karp & Boyer-Moore",
          "points": [
            "• Knuth-Morris-Pratt (KMP): Uses π (Prefix) lookup array to avoid backtracking on text string; worst-case matching time O(n + m).",
            "• Rabin-Karp: Uses rolling hash function to match pattern hash against sliding text window; average time O(n + m), worst-case O(nm) on hash collisions.",
            "• Boyer-Moore: Scans pattern characters from right to left; uses Bad Character and Good Suffix heuristics; sub-linear average performance."
          ]
        },
        {
          "title": "NP-Complete Reductions: 3-SAT to CLIQUE & Vertex Cover",
          "points": [
            "• Reduction Principle: To prove language B is NP-Complete, prove B ∈ NP and reduce known NP-Complete problem A to B in polynomial time (A ≤_p B).",
            "• 3-SAT to CLIQUE Reduction: Constructs a graph with 3 vertices per clause; edges connect vertices in different clauses provided literals are not complementary.",
            "• Vertex Cover Duality: In any graph G = (V, E), subset S is a Vertex Cover iff V - S is an Independent Set."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Master Theorem 30-Second Rule",
          "mnemonic": "Compare f(n) with n^(log_b a)!",
          "explanation": "If f(n) < n^(log_b a) ⟹ Θ(n^(log_b a)). If equal ⟹ Θ(n^(log_b a) log n). If greater ⟹ Θ(f(n)).",
          "proTip": "Example: T(n) = 2T(n/2) + n ⟹ a=2, b=2 ⟹ n^(log2 2) = n^1 = f(n) ⟹ Θ(n log n)."
        },
        {
          "title": "Sorting Stability Mnemonic",
          "mnemonic": "Stable: 'M-I-B' (Merge, Insertion, Bubble) | Unstable: 'Q-H-S' (Quick, Heap, Selection)",
          "explanation": "Stable sort maintains the original relative order of elements with equal keys.",
          "proTip": "Merge Sort is the standard choice for stable O(n log n) sorting."
        },
        {
          "title": "Cycle in Directed Graph Rule",
          "mnemonic": "DFS Back Edge ⟹ Cycle Exists!",
          "explanation": "A back edge connects a vertex to an ancestor in the DFS tree.",
          "proTip": "If a graph has no back edges, it is a DAG and has a valid Topological Sort."
        },
        {
          "title": "Dijkstra vs Bellman-Ford Shortcut",
          "mnemonic": "Dijkstra = No Negative Edges O(E log V) | Bellman-Ford = Negative Edges Allowed O(VE)",
          "explanation": "Dijkstra fails on negative weights because greedy assumption breaks.",
          "proTip": "Floyd-Warshall solves All-Pairs Shortest Paths in O(V^3) time."
        },
        {
          "title": "NP-Complete Definition Shortcut",
          "mnemonic": "NPC = In NP + NP-Hard",
          "explanation": "Both conditions must hold for a problem to be NP-Complete.",
          "proTip": "Halting problem is NP-Hard, but NOT NP-Complete (because it is undecidable / not in NP)."
        },
        {
          "title": "Comparison Sort Lower Bound",
          "mnemonic": "Worst-Case Lower Bound is ALWAYS Ω(n log n)!",
          "explanation": "Based on binary decision tree of n! permutations.",
          "proTip": "No comparison-based sort can ever beat n log n in the worst case."
        }
      ]
    }
  ]
};
