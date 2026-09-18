/**
 * PAPER 2 - UNIT 9: DATA SCIENCE AND ARTIFICIAL INTELLIGENCE (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers Heuristic Search (A*, AO*), Minimax & Alpha-Beta, Resolution, Machine Learning, and Fuzzy Sets.
 */

export const p2Unit9Questions = [
  {
    id: "p2-u9-q1",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET June 2024",
    question: "In the A* heuristic search algorithm, the evaluation function is f(n) = g(n) + h(n). Under what condition is the A* search provably guaranteed to return an optimal (shortest) path?",
    options: [
      { id: "A", text: "When h(n) = 0 for all nodes" },
      { id: "B", text: "When the heuristic function h(n) is 'Admissible' (never overestimates the true cost to reach the goal: h(n) ≤ h*(n))" },
      { id: "C", text: "When g(n) is negative" },
      { id: "D", text: "When the branching factor is infinite" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "h(n) = 0: Reduces A* to Dijkstra's algorithm (uniform-cost search); optimal but not heuristic condition.",
      "B": "Admissible heuristic: Correct! If h(n) is admissible (h(n) ≤ h*(n) for all nodes n), tree-search A* is mathematically guaranteed to be optimal and complete.",
      "C": "Negative costs: Causes infinite cycles.",
      "D": "Infinite branching: Breaks completeness."
    },
    summaryExplanation: "A* search guarantees finding an optimal path provided the heuristic h(n) is admissible (never overestimates true cost)."
  },
  {
    id: "p2-u9-q2",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "MH-SET 2024",
    question: "In game theory and adversarial search, when does an 'Alpha Cutoff' occur during the Alpha-Beta pruning procedure?",
    options: [
      { id: "A", text: "At a MIN node, when the beta value becomes less than or equal to the alpha value (β ≤ α)" },
      { id: "B", text: "At a MAX node, when the alpha value is zero" },
      { id: "C", text: "When both alpha and beta equal positive infinity" },
      { id: "D", text: "When the search tree has no leaf nodes" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "At MIN node when β ≤ α: Correct! At a MIN node, if the current utility value becomes ≤ α (the best choice already guaranteed to MAX above), MAX will never permit this branch, pruning remaining subtrees (Alpha cutoff).",
      "B": "MAX node alpha zero: Standard evaluation.",
      "C": "Both infinity: Initialized bounds.",
      "D": "No leaf nodes: Infeasible."
    },
    summaryExplanation: "An Alpha cutoff prunes branches beneath a MIN node when β ≤ α, since MAX has a better alternative elsewhere."
  },
  {
    id: "p2-u9-q3",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET Dec 2023",
    question: "In First-Order Predicate Logic (FOPL) resolution refutation, what is the procedure of replacing an existentially quantified variable with a unique constant or function of preceding universally quantified variables called?",
    options: [
      { id: "A", text: "Unification" },
      { id: "B", text: "Skolemization" },
      { id: "C", text: "Modus Ponens" },
      { id: "D", text: "Clausal Normalization" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Unification: Finding a substitution θ that makes two logical expressions identical.",
      "B": "Skolemization: Correct! Eliminates existential quantifiers (∃) by substituting Skolem constants (if no prior ∀) or Skolem functions (mapping to prior ∀ variables).",
      "C": "Modus Ponens: Classical inference rule (P, P → Q ⊢ Q).",
      "D": "Clausal normalization: General conversion pipeline."
    },
    summaryExplanation: "Skolemization replaces existentially quantified variables with Skolem constants or functions to reach prenex normal form."
  },
  {
    id: "p2-u9-q4",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "WB-SET 2023",
    question: "In decision tree algorithms like ID3, which statistical metric is calculated to determine the best attribute to split the dataset at each internal node?",
    options: [
      { id: "A", text: "Mean Squared Error" },
      { id: "B", text: "Information Gain (based on Entropy reduction)" },
      { id: "C", text: "Euclidean Distance" },
      { id: "D", text: "Cosine Similarity" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Mean Squared Error: Used in regression trees (CART).",
      "B": "Information Gain: Correct! Quinlan's ID3 selects the attribute that maximizes Information Gain: Gain(S, A) = Entropy(S) - ∑ (|S_v| / |S|) * Entropy(S_v).",
      "C": "Euclidean Distance: Used in KNN / K-Means.",
      "D": "Cosine Similarity: Used in text vector spaces."
    },
    summaryExplanation: "ID3 splits nodes on the attribute that maximizes Information Gain through Shannon entropy reduction."
  },
  {
    id: "p2-u9-q5",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "KSET 2023",
    question: "If A and B are two fuzzy sets on universe X with membership functions μ_A(x) and μ_B(x), how is the membership function of their 'Intersection' (A ∩ B) standardly evaluated under Zadeh's fuzzy logic?",
    options: [
      { id: "A", text: "μ_{A ∩ B}(x) = max(μ_A(x), μ_B(x))" },
      { id: "B", text: "μ_{A ∩ B}(x) = min(μ_A(x), μ_B(x))" },
      { id: "C", text: "μ_{A ∩ B}(x) = μ_A(x) * μ_B(x)" },
      { id: "D", text: "μ_{A ∩ B}(x) = 1 - μ_A(x)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "max: Standard Zadeh operation for Fuzzy *Union* (A ∪ B).",
      "B": "min: Correct! Lofti Zadeh's standard t-norm for fuzzy intersection: μ_{A ∩ B}(x) = min(μ_A(x), μ_B(x)).",
      "C": "Product: Algebraic product t-norm.",
      "D": "1 - μ_A(x): Fuzzy Complement."
    },
    summaryExplanation: "Zadeh's standard fuzzy intersection defines membership as the minimum of the two sets: min(μ_A, μ_B)."
  },
  {
    id: "p2-u9-q6",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "AP-SET 2024",
    question: "In Deep Learning, what issue commonly affects traditional Deep Neural Networks using Sigmoid activation functions across many hidden layers, where gradients diminish exponentially towards earlier layers?",
    options: [
      { id: "A", text: "Exploding Gradient Problem" },
      { id: "B", text: "Vanishing Gradient Problem" },
      { id: "C", text: "Overfitting on Validation Set" },
      { id: "D", text: "Dead Neurons in ReLU" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Exploding gradient: Gradients accumulate exponentially, causing overflow.",
      "B": "Vanishing Gradient Problem: Correct! The derivative of the sigmoid function peaks at only 0.25; backpropagating through multiple layers causes gradient terms to shrink towards zero, stalling weight updates in early layers.",
      "C": "Overfitting: Generalization failure.",
      "D": "Dying ReLU: Occurs when ReLU units output 0 continuously."
    },
    summaryExplanation: "The Vanishing Gradient Problem stalls training in deep networks using saturating activation functions like Sigmoid."
  },
  {
    id: "p2-u9-q7",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET Dec 2022",
    question: "In Support Vector Machines (SVM), what is the 'Kernel Trick' primarily used for?",
    options: [
      { id: "A", text: "Deleting outliers from training data" },
      { id: "B", text: "Implicitly mapping non-linearly separable data into a higher-dimensional feature space where it becomes linearly separable, without explicitly computing high-dimensional coordinates" },
      { id: "C", text: "Decreasing the number of support vectors to zero" },
      { id: "D", text: "Converting SVM into a decision tree" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Deleting outliers: Outlier removal.",
      "B": "Implicit mapping to higher dimension: Correct! Computes inner products in transformed feature space via kernel functions (RBF, Polynomial) without costly explicit coordinate transformations.",
      "C": "Zero support vectors: Infeasible.",
      "D": "Decision tree: Distinct model."
    },
    summaryExplanation: "The Kernel Trick projects non-linear data into higher-dimensional spaces for linear hyper-plane separation."
  },
  {
    id: "p2-u9-q8",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "GSET 2023",
    question: "Which artificial intelligence heuristic search algorithm is specifically designed to search through 'AND-OR' graphs representing problem reduction?",
    options: [
      { id: "A", text: "A* Algorithm" },
      { id: "B", text: "AO* Algorithm" },
      { id: "C", text: "Hill Climbing" },
      { id: "D", text: "Breadth First Search" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "A*: Searches standard state space graphs with OR branches only.",
      "B": "AO*: Correct! Evaluates AND-OR graphs where decomposing a problem into subproblems requires solving all constituent sub-branches simultaneously.",
      "C": "Hill Climbing: Local search algorithm.",
      "D": "BFS: Uninformed brute-force search."
    },
    summaryExplanation: "The AO* algorithm finds optimal partial solution subgraphs in decomposed AND-OR graph structures."
  },
  {
    id: "p2-u9-q9",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET June 2023",
    question: "In machine learning classification, what does the Naive Bayes algorithm assume regarding the relationship between different feature attributes?",
    options: [
      { id: "A", text: "All features are completely correlated with each other" },
      { id: "B", text: "Conditional Independence: all features are mutually independent given the class label" },
      { id: "C", text: "All features follow a Poisson distribution" },
      { id: "D", text: "Features cannot have numerical values" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Completely correlated: Violates the core naive premise.",
      "B": "Conditional Independence: Correct! 'Naive' assumption states that the presence of a particular feature in a class is unrelated to the presence of any other feature, allowing joint probability factorization P(X|C) = ∏ P(x_i|C).",
      "C": "Poisson distribution: Gaussian or multinomial is typical.",
      "D": "No numerical values: Handles continuous values via Gaussian distributions."
    },
    summaryExplanation: "Naive Bayes naively assumes all predictor features are mutually independent conditional on the target class."
  },
  {
    id: "p2-u9-q10",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "TN-SET 2024",
    question: "In the K-Means clustering algorithm, how are data points assigned to clusters during each iterative step?",
    options: [
      { id: "A", text: "Assigned randomly without mathematical criteria" },
      { id: "B", text: "Assigned to the cluster whose centroid has the minimum Euclidean (or squared) distance to the point" },
      { id: "C", text: "Sorted alphabetically by label" },
      { id: "D", text: "Assigned strictly based on timestamps" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Randomly: Only initial centroid seeding can be random.",
      "B": "Minimum distance to centroid: Correct! Each point is allocated to its closest centroid; centroids are then recalculated as the mean of all points in the cluster.",
      "C": "Alphabetical: Supervised ordering.",
      "D": "Timestamps: Temporal indexing."
    },
    summaryExplanation: "K-Means iteratively reassigns points to the closest cluster centroid based on minimum Euclidean distance."
  },
  {
    id: "p2-u9-q11",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET Dec 2023",
    question: "What is a 'Foothill' or 'Local Maximum' problem in basic Hill Climbing search?",
    options: [
      { id: "A", text: "The search terminates at a state that is better than all its immediate neighbors, but worse than the global maximum" },
      { id: "B", text: "The search runs out of physical memory" },
      { id: "C", text: "The evaluation function becomes undefined" },
      { id: "D", text: "The search reaches the global optimal solution instantly" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Local peak sub-optimal termination: Correct! Since hill climbing greedily moves only to higher neighboring states, it halts prematurely on local peaks where all adjacent moves lead downwards.",
      "B": "Out of memory: Space complexity failure.",
      "C": "Undefined: Mathematical failure.",
      "D": "Global optimum: Successful goal state."
    },
    summaryExplanation: "A local maximum is a suboptimal peak where all surrounding states are lower, trapping greedy hill-climbing search."
  },
  {
    id: "p2-u9-q12",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "MH-SET 2023",
    question: "In Principal Component Analysis (PCA) for dimensionality reduction, the principal components correspond mathematically to the:",
    options: [
      { id: "A", text: "Eigenvectors of the data covariance matrix ordered by decreasing eigenvalues" },
      { id: "B", text: "Diagonal elements of the adjacency matrix" },
      { id: "C", text: "Zeros of the polynomial function" },
      { id: "D", text: "Inverse of the weight matrix" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Eigenvectors of covariance matrix: Correct! PCA diagonalizes the feature covariance matrix; the eigenvectors with largest eigenvalues identify directions of maximum variance.",
      "B": "Adjacency matrix: Graph theory.",
      "C": "Polynomial zeroes: Algebra.",
      "D": "Weight inverse: Neural network optimization."
    },
    summaryExplanation: "PCA extracts principal axes from the eigenvectors of the covariance matrix sorted by eigenvalue magnitude."
  },
  {
    id: "p2-u9-q13",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "WB-SET 2024",
    question: "What is the primary role of the 'Activation Function' in an Artificial Neural Network?",
    options: [
      { id: "A", text: "To initialize the hardware clock" },
      { id: "B", text: "To introduce non-linearity into the network, enabling it to learn complex non-linear decision boundaries" },
      { id: "C", text: "To format outputs as CSV files" },
      { id: "D", text: "To prevent memory page faults" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Hardware clock: Hardware.",
      "B": "Introduce non-linearity: Correct! Without non-linear activation functions (ReLU, Sigmoid, Tanh), cascading multiple dense layers simply collapses mathematically into a single linear regression.",
      "C": "CSV formatting: I/O task.",
      "D": "Page faults: OS task."
    },
    summaryExplanation: "Activation functions provide the essential non-linear transformation allowing neural networks to model complex data relationships."
  },
  {
    id: "p2-u9-q14",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET June 2024",
    question: "In an Expert System, what is the primary operational difference between 'Forward Chaining' and 'Backward Chaining'?",
    options: [
      { id: "A", text: "Forward chaining is data-driven (starts with known facts to deduce new conclusions); Backward chaining is goal-driven (starts with a hypothesis and works backward to find supporting facts)" },
      { id: "B", text: "Forward chaining runs backward in time" },
      { id: "C", text: "Backward chaining works only on relational databases" },
      { id: "D", text: "There is no reasoning difference" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Data-driven vs goal-driven: Correct! Forward chaining applies rules to existing data to infer new states; backward chaining starts with target goals/hypotheses and backtracks to check prerequisite facts.",
      "B": "Backward in time: Temporal misconception.",
      "C": "Relational databases: Inference applies to rules.",
      "D": "No difference: Fundamental divergence in inference strategies."
    },
    summaryExplanation: "Forward chaining is data-driven reasoning; backward chaining is goal-driven diagnostic reasoning."
  },
  {
    id: "p2-u9-q15",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "KSET 2024",
    question: "In fuzzy systems, which defuzzification technique calculates the center of the area beneath the combined fuzzy membership curve to produce a crisp scalar output?",
    options: [
      { id: "A", text: "Centroid Method (Center of Gravity / Center of Area)" },
      { id: "B", text: "Mean of Maxima (MOM)" },
      { id: "C", text: "First of Maxima (FOM)" },
      { id: "D", text: "Last of Maxima (LOM)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Centroid / Center of Gravity: Correct! Computes z* = ∫ z·μ(z) dz / ∫ μ(z) dz; most popular defuzzification method producing smooth continuous control outputs.",
      "B": "MOM: Averages points of maximum membership.",
      "C": "FOM: Selects smallest value with maximum membership.",
      "D": "LOM: Selects largest value with maximum membership."
    },
    summaryExplanation: "The Centroid (Center of Gravity) method calculates the geometrical center of the fuzzy area to produce a crisp output value."
  },
  {
    id: "p2-u9-q16",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET Dec 2023",
    question: "What is 'Overfitting' in supervised machine learning models?",
    options: [
      { id: "A", text: "The model performs excellently on training data but fails to generalize to unseen test data because it memorized noise" },
      { id: "B", text: "The model has high bias and poor performance on both training and test data" },
      { id: "C", text: "The model takes zero seconds to train" },
      { id: "D", text: "The dataset has zero features" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "High training accuracy, poor generalization: Correct! Characterized by high variance and low bias; the model fits training noise and idiosyncrasies rather than underlying patterns.",
      "B": "High bias / poor on both: This defines *Underfitting*.",
      "C": "Zero seconds: Metric.",
      "D": "Zero features: Invalid data."
    },
    summaryExplanation: "Overfitting occurs when high-variance models memorize training noise, collapsing test generalization."
  },
  {
    id: "p2-u9-q17",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "AP-SET 2023",
    question: "What is the Turing Test designed to assess in Artificial Intelligence?",
    options: [
      { id: "A", text: "Whether a computer algorithm can sort 1 million numbers in 1 second" },
      { id: "B", text: "Whether a machine can exhibit intelligent behavior indistinguishable from that of a human judge through natural language conversation" },
      { id: "C", text: "Whether a computer can compute the Halting Problem" },
      { id: "D", text: "The physical durability of microprocessors" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Sorting performance: Algorithmic benchmark.",
      "B": "Human-indistinguishable intelligence: Correct! Proposed by Alan Turing (1950); an interrogator evaluates text interactions to determine whether the respondent is a machine or human.",
      "C": "Halting problem: Proven uncomputable.",
      "D": "Hardware durability: Stress testing."
    },
    summaryExplanation: "The Turing Test evaluates whether an AI can converse indistinguishably from a human interrogatee."
  },
  {
    id: "p2-u9-q18",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "MH-SET 2024",
    question: "In knowledge representation, what is an 'Inheritance Hierarchy' in Semantic Networks and Frames?",
    options: [
      { id: "A", text: "IS-A and AKO (A-Kind-Of) links that allow lower-level concept nodes to inherit attributes automatically from higher-level parent classes" },
      { id: "B", text: "A list of CPU instructions" },
      { id: "C", text: "A database index containing primary keys" },
      { id: "D", text: "A network routing protocol" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "IS-A / AKO inheritance links: Correct! Enables property inheritance where sub-classes (e.g., Robin IS-A Bird) inherit default characteristics (e.g., has wings) without redundant duplication.",
      "B": "CPU instructions: Assembly.",
      "C": "Database index: DBMS.",
      "D": "Routing: Networking."
    },
    summaryExplanation: "Semantic networks use IS-A and AKO links to provide hierarchical attribute inheritance between concepts."
  },
  {
    id: "p2-u9-q19",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET June 2023",
    question: "In simulated annealing search, what controls the probability of accepting worse moves to escape local extrema as time progresses?",
    options: [
      { id: "A", text: "Temperature parameter T (which decreases over time according to an annealing schedule)" },
      { id: "B", text: "The number of CPU cores" },
      { id: "C", text: "The network packet size" },
      { id: "D", text: "The font size of the compiler" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Temperature T: Correct! Probability P = e^(ΔE / T); when T is high, bad moves are readily accepted to escape local traps; as T cools toward zero, search behaves like standard greedy hill climbing.",
      "B": "CPU cores: Hardware concurrency.",
      "C": "Packet size: Networking.",
      "D": "Font size: UI setting."
    },
    summaryExplanation: "In Simulated Annealing, the Temperature T gradually decreases, reducing the likelihood of accepting worse moves."
  },
  {
    id: "p2-u9-q20",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "GSET 2024",
    question: "In Machine Learning, what is the role of L2 Regularization (Ridge Regularization)?",
    options: [
      { id: "A", text: "It adds a penalty proportional to the sum of squared weights (λ ∑ w_i^2) to the loss function to prevent weights from growing excessively large" },
      { id: "B", text: "It sets 90% of model weights strictly to zero (L1 sparsity)" },
      { id: "C", text: "It doubles training dataset size" },
      { id: "D", text: "It converts supervised learning to unsupervised" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Sum of squared weights penalty: Correct! Ridge regularization penalizes large weights via ||w||^2, driving weights towards zero without causing strict sparsity, controlling model complexity.",
      "B": "Sets weights to zero: Feature of L1 (Lasso) regularization.",
      "C": "Doubles dataset: Data augmentation.",
      "D": "Converts learning: Inaccurate."
    },
    summaryExplanation: "L2 (Ridge) regularization adds a penalty proportional to squared weight magnitudes to curb overfitting."
  },
  {
    id: "p2-u9-q21",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "WB-SET 2023",
    question: "What is a 'Perceptron' in the history of artificial neural networks?",
    options: [
      { id: "A", text: "A single-layer neural unit that computes a linear combination of inputs with weights and passes it through a step threshold function" },
      { id: "B", text: "A quantum computer architecture" },
      { id: "C", text: "An optical disk drive" },
      { id: "D", text: "A compiler parser generator" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Linear threshold unit: Correct! Frank Rosenblatt (1958); foundational binary classifier computing y = f(w·x + b), capable of learning linearly separable functions (like AND, OR, but not XOR).",
      "B": "Quantum: Quantum computing.",
      "C": "Optical drive: Storage.",
      "D": "Parser generator: Yacc/Bison."
    },
    summaryExplanation: "The Rosenblatt Perceptron is a fundamental single-layer linear threshold model for binary classification."
  },
  {
    id: "p2-u9-q22",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET Dec 2023",
    question: "Why can a single-layer perceptron NOT solve the exclusive-OR (XOR) problem as famously proven by Minsky and Papert (1969)?",
    options: [
      { id: "A", text: "XOR function is not linearly separable in 2D space" },
      { id: "B", text: "XOR requires floating point calculations" },
      { id: "C", text: "Perceptrons cannot process binary values" },
      { id: "D", text: "XOR has three output states" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Not linearly separable: Correct! The truth table of XOR cannot be partitioned into 0s and 1s by any single straight line (hyperplane) in a 2D plane; it requires a Multi-Layer Perceptron (MLP) with hidden layers.",
      "B": "Floating point: Irrelevant.",
      "C": "Binary values: Perceptrons operate natively on binary inputs.",
      "D": "Three states: XOR is binary (0 or 1)."
    },
    summaryExplanation: "A single-layer perceptron fails on XOR because the XOR decision boundary is inherently non-linearly separable."
  },
  {
    id: "p2-u9-q23",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "KSET 2023",
    question: "In classical automated planning, the STRIPS representation defines an action/operator using which three core components?",
    options: [
      { id: "A", text: "Preconditions, Add List, and Delete List" },
      { id: "B", text: "Input, Process, and Output" },
      { id: "C", text: "Class, Method, and Property" },
      { id: "D", text: "Source, Channel, and Receiver" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Preconditions, Add List, Delete List: Correct! Stanford Research Institute Problem Solver (STRIPS) models actions with: Preconditions (must hold to execute), Add list (facts becoming true), and Delete list (facts no longer true).",
      "B": "IPO model: General computing.",
      "C": "Class/Method: Object oriented design.",
      "D": "Communication model: Shannon-Weaver."
    },
    summaryExplanation: "STRIPS specifies planning actions using Preconditions, an Add List, and a Delete List."
  },
  {
    id: "p2-u9-q24",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET June 2024",
    question: "What is the 'Curse of Dimensionality' in data science and machine learning?",
    options: [
      { id: "A", text: "As the number of feature dimensions increases, data points become increasingly sparse in the feature space, degrading statistical significance and inflating computational distance metrics" },
      { id: "B", text: "Running out of disk sectors" },
      { id: "C", text: "When arrays have negative dimensions" },
      { id: "D", text: "When neural networks have too many output classes" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Data sparsity in high dimensions: Correct! Richard Bellman's concept; exponential volume growth renders sample density near zero, distorting distance metrics (like Euclidean distance) and driving overfitting.",
      "B": "Disk sectors: Hardware.",
      "C": "Negative dimensions: Syntax error.",
      "D": "Output classes: Multi-class problem."
    },
    summaryExplanation: "The Curse of Dimensionality describes how exponential volume expansion causes extreme data sparsity in high-dimensional spaces."
  },
  {
    id: "p2-u9-q25",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "MH-SET 2023",
    question: "In the Minimax game-playing algorithm with a search tree of depth d and uniform branching factor b, what is the time complexity without pruning?",
    options: [
      { id: "A", text: "O(b * d)" },
      { id: "B", text: "O(b^d)" },
      { id: "C", text: "O(d^b)" },
      { id: "D", text: "O(log d)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "O(b * d): Space complexity (depth of recursion stack).",
      "B": "O(b^d): Correct! Minimax performs an exhaustive depth-first traversal of the entire game tree, visiting b^d terminal leaf positions in the worst case.",
      "C": "O(d^b): Inverted.",
      "D": "O(log d): Sub-linear."
    },
    summaryExplanation: "Unpruned Minimax exhaustively visits all leaf nodes, yielding an exponential time complexity of O(bᵈ)."
  },
  {
    id: "p2-u9-q26",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "AP-SET 2024",
    question: "In classification evaluation metrics, what is 'Recall' (Sensitivity) defined as?",
    options: [
      { id: "A", text: "True Positives / (True Positives + False Negatives)" },
      { id: "B", text: "True Positives / (True Positives + False Positives)" },
      { id: "C", text: "True Negatives / (True Negatives + False Positives)" },
      { id: "D", text: "(True Positives + True Negatives) / Total Samples" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "TP / (TP + FN): Correct! Measures the proportion of actual positive cases that were correctly identified by the classifier.",
      "B": "TP / (TP + FP): This defines *Precision*.",
      "C": "TN / (TN + FP): This defines *Specificity*.",
      "D": "(TP + TN) / Total: This defines overall *Accuracy*."
    },
    summaryExplanation: "Recall (Sensitivity) equals TP / (TP + FN), measuring the completeness of positive predictions."
  },
  {
    id: "p2-u9-q27",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET Dec 2023",
    question: "In fuzzy logic, a fuzzy set whose support consists of a single point in universe X with membership value 1 is known as a:",
    options: [
      { id: "A", text: "Fuzzy Singleton" },
      { id: "B", text: "Convex Hull" },
      { id: "C", text: "Crossover Point" },
      { id: "D", text: "Normal Fuzzy Band" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Fuzzy Singleton: Correct! A fuzzy set containing only one single element x_0 with membership μ(x_0) = 1 (and 0 everywhere else).",
      "B": "Convex Hull: Geometric envelope.",
      "C": "Crossover point: Point where membership is exactly 0.5.",
      "D": "Normal fuzzy band: Set with maximum membership 1."
    },
    summaryExplanation: "A Fuzzy Singleton has a support of exactly one element with membership value 1."
  },
  {
    id: "p2-u9-q28",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "WB-SET 2024",
    question: "What is the primary function of the 'Backpropagation' algorithm in artificial neural networks?",
    options: [
      { id: "A", text: "Generating synthetic input data" },
      { id: "B", text: "Calculating the gradient of the loss function with respect to each network weight via the chain rule, enabling gradient descent weight updates" },
      { id: "C", text: "Compressing images losslessly" },
      { id: "D", text: "Formatting output tables" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Generating data: GANs task.",
      "B": "Gradient calculation via chain rule: Correct! Propagates error backwards from output layer to hidden layers, computing partial derivatives ∂L/∂w for gradient descent optimization.",
      "C": "Image compression: Codec.",
      "D": "Formatting: UI."
    },
    summaryExplanation: "Backpropagation applies the calculus chain rule backwards through layers to compute weight loss gradients."
  },
  {
    id: "p2-u9-q29",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "UGC NET June 2023",
    question: "In natural language processing, what does 'Stemming' refer to?",
    options: [
      { id: "A", text: "The process of reducing inflected or derived words to their base root stem (e.g., 'connecting', 'connection' → 'connect')" },
      { id: "B", text: "Detecting plant diseases from photos" },
      { id: "C", text: "Translating code into assembly" },
      { id: "D", text: "Removing consonants from words" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Reducing words to root stem: Correct! Heuristic text preprocessing (e.g., Porter Stemmer) stripping morphological affixes.",
      "B": "Plant diseases: Computer vision application.",
      "C": "Translating code: Compilation.",
      "D": "Removing consonants: Nonsensical."
    },
    summaryExplanation: "Stemming strips prefixes and suffixes to collapse words into their common morphological base stem."
  },
  {
    id: "p2-u9-q30",
    paper: "paper2",
    unitId: "p2-u9",
    unitNumber: 9,
    unitName: "Data Science and Artificial Intelligence",
    examSource: "MH-SET 2024",
    question: "Which of the following describes the 'Exploration vs Exploitation' trade-off in Reinforcement Learning?",
    options: [
      { id: "A", text: "Deciding between exploiting current best-known actions to maximize immediate reward versus exploring unvisited actions to discover potentially superior long-term rewards" },
      { id: "B", text: "Choosing between CPU and GPU hardware" },
      { id: "C", text: "Deciding between SQL and NoSQL databases" },
      { id: "D", text: "Managing thread memory stacks" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Exploiting known vs exploring novel: Correct! Foundational dilemma in multi-armed bandits and Q-learning; typically resolved using strategies like epsilon-greedy (ε-greedy).",
      "B": "Hardware choice: Infrastructure.",
      "C": "Database choice: Storage.",
      "D": "Thread stacks: OS concurrency."
    },
    summaryExplanation: "The exploration-exploitation trade-off balances harvesting known rewards against probing unknown state-action spaces."
  }
];
