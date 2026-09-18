/**
 * PAPER 2 - UNIT 8: THEORY OF COMPUTATION AND COMPILERS (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers Chomsky Hierarchy, DFA/NFA, Pumping Lemma, Turing Decidability, LL/LR Parsing, and Code Optimization.
 */

export const p2Unit8Questions = [
  {
    id: "p2-u8-q1",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET June 2024",
    question: "Which of the following problems is provably UNDECIDABLE according to Alan Turing's Halting Problem?",
    options: [
      { id: "A", text: "Determining whether a given regular expression generates the empty string (L = ∅)" },
      { id: "B", text: "Determining whether an arbitrary Turing Machine halts on a given input string" },
      { id: "C", text: "Determining whether a DFA accepts a given finite string" },
      { id: "D", text: "Finding the shortest path in a weighted graph" },
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Regular language emptiness: Decidable via reachability analysis on DFA.",
      "B": "Turing machine halting: Correct! The classic Halting Problem proved undecidable by Alan Turing (1936) via Cantor's diagonal argument.",
      "C": "DFA acceptance: Decidable by simulating the DFA in O(n) steps.",
      "D": "Shortest path: Solvable in polynomial time using Dijkstra's algorithm."
    },
    summaryExplanation: "The Halting Problem of Turing Machines is undecidable by reduction and diagonalization."
  },
  {
    id: "p2-u8-q2",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "MH-SET 2024",
    question: "In the Chomsky classification of formal grammars, which grammar type generates Context-Sensitive Languages (CSLs) and is recognized by a Linear Bounded Automaton (LBA)?",
    options: [
      { id: "A", text: "Type 0" },
      { id: "B", text: "Type 1" },
      { id: "C", text: "Type 2" },
      { id: "D", text: "Type 3" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Type 0: Unrestricted Grammars (Recursively Enumerable / Turing Machine).",
      "B": "Type 1: Correct! Context-Sensitive Grammars (CSGs: αAβ → αγβ where |γ| ≥ 1) recognized by non-deterministic Linear Bounded Automata (LBAs).",
      "C": "Type 2: Context-Free Grammars (CFGs / Pushdown Automata).",
      "D": "Type 3: Regular Grammars (Finite Automata)."
    },
    summaryExplanation: "Type 1 grammars define Context-Sensitive Languages (CSLs) parsed by Linear Bounded Automata."
  },
  {
    id: "p2-u8-q3",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET Dec 2023",
    question: "What is the relationship between the language parsing capabilities of LR parsers in compiler design?",
    options: [
      { id: "A", text: "LR(0) ⊂ SLR(1) ⊂ LALR(1) ⊂ CLR(1)" },
      { id: "B", text: "CLR(1) ⊂ LALR(1) ⊂ SLR(1) ⊂ LR(0)" },
      { id: "C", text: "LL(1) = LR(1)" },
      { id: "D", text: "SLR(1) = CLR(1)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "LR(0) ⊂ SLR(1) ⊂ LALR(1) ⊂ CLR(1): Correct! Parsing power hierarchy: LR(0) is the weakest, SLR(1) adds Follow sets, LALR(1) merges compatible LR(1) states, and Canonical LR(1) possesses maximum parsing capability.",
      "B": "Inverted order.",
      "C": "LL(1) is strictly weaker than LR(1).",
      "D": "CLR(1) accepts significantly larger grammar classes than SLR(1)."
    },
    summaryExplanation: "Parsing power hierarchy: LR(0) < SLR(1) < LALR(1) < CLR(1)."
  },
  {
    id: "p2-u8-q4",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "WB-SET 2023",
    question: "The language L = { a^n b^n c^n | n ≥ 1 } is classified under the Chomsky hierarchy as:",
    options: [
      { id: "A", text: "Regular Language" },
      { id: "B", text: "Context-Free Language (CFL)" },
      { id: "C", text: "Context-Sensitive Language (CSL) but not Context-Free" },
      { id: "D", text: "Non-computable Language" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Regular: Cannot match symbols across unbounded powers.",
      "B": "Context-Free: Standard pushdown automata can compare at most two symbols (e.g., a^n b^n); it cannot match three independent symbols simultaneously.",
      "C": "Context-Sensitive (CSL): Correct! Provable by the Pumping Lemma for CFLs; L requires an LBA or Turing Machine, making it a Type 1 CSL.",
      "D": "Non-computable: Easily computable by a Turing Machine."
    },
    summaryExplanation: "The language aⁿbⁿcⁿ requires coordinating three unbounded powers, belonging to Type 1 CSLs."
  },
  {
    id: "p2-u8-q5",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "KSET 2023",
    question: "Context-Free Languages (CFLs) are CLOSED under which of the following operations?",
    options: [
      { id: "A", text: "Union and Concatenation" },
      { id: "B", text: "Intersection" },
      { id: "C", text: "Complement" },
      { id: "D", text: "Set Difference" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Union and Concatenation: Correct! CFLs are closed under Union (S → S1 | S2), Concatenation (S → S1 S2), and Kleene Star (S → S S1 | ε).",
      "B": "Intersection: Not closed (e.g., a^n b^n c^m ∩ a^m b^n c^n = a^n b^n c^n).",
      "C": "Complement: Not closed (by De Morgan's laws with intersection).",
      "D": "Set Difference: Not closed."
    },
    summaryExplanation: "CFLs are closed under Union, Concatenation, and Kleene Star, but NOT closed under Intersection or Complement."
  },
  {
    id: "p2-u8-q6",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "AP-SET 2024",
    question: "In compiler design, what is an 'S-Attributed Definition' (S-Attributed SDD)?",
    options: [
      { id: "A", text: "A syntax-directed definition that uses only Inherited attributes" },
      { id: "B", text: "A syntax-directed definition that uses exclusively Synthesized attributes" },
      { id: "C", text: "A definition evaluated strictly top-down" },
      { id: "D", text: "A definition with no semantic actions" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Only inherited attributes: Disallowed in S-attributed SDDs.",
      "B": "Exclusively Synthesized attributes: Correct! An SDD is S-attributed if every attribute is synthesized, meaning values are computed bottom-up from child nodes.",
      "C": "Top-down: S-attributed SDDs are naturally evaluated bottom-up during LR parsing.",
      "D": "No actions: Standard CFG."
    },
    summaryExplanation: "An S-attributed SDD relies exclusively on synthesized attributes evaluated bottom-up in parse trees."
  },
  {
    id: "p2-u8-q7",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET Dec 2022",
    question: "If a Non-Deterministic Finite Automaton (NFA) has n states, what is the maximum number of states in its equivalent minimized or power-set Determinant Finite Automaton (DFA)?",
    options: [
      { id: "A", text: "n" },
      { id: "B", text: "2^n" },
      { id: "C", text: "n^2" },
      { id: "D", text: "n!" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "n: Rare best-case.",
      "B": "2^n: Correct! The subset construction algorithm maps DFA states to the power set of NFA states (P(Q)), generating at most 2^n states in the worst case.",
      "C": "n^2: Polynomial bound.",
      "D": "n!: Combinatorial permutations."
    },
    summaryExplanation: "The power set construction yields at most 2ⁿ states in an equivalent DFA for an n-state NFA."
  },
  {
    id: "p2-u8-q8",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "GSET 2023",
    question: "What form must production rules satisfy for a context-free grammar to be in Chomsky Normal Form (CNF)?",
    options: [
      { id: "A", text: "A → BC or A → a (where A, B, C are non-terminals and a is a terminal)" },
      { id: "B", text: "A → aα (Greibach Normal Form)" },
      { id: "C", text: "α → β (Unrestricted)" },
      { id: "D", text: "A → B (Unit productions)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "A → BC or A → a: Correct! Chomsky Normal Form strictly restricts all productions to either two non-terminals or a single terminal (plus S → ε if ε ∈ L).",
      "B": "A → aα: Greibach Normal Form (GNF).",
      "C": "α → β: Type 0 grammar.",
      "D": "Unit productions: Explicitly eliminated in CNF."
    },
    summaryExplanation: "Chomsky Normal Form (CNF) requires productions to strictly match A → BC or A → a."
  },
  {
    id: "p2-u8-q9",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET June 2023",
    question: "In code optimization, replacing an expensive operation with an equivalent cheaper operation (such as replacing `x = y * 8` with bitwise left shift `x = y << 3`) is known as:",
    options: [
      { id: "A", text: "Loop Invariant Code Motion" },
      { id: "B", text: "Strength Reduction" },
      { id: "C", text: "Dead Code Elimination" },
      { id: "D", text: "Constant Folding" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Loop Invariant Motion: Hoisting loop-independent computations outside the loop.",
      "B": "Strength Reduction: Correct! Replacing costly operations (e.g., multiplication, division) with computationally lighter operations (e.g., addition, shifts).",
      "C": "Dead Code Elimination: Removing unreachable or unused statements.",
      "D": "Constant Folding: Evaluating constant arithmetic at compile time (e.g., 3 + 5 → 8)."
    },
    summaryExplanation: "Strength reduction replaces computationally heavy arithmetic with cheaper equivalent machine operations."
  },
  {
    id: "p2-u8-q10",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "TN-SET 2024",
    question: "Which phase of the compiler groups input source code characters into meaningful lexical units known as 'Tokens'?",
    options: [
      { id: "A", text: "Lexical Analyzer (Scanner)" },
      { id: "B", text: "Syntax Analyzer (Parser)" },
      { id: "C", text: "Semantic Analyzer" },
      { id: "D", text: "Target Code Generator" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Lexical Analyzer: Correct! The scanner reads raw character streams, strips whitespace/comments, and generates tokens according to regular expressions.",
      "B": "Syntax Analyzer: Constructs parse trees checking grammatical syntax.",
      "C": "Semantic Analyzer: Checks static type rules and scope.",
      "D": "Code Generator: Produces assembly/machine code."
    },
    summaryExplanation: "The Lexical Analyzer (Scanner) aggregates source characters into constituent language tokens."
  },
  {
    id: "p2-u8-q11",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET Dec 2023",
    question: "According to Rice's Theorem, any non-trivial semantic property of the language recognized by a Turing machine is:",
    options: [
      { id: "A", text: "Decidable in linear time" },
      { id: "B", text: "Undecidable" },
      { id: "C", text: "Context-Free" },
      { id: "D", text: "Deterministic Regular" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Decidable: Rice's theorem states the exact opposite.",
      "B": "Undecidable: Correct! Henry Gordon Rice (1953) proved that any non-trivial semantic property (language emptiness, finiteness, regularity) of a Turing Machine is undecidable.",
      "C": "Context-Free: Grammatical classification.",
      "D": "Regular: Sub-class."
    },
    summaryExplanation: "Rice's Theorem proves that all non-trivial semantic properties of Turing Machine languages are undecidable."
  },
  {
    id: "p2-u8-q12",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "MH-SET 2023",
    question: "What parsing conflict occurs in an LR parser when the parsing table entry contains both a Shift action and a Reduce action for the same state and lookahead terminal?",
    options: [
      { id: "A", text: "Reduce-Reduce Conflict" },
      { id: "B", text: "Shift-Reduce Conflict" },
      { id: "C", text: "Operator Precedence Error" },
      { id: "D", text: "Left Recursion Error" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Reduce-Reduce: Parser cannot decide between two different reduction rules.",
      "B": "Shift-Reduce Conflict: Correct! Occurs when the grammar is ambiguous or lookahead is insufficient to decide whether to shift the next input symbol or reduce the current handle.",
      "C": "Precedence error: Semantic issue.",
      "D": "Left recursion: Impedes LL(1) top-down parsers, not an LR conflict."
    },
    summaryExplanation: "A Shift-Reduce conflict arises when an LR parser cannot determine whether to shift or reduce."
  },
  {
    id: "p2-u8-q13",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "WB-SET 2024",
    question: "What language is generated by the regular expression: `(0 + 1)* 001 (0 + 1)*` ?",
    options: [
      { id: "A", text: "All binary strings starting with 001" },
      { id: "B", text: "All binary strings ending with 001" },
      { id: "C", text: "All binary strings containing '001' as a substring" },
      { id: "D", text: "Only the single string 001" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Starting with 001: Denoted by `001(0 + 1)*`.",
      "B": "Ending with 001: Denoted by `(0 + 1)*001`.",
      "C": "Containing 001 as substring: Correct! Flanked by arbitrary binary prefixes and suffixes `(0+1)*`, matching any string with '001' appearing internally.",
      "D": "Only 001: Denoted by `001` without Kleene star."
    },
    summaryExplanation: "`(0+1)*001(0+1)*` matches all binary strings containing '001' as a substring."
  },
  {
    id: "p2-u8-q14",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET June 2024",
    question: "In Three-Address Code (TAC) intermediate representation, a 'Quadruple' representation contains which four distinct fields?",
    options: [
      { id: "A", text: "Op, Arg1, Arg2, and Result" },
      { id: "B", text: "Source, Destination, Offset, and Type" },
      { id: "C", text: "Token, Lexeme, Line, and Column" },
      { id: "D", text: "Base, Index, Scale, and Displacement" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Op, Arg1, Arg2, Result: Correct! A quadruple is a record structure containing operator name (Op), two source arguments (Arg1, Arg2), and a destination (Result).",
      "B": "Instruction decoding format.",
      "C": "Lexical token structure.",
      "D": "x86 addressing mode fields."
    },
    summaryExplanation: "A Quadruple intermediate representation consists of four fields: Op, Arg1, Arg2, and Result."
  },
  {
    id: "p2-u8-q15",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "KSET 2024",
    question: "What is the minimum number of states in a DFA that accepts all binary strings whose second symbol from the right end is '1'?",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "4" },
      { id: "C", text: "8" },
      { id: "D", text: "16" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2: Insufficient memory.",
      "B": "4: Correct! General theorem: A DFA recognizing strings whose k-th symbol from the right is '1' requires exactly 2^k states. For k = 2 (second from right): 2^2 = 4 states (tracking states for suffixes 00, 01, 10, 11).",
      "C": "8: 2^3 for 3rd symbol from right.",
      "D": "16: 2^4."
    },
    summaryExplanation: "A DFA checking the k-th symbol from the right requires exactly 2^k states (2² = 4 states)."
  },
  {
    id: "p2-u8-q16",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET Dec 2023",
    question: "A grammar G is said to be 'Ambiguous' if:",
    options: [
      { id: "A", text: "It contains useless symbols" },
      { id: "B", text: "There exists at least one sentence for which there are two or more distinct leftmost derivations (or distinct parse trees)" },
      { id: "C", text: "It has no start symbol" },
      { id: "D", text: "It cannot be compiled on 32-bit machines" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Useless symbols: Unreachable or non-generating symbols.",
      "B": "Two or more distinct parse trees: Correct! Ambiguity is defined as the existence of multiple distinct syntax trees (or leftmost/rightmost derivations) for the same string.",
      "C": "No start symbol: Invalid CFG.",
      "D": "Hardware architecture: Irrelevant."
    },
    summaryExplanation: "A grammar is ambiguous if any sentence in its language possesses two or more distinct parse trees."
  },
  {
    id: "p2-u8-q17",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "AP-SET 2023",
    question: "Which of the following problems is DECIDABLE for Context-Free Grammars?",
    options: [
      { id: "A", text: "Is the language of a CFG empty (L = ∅)?" },
      { id: "B", text: "Is a given CFG ambiguous?" },
      { id: "C", text: "Are two CFGs equivalent (L(G1) = L(G2))?" },
      { id: "D", text: "Does a CFG generate all strings (L = Σ*)?" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Emptiness problem (L = ∅): Correct! Decidable by checking if the start symbol can derive any terminal string (generating symbol algorithm).",
      "B": "Ambiguity: Undecidable for arbitrary CFGs.",
      "C": "Equivalence: Undecidable for CFGs.",
      "D": "Universality (L = Σ*): Undecidable for CFGs."
    },
    summaryExplanation: "The Emptiness problem (L = ∅) is decidable for Context-Free Grammars; ambiguity and equivalence are undecidable."
  },
  {
    id: "p2-u8-q18",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "MH-SET 2024",
    question: "In compiler construction, why must 'Immediate Left Recursion' (A → Aα | β) be eliminated before constructing an LL(1) top-down parser?",
    options: [
      { id: "A", text: "It causes top-down predictive parsers to loop infinitely without consuming any input tokens" },
      { id: "B", text: "It makes the code execute too fast" },
      { id: "C", text: "It prevents variable allocation in the data segment" },
      { id: "D", text: "It generates syntax errors in the assembler" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Infinite recursion loop: Correct! A recursive descent parser repeatedly expands A → Aα indefinitely without advancing the input pointer.",
      "B": "Too fast: Inaccurate.",
      "C": "Variable allocation: Memory task.",
      "D": "Assembler syntax: Intermediate stage."
    },
    summaryExplanation: "Left recursion causes recursive-descent top-down LL parsers to enter infinite non-terminating loops."
  },
  {
    id: "p2-u8-q19",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET June 2023",
    question: "A Directed Acyclic Graph (DAG) for a Basic Block in compiler code optimization is used primarily for:",
    options: [
      { id: "A", text: "Detecting common subexpressions and eliminating redundant computations within the block" },
      { id: "B", text: "Resolving IP addresses" },
      { id: "C", text: "Sorting tokens alphabetically" },
      { id: "D", text: "Scanning punctuation marks" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Common subexpression detection: Correct! DAGs track expressions, naturally merging identical calculations into single shared sub-DAG nodes.",
      "B": "IP addresses: Networking.",
      "C": "Token sorting: Irrelevant.",
      "D": "Scanning punctuation: Lexer task."
    },
    summaryExplanation: "Basic block DAGs identify local common subexpressions to eliminate redundant computations."
  },
  {
    id: "p2-u8-q20",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "GSET 2024",
    question: "What is the Pumping Lemma for Regular Languages primarily used for in formal language theory?",
    options: [
      { id: "A", text: "Proving that a given language is regular" },
      { id: "B", text: "Proving that a given language is NOT regular by contradiction" },
      { id: "C", text: "Minimizing a DFA" },
      { id: "D", text: "Constructing parse trees" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Proving regular: The Pumping Lemma is a necessary condition, not sufficient; it cannot prove regularity.",
      "B": "Proving NOT regular: Correct! Used as a proof-by-contradiction tool: if a language fails the pumping condition for some string w with |w| ≥ p, it cannot be regular.",
      "C": "DFA minimization: Done via Myhill-Nerode / Table-filling.",
      "D": "Parse trees: Parsing phase."
    },
    summaryExplanation: "The Pumping Lemma is utilized exclusively as a negative tool to prove that a language is not regular."
  },
  {
    id: "p2-u8-q21",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "WB-SET 2023",
    question: "What distinguishes a Deterministic Pushdown Automaton (DPDA) from a Non-Deterministic Pushdown Automaton (NPDA)?",
    options: [
      { id: "A", text: "DPDA accepts all Context-Free Languages, while NPDA accepts only regular languages" },
      { id: "B", text: "DPDA accepts strictly Deterministic Context-Free Languages (DCFLs), a proper subset of all CFLs accepted by NPDA" },
      { id: "C", text: "DPDA has two stacks while NPDA has one" },
      { id: "D", text: "DPDA is equivalent to a Turing machine" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Inverted facts.",
      "B": "DCFLs proper subset: Correct! NPDAs are strictly more powerful than DPDAs (unlike finite automata where DFA = NFA). NPDAs accept all CFLs; DPDAs accept only DCFLs.",
      "C": "Two stacks: A 2-stack PDA has the power of a full Turing Machine.",
      "D": "Turing machine: Requires 2 stacks or unbounded tape."
    },
    summaryExplanation: "NPDAs are strictly more expressive than DPDAs; DPDAs accept only Deterministic Context-Free Languages."
  },
  {
    id: "p2-u8-q22",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET Dec 2023",
    question: "In syntax analysis, what does the 'FOLLOW(A)' set of a non-terminal A contain?",
    options: [
      { id: "A", text: "The set of all non-terminals that appear on the left side of A" },
      { id: "B", text: "The set of terminal symbols that can appear immediately to the right of non-terminal A in some sentential form" },
      { id: "C", text: "The set of all tokens generated by A" },
      { id: "D", text: "The line numbers where A is referenced" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Non-terminals to the left: Inaccurate.",
      "B": "Terminals immediately to right: Correct! FOLLOW(A) = { a ∈ T | S ⇒* αAaβ }, plus $ if A can end a sentential form.",
      "C": "Tokens generated: FIRST set.",
      "D": "Line numbers: Symbol table."
    },
    summaryExplanation: "FOLLOW(A) is the set of terminal symbols that can appear immediately to the right of A in any derivation."
  },
  {
    id: "p2-u8-q23",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "KSET 2023",
    question: "A language L is 'Turing Decidable' (Recursive) if there exists a Turing Machine M such that for every input string w:",
    options: [
      { id: "A", text: "M halts and accepts if w ∈ L, and halts and rejects if w ∉ L (M halts on all inputs)" },
      { id: "B", text: "M loops forever on all inputs" },
      { id: "C", text: "M halts only when w contains zeroes" },
      { id: "D", text: "M crashes the computer" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Halts on all inputs: Correct! A language is Decidable (Recursive) iff its decider TM always halts, explicitly accepting or rejecting every input.",
      "B": "Loops forever: Non-terminating.",
      "C": "Halts on zero: Arbitrary condition.",
      "D": "Crash: Malfunction."
    },
    summaryExplanation: "A language is Decidable (Recursive) if an algorithm/TM exists that halts on every input string."
  },
  {
    id: "p2-u8-q24",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET June 2024",
    question: "In compiler design, what is an 'L-Attributed Definition' (L-Attributed SDD)?",
    options: [
      { id: "A", text: "A definition where inherited attributes can only depend on attributes of sibling nodes to their left (and inherited attributes of the parent)" },
      { id: "B", text: "A definition evaluated exclusively from right to left" },
      { id: "C", text: "A definition containing only terminal symbols" },
      { id: "D", text: "A grammar containing no loops" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Depends on left siblings and parent: Correct! L-attributed definitions allow synthesized attributes and constrained inherited attributes evaluated during a single left-to-right pass.",
      "B": "Right-to-left: It is evaluated strictly Left-to-right.",
      "C": "Only terminals: Irrelevant.",
      "D": "No loops: Acyclic grammar."
    },
    summaryExplanation: "In L-attributed SDDs, inherited attributes depend only on inherited parent attributes and left-sibling attributes."
  },
  {
    id: "p2-u8-q25",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "MH-SET 2023",
    question: "The Post Correspondence Problem (PCP) is provably:",
    options: [
      { id: "A", text: "Decidable in linear time" },
      { id: "B", text: "NP-Complete" },
      { id: "C", text: "Undecidable in general (for alphabet sizes ≥ 2)" },
      { id: "D", text: "Equivalent to finding minimum spanning trees" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Decidable: Proved undecidable by Emil Post.",
      "B": "NP-Complete: PCP is uncomputable / undecidable.",
      "C": "Undecidable: Correct! Emil Post (1946) showed that determining whether a matching tile string sequence exists is undecidable.",
      "D": "MST equivalence: Graph algorithms are polynomial."
    },
    summaryExplanation: "The Post Correspondence Problem (PCP) is a classic undecidable problem."
  },
  {
    id: "p2-u8-q26",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "AP-SET 2024",
    question: "What does the 'Myhill-Nerode Theorem' provide a foundation for in automata theory?",
    options: [
      { id: "A", text: "Proving that all grammars are ambiguous" },
      { id: "B", text: "Characterizing regular languages and constructing the unique minimal state DFA" },
      { id: "C", text: "Eliminating left recursion" },
      { id: "D", text: "Building LALR parsing tables" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Grammar ambiguity: Unrelated.",
      "B": "Unique minimal DFA: Correct! Establishes that a language is regular iff its equivalence relations have finite index, directly matching the states of the minimal DFA.",
      "C": "Eliminating left recursion: Grammar transformation.",
      "D": "LALR tables: Parser generator."
    },
    summaryExplanation: "The Myhill-Nerode theorem characterizes regular languages via equivalence classes, guaranteeing a unique minimal DFA."
  },
  {
    id: "p2-u8-q27",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET Dec 2023",
    question: "What is a 'Basic Block' in intermediate code optimization?",
    options: [
      { id: "A", text: "A sequence of consecutive instructions that has a single entry point (enters at the beginning) and a single exit point (leaves at the end without internal branches)" },
      { id: "B", text: "A block containing only variable declarations" },
      { id: "C", text: "A memory chip on the motherboard" },
      { id: "D", text: "A function containing exactly three parameters" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Single entry and single exit sequence: Correct! Control enters only at the first statement and leaves only at the last, with no jumps into or out of the middle.",
      "B": "Declarations block: Header section.",
      "C": "Motherboard chip: Hardware.",
      "D": "Three parameters: Unrelated."
    },
    summaryExplanation: "A Basic Block is a sequence of straight-line code instructions entered only at the start and exited only at the end."
  },
  {
    id: "p2-u8-q28",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "WB-SET 2024",
    question: "In bottom-up parsing, what is a 'Handle'?",
    options: [
      { id: "A", text: "A substring that matches the right-hand side of a production rule and whose reduction represents one step along the reverse of a rightmost derivation" },
      { id: "B", text: "The physical grip on the computer case" },
      { id: "C", text: "A compiler flag enabling debug symbols" },
      { id: "D", text: "A pointer to the root of the parse tree" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Matches RHS for valid reduction: Correct! A handle is the exact substring reduced during shift-reduce parsing to mirror rightmost derivation in reverse.",
      "B": "Physical grip: Literal pun.",
      "C": "Compiler flag: CLI argument.",
      "D": "Root pointer: Data structure pointer."
    },
    summaryExplanation: "In shift-reduce parsing, a handle is a substring matching a production RHS whose reduction inverts a rightmost derivation."
  },
  {
    id: "p2-u8-q29",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "UGC NET June 2023",
    question: "What is the closure property of Regular Languages under the 'Homomorphism' operation?",
    options: [
      { id: "A", text: "Closed under Homomorphism and Inverse Homomorphism" },
      { id: "B", text: "Not closed under any homomorphism" },
      { id: "C", text: "Closed only if the string length is prime" },
      { id: "D", text: "Closed only on single-state DFAs" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Closed under Homomorphism and Inverse: Correct! Regular languages are robustly closed under homomorphism (substituting letters with words) and inverse homomorphism.",
      "B": "Not closed: False.",
      "C": "Prime length: Irrelevant constraint.",
      "D": "Single state: Arbitrary."
    },
    summaryExplanation: "Regular languages are closed under both Homomorphism and Inverse Homomorphism."
  },
  {
    id: "p2-u8-q30",
    paper: "paper2",
    unitId: "p2-u8",
    unitNumber: 8,
    unitName: "Theory of Computation and Compilers",
    examSource: "MH-SET 2024",
    question: "In code generation, which graph coloring formulation is conventionally used to solve the 'Global Register Allocation' problem?",
    options: [
      { id: "A", text: "Register interference graph coloring (where colors represent available CPU registers)" },
      { id: "B", text: "Bipartite maximum matching" },
      { id: "C", text: "Eulerian path coloring" },
      { id: "D", text: "Dijkstra's shortest path" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Interference graph coloring: Correct! Gregory Chaitin's algorithm; live ranges of variables are nodes, connected by edges if they are live simultaneously. A k-coloring maps them to k hardware registers.",
      "B": "Bipartite matching: Assignment problem.",
      "C": "Eulerian path: Graph traversal.",
      "D": "Dijkstra: Routing."
    },
    summaryExplanation: "Register allocation is modeled as a K-Graph Coloring problem over an interference graph of live variable ranges."
  }
];
