/**
 * PAPER 2 - UNIT 6: SOFTWARE ENGINEERING (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers SDLC Models, Coupling/Cohesion, Function Points, COCOMO, Cyclomatic Complexity, and Testing.
 */

export const p2Unit6Questions = [
  {
    id: "p2-u6-q1",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET June 2024",
    question: "In McCabe's Cyclomatic Complexity metric, if a program control flow graph G has 14 edges (E), 10 nodes (N), and 1 connected component (P = 1), what is the cyclomatic complexity V(G)?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "6" },
      { id: "D", text: "7" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "4: E - N = 14 - 10.",
      "B": "5: Arithmetic error.",
      "C": "6: Correct! Thomas McCabe's formula: V(G) = E - N + 2P = 14 - 10 + 2(1) = 4 + 2 = 6 independent execution paths.",
      "D": "7: Overestimate."
    },
    summaryExplanation: "Cyclomatic complexity V(G) = E - N + 2P = 14 - 10 + 2 = 6."
  },
  {
    id: "p2-u6-q2",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "MH-SET 2024",
    question: "Which type of module coupling is considered the BEST (loosest and most desirable) design practice in software architecture?",
    options: [
      { id: "A", text: "Content Coupling" },
      { id: "B", text: "Common Coupling" },
      { id: "C", text: "Control Coupling" },
      { id: "D", text: "Data Coupling" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Content Coupling: Worst / tightest form; one module directly alters internal code or data of another.",
      "B": "Common Coupling: Modules share global data variables.",
      "C": "Control Coupling: One module passes flags to direct internal logic flow of another.",
      "D": "Data Coupling: Correct! Modules communicate purely by passing elementary, scalar data parameters, maximizing independence."
    },
    summaryExplanation: "Data coupling is the most desirable form of loose module coupling in software engineering."
  },
  {
    id: "p2-u6-q3",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET Dec 2023",
    question: "The Spiral Model of software development propounded by Barry Boehm is distinguished from other SDLC models by its explicit, central emphasis on:",
    options: [
      { id: "A", text: "Automatic code generation" },
      { id: "B", text: "Formal Risk Analysis and Risk Management at every iteration" },
      { id: "C", text: "Strict elimination of all customer feedback" },
      { id: "D", text: "Fixed non-iterative single waterfall delivery" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Code generation: CASE tools feature.",
      "B": "Risk Analysis: Correct! Boehm's Spiral model is fundamentally a risk-driven process model structured into four repeating quadrants: Objectives, Risk Assessment, Development, and Review.",
      "C": "Eliminating feedback: Contradicts participatory spiral reviews.",
      "D": "Non-iterative delivery: Characteristic of basic Waterfall."
    },
    summaryExplanation: "The Spiral Model is a risk-driven lifecycle model featuring systematic risk analysis at every spiral loop."
  },
  {
    id: "p2-u6-q4",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "WB-SET 2023",
    question: "Which level of the Capability Maturity Model Integration (CMMI) is characterized by quantitative process management where software metrics and process quality are statistically measured and controlled?",
    options: [
      { id: "A", text: "Level 2 (Managed)" },
      { id: "B", text: "Level 3 (Defined)" },
      { id: "C", text: "Level 4 (Quantitatively Managed)" },
      { id: "D", text: "Level 5 (Optimizing)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Level 2 (Managed): Projects planned, executed, measured, and controlled at project tier.",
      "B": "Level 3 (Defined): Organization-wide standard software engineering processes.",
      "C": "Level 4 (Quantitatively Managed): Correct! Processes are controlled using statistical and quantitative measurement techniques.",
      "D": "Level 5 (Optimizing): Focuses on continuous process improvement through innovative technological changes."
    },
    summaryExplanation: "CMMI Level 4 is Quantitatively Managed, where software processes are statistically measured and controlled."
  },
  {
    id: "p2-u6-q5",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "KSET 2023",
    question: "In black-box software testing, if a valid input field accepts integers in the closed range [10, 100], what are the critical test case values according to Boundary Value Analysis (BVA)?",
    options: [
      { id: "A", text: "Only 50 and 55" },
      { id: "B", text: "9, 10, 11, 99, 100, 101" },
      { id: "C", text: "0, 50, 200" },
      { id: "D", text: "-10, 0, +10" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "50, 55: Nominal interior values.",
      "B": "9, 10, 11, 99, 100, 101: Correct! Boundary Value Analysis tests boundaries and immediate neighbors: just below min (9), min (10), just above min (11), just below max (99), max (100), and just above max (101).",
      "C": "0, 50, 200: Far boundaries.",
      "D": "-10, 0, 10: Inaccurate bounds."
    },
    summaryExplanation: "Boundary Value Analysis selects boundary values and their adjacent neighbors: 9, 10, 11, 99, 100, 101."
  },
  {
    id: "p2-u6-q6",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "AP-SET 2024",
    question: "Which of the following forms of module cohesion is the HIGHEST (strongest and most desirable) where all elements of a module contribute to the execution of a single, well-defined task?",
    options: [
      { id: "A", text: "Coincidental Cohesion" },
      { id: "B", text: "Logical Cohesion" },
      { id: "C", text: "Temporal Cohesion" },
      { id: "D", text: "Functional Cohesion" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Coincidental Cohesion: Lowest/worst cohesion; parts grouped arbitrarily.",
      "B": "Logical Cohesion: Grouped because they perform logically similar functions.",
      "C": "Temporal Cohesion: Grouped because they are processed at the same time.",
      "D": "Functional Cohesion: Correct! Highest and most desirable cohesion; all elements focus strictly on performing a single dedicated function."
    },
    summaryExplanation: "Functional cohesion is the highest and most desirable form of cohesion in modular software design."
  },
  {
    id: "p2-u6-q7",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET Dec 2022",
    question: "In Boehm's Basic COCOMO model, which project category represents complex software projects with tight, unbending hardware and regulatory constraints (e.g., flight control, air traffic software)?",
    options: [
      { id: "A", text: "Organic Mode" },
      { id: "B", text: "Semidetached Mode" },
      { id: "C", text: "Embedded Mode" },
      { id: "D", text: "Agile Mode" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Organic Mode: Small, experienced teams working in familiar environments with flexible requirements.",
      "B": "Semidetached Mode: Intermediate project with mixed team experience and moderate constraints.",
      "C": "Embedded Mode: Correct! Highly complex software coupled tightly with custom hardware, strict operational interfaces, and rigid regulations.",
      "D": "Agile: Not a COCOMO mode."
    },
    summaryExplanation: "In COCOMO, the Embedded mode designates complex projects constrained by rigid hardware and operational requirements."
  },
  {
    id: "p2-u6-q8",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "GSET 2023",
    question: "What is the primary difference between 'Verification' and 'Validation' in software quality assurance?",
    options: [
      { id: "A", text: "Verification asks 'Are we building the product right?'; Validation asks 'Are we building the right product?'" },
      { id: "B", text: "Verification is done only after deployment; Validation is done before coding" },
      { id: "C", text: "Verification requires execution of code; Validation does not" },
      { id: "D", text: "There is no distinction between them" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Building right vs right product: Correct! Barry Boehm's classic distinction: Verification checks adherence to specifications without execution; Validation ensures it fulfills user needs via dynamic testing.",
      "B": "Timeline inversion.",
      "C": "Execution: Validation runs dynamic tests; verification includes static reviews/walkthroughs.",
      "D": "No distinction: Fundamental QA distinction."
    },
    summaryExplanation: "Verification confirms specification conformance (static); Validation confirms user expectation fulfillment (dynamic)."
  },
  {
    id: "p2-u6-q9",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET June 2023",
    question: "In Function Point Analysis (FPA) proposed by Allan Albrecht, which of the following is NOT one of the five standard information domain characteristics used to calculate Unadjusted Function Points (UFP)?",
    options: [
      { id: "A", text: "Number of External Inputs (EI)" },
      { id: "B", text: "Number of External Outputs (EO)" },
      { id: "C", text: "Number of External Inquiries (EQ)" },
      { id: "D", text: "Number of CPU Clock Registers" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "External Inputs (EI): One of the 5 parameters.",
      "B": "External Outputs (EO): One of the 5 parameters.",
      "C": "External Inquiries (EQ): One of the 5 parameters.",
      "D": "CPU Clock Registers: Correct! FPA is technology-independent and measures functional size, completely ignoring hardware register details. The 5 parameters are EI, EO, EQ, ILF, and EIF."
    },
    summaryExplanation: "The 5 FPA parameters are: External Inputs, Outputs, Inquiries, Internal Logical Files, and External Interfaces."
  },
  {
    id: "p2-u6-q10",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "TN-SET 2024",
    question: "In top-down integration testing, what auxiliary software component is constructed to simulate the behavior of lower-level subroutines that have not yet been implemented?",
    options: [
      { id: "A", text: "Driver" },
      { id: "B", text: "Stub" },
      { id: "C", text: "Oracle" },
      { id: "D", text: "Emulator" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Driver: Used in *bottom-up* testing to simulate calling higher-level modules.",
      "B": "Stub: Correct! Stubs replace called lower-level modules in top-down testing, returning dummy data.",
      "C": "Oracle: Mechanism for verifying test output correctness.",
      "D": "Emulator: Hardware simulation software."
    },
    summaryExplanation: "Stubs simulate subordinate unwritten modules in top-down integration testing."
  },
  {
    id: "p2-u6-q11",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following describes 'Regression Testing' in software maintenance?",
    options: [
      { id: "A", text: "Testing a completely new system from scratch" },
      { id: "B", text: "Re-executing a subset of existing test cases to confirm that recent code modifications or bug fixes have not unintentionally broken existing functionalities" },
      { id: "C", text: "Testing software performance under nuclear radiation" },
      { id: "D", text: "Auditing developer salaries" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "New system: Initial system testing.",
      "B": "Re-testing existing features: Correct! Regression testing ensures that software patches, bug fixes, or enhancements do not introduce side-effects into stable components.",
      "C": "Radiation: Environmental hardware qualification.",
      "D": "Salary: Human resources."
    },
    summaryExplanation: "Regression testing verifies that new code changes or fixes do not disrupt existing system behavior."
  },
  {
    id: "p2-u6-q12",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "MH-SET 2023",
    question: "What is 'Alpha Testing' in the software release lifecycle?",
    options: [
      { id: "A", text: "Testing performed by end-users at their own operational work sites without developers" },
      { id: "B", text: "Acceptance testing performed by simulated or potential users at the developer's site in a controlled environment" },
      { id: "C", text: "Unit testing performed by the compiler" },
      { id: "D", text: "Stress testing server power supplies" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "End-users at their own sites: This describes *Beta Testing*.",
      "B": "Users at developer's site: Correct! Alpha testing takes place within the developer's organization, allowing developers to observe user actions in a controlled setting.",
      "C": "Compiler testing: Static syntax analysis.",
      "D": "Stress testing: Non-functional testing."
    },
    summaryExplanation: "Alpha testing is conducted by users at the developer's facility; Beta testing is performed by users in their own wild environments."
  },
  {
    id: "p2-u6-q13",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "WB-SET 2024",
    question: "In Scrum Agile methodology, what is the role of the 'Scrum Master'?",
    options: [
      { id: "A", text: "Acts as the executive CEO who assigns daily programming tasks to individual engineers" },
      { id: "B", text: "Servant-leader who facilitates ceremonies, removes team impediments, and protects team focus on sprint goals" },
      { id: "C", text: "Owns the product backlog and decides feature financial pricing" },
      { id: "D", text: "Writes all test automation scripts exclusively" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Assigns tasks: Scrum teams are self-organizing; Scrum Master is not a taskmaster.",
      "B": "Servant-leader / removes impediments: Correct! Facilitates Scrum events, coaches agile practices, and resolves blockers.",
      "C": "Owns backlog: That is the role of the *Product Owner*.",
      "D": "Writes scripts: Responsibility of cross-functional developers."
    },
    summaryExplanation: "The Scrum Master is a servant-leader clearing blockers and facilitating agile practices for self-organizing teams."
  },
  {
    id: "p2-u6-q14",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET June 2024",
    question: "Which of the following maintenance activities involves modifying software to proactively adapt it to anticipated future changes, improving maintainability and reliability before faults occur?",
    options: [
      { id: "A", text: "Corrective Maintenance" },
      { id: "B", text: "Adaptive Maintenance" },
      { id: "C", text: "Perfective Maintenance" },
      { id: "D", text: "Preventive Maintenance (Software Re-engineering)" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Corrective: Reactive fixing of discovered bugs and defects.",
      "B": "Adaptive: Modifying software to accommodate changing environments (e.g., new OS, hardware).",
      "C": "Perfective: Enhancing functionality or performance at user request.",
      "D": "Preventive: Correct! Proactive refactoring to detect and correct latent faults and ease future maintainability."
    },
    summaryExplanation: "Preventive maintenance proactively improves internal software maintainability to forestall future problems."
  },
  {
    id: "p2-u6-q15",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "KSET 2024",
    question: "What is the IEEE standard specification number for Software Requirements Specifications (SRS)?",
    options: [
      { id: "A", text: "IEEE 802.3" },
      { id: "B", text: "IEEE 830" },
      { id: "C", text: "IEEE 754" },
      { id: "D", text: "IEEE 1394" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "IEEE 802.3: Ethernet standard.",
      "B": "IEEE 830: Correct! Recommended Practice for Software Requirements Specifications (superseded in part by ISO/IEC/IEEE 29148).",
      "C": "IEEE 754: Floating-point arithmetic standard.",
      "D": "IEEE 1394: FireWire data bus standard."
    },
    summaryExplanation: "IEEE 830 defines standard guidelines for constructing Software Requirements Specifications (SRS)."
  },
  {
    id: "p2-u6-q16",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET Dec 2023",
    question: "In White-Box testing, what does 'Branch Coverage' (Decision Coverage) require?",
    options: [
      { id: "A", text: "Every line of code is executed at least once" },
      { id: "B", text: "Every decision branch (both TRUE and FALSE outcomes of every conditional statement) is evaluated at least once" },
      { id: "C", text: "Every loop is executed zero, once, and maximum times" },
      { id: "D", text: "All variables are initialized to zero" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Every line executed: This is *Statement Coverage*.",
      "B": "Every decision true and false: Correct! Branch coverage mandates that each decision point (if, while) evaluates to both True and False outcomes across test executions.",
      "C": "Loop boundary: Loop testing.",
      "D": "Variables zero: Initialization check."
    },
    summaryExplanation: "Branch coverage guarantees every boolean decision outcome (True and False) is traversed at least once."
  },
  {
    id: "p2-u6-q17",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "AP-SET 2023",
    question: "What is 'Mutation Testing' used for in software verification?",
    options: [
      { id: "A", text: "Testing software on genetically modified organisms" },
      { id: "B", text: "Evaluating the quality and adequacy of a test suite by intentionally introducing small syntactic faults (mutants) into the source code" },
      { id: "C", text: "Accelerating CPU execution" },
      { id: "D", text: "Translating Java bytecode to Python" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Genetically modified: Literal pun.",
      "B": "Evaluating test suite by seeding mutants: Correct! Fault injection technique; if test cases detect the seeded mutation, the mutant is 'killed', measuring test suite effectiveness.",
      "C": "Accelerating CPU: Hardware.",
      "D": "Translating bytecode: Decompilation."
    },
    summaryExplanation: "Mutation testing measures test suite thoroughness by verifying whether it detects intentional code mutations."
  },
  {
    id: "p2-u6-q18",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "MH-SET 2024",
    question: "In Object-Oriented Software Design, which SOLID principle states that 'Derived classes must be substitutable for their base classes without altering the correctness of the program'?",
    options: [
      { id: "A", text: "Single Responsibility Principle (SRP)" },
      { id: "B", text: "Open/Closed Principle (OCP)" },
      { id: "C", text: "Liskov Substitution Principle (LSP)" },
      { id: "D", text: "Dependency Inversion Principle (DIP)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "SRP: A class should have only one reason to change.",
      "B": "OCP: Open for extension, closed for modification.",
      "C": "LSP: Correct! Formulated by Barbara Liskov; subclasses must preserve behavioral subtyping so base references can be substituted seamlessly.",
      "D": "DIP: Depend upon abstractions rather than concretions."
    },
    summaryExplanation: "The Liskov Substitution Principle (LSP) mandates that derived classes remain fully substitutable for their base abstractions."
  },
  {
    id: "p2-u6-q19",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET June 2023",
    question: "What is 'Software Reverse Engineering'?",
    options: [
      { id: "A", text: "Writing code backward starting from the last semicolon" },
      { id: "B", text: "The process of analyzing an existing software system to extract its design representations and architectural specifications at higher levels of abstraction" },
      { id: "C", text: "Deleting legacy documentation" },
      { id: "D", text: "Translating code into machine language" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Writing backward: Humorous distractor.",
      "B": "Extracting higher-level design from code: Correct! Analyzing source code or binaries to recover architectural designs, requirements, and data models.",
      "C": "Deleting documentation: Anti-pattern.",
      "D": "Translating to machine: Compilation."
    },
    summaryExplanation: "Reverse engineering extracts high-level design abstractions and architectures from existing codebases."
  },
  {
    id: "p2-u6-q20",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "GSET 2024",
    question: "In Cleanroom Software Engineering, how is defect prevention achieved without relying on traditional unit debugging?",
    options: [
      { id: "A", text: "Formal mathematical specification, rigorous inspection, and statistical usage testing" },
      { id: "B", text: "Ignoring bugs until the client complains" },
      { id: "C", text: "Using quantum supercomputers" },
      { id: "D", text: "Pair programming in clean sterile server rooms" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Formal math specs and statistical testing: Correct! Harlan Mills' Cleanroom approach emphasizes formal correctness proofs and statistical quality certification over developer debugging.",
      "B": "Ignoring bugs: Poor practice.",
      "C": "Quantum computers: Hardware.",
      "D": "Sterile rooms: Literal pun."
    },
    summaryExplanation: "Cleanroom software engineering uses formal mathematical verification and statistical testing to prevent defect injection."
  },
  {
    id: "p2-u6-q21",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "WB-SET 2023",
    question: "In the basic COCOMO model, the effort equation is represented as Effort E = a * (KLOC)^b. For an Organic project, what are the values of constants a and b?",
    options: [
      { id: "A", text: "a = 2.4, b = 1.05" },
      { id: "B", text: "a = 3.0, b = 1.12" },
      { id: "C", text: "a = 3.6, b = 1.20" },
      { id: "D", text: "a = 1.0, b = 2.00" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "2.4 and 1.05: Correct! Basic COCOMO coefficients for Organic mode: E = 2.4 * (KLOC)^1.05 person-months.",
      "B": "3.0 and 1.12: Coefficients for Semidetached mode (E = 3.0 * KLOC^1.12).",
      "C": "3.6 and 1.20: Coefficients for Embedded mode (E = 3.6 * KLOC^1.20).",
      "D": "1.0 and 2.0: Arbitrary."
    },
    summaryExplanation: "In basic COCOMO, Organic mode effort is E = 2.4 * (KLOC)^1.05 person-months."
  },
  {
    id: "p2-u6-q22",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following is a structural White-Box testing technique that executes every independent basis path through a program module?",
    options: [
      { id: "A", text: "Equivalence Partitioning" },
      { id: "B", text: "Basis Path Testing" },
      { id: "C", text: "Boundary Value Analysis" },
      { id: "D", text: "State Transition Testing" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Equivalence Partitioning: Black-box technique.",
      "B": "Basis Path Testing: Correct! White-box method using cyclomatic complexity to derive a basis set of linearly independent execution paths.",
      "C": "Boundary Value Analysis: Black-box technique.",
      "D": "State Transition: Black-box dynamic testing."
    },
    summaryExplanation: "Basis Path Testing derives test cases to exercise all linearly independent paths through the control flow graph."
  },
  {
    id: "p2-u6-q23",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "KSET 2023",
    question: "In UML (Unified Modeling Language), which diagram displays the dynamic chronological sequence of messages exchanged between collaborating objects over time?",
    options: [
      { id: "A", text: "Class Diagram" },
      { id: "B", text: "Sequence Diagram" },
      { id: "C", text: "Deployment Diagram" },
      { id: "D", text: "Use Case Diagram" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Class Diagram: Static structural model.",
      "B": "Sequence Diagram: Correct! Interaction diagram showing objects with vertical lifelines and horizontal message arrows ordered chronologically top-to-bottom.",
      "C": "Deployment Diagram: Physical hardware execution nodes.",
      "D": "Use Case Diagram: Functional actor interactions."
    },
    summaryExplanation: "A Sequence Diagram models temporal message exchanges between object lifelines."
  },
  {
    id: "p2-u6-q24",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET June 2024",
    question: "What is 'Software Refactoring'?",
    options: [
      { id: "A", text: "Rewriting software in a different programming language" },
      { id: "B", text: "Restructuring existing code to improve internal structure, readability, and non-functional attributes without changing its external behavior" },
      { id: "C", text: "Deleting unit test cases to speed up builds" },
      { id: "D", text: "Changing business logic requirements" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Rewriting language: Migration / porting.",
      "B": "Improving internal structure without changing behavior: Correct! Martin Fowler's definition; cleans code, removes code smells, and enhances maintainability while keeping observable behavior constant.",
      "C": "Deleting tests: Harmful practice.",
      "D": "Changing business logic: Feature development."
    },
    summaryExplanation: "Refactoring reorganizes internal code structure to enhance maintainability without altering external program functionality."
  },
  {
    id: "p2-u6-q25",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "MH-SET 2023",
    question: "Which of the following architectural styles structures a software system as a sequence of discrete processing stages where data flows continuously through successive transformations?",
    options: [
      { id: "A", text: "Pipe-and-Filter Architecture" },
      { id: "B", text: "Blackboard Architecture" },
      { id: "C", text: "Layered Architecture" },
      { id: "D", text: "Event-Driven Architecture" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Pipe-and-Filter: Correct! Data streams pass through independent filters via unidirectional pipes (e.g., Unix shell pipelines `cat | grep | sort`).",
      "B": "Blackboard: Central knowledge repository with independent expert agents.",
      "C": "Layered: Hierarchical service tiers.",
      "D": "Event-Driven: Decoupled pub/sub asynchronous triggers."
    },
    summaryExplanation: "Pipe-and-Filter architecture processes continuous data streams through independent transformational stages."
  },
  {
    id: "p2-u6-q26",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "AP-SET 2024",
    question: "What is the primary characteristic of 'Extreme Programming' (XP) regarding software testing?",
    options: [
      { id: "A", text: "Testing is completely omitted to maximize coding speed" },
      { id: "B", text: "Test-Driven Development (TDD), where automated unit tests are written BEFORE writing functional production code" },
      { id: "C", text: "Testing is performed exclusively by external consultants" },
      { id: "D", text: "Manual testing using pen and paper" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Omitted testing: Opposite of XP rigor.",
      "B": "Test-Driven Development (TDD): Correct! Core XP practice where developers write failing automated unit tests first, then write minimal code to pass tests, followed by refactoring.",
      "C": "External consultants: Violates self-contained agile team principle.",
      "D": "Manual pen/paper: Obsolete."
    },
    summaryExplanation: "Extreme Programming mandates Test-Driven Development (TDD), creating unit tests prior to functional implementation."
  },
  {
    id: "p2-u6-q27",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET Dec 2023",
    question: "In software metrics, Halstead's Software Science measures program length N as:",
    options: [
      { id: "A", text: "N = N1 + N2 (Total count of operators + Total count of operands)" },
      { id: "B", text: "N = n1 * n2" },
      { id: "C", text: "N = n1 log2 n1" },
      { id: "D", text: "N = Lines of Code / 1000" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "N = N1 + N2: Correct! Maurice Halstead defined total program length N as the total number of operators N1 plus total number of operands N2.",
      "B": "Product: Inaccurate.",
      "C": "Logarithmic: Part of vocabulary calculation.",
      "D": "LOC metric: KLOC."
    },
    summaryExplanation: "Halstead's program length N equals total operator occurrences (N1) plus total operand occurrences (N2)."
  },
  {
    id: "p2-u6-q28",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "WB-SET 2024",
    question: "Which of the following describes 'Content Coupling' between two software modules?",
    options: [
      { id: "A", text: "One module modifies internal data or branch instructions of another module" },
      { id: "B", text: "Modules pass composite data structures" },
      { id: "C", text: "Modules share common database tables" },
      { id: "D", text: "Modules invoke each other using standard APIs" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Modifies internal data or instructions: Correct! Content coupling is the worst coupling level, violating information hiding and encapsulation completely.",
      "B": "Composite data: Stamp coupling.",
      "C": "Common database: Common coupling.",
      "D": "Standard APIs: Routine data coupling."
    },
    summaryExplanation: "Content coupling violates encapsulation by directly manipulating the internal data or logic of another module."
  },
  {
    id: "p2-u6-q29",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "UGC NET June 2023",
    question: "What is a 'Spike' in Agile development?",
    options: [
      { id: "A", text: "A sudden rise in cloud hosting fees" },
      { id: "B", text: "A short time-boxed research task or prototype aimed at answering an uncertain technical question or reducing architectural risk" },
      { id: "C", text: "A severe crash during demonstration" },
      { id: "D", text: "A tool used to compile assembly code" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Cloud fees: Billing issue.",
      "B": "Time-boxed research task: Correct! Extreme Programming / Scrum term for a focused exploratory probe to investigate technical feasibility before committing to user stories.",
      "C": "Demo crash: Presentation defect.",
      "D": "Assembly tool: Compiler."
    },
    summaryExplanation: "In Agile, a Spike is a time-boxed experimental investigation aimed at resolving technical uncertainty."
  },
  {
    id: "p2-u6-q30",
    paper: "paper2",
    unitId: "p2-u6",
    unitNumber: 6,
    unitName: "Software Engineering",
    examSource: "MH-SET 2024",
    question: "In Equivalence Class Partitioning (ECP), what is the primary operational objective?",
    options: [
      { id: "A", text: "To partition the input domain into classes of data from which test cases can be derived such that all members of a class are treated identically by the system" },
      { id: "B", text: "To test every possible mathematical real number" },
      { id: "C", text: "To verify database backup tapes" },
      { id: "D", text: "To calculate CPU utilization during testing" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Partitioning domain into equivalent classes: Correct! Discards redundant test cases by assuming that if one test value in an equivalence partition exposes a defect, all other values in that partition will behave identically.",
      "B": "Every real number: Combinatorially impossible.",
      "C": "Backup verification: System administration.",
      "D": "CPU utilization: Performance profiling."
    },
    summaryExplanation: "Equivalence Partitioning divides input domains into equivalent subsets to reduce test case redundancy."
  }
];
