/**
 * PAPER 1 - UNIT 6: LOGICAL REASONING (30 Authentic & Expected PYQs)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers Classical Square of Opposition, Indian Logic (Pramanas & Hetvabhasa), Categorical Syllogisms, and Fallacies.
 */

export const p1Unit6Questions = [
  {
    id: "p1-u6-q1",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET June 2024",
    question: "According to the Classical Square of Opposition, if the universal affirmative proposition 'All philosophers are fallible' (A) is TRUE, what can be immediately inferred about the particular negative proposition 'Some philosophers are not fallible' (O)?",
    options: [
      { id: "A", text: "It must be True" },
      { id: "B", text: "It must be False" },
      { id: "C", text: "It is Undetermined / Doubtful" },
      { id: "D", text: "It is Self-contradictory" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Must be True: Impossible because A and O are contradictory.",
      "B": "Must be False: Correct! A (All S are P) and O (Some S are not P) are contradictory propositions; if one is True, the other is necessarily False.",
      "C": "Undetermined: Contradictories always have opposite truth values.",
      "D": "Self-contradictory: It is a valid categorical proposition, merely false under the given condition."
    },
    summaryExplanation: "In the square of opposition, A and O propositions are contradictories: Truth of A guarantees Falsity of O."
  },
  {
    id: "p1-u6-q2",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "MH-SET 2024",
    question: "In Nyaya Indian Epistemology, which of the following is NOT one of the five essential steps of the Pararthanumana (syllogistic inference for others)?",
    options: [
      { id: "A", text: "Pratijna (Proposition)" },
      { id: "B", text: "Hetu (Reason)" },
      { id: "C", text: "Samanvaya (Reconciliation)" },
      { id: "D", text: "Nigamana (Conclusion)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Pratijna: The 1st step (statement to be proved: 'The hill has fire').",
      "B": "Hetu: The 2nd step (ground/reason: 'Because it has smoke').",
      "C": "Samanvaya: Correct! Samanvaya is not part of the 5-step Nyaya syllogism. The 5 steps are Pratijna, Hetu, Udaharana, Upanaya, Nigamana.",
      "D": "Nigamana: The 5th step (conclusion: 'Therefore, the hill has fire')."
    },
    summaryExplanation: "The 5 members of Nyaya syllogism (P-H-U-U-N) are: Pratijna, Hetu, Udaharana, Upanaya, and Nigamana."
  },
  {
    id: "p1-u6-q3",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following Pramanas (means of valid knowledge) is accepted by the Advaita Vedanta and Bhatta Mimamsa schools to know the non-existence (Abhava) of an object?",
    options: [
      { id: "A", text: "Arthapatti (Postulation)" },
      { id: "B", text: "Anupalabdhi (Non-apprehension)" },
      { id: "C", text: "Upamana (Comparison)" },
      { id: "D", text: "Shabda (Verbal Testimony)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Arthapatti: Postulation used to resolve apparent contradictions (e.g., Devadatta is fat but does not eat by day).",
      "B": "Anupalabdhi: Correct! Non-perception/non-apprehension is recognized as an independent pramana for perceiving the absence/non-existence of an object (e.g., 'There is no jar on the table').",
      "C": "Upamana: Analogy or comparison (e.g., learning what a Gavaya is).",
      "D": "Shabda: Testimony of a reliable authority (Aptavakya)."
    },
    summaryExplanation: "Anupalabdhi (non-apprehension) is the unique pramana for directly knowing negative facts or non-existence."
  },
  {
    id: "p1-u6-q4",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "WB-SET 2023",
    question: "In the square of opposition, which relation exists between two universal propositions having the same subject and predicate terms but differing in quality (A: All S are P, and E: No S are P)?",
    options: [
      { id: "A", text: "Contradictory" },
      { id: "B", text: "Contrary" },
      { id: "C", text: "Sub-contrary" },
      { id: "D", text: "Subalternation" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Contradictory: Diagonal relationship (A-O, E-I) differing in both quality and quantity.",
      "B": "Contrary: Correct! A and E are contraries; they cannot both be true simultaneously, though both can be false.",
      "C": "Sub-contrary: Relationship between particular propositions (I and O); both can be true together.",
      "D": "Subalternation: Relationship between universal and particular of the same quality (A-I, E-O)."
    },
    summaryExplanation: "A and E are Contraries: They cannot both be true simultaneously, but both can be false."
  },
  {
    id: "p1-u6-q5",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "KSET 2023",
    question: "What is the invariable, unconditional, and universal relation of concomitance between the middle term (Hetu) and major term (Sadhya) called in Indian Logic?",
    options: [
      { id: "A", text: "Pakshadharmata" },
      { id: "B", text: "Vyapti" },
      { id: "C", text: "Paramarsha" },
      { id: "D", text: "Upadhi" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Pakshadharmata: The presence of the Hetu (smoke) in the Paksha (hill).",
      "B": "Vyapti: Correct! Vyapti is the universal invariable relation (e.g., 'Wherever there is smoke, there is fire') serving as the nerve of inference.",
      "C": "Paramarsha: The synthetic cognitive recognition that the middle term characterized by Vyapti exists in the minor term.",
      "D": "Upadhi: An extraneous condition that spoils an unconditional relation."
    },
    summaryExplanation: "Vyapti is the universal relation of invariable concomitance guaranteeing valid inference."
  },
  {
    id: "p1-u6-q6",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "AP-SET 2024",
    question: "Identify the fallacy committed in the statement: 'You must support my political project because thousands of patriotic citizens have already joined it!'",
    options: [
      { id: "A", text: "Argumentum ad Hominem" },
      { id: "B", text: "Argumentum ad Populum (Appeal to Popularity / Bandwagon)" },
      { id: "C", text: "Argumentum ad Ignorantiam" },
      { id: "D", text: "Petitio Principii (Begging the Question)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Ad Hominem: Attacking the opponent's person rather than their logic.",
      "B": "Ad Populum: Correct! Bandwagon fallacy asserting that a claim is valid simply because many people endorse it.",
      "C": "Ad Ignorantiam: Claiming something is true because it hasn't been proven false.",
      "D": "Petitio Principii: Circular reasoning assuming the conclusion in the premise."
    },
    summaryExplanation: "Ad Populum fallacy appeals to mass conformity and popular sentiment rather than rational merit."
  },
  {
    id: "p1-u6-q7",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET Dec 2022",
    question: "In Nyaya philosophy, the fallacy of 'Asiddha' (Unproved Middle Term) occurs when:",
    options: [
      { id: "A", text: "The middle term is contradicted by direct perception" },
      { id: "B", text: "The middle term is not present in the minor term (Paksha) or is unreal" },
      { id: "C", text: "The middle term leads to opposite conclusions" },
      { id: "D", text: "The middle term is too narrow" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Contradicted by perception: This is Badhita fallacy (e.g., 'Fire is cold because it is a substance').",
      "B": "Unproved middle / unreal: Correct! Asiddha (e.g., 'Sky-lotus is fragrant because it is a lotus') contains an unproven or non-existent ground.",
      "C": "Opposite conclusion: This is Viruddha fallacy.",
      "D": "Too narrow: This is Asadharana Savyabhichara."
    },
    summaryExplanation: "Asiddha occurs when the reason (Hetu) is unproven, fictitious, or absent in the Paksha."
  },
  {
    id: "p1-u6-q8",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "GSET 2023",
    question: "If the proposition 'Some metals are conductors' (I) is TRUE, what is the truth status of 'No metals are conductors' (E)?",
    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" },
      { id: "C", text: "Undetermined" },
      { id: "D", text: "Partially True" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "True: Contradictory propositions cannot share the same truth value.",
      "B": "False: Correct! In the square of opposition, I and E are contradictories. If I is True, E must be False.",
      "C": "Undetermined: Contradictories are never undetermined when one value is established.",
      "D": "Partially True: Classical Aristotelian logic operates under bivalence."
    },
    summaryExplanation: "I (Particular Affirmative) and E (Universal Negative) are contradictories: Truth of I dictates Falsity of E."
  },
  {
    id: "p1-u6-q9",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET June 2023",
    question: "'Devadatta does not eat food during the daytime, yet he is growing stout. Therefore, Devadatta must be eating food at night.' Which Pramana is exemplified here?",
    options: [
      { id: "A", text: "Anumana (Inference)" },
      { id: "B", text: "Arthapatti (Postulation / Derivation)" },
      { id: "C", text: "Pratyaksha (Perception)" },
      { id: "D", text: "Upamana (Comparison)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Anumana: Requires a perceived middle term and vyapti.",
      "B": "Arthapatti: Correct! Presumption of an unperceived fact (eating at night) necessary to resolve the conflict between two known facts (stoutness vs fasting by day).",
      "C": "Pratyaksha: Direct sensory cognition.",
      "D": "Upamana: Analogy."
    },
    summaryExplanation: "Arthapatti (postulation) reconciles two apparently conflicting facts by assuming an unobserved explanatory fact."
  },
  {
    id: "p1-u6-q10",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "TN-SET 2024",
    question: "A deductive argument is said to be 'Sound' if and only if:",
    options: [
      { id: "A", text: "It is structurally valid and all of its premises are factually true" },
      { id: "B", text: "It has at least one true conclusion despite invalid structure" },
      { id: "C", text: "It is inductively probable with 95% confidence" },
      { id: "D", text: "Both of its premises are false but conclusion is true" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Valid + true premises: Correct! A sound argument satisfies two strict criteria: formal validity AND true empirical premises, guaranteeing a true conclusion.",
      "B": "Invalid structure: Cannot be sound.",
      "C": "Inductively probable: Inductive arguments are evaluated as 'cogent', not 'sound'.",
      "D": "False premises: An argument with false premises is unsound."
    },
    summaryExplanation: "Soundness = Formal Logical Validity + Empirical Truth of all premises."
  },
  {
    id: "p1-u6-q11",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET Dec 2023",
    question: "In categorical syllogisms, the fallacy of 'Undistributed Middle' occurs when:",
    options: [
      { id: "A", text: "The conclusion is particular while both premises are universal" },
      { id: "B", text: "The middle term fails to be distributed in at least one of the premises" },
      { id: "C", text: "The major term is distributed in conclusion but not in premise" },
      { id: "D", text: "Both premises are negative" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Existential fallacy: Particular conclusion from universal premises under modern interpretation.",
      "B": "Middle term not distributed: Correct! The middle term must be distributed at least once to establish a legitimate logical link between minor and major terms.",
      "C": "Illicit Major fallacy.",
      "D": "Fallacy of Exclusive Premises."
    },
    summaryExplanation: "A valid syllogism requires the middle term to be distributed in at least one premise."
  },
  {
    id: "p1-u6-q12",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "MH-SET 2023",
    question: "What is the fallacy known as 'Badhita' in Indian Logic?",
    options: [
      { id: "A", text: "The middle term is contradicted by another stronger Pramana (such as direct perception)" },
      { id: "B", text: "The middle term is unproved" },
      { id: "C", text: "The middle term is non-exclusive" },
      { id: "D", text: "The conclusion contradicts the premise" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Contradicted by stronger pramana: Correct! In Badhita (Non-inferentially contradicted middle), e.g., 'Fire is cold because it is a substance', perception directly refutes coldness.",
      "B": "Unproved middle: This is Asiddha.",
      "C": "Non-exclusive: This is Sadharana Savyabhichara.",
      "D": "Self-contradiction: Fallacy of internal contradiction."
    },
    summaryExplanation: "Badhita occurs when an inferential thesis is directly contradicted by sensory perception or scripture."
  },
  {
    id: "p1-u6-q13",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "WB-SET 2024",
    question: "Which of the following heterodox (Nastika) philosophical traditions accepts ONLY Pratyaksha (Perception) as a valid Pramana?",
    options: [
      { id: "A", text: "Buddhism" },
      { id: "B", text: "Jainism" },
      { id: "C", text: "Carvaka (Lokāyata)" },
      { id: "D", text: "Samkhya" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Buddhism: Accepts 2 Pramanas: Pratyaksha and Anumana.",
      "B": "Jainism: Accepts 3 Pramanas: Pratyaksha, Anumana, and Shabda.",
      "C": "Carvaka: Correct! Materialist Carvaka strictly rejects inference and testimony, accepting only direct sensory perception (Pratyaksha).",
      "D": "Samkhya: Accepts 3 Pramanas: Pratyaksha, Anumana, and Shabda."
    },
    summaryExplanation: "The Carvaka school is strictly empirical, recognizing only Pratyaksha as valid epistemic source."
  },
  {
    id: "p1-u6-q14",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET June 2024",
    question: "Consider the argument: 'Nobody has ever proven that ghosts do not exist. Therefore, ghosts must exist.' Which informal fallacy is committed?",
    options: [
      { id: "A", text: "Appeal to Ignorance (Argumentum ad Ignorantiam)" },
      { id: "B", text: "Straw Man Fallacy" },
      { id: "C", text: "Red Herring" },
      { id: "D", text: "Slippery Slope" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Appeal to Ignorance: Correct! Asserts a conclusion is true simply because it has not been conclusively disproven.",
      "B": "Straw Man: Misrepresenting an opponent's argument to make it easier to attack.",
      "C": "Red Herring: Introducing an irrelevant distracting topic.",
      "D": "Slippery Slope: Claiming a harmless first step will inevitably trigger catastrophic consequences."
    },
    summaryExplanation: "Ad Ignorantiam treats lack of definitive disproof as affirmative proof of existence."
  },
  {
    id: "p1-u6-q15",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "KSET 2024",
    question: "In the proposition 'No reptiles are warm-blooded animals' (E proposition), which terms are distributed?",
    options: [
      { id: "A", text: "Subject term only" },
      { id: "B", text: "Predicate term only" },
      { id: "C", text: "Both Subject and Predicate terms" },
      { id: "D", text: "Neither Subject nor Predicate term" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Subject only: True for 'A' proposition (All S are P).",
      "B": "Predicate only: True for 'O' proposition (Some S are not P).",
      "C": "Both terms: Correct! 'E' propositions (No S are P) distribute both the Subject and Predicate terms completely.",
      "D": "Neither term: True for 'I' proposition (Some S are P)."
    },
    summaryExplanation: "Term distribution rule: A distributes S; E distributes both S and P; I distributes neither; O distributes P."
  },
  {
    id: "p1-u6-q16",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET Dec 2023",
    question: "What type of inference is it when we infer the upcoming rain from the presence of dark, dense clouds in the sky?",
    options: [
      { id: "A", text: "Purvavat Anumana" },
      { id: "B", text: "Sheshavat Anumana" },
      { id: "C", text: "Samanyatodrishta Anumana" },
      { id: "D", text: "Kevalanvayi Anumana" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Purvavat: Correct! Inferring an unperceived effect from a perceived prior cause (inferring rain from dark clouds).",
      "B": "Sheshavat: Inferring an unperceived cause from a perceived posterior effect (inferring past rain upstream from muddy river water).",
      "C": "Samanyatodrishta: Inferring movement or change based on non-causal general correlation (inferring sun's motion from changing positions).",
      "D": "Kevalanvayi: An inference based solely on positive agreement without negative instances."
    },
    summaryExplanation: "Purvavat Anumana deduces the future effect from an observed cause."
  },
  {
    id: "p1-u6-q17",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "AP-SET 2023",
    question: "Two propositions are called 'Subcontraries' in the traditional square of opposition if:",
    options: [
      { id: "A", text: "They cannot both be true, but both can be false" },
      { id: "B", text: "They cannot both be false, but both can be true simultaneously" },
      { id: "C", text: "Truth of one implies truth of the other" },
      { id: "D", text: "One is universal affirmative and the other universal negative" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Cannot both be true: That is the definition of Contraries (A and E).",
      "B": "Cannot both be false: Correct! Subcontraries (I: Some S are P, and O: Some S are not P) cannot both be false together; at least one must be true.",
      "C": "Truth implies truth: Subalternation downward.",
      "D": "Universal propositions: Contraries."
    },
    summaryExplanation: "Subcontraries (I and O) cannot both be false; both may simultaneously be true."
  },
  {
    id: "p1-u6-q18",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "MH-SET 2024",
    question: "Which of the following represents an inductive argument characteristic?",
    options: [
      { id: "A", text: "The conclusion claims to follow with absolute, necessary certainty" },
      { id: "B", text: "The conclusion claims only a degree of probability based on empirical observations" },
      { id: "C", text: "It moves strictly from universal general axioms to specific instances" },
      { id: "D", text: "It is evaluated exclusively as valid or invalid" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Necessary certainty: Characteristic of deductive reasoning.",
      "B": "Degree of probability: Correct! Inductive reasoning generalizes from specific observations to probable broader patterns.",
      "C": "Universal to particular: Deductive structure.",
      "D": "Valid/invalid: Deductive terminology (inductive arguments are strong/weak or cogent)."
    },
    summaryExplanation: "Inductive reasoning establishes probabilistic conclusions rather than apodictic certainty."
  },
  {
    id: "p1-u6-q19",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET June 2023",
    question: "In Indian logic, what is 'Satpratipaksha' (Inferentially Contradicted Middle)?",
    options: [
      { id: "A", text: "When a middle term is countered by another equally valid middle term leading to an opposite conclusion" },
      { id: "B", text: "When a reason has no instances in common" },
      { id: "C", text: "When perception contradicts inference" },
      { id: "D", text: "When the subject is non-existent" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Countered by equal middle term: Correct! Satpratipaksha occurs when an argument is matched by another equally plausible inferential counter-reason.",
      "B": "No instances in common: Asadharana.",
      "C": "Perception contradicts: Badhita.",
      "D": "Subject non-existent: Ashrayasiddha."
    },
    summaryExplanation: "Satpratipaksha is the fallacy of an evenly matched contradictory counter-inference."
  },
  {
    id: "p1-u6-q20",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "GSET 2024",
    question: "Identify the fallacy in this argument: 'Either you support our educational policy completely, or you want all schools to shut down permanently.'",
    options: [
      { id: "A", text: "False Dilemma (Bifurcation / Either-Or Fallacy)" },
      { id: "B", text: "Post Hoc Ergo Propter Hoc" },
      { id: "C", text: "Appeal to Pity (Argumentum ad Misericordiam)" },
      { id: "D", text: "Equivocation" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "False Dilemma: Correct! Artificially collapses a complex continuum into two polarized extremes while ignoring moderate alternatives.",
      "B": "Post Hoc: False cause based purely on temporal sequence.",
      "C": "Ad Misericordiam: Irrelevant appeal to emotional sympathy.",
      "D": "Equivocation: Using a term with multiple ambiguous meanings in the same argument."
    },
    summaryExplanation: "A False Dilemma artificially restricts choices to two extremes, masking intermediate positions."
  },
  {
    id: "p1-u6-q21",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "WB-SET 2023",
    question: "In Nyaya philosophy, what is 'Upamana' defined as?",
    options: [
      { id: "A", text: "Direct sensory apprehension" },
      { id: "B", text: "Knowledge of the relation between a name and the thing named based on resemblance or similarity" },
      { id: "C", text: "Invariable concomitance" },
      { id: "D", text: "Deductive reduction ad absurdum" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Sensory apprehension: Pratyaksha.",
      "B": "Relation between name and thing by resemblance: Correct! Upamana yields knowledge of an unknown object (e.g., wild cow / Gavaya) through its perceived similarity to a known domestic cow.",
      "C": "Invariable concomitance: Vyapti.",
      "D": "Reductio ad absurdum: Tarka."
    },
    summaryExplanation: "Upamana produces analogical cognition by connecting verbal designation with perceived resemblance."
  },
  {
    id: "p1-u6-q22",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET Dec 2023",
    question: "If 'Some diamonds are precious stones' is TRUE, what can be deduced about the proposition 'All diamonds are precious stones' under the traditional Square of Opposition?",
    options: [
      { id: "A", text: "It must be True" },
      { id: "B", text: "It must be False" },
      { id: "C", text: "It is Undetermined (Truth value is doubtful)" },
      { id: "D", text: "It is logically contradictory" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Must be True: Subalternation works downwards (Universal True ⇒ Particular True), NOT upwards.",
      "B": "Must be False: 'Some' being true does not preclude 'All' from being true.",
      "C": "Undetermined: Correct! Moving from particular (I) to universal (A), truth is undetermined. (Particular true does not guarantee universal true).",
      "D": "Contradictory: Contradictory of I is E, not A."
    },
    summaryExplanation: "In subalternation, truth travels downwards (A → I); moving upwards (I → A) yields an undetermined truth value."
  },
  {
    id: "p1-u6-q23",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "KSET 2023",
    question: "What is the middle term (Hetu) in the standard Nyaya syllogism: 'The hill has fire; because it has smoke; whatever has smoke has fire, like a kitchen hearth; the hill has smoke; therefore, the hill has fire'?",
    options: [
      { id: "A", text: "Hill (Paksha)" },
      { id: "B", text: "Smoke (Hetu / Linga)" },
      { id: "C", text: "Fire (Sadhya)" },
      { id: "D", text: "Kitchen hearth (Udaharana)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Hill: Minor term (Paksha) where the fire is inferred.",
      "B": "Smoke: Correct! The middle term / ground (Hetu / Linga) that reveals the presence of fire.",
      "C": "Fire: Major term / object to be inferred (Sadhya).",
      "D": "Kitchen hearth: Exemplar instance (Drishtanta)."
    },
    summaryExplanation: "Smoke is the middle term (Hetu) linking the locus (hill) to the unperceived major term (fire)."
  },
  {
    id: "p1-u6-q24",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET June 2024",
    question: "What is the fallacy of 'Equivocation'?",
    options: [
      { id: "A", text: "Using an ambiguous word or phrase in two different senses within the same argument" },
      { id: "B", text: "Threatening the opponent with physical violence" },
      { id: "C", text: "Using a biased sample in medical testing" },
      { id: "D", text: "Assuming that what is true for the parts must be true for the whole" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Ambiguous word in multiple senses: Correct! Equivocation exploits semantic ambiguity (e.g., 'A feather is light. What is light cannot be dark. Therefore, a feather cannot be dark').",
      "B": "Physical violence: Argumentum ad Baculum (Appeal to Force).",
      "C": "Biased sample: Unrepresentative sampling.",
      "D": "Parts to whole: Fallacy of Composition."
    },
    summaryExplanation: "Equivocation shifts the lexical definition of a crucial word mid-argument to manufacture false validity."
  },
  {
    id: "p1-u6-q25",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "MH-SET 2023",
    question: "The fallacy committed when someone argues that what is true of the whole must also necessarily be true of each of its individual parts is called:",
    options: [
      { id: "A", text: "Fallacy of Composition" },
      { id: "B", text: "Fallacy of Division" },
      { id: "C", text: "Fallacy of Accident" },
      { id: "D", text: "Converse Fallacy of Accident" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Fallacy of Composition: Erroneously reasoning that what is true of parts must be true of the whole.",
      "B": "Fallacy of Division: Correct! Erroneously assuming that properties of the aggregate belong to each constituent member.",
      "C": "Fallacy of Accident: Applying a general rule to an exceptional specific circumstance.",
      "D": "Converse Accident: Hasty generalization from an isolated exception."
    },
    summaryExplanation: "Fallacy of Division attributes properties of the whole system onto its individual elements."
  },
  {
    id: "p1-u6-q26",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "AP-SET 2024",
    question: "In Indian logic, which type of Pratyaksha (perception) involves the direct apprehension of an object without conceptualization or awareness of its name, class, or attributes?",
    options: [
      { id: "A", text: "Savikalpaka Pratyaksha (Determinate Perception)" },
      { id: "B", text: "Nirvikalpaka Pratyaksha (Indeterminate Perception)" },
      { id: "C", text: "Pratyabhijna (Recognition)" },
      { id: "D", text: "Alaukika Pratyaksha (Extraordinary Perception)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Savikalpaka: Determinate perception where attributes, names, and categories are clearly recognized.",
      "B": "Nirvikalpaka: Correct! Pure, unconceptualized, immediate sensory awareness prior to linguistic labeling.",
      "C": "Pratyabhijna: Recognition combining present perception with memory ('This is that Devadatta').",
      "D": "Alaukika: Extraordinary perception (Samanyalakshana, Jnanalakshana, Yogaja)."
    },
    summaryExplanation: "Nirvikalpaka Pratyaksha is primary indeterminate awareness prior to conceptual categorization."
  },
  {
    id: "p1-u6-q27",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET Dec 2023",
    question: "When an opponent's argument is deliberately exaggerated, distorted, or oversimplified to make it easily conquerable, the informal fallacy is:",
    options: [
      { id: "A", text: "Straw Man Fallacy" },
      { id: "B", text: "Red Herring" },
      { id: "C", text: "Tu Quoque" },
      { id: "D", text: "Genetic Fallacy" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Straw Man: Correct! Constructing a flimsy caricature of an argument to refute it effortlessly.",
      "B": "Red Herring: Introducing an irrelevant diversionary topic.",
      "C": "Tu Quoque: 'You too' fallacy accusing the accuser of hypocrisy.",
      "D": "Genetic Fallacy: Judging an argument purely by its historical origin."
    },
    summaryExplanation: "Straw Man fallacy replaces the real argument with an exaggerated, vulnerable substitute."
  },
  {
    id: "p1-u6-q28",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "WB-SET 2024",
    question: "In standard categorical logic, what is the 'Obverse' of the proposition 'All humans are mortal' (A)?",
    options: [
      { id: "A", text: "Some humans are mortal" },
      { id: "B", text: "No humans are non-mortal (E)" },
      { id: "C", text: "All mortals are human" },
      { id: "D", text: "Some non-mortals are human" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Subaltern proposition.",
      "B": "No humans are non-mortal: Correct! Obversion rule: (1) Change the quality of proposition (Affirmative A becomes Negative E), and (2) Replace the predicate with its contradictory complement ('mortal' becomes 'non-mortal').",
      "C": "Converse proposition (invalid for universal affirmative).",
      "D": "Distractor."
    },
    summaryExplanation: "Obverting 'All S is P' yields logically equivalent 'No S is non-P'."
  },
  {
    id: "p1-u6-q29",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET June 2023",
    question: "Which fallacy of Indian logic occurs when the middle term is irregular and erratic, being present both where the major term exists and where it does not exist (e.g., 'Sound is eternal, because it is knowable')?",
    options: [
      { id: "A", text: "Viruddha (Contradictory Middle)" },
      { id: "B", text: "Savyabhichara / Anaikantika (Irregular Middle)" },
      { id: "C", text: "Asiddha (Unproved Middle)" },
      { id: "D", text: "Badhita (Contradicted Middle)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Viruddha: Middle term establishes the exact contradictory opposite.",
      "B": "Savyabhichara: Correct! The irregular middle term (Sadharana / Common) overextends to both eternal and non-eternal objects (everything is knowable), failing to prove eternity.",
      "C": "Asiddha: Unproven reason.",
      "D": "Badhita: Direct perceptual refutation."
    },
    summaryExplanation: "Savyabhichara is the fallacy of an irregular middle term that violates invariable concomitance."
  },
  {
    id: "p1-u6-q30",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "MH-SET 2024",
    question: "What is the logical relation between two propositions if the truth of the universal proposition necessitates the truth of the particular proposition, but the falsity of the particular necessitates the falsity of the universal?",
    options: [
      { id: "A", text: "Contrariety" },
      { id: "B", text: "Sub-contrariety" },
      { id: "C", text: "Subalternation" },
      { id: "D", text: "Contradiction" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Contrariety: A and E relationship.",
      "B": "Sub-contrariety: I and O relationship.",
      "C": "Subalternation: Correct! Between universal superaltern (A/E) and particular subaltern (I/O). Truth trickles down; falsity climbs up.",
      "D": "Contradiction: Opposite truth and falsity in all cases."
    },
    summaryExplanation: "Subalternation dictates that truth flows downward (Universal to Particular) and falsity flows upward."
  }
];
