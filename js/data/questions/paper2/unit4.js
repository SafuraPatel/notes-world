/**
 * PAPER 2 - UNIT 4: DATABASE MANAGEMENT SYSTEMS (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers Relational Algebra, Normalization (1NF-BCNF), ACID, Serializability, 2PL, and B+ Trees.
 */

export const p2Unit4Questions = [
  {
    id: "p2-u4-q1",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET June 2024",
    question: "A relation R is in Boyce-Codd Normal Form (BCNF) if and only if for every non-trivial functional dependency X → Y:",
    options: [
      { id: "A", text: "Y is a prime attribute" },
      { id: "B", text: "X is a Super Key of R" },
      { id: "C", text: "X is a candidate key and Y is non-prime" },
      { id: "D", text: "R has no multi-valued dependencies" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Y is a prime attribute: Condition for 3NF (either X is superkey OR Y is prime).",
      "B": "X is a Super Key: Correct! BCNF requires that the determinant X in every non-trivial FD X → Y must strictly be a superkey of the relation.",
      "C": "3NF definition variation.",
      "D": "No multi-valued dependencies: Condition for 4NF."
    },
    summaryExplanation: "In BCNF, every determinant of a non-trivial functional dependency must strictly be a Super Key."
  },
  {
    id: "p2-u4-q2",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "MH-SET 2024",
    question: "Which of the following schedules is guaranteed to be conflict serializable?",
    options: [
      { id: "A", text: "A schedule whose precedence (serialization) graph contains no directed cycles" },
      { id: "B", text: "A schedule that contains dirty reads" },
      { id: "C", text: "A schedule where every transaction holds an exclusive lock indefinitely" },
      { id: "D", text: "A schedule with cyclic blind writes" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Acyclic precedence graph: Correct! By the Conflict Serializability Theorem, a schedule S is conflict serializable iff its serialization graph contains no directed cycles.",
      "B": "Dirty reads: Leads to non-recoverable or uncommitted state.",
      "C": "Indefinite locks: Causes starvation or deadlock.",
      "D": "Cyclic writes: Cyclic graphs violate conflict serializability."
    },
    summaryExplanation: "A schedule is conflict serializable if and only if its precedence graph is acyclic."
  },
  {
    id: "p2-u4-q3",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET Dec 2023",
    question: "In Relational Algebra, which of the following represents the fundamental set of five independent operators that can derive all other relational operators?",
    options: [
      { id: "A", text: "Selection (σ), Projection (π), Union (∪), Set Difference (-), and Cartesian Product (×)" },
      { id: "B", text: "Join (⋈), Division (÷), Intersection (∩), Projection (π), and Grouping" },
      { id: "C", text: "Selection (σ), Join (⋈), Projection (π), Distinct, and Rename (ρ)" },
      { id: "D", text: "Union (∪), Intersection (∩), Difference (-), Natural Join, and Outer Join" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Five primitive operators: Correct! Codd's foundational primitive set: σ, π, ∪, -, and ×. All others (Intersection, Natural Join, Division) are derived from these five.",
      "B": "Join and division are derived.",
      "C": "Join is derived from Cartesian Product and Selection.",
      "D": "Natural and outer joins are derived."
    },
    summaryExplanation: "The 5 fundamental relational algebra operators are Selection, Projection, Union, Set Difference, and Cartesian Product."
  },
  {
    id: "p2-u4-q4",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "WB-SET 2023",
    question: "What is the primary operational rule of the Strict Two-Phase Locking (Strict 2PL) concurrency control protocol?",
    options: [
      { id: "A", text: "All locks (both shared and exclusive) must be released before committing" },
      { id: "B", text: "All exclusive (X) locks held by a transaction must be retained until the transaction commits or aborts" },
      { id: "C", text: "Transactions are not permitted to acquire shared locks" },
      { id: "D", text: "Locks are granted based purely on timestamps without queues" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Releasing locks before commit: Basic 2PL allows releasing in shrinking phase.",
      "B": "Hold X locks until commit/abort: Correct! Strict 2PL holds exclusive locks until transaction completion, completely preventing cascading aborts (ensuring cascadeless recovery).",
      "C": "Shared locks: Permitted during execution.",
      "D": "Pure timestamps: Timestamp ordering protocol."
    },
    summaryExplanation: "Strict 2PL retains all exclusive locks until commit or abort to prevent cascading rollbacks."
  },
  {
    id: "p2-u4-q5",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "KSET 2023",
    question: "In an Entity-Relationship (ER) diagram, how is a 'Weak Entity Set' visually represented?",
    options: [
      { id: "A", text: "Double Rectangle" },
      { id: "B", text: "Dashed Ellipse" },
      { id: "C", text: "Double Diamond" },
      { id: "D", text: "Triangle" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Double Rectangle: Correct! Weak entities (lacking primary keys of their own) are depicted using double-lined rectangles.",
      "B": "Dashed ellipse: Represents a multivalued or derived attribute.",
      "C": "Double diamond: Represents the *Identifying Relationship* linking the weak entity to its owner.",
      "D": "Triangle: Represents generalization/specialization (ISA)."
    },
    summaryExplanation: "Weak entity sets are represented by double rectangles in ER diagrams."
  },
  {
    id: "p2-u4-q6",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "AP-SET 2024",
    question: "What is a 'Lossless-Join Decomposition' of a relational schema R into R1 and R2?",
    options: [
      { id: "A", text: "A decomposition where R1 ∩ R2 = ∅" },
      { id: "B", text: "A decomposition where the natural join of R1 and R2 reconstructs the exact original relation R without generating any spurious tuples" },
      { id: "C", text: "A decomposition where all foreign keys are deleted" },
      { id: "D", text: "A decomposition that reduces database size to zero" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Empty intersection: Will generate Cartesian product and spurious tuples.",
      "B": "Reconstructs R without spurious tuples: Correct! R1 ⋈ R2 = R. Guaranteed if (R1 ∩ R2) → R1 or (R1 ∩ R2) → R2.",
      "C": "Foreign keys deletion: Destroys integrity.",
      "D": "Zero size: Nonsensical."
    },
    summaryExplanation: "Lossless join decomposition guarantees exact relational reconstruction (R1 ⋈ R2 = R) without extraneous tuples."
  },
  {
    id: "p2-u4-q7",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET Dec 2022",
    question: "In a B+ Tree index of order m, where are all the actual record pointers or data keys stored?",
    options: [
      { id: "A", text: "Evenly distributed across all internal nodes only" },
      { id: "B", text: "Exclusively at the Leaf Nodes (which are linked sequentially via a linked list)" },
      { id: "C", text: "Only in the root node" },
      { id: "D", text: "In a separate hash table" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Internal nodes only: In B-trees, keys are stored in both internal and leaf nodes.",
      "B": "Exclusively at leaf nodes: Correct! In B+ trees, internal nodes store only router/index search keys, while all actual data pointers are kept at the leaf nodes linked in a doubly linked list for fast range searches.",
      "C": "Root only: Infeasible.",
      "D": "Hash table: Distinct index structure."
    },
    summaryExplanation: "B+ trees store all data records and pointers at the leaf level, linked sequentially for range queries."
  },
  {
    id: "p2-u4-q8",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "GSET 2023",
    question: "Which of the following ACID transaction properties ensures that all operations within a transaction are completed successfully or none of them are reflected in the database?",
    options: [
      { id: "A", text: "Atomicity" },
      { id: "B", text: "Consistency" },
      { id: "C", text: "Isolation" },
      { id: "D", text: "Durability" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Atomicity: Correct! 'All or nothing' property; managed by recovery manager using undo/redo logs.",
      "B": "Consistency: Guarantees database moves from one valid state satisfying all integrity constraints to another.",
      "C": "Isolation: Ensures concurrent execution yields results identical to serial execution.",
      "D": "Durability: Guarantees committed changes survive system crashes."
    },
    summaryExplanation: "Atomicity guarantees all-or-nothing execution of transaction operations."
  },
  {
    id: "p2-u4-q9",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET June 2023",
    question: "In SQL, what is the difference between the 'WHERE' clause and the 'HAVING' clause?",
    options: [
      { id: "A", text: "WHERE filters rows before grouping; HAVING filters aggregated groups after GROUP BY" },
      { id: "B", text: "WHERE is used only with INSERT statements" },
      { id: "C", text: "HAVING can only filter primary key columns" },
      { id: "D", text: "There is no syntactic difference" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Row filter vs group filter: Correct! WHERE predicates apply to individual row tuples prior to grouping, whereas HAVING conditions filter grouped aggregates (e.g., HAVING COUNT(*) > 5).",
      "B": "WHERE with INSERT: WHERE is used in SELECT, UPDATE, DELETE.",
      "C": "HAVING only primary keys: Filters any group condition.",
      "D": "No difference: Incorrect."
    },
    summaryExplanation: "WHERE filters individual row records; HAVING filters aggregated groups produced by GROUP BY."
  },
  {
    id: "p2-u4-q10",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "TN-SET 2024",
    question: "A relation R(A, B, C, D) has functional dependencies F = { A → B, B → C, C → D, D → A }. What is the candidate key of R?",
    options: [
      { id: "A", text: "Only A" },
      { id: "B", text: "Only B" },
      { id: "C", text: "Each of A, B, C, and D individually" },
      { id: "D", text: "Only the composite key (A, B)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Only A: Incomplete; B, C, and D are also candidate keys.",
      "B": "Only B: Incomplete.",
      "C": "Each of A, B, C, D individually: Correct! Due to the cyclic dependencies, A+ = {A,B,C,D}, B+ = {A,B,C,D}, C+ = {A,B,C,D}, and D+ = {A,B,C,D}. Each individual attribute is a candidate key.",
      "D": "Composite key: Minimal key requires only 1 attribute."
    },
    summaryExplanation: "Because of circular FDs, the closure of each attribute includes all attributes: A, B, C, and D are all individual candidate keys."
  },
  {
    id: "p2-u4-q11",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET Dec 2023",
    question: "In concurrency control, what is the 'Thomas Write Rule'?",
    options: [
      { id: "A", text: "A modification of the basic timestamp protocol that ignores outdated late write operations without aborting the transaction" },
      { id: "B", text: "A protocol enforcing shared locks on all reads" },
      { id: "C", text: "A rule requiring every transaction to write to a log before committing" },
      { id: "D", text: "A technique for converting B-trees to B+ trees" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Ignores outdated write: Correct! If TS(T) < W-timestamp(Q), Thomas' Write Rule simply ignores and discards the write request rather than rolling back T, generating view-serializable schedules.",
      "B": "Shared locks: Lock-based approach.",
      "C": "Write to log: Write-Ahead Logging (WAL).",
      "D": "Index conversion: Unrelated."
    },
    summaryExplanation: "Thomas' Write Rule safely discards obsolete writes to enhance concurrency without triggering rollbacks."
  },
  {
    id: "p2-u4-q12",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "MH-SET 2023",
    question: "A relation R is in Second Normal Form (2NF) if and only if it is in 1NF and:",
    options: [
      { id: "A", text: "It contains no transitive functional dependencies" },
      { id: "B", text: "Every non-prime attribute is fully functionally dependent on every candidate key (no partial dependencies)" },
      { id: "C", text: "Every determinant is a candidate key" },
      { id: "D", text: "It has no multi-valued dependencies" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "No transitive dependencies: Requirement for 3NF.",
      "B": "No partial dependencies: Correct! 2NF eliminates partial functional dependency where a non-prime attribute depends on a proper subset of a composite candidate key.",
      "C": "Determinant is candidate key: Requirement for BCNF.",
      "D": "No multi-valued dependencies: Requirement for 4NF."
    },
    summaryExplanation: "2NF requires eliminating partial dependencies so all non-prime attributes depend on full candidate keys."
  },
  {
    id: "p2-u4-q13",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "WB-SET 2024",
    question: "What does the 'Theta Join' (R ⋈_θ S) represent in relational algebra?",
    options: [
      { id: "A", text: "Cartesian product followed by a Selection condition θ : σ_θ (R × S)" },
      { id: "B", text: "Natural join followed by projection" },
      { id: "C", text: "Union of R and S" },
      { id: "D", text: "Intersection of R and S" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "σ_θ (R × S): Correct! Theta join performs a Cartesian Product between R and S and then filters tuples satisfying condition θ.",
      "B": "Natural join: Specific theta join with equality on common attributes.",
      "C": "Union: Set operation.",
      "D": "Intersection: Set operation."
    },
    summaryExplanation: "A Theta Join is defined as a Selection over the Cartesian Product: R ⋈_θ S ≡ σ_θ (R × S)."
  },
  {
    id: "p2-u4-q14",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET June 2024",
    question: "Which of the following deadlock prevention schemes is NON-PREEMPTIVE, meaning an older transaction requesting a lock held by a younger transaction is forced to wait?",
    options: [
      { id: "A", text: "Wait-Die Scheme" },
      { id: "B", text: "Wound-Wait Scheme" },
      { id: "C", text: "Conservative 2PL" },
      { id: "D", text: "Strict Timestamp Ordering" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Wait-Die Scheme: Correct! Non-preemptive; if older T_i requests data held by younger T_j, T_i is allowed to wait. If younger requests data held by older, younger dies (aborts).",
      "B": "Wound-Wait: Preemptive scheme; older transaction 'wounds' (preempts) the younger.",
      "C": "Conservative 2PL: Acquires all locks beforehand.",
      "D": "Timestamp ordering: Concurrency protocol."
    },
    summaryExplanation: "In the non-preemptive Wait-Die scheme, older transactions wait while younger requesting transactions die."
  },
  {
    id: "p2-u4-q15",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "KSET 2024",
    question: "What is an 'Armstrong's Axiom' known as the 'Augmentation Rule' in functional dependency inference?",
    options: [
      { id: "A", text: "If X ⊆ Y, then Y → X" },
      { id: "B", text: "If X → Y, then XZ → YZ for any attribute set Z" },
      { id: "C", text: "If X → Y and Y → Z, then X → Z" },
      { id: "D", text: "If X → YZ, then X → Y" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Reflexivity rule.",
      "B": "Augmentation rule: Correct! Augmenting both sides of a valid functional dependency X → Y with attribute set Z produces valid FD XZ → YZ.",
      "C": "Transitivity rule.",
      "D": "Decomposition rule."
    },
    summaryExplanation: "Augmentation rule: If X → Y holds, then XZ → YZ holds for any attribute set Z."
  },
  {
    id: "p2-u4-q16",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET Dec 2023",
    question: "In write-ahead logging (WAL), what fundamental protocol must be adhered to before updating database pages on disk?",
    options: [
      { id: "A", text: "The log record associated with the update must be written to stable storage before the corresponding dirty database page is written to disk" },
      { id: "B", text: "Database tables must be locked exclusively by the DBA" },
      { id: "C", text: "Transactions must commit before writing any logs" },
      { id: "D", text: "Memory caches must be flushed every microsecond" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Log written before dirty page: Correct! WAL protocol dictates log records must flush to non-volatile storage prior to uncommitted database pages hitting disk to guarantee crash recovery.",
      "B": "DBA lock: Unrelated.",
      "C": "Logs after commit: Violates atomicity upon crash.",
      "D": "Microsecond flush: Performance hazard."
    },
    summaryExplanation: "Write-Ahead Logging mandates flushing the update log to stable disk storage before writing dirty data pages."
  },
  {
    id: "p2-u4-q17",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "AP-SET 2023",
    question: "What is a 'Dense Index' in database storage systems?",
    options: [
      { id: "A", text: "An index record appears for only some of the search-key values in the file" },
      { id: "B", text: "An index record appears for every search-key value in the primary file" },
      { id: "C", text: "An index stored in binary RAM" },
      { id: "D", text: "An index with no pointers" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Appears for only some values: This defines a *Sparse Index*.",
      "B": "Appears for every search-key value: Correct! Dense indexes contain an explicit search key entry for every single record in the data file.",
      "C": "Binary RAM: In-memory database.",
      "D": "No pointers: Invalid."
    },
    summaryExplanation: "A dense index maintains an entry for every individual search key value in the database file."
  },
  {
    id: "p2-u4-q18",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "MH-SET 2024",
    question: "Which SQL command is classified as a Data Definition Language (DDL) command?",
    options: [
      { id: "A", text: "SELECT" },
      { id: "B", text: "INSERT" },
      { id: "C", text: "ALTER" },
      { id: "D", text: "UPDATE" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "SELECT: DQL (Data Query Language).",
      "B": "INSERT: DML (Data Manipulation Language).",
      "C": "ALTER: Correct! DDL commands define or modify database schemas (CREATE, ALTER, DROP, TRUNCATE).",
      "D": "UPDATE: DML command."
    },
    summaryExplanation: "ALTER is a Data Definition Language (DDL) statement used to modify table schemas."
  },
  {
    id: "p2-u4-q19",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET June 2023",
    question: "In query optimization, the process of pushing 'Selection' (σ) and 'Projection' (π) operations down the relational algebra query tree is aimed at:",
    options: [
      { id: "A", text: "Increasing the size of intermediate Cartesian products" },
      { id: "B", text: "Reducing the number of tuples and attributes processed in early stages to minimize I/O and memory cost" },
      { id: "C", text: "Eliminating primary keys" },
      { id: "D", text: "Preventing concurrent transactions" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Increasing intermediate sizes: Directly degrades performance.",
      "B": "Reducing intermediate tuples: Correct! Heuristic query optimization pushes selections and projections earliest to discard irrelevant rows/columns before expensive joins.",
      "C": "Eliminating keys: Violates integrity.",
      "D": "Preventing transactions: Concurrency control task."
    },
    summaryExplanation: "Pushing selections and projections down query trees drastically reduces intermediate relation sizes and I/O costs."
  },
  {
    id: "p2-u4-q20",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "GSET 2024",
    question: "A transaction schedule is defined as 'Cascadeless' if for each pair of transactions T_i and T_j such that T_j reads data written by T_i:",
    options: [
      { id: "A", text: "The commit operation of T_i appears before the read operation of T_j" },
      { id: "B", text: "T_i aborts before T_j reads" },
      { id: "C", text: "Both transactions execute sequentially on separate servers" },
      { id: "D", text: "Neither transaction writes to disk" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Commit of T_i precedes read of T_j: Correct! In a cascadeless schedule, transactions read only committed values, preventing cascading aborts.",
      "B": "Abort before read: Reads non-existent data.",
      "C": "Separate servers: Distributed computing.",
      "D": "No disk writes: Ephemeral."
    },
    summaryExplanation: "Cascadeless schedules prevent cascading rollbacks by allowing transactions to read only committed updates."
  },
  {
    id: "p2-u4-q21",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "WB-SET 2023",
    question: "In an ER diagram, an attribute that can be divided into smaller subparts with independent meanings (such as 'Address' into Street, City, State, Pin) is classified as a:",
    options: [
      { id: "A", text: "Simple Attribute" },
      { id: "B", text: "Composite Attribute" },
      { id: "C", text: "Multivalued Attribute" },
      { id: "D", text: "Derived Attribute" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Simple attribute: Atomic, cannot be subdivided.",
      "B": "Composite attribute: Correct! Composed of multiple constituent sub-attributes.",
      "C": "Multivalued: Can hold multiple values for a single entity (e.g., Phone numbers).",
      "D": "Derived: Computed from another attribute (e.g., Age from Date_of_Birth)."
    },
    summaryExplanation: "Composite attributes are hierarchical attributes divisible into constituent atomic components."
  },
  {
    id: "p2-u4-q22",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET Dec 2023",
    question: "If a database relation is decomposed such that every functional dependency in F is logically entailed by the union of the functional dependencies of the sub-relations, the decomposition is:",
    options: [
      { id: "A", text: "Dependency Preserving" },
      { id: "B", text: "Lossless-Join" },
      { id: "C", text: "View Equivalent" },
      { id: "D", text: "Denormalized" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Dependency Preserving: Correct! (F1 ∪ F2)+ = F+; ensures all constraints can be verified within individual decomposed tables without expensive cross-table joins.",
      "B": "Lossless-join: Reconstructibility property.",
      "C": "View equivalent: Serializability property.",
      "D": "Denormalized: Combining tables."
    },
    summaryExplanation: "A decomposition is dependency preserving when (F1 ∪ F2)+ equals F+, enforcing constraints locally."
  },
  {
    id: "p2-u4-q23",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "KSET 2023",
    question: "Which of the following problems occurs when a transaction reads an uncommitted value modified by another concurrent transaction that subsequently aborts?",
    options: [
      { id: "A", text: "Lost Update Problem" },
      { id: "B", text: "Dirty Read Problem (Temporary Update Problem)" },
      { id: "C", text: "Unrepeatable Read Problem" },
      { id: "D", text: "Phantom Read Problem" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Lost update: Two transactions overwrite the same data without reading the other's update.",
      "B": "Dirty Read: Correct! Reading data modified by an uncommitted transaction that later rolls back, leaving invalid data in memory.",
      "C": "Unrepeatable read: Re-reading the same row returns modified values due to another committed transaction.",
      "D": "Phantom read: Re-running a query yields new inserted rows matching the predicate."
    },
    summaryExplanation: "Dirty reads occur when a transaction reads uncommitted data that is later rolled back."
  },
  {
    id: "p2-u4-q24",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET June 2024",
    question: "What is the maximum number of child pointers that can be stored in a non-leaf node of a B-tree of order 5?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "6" },
      { id: "D", text: "10" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "4: Maximum number of *keys* stored in the node (order - 1).",
      "B": "5: Correct! In a B-tree of order m, any internal node can have at most m child pointers (for m = 5, maximum children = 5).",
      "C": "6: Exceeds order.",
      "D": "10: Overestimate."
    },
    summaryExplanation: "A B-tree node of order m can have at most m child pointers and m - 1 keys."
  },
  {
    id: "p2-u4-q25",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "MH-SET 2023",
    question: "In Relational Calculus, an expression that evaluates to an infinite relation over an infinite domain is considered:",
    options: [
      { id: "A", text: "Safe Expression" },
      { id: "B", text: "Unsafe Expression" },
      { id: "C", text: "Equivalence Query" },
      { id: "D", text: "Indexed Relation" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Safe expression: Guarantees a finite result set using domain closure.",
      "B": "Unsafe expression: Correct! Relational calculus queries like { t | ¬(R(t)) } generate infinitely many tuples outside R and are computationally inadmissible (unsafe).",
      "C": "Equivalence: Query optimization concept.",
      "D": "Indexed relation: Storage structure."
    },
    summaryExplanation: "Unsafe relational calculus expressions yield infinite result relations and cannot be computed."
  },
  {
    id: "p2-u4-q26",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "AP-SET 2024",
    question: "Which of the following normal forms deals specifically with eliminating Multi-Valued Dependencies (MVDs)?",
    options: [
      { id: "A", text: "Third Normal Form (3NF)" },
      { id: "B", text: "Boyce-Codd Normal Form (BCNF)" },
      { id: "C", text: "Fourth Normal Form (4NF)" },
      { id: "D", text: "Fifth Normal Form (5NF)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "3NF: Eliminates transitive functional dependencies.",
      "B": "BCNF: Eliminates all functional dependency anomalies.",
      "C": "4NF: Correct! Ronald Fagin's 4NF eliminates non-trivial multi-valued dependencies (X ↠ Y) by requiring X to be a superkey.",
      "D": "5NF: Eliminates join dependencies (PJNF)."
    },
    summaryExplanation: "4NF eliminates multi-valued dependencies by ensuring all MVD determinants are superkeys."
  },
  {
    id: "p2-u4-q27",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET Dec 2023",
    question: "What is the primary role of a 'Foreign Key' constraint in relational databases?",
    options: [
      { id: "A", text: "To guarantee entity uniqueness in the local table" },
      { id: "B", text: "To enforce Referential Integrity between related tables" },
      { id: "C", text: "To encrypt passwords during network transit" },
      { id: "D", text: "To generate auto-incrementing serial numbers" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Entity uniqueness: Primary key / UNIQUE constraint.",
      "B": "Enforce Referential Integrity: Correct! A foreign key establishes that a value in a referencing table must exist as a primary key in the referenced parent table.",
      "C": "Encryption: Security function.",
      "D": "Auto-increment: Sequence generator."
    },
    summaryExplanation: "Foreign keys enforce referential integrity between matching columns across related tables."
  },
  {
    id: "p2-u4-q28",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "WB-SET 2024",
    question: "In database recovery, what happens during the 'REDO' phase of the ARIES recovery algorithm?",
    options: [
      { id: "A", text: "All uncommitted transactions are rolled back in reverse chronological order" },
      { id: "B", text: "The system repeats history by reapplying all logged operations up to the crash point to restore the exact pre-crash state" },
      { id: "C", text: "All user passwords are reset" },
      { id: "D", text: "All primary indexes are dropped" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Rollback: This is the UNDO phase.",
      "B": "Repeating history: Correct! ARIES 3 phases: (1) Analysis, (2) Redo (repeating history forward), and (3) Undo (rolling back active loser transactions).",
      "C": "Password reset: Administrative.",
      "D": "Index drop: Unrelated."
    },
    summaryExplanation: "The REDO phase in ARIES repeats history forward to re-establish the precise database state prior to crash."
  },
  {
    id: "p2-u4-q29",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "UGC NET June 2023",
    question: "Which of the following database isolation levels completely prevents Dirty Reads, Non-repeatable Reads, and Phantom Reads?",
    options: [
      { id: "A", text: "Read Uncommitted" },
      { id: "B", text: "Read Committed" },
      { id: "C", text: "Repeatable Read" },
      { id: "D", text: "Serializable" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Read Uncommitted: Lowest isolation; allows dirty, non-repeatable, and phantom reads.",
      "B": "Read Committed: Prevents dirty reads; allows non-repeatable and phantom reads.",
      "C": "Repeatable Read: Prevents dirty and non-repeatable reads; allows phantom reads.",
      "D": "Serializable: Correct! Highest ANSI SQL isolation level; strictly eliminates dirty reads, non-repeatable reads, and phantom phenomena."
    },
    summaryExplanation: "Serializable is the highest isolation level, completely eliminating dirty, non-repeatable, and phantom reads."
  },
  {
    id: "p2-u4-q30",
    paper: "paper2",
    unitId: "p2-u4",
    unitNumber: 4,
    unitName: "Database Management Systems",
    examSource: "MH-SET 2024",
    question: "What is a 'Clustered Index' in file organization?",
    options: [
      { id: "A", text: "An index built on a non-ordering field of the data file" },
      { id: "B", text: "An index defined on an ordered data file where the search key specifies an ordering that physically determines the sequential storage order of records on disk" },
      { id: "C", text: "An index containing multiple columns" },
      { id: "D", text: "An index stored in the cloud" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Non-ordering field: Secondary index.",
      "B": "Determines physical order: Correct! A clustered index dictates the physical disk storage order of table records (hence a table can have only ONE clustered index).",
      "C": "Multiple columns: Composite index.",
      "D": "Cloud index: Hosting attribute."
    },
    summaryExplanation: "A clustered index physically dictates the sequential storage order of records on disk, permitting at most one per table."
  }
];
