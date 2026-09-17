/**
 * PAPER 1 DATASET - Notes World
 * General Paper on Teaching & Research Aptitude
 * Complete and exhaustive concept coverage derived from 10-year exam question patterns.
 * Formatted strictly as pure bullet and point notes.
 */

export const paper1Data = {
  paperTitle: "Paper 1: General Paper on Teaching & Research Aptitude",
  paperCode: "GENERAL-00",
  units: [
    {
      id: "p1-u1",
      unitNumber: 1,
      name: "Teaching Aptitude",
      icon: "🎓",
      theoryNotes: [
        {
          title: "Levels of Teaching (Memory, Understanding, Reflective)",
          points: [
            "• Memory Level (Herbart): Thoughtless stage emphasizing rote memorization, stimulus-response conditioning, factual recall, and retention.",
            "• Herbartian 5 Formal Steps: 1. Preparation, 2. Presentation, 3. Association / Comparison, 4. Generalization, 5. Application.",
            "• Understanding Level (Morrison): Thoughtful stage emphasizing comprehension of relationships, grasping generalized rules, unit mastery, and explaining concepts with examples.",
            "• Morrison's 5 Teaching Stages: 1. Exploration, 2. Presentation, 3. Assimilation, 4. Organization, 5. Recitation.",
            "• Reflective Level (Hunt): Highest introspective and thoughtful level emphasizing problem-raising, hypothesis formulation, student-centred critical inquiry, and original creative problem-solving."
          ]
        },
        {
          title: "Bloom's Revised Taxonomy of Cognitive Domain",
          points: [
            "• Cognitive Domain Hierarchy (Low to High): Remember → Understand → Apply → Analyze → Evaluate → Create.",
            "• Anderson & Krathwohl Revision: Replaced static nouns with action verbs; moved 'Creating' to the pinnacle above 'Evaluating'.",
            "• Affective Domain (Krathwohl): Receiving → Responding → Valuing → Organizing → Characterizing.",
            "• Psychomotor Domain (Dave): Imitation → Manipulation → Precision → Articulation → Naturalization."
          ]
        },
        {
          title: "Learner Characteristics: Adolescent vs Adult Learners",
          points: [
            "• Andragogy (Malcolm Knowles): Self-directed adult learning, problem-centred, intrinsically motivated, rich life experience as resource.",
            "• Pedagogy: Teacher-directed child learning, subject-centred, externally motivated by grades and rewards.",
            "• Adolescent Cognitive Characteristics: Shift from concrete operations to formal hypothetical-deductive operational thinking (Piaget).",
            "• Adolescent Emotional & Social: Identity formation (Erikson), peer conformity, emotional volatility, egocentrism (imaginary audience)."
          ]
        },
        {
          title: "Methods of Teaching: Teacher-Centred vs Learner-Centred",
          points: [
            "• Teacher-Centred: Lecture method (direct instruction, passive learners), Demonstration method, Team teaching.",
            "• Learner-Centred: Heuristic method (H.E. Armstrong - learner as independent discoverer), Project method (William Kilpatrick - purposeful activity in social environment), Dalton Laboratory Plan (Helen Parkhurst - independent learning contracts).",
            "• Collaborative & Modern Methods: Flipped Classroom (pre-recorded lectures reviewed at home; interactive active problem-solving in class), Brainstorming (Osborn - quantity over quality without criticism), Micro-teaching (Allen - scaled-down encounter: 6 steps = Plan → Teach → Feedback → Re-plan → Re-teach → Re-feedback, 36 minutes total)."
          ]
        },
        {
          title: "Online Teaching Platforms: SWAYAM & Swayam Prabha",
          points: [
            "• SWAYAM 4 Quadrants: Quadrant 1 = E-Tutorial (video lectures); Quadrant 2 = E-Content (downloadable text/e-books); Quadrant 3 = Self-Assessment (quizzes, tests); Quadrant 4 = Discussion Forum (clearing doubts).",
            "• SWAYAM 9 National Coordinators: AICTE (self-paced courses), NPTEL (engineering), UGC (non-technical post-graduation), CEC (undergraduate), NCERT (school), NIOS (school), IGNOU (out-of-school), IIMB (management), NITTTR (teacher training).",
            "• Swayam Prabha: 34+ DTH high-quality educational channels telecasting 24x7 using GSAT-15 satellite. Uplinked from BISAG-N Gandhinagar; web portal maintained by INFLIBNET."
          ]
        },
        {
          title: "Comprehensive Evaluation Systems & CBCS Grading",
          points: [
            "• Placement Evaluation: Pre-instructional entry behavior assessment to determine existing student aptitude and placement.",
            "• Formative Evaluation: Continuous assessment DURING instruction to monitor learning progress and provide diagnostic feed-forward (non-punitive quizzes, oral questioning).",
            "• Diagnostic Evaluation: Pinpoints persistent root causes of recurring learning failures to design targeted remedial instruction.",
            "• Summative Evaluation: Terminal assessment at the END of course/term to assign grades, certify competence, and judge final outcomes.",
            "• Norm-Referenced Testing (NRT): Compares student performance against a peer cohort (reported in percentiles/z-scores, grading on a bell curve).",
            "• Criterion-Referenced Testing (CRT): Evaluates performance against fixed predetermined mastery criteria without peer comparison.",
            "• Choice Based Credit System (CBCS): Core Courses + Elective Courses (Discipline Specific & Generic) + Foundation Courses (Ability & Skill Enhancement).",
            "• 10-Point CBCS Grading Scale: O (Outstanding, 10), A+ (Excellent, 9), A (Very Good, 8), B+ (Good, 7), B (Above Average, 6), C (Average, 5), P (Pass, 4), F (Fail, 0), Ab (Absent, 0)."
          ]
        }
      ],
      shortTricks: [
        {
          title: "Levels of Teaching Proponents Mnemonic",
          mnemonic: "HM - UM - RH: 'Heavy Memory, Understood Morrison, Reflected on Hunt'",
          explanation: "Herbart = Memory | Morrison = Understanding | Hunt = Reflective.",
          proTip: "If the question asks who introduced problem-raising and problem-solving, choose Hunt."
        },
        {
          title: "Bloom's Revised Taxonomy Hierarchy",
          mnemonic: "RUAAEC: 'Ravi Understood All Answers Easily & Correctly'",
          explanation: "Remember → Understand → Apply → Analyze → Evaluate → Create.",
          proTip: "The 2001 revised taxonomy places CREATE at the top, replacing Evaluation."
        },
        {
          title: "SWAYAM 4 Quadrants Mnemonic",
          mnemonic: "ETAD: 'Every Teacher Answers Doubts'",
          explanation: "E-Tutorial | Text Content | Assessment | Discussion Forum.",
          proTip: "Attendance and physical classroom sessions are never quadrants of SWAYAM."
        }
      ]
    },
    {
      id: "p1-u2",
      unitNumber: 2,
      name: "Research Aptitude",
      icon: "🔬",
      theoryNotes: [
        {
          title: "Positivism vs Post-Positivism Epistemological Paradigms",
          points: [
            "• Positivism (Auguste Comte): Quantitative, deductive reasoning, value-free, objective empiricism, single verifiable reality governed by immutable natural laws.",
            "• Post-Positivism (Constructivist / Critical Realism): Qualitative, inductive reasoning, value-mediated, subjective interpretation, multiple constructed realities, researcher reflexivity.",
            "• Epistemology vs Ontology: Ontology = What is the nature of reality? Epistemology = What constitutes valid knowledge about reality? Axiology = What role do values play?"
          ]
        },
        {
          title: "Research Classification & Methodologies",
          points: [
            "• Fundamental / Pure Research: Builds universal theories, discovers scientific principles, and broadens general knowledge without immediate practical utility.",
            "• Applied Research: Utilizes theoretical frameworks to solve concrete, practical societal, industrial, or educational problems.",
            "• Action Research (Kurt Lewin): Practitioner-led cyclical spiral (Plan → Act → Observe → Reflect) aimed at resolving immediate local classroom or institutional challenges.",
            "• Descriptive Research: Describes existing conditions as they are without variable manipulation. Includes Surveys, Observational studies, and Correlational studies.",
            "• Ex-Post Facto Research: Quasi-experimental design examining effects of an independent variable that has already occurred naturally (researcher cannot manipulate the IV).",
            "• Experimental Research: True scientific inquiry characterized by: 1. Manipulation of Independent Variable (IV), 2. Control over Extraneous variables, 3. Measurement of Dependent Variable (DV), 4. Random assignment (Randomization)."
          ]
        },
        {
          title: "Steps of Research & Thesis Formatting Mechanics",
          points: [
            "• Standard 7 Steps: Problem Identification → Literature Review → Hypothesis Formulation → Research Design → Data Collection → Data Analysis & Testing → Generalization & Report.",
            "• APA 7th Edition Style: Author-Date format (e.g. Smith, 2023), in-text citations with page for direct quotes, hanging indent of 0.5 inch for reference entries.",
            "• MLA 9th Edition Style: Author-Page format (e.g. Smith 45), commonly used in literature and humanities.",
            "• Structure of Dissertation: Preliminaries (Title, Certificate, Declaration, Acknowledgments, Abstract, Table of Contents) → Text Body (Introduction, Literature Review, Methodology, Data Analysis, Findings & Discussion) → End Matter (References / Bibliography, Appendices)."
          ]
        },
        {
          title: "Sampling Techniques: Probability vs Non-Probability",
          points: [
            "• Probability Sampling (Every element has known non-zero chance of selection):",
            "  1. Simple Random Sampling: Lottery method, random number tables.",
            "  2. Systematic Sampling: Selecting every kth element from list (Sampling interval k = N/n).",
            "  3. Stratified Sampling: Population divided into mutually exclusive homogeneous strata; random samples drawn from each stratum (Homogeneous within, Heterogeneous between).",
            "  4. Cluster Sampling: Population divided into naturally occurring heterogeneous clusters; entire clusters selected at random (Heterogeneous within, Homogeneous between).",
            "  5. Multi-stage Sampling: Stepwise cluster sampling across successive geographic tiers.",
            "• Non-Probability Sampling (Subjective selection, sampling error cannot be calculated):",
            "  1. Purposive / Judgmental Sampling: Researcher chooses subjects based on specific expertise or predefined criteria.",
            "  2. Quota Sampling: Stratified non-random selection maintaining demographic proportion quotas.",
            "  3. Snowball / Chain-Referral Sampling: Existing subjects recruit future subjects; ideal for hidden or stigmatized populations (e.g. substance abusers).",
            "  4. Convenience / Accidental Sampling: Subjects selected based on geographic proximity and ease of access."
          ]
        },
        {
          title: "Hypothesis Testing, Statistical Errors & Significance",
          points: [
            "• Null Hypothesis (H0): Assumes no significant difference or relationship between variables.",
            "• Alternative Hypothesis (H1): Claims a significant difference or relationship exists (directional or non-directional).",
            "• Type I Error (Alpha α): Rejecting a TRUE Null Hypothesis (False Alarm / False Positive).",
            "• Type II Error (Beta β): Failing to reject a FALSE Null Hypothesis (Missed Detection / False Negative).",
            "• Significance Level (α): Cutoff for rejecting H0, commonly set at 0.05 (5% risk of Type I error) or 0.01.",
            "• Power of the Test (1 - β): Probability of correctly rejecting a false null hypothesis. Increased by increasing sample size.",
            "• Parametric Tests (Assume normal distribution, interval/ratio scale): t-test (comparing 2 group means), z-test (large samples n ≥ 30), ANOVA F-test (comparing 3 or more group means), Pearson's r.",
            "• Non-Parametric Tests (Distribution-free, nominal/ordinal scale): Chi-Square (goodness of fit, independence), Mann-Whitney U (counterpart of independent t-test), Wilcoxon Signed-Rank (counterpart of paired t-test), Kruskal-Wallis (counterpart of one-way ANOVA)."
          ]
        },
        {
          title: "Research Ethics & UGC Plagiarism Regulations",
          points: [
            "• Core Ethical Violations (FFP): Fabrication (making up data), Falsification (manipulating research materials or altering data), Plagiarism (appropriating another's ideas, text, or results without due credit).",
            "• UGC 2018 Academic Integrity Levels of Plagiarism Similarity:",
            "  - Level 0 (Similarity up to 10%): Minor similarities; NO penalty.",
            "  - Level 1 (Similarity 10% to 40%): Student must submit revised manuscript within 6 months.",
            "  - Level 2 (Similarity 40% to 60%): Student debarred from submitting revised script for 1 full year.",
            "  - Level 3 (Similarity above 60%): Registration for the degree program is permanently CANCELLED."
          ]
        }
      ],
      shortTricks: [
        {
          title: "Action Research Spiral",
          mnemonic: "PAOR: 'Please Act On Research'",
          explanation: "Plan → Act → Observe → Reflect.",
          proTip: "Act precedes Observe; you must execute the action before you observe its outcome."
        },
        {
          title: "Type I & Type II Errors Rule",
          mnemonic: "Type 1 = 'Re-True' (Rejecting True) | Type 2 = 'Ac-False' (Accepting False)",
          explanation: "Type 1 = Rejecting True Null | Type 2 = Accepting False Null.",
          proTip: "Type I error is convicting an innocent person; Type II error is letting a guilty person walk free."
        },
        {
          title: "Probability Sampling Mnemonic",
          mnemonic: "SSSC: 'Simple Stratified Systematic Cluster'",
          explanation: "Simple Random, Stratified, Systematic, Cluster.",
          proTip: "Snowball, Quota, and Purposive are always Non-Probability."
        }
      ]
    },
    {
      id: "p1-u3",
      unitNumber: 3,
      name: "Reading Comprehension",
      icon: "📖",
      theoryNotes: [
        {
          title: "Passage Analysis, Skimming & Inferential Logic",
          points: [
            "• Skimming Strategy: Rapid reading of the introduction, first sentences of each body paragraph, and conclusion to identify the central argument.",
            "• Scanning Strategy: Focused search for specific keywords, dates, proper nouns, or quantitative data flagged in the questions.",
            "• Direct Factual Questions: Answers are explicitly stated verbatim in the text; locate anchor words directly.",
            "• Inferential Questions: Answers must be deduced from implicit underlying assumptions; check whether the conclusion logically follows without assuming external unverified facts.",
            "• Author's Tone Identification: Objective / Analytical (balanced, evidence-based), Critical (highlighting flaws), Cynical (distrustful of human motives), Laudatory / Eulogistic (praising), Dogmatic (asserting opinions as indisputable truth)."
          ]
        }
      ],
      shortTricks: [
        {
          title: "Reverse Reading Method",
          mnemonic: "Q-First Rule: 'Read Questions Before The Passage'",
          explanation: "Underline 1-2 anchor words in each question first, then read the passage.",
          proTip: "Prevents reading the passage twice and speeds up answer location."
        }
      ]
    },
    {
      id: "p1-u4",
      unitNumber: 4,
      name: "Communication",
      icon: "📡",
      theoryNotes: [
        {
          title: "Communication Types: Intrapersonal, Interpersonal, Group, Mass",
          points: [
            "• Intrapersonal Communication: Communication occurring within oneself (internal monologue, meditation, self-concept, self-evaluation).",
            "• Interpersonal Communication: Dyadic communication between two individuals, offering immediate bidirectional feedback.",
            "• Group Communication: Communication among members of a defined group sharing a common task or objective (e.g. classroom discussion, committee meetings).",
            "• Mass Communication: Dissemination of messages to a large, heterogeneous, anonymous, dispersed audience via technological gatekeepers (newspapers, television, radio, internet).",
            "• Downward Communication: Flows from higher hierarchy to lower (directives, instructions, company policies).",
            "• Upward Communication: Flows from subordinates to superiors (grievances, feedback, suggestions, reports).",
            "• Horizontal / Lateral Communication: Flows between peers on the same organizational tier."
          ]
        },
        {
          title: "Non-Verbal Communication Modalities",
          points: [
            "• Kinesics: Body language, facial expressions, eye movement / eye contact (oculesics), hand gestures, and body posture.",
            "• Proxemics (Edward T. Hall's Spatial Zones):",
            "  1. Intimate Distance: 0 to 1.5 feet (close physical contact).",
            "  2. Personal Distance: 1.5 to 4 feet (conversations with friends).",
            "  3. Social Distance: 4 to 12 feet (formal business interactions).",
            "  4. Public Distance: 12 feet and beyond (public lectures, public speeches).",
            "• Paralanguage (Vocalics): How words are spoken rather than what words are spoken (vocal pitch, volume, speech rate, pauses, voice inflection).",
            "• Haptics: Communication conveyed through physical touch (handshakes, pats on the back).",
            "• Chronemics: Use and perception of time in interpersonal interactions.",
            "• Olfactics: Communication through smell or scent."
          ]
        },
        {
          title: "Models of Communication",
          points: [
            "• Aristotle's Model: Speaker-centred linear model (Speaker → Speech → Occasion → Audience → Effect). First model of rhetoric.",
            "• Shannon-Weaver Mathematical Model: Linear transmission model (Information Source → Transmitter → Channel with Noise → Receiver → Destination). First model to introduce 'Noise'.",
            "• Lasswell's Model: 5-question formula: 'Who (communicator) Says What (message) In Which Channel (medium) To Whom (receiver) With What Effect (feedback)?'.",
            "• Berlo's SMCR Model: Source → Message → Channel → Receiver. Identifies 5 factors affecting source and receiver (Communication skills, Attitudes, Knowledge, Social system, Culture).",
            "• Schramm's Interactive Model: Emphasizes two-way communication with feedback; communication occurs only where the 'Fields of Experience' of sender and receiver overlap.",
            "• Barnlund's Transactional Model: Continuous dynamic circular process where sender and receiver simultaneously encode, decode, and transmit messages."
          ]
        },
        {
          title: "Barriers to Communication & The 7 Cs",
          points: [
            "• Semantic / Linguistic Barriers: Unexplained technical jargon, homophones, ambiguous vocabulary, poorly translated text, bypassed instructions.",
            "• Psychological Barriers: Premature evaluation, selective perception, halo effect, emotional defensiveness, closed-mindedness.",
            "• Organizational Barriers: Complex hierarchical levels, rigid formal rules, status distance, message distortion through filtering.",
            "• Physical / Environmental Barriers: Acoustic background noise, long geographic distance, poor lighting, equipment breakdowns.",
            "• 7 Cs of Effective Communication: 1. Completeness, 2. Conciseness, 3. Consideration ('You-attitude'), 4. Concreteness, 5. Clarity, 6. Courtesy, 7. Correctness."
          ]
        }
      ],
      shortTricks: [
        {
          title: "Non-Verbal Codes Quick Decoders",
          mnemonic: "Kin = Body | Prox = Space | Chron = Time | Hap = Touch | Para = Pitch/Tone",
          explanation: "Kinesics (Body), Proxemics (Space), Chronemics (Time), Haptics (Touch), Paralanguage (Voice Tone).",
          proTip: "Paralanguage is vocal but strictly non-verbal."
        },
        {
          title: "Hall's Proxemics Distance Order",
          mnemonic: "IPSP: 'Intimate Personal Social Public'",
          explanation: "Intimate (0-1.5ft) → Personal (1.5-4ft) → Social (4-12ft) → Public (12ft+).",
          proTip: "Social distance is 4 to 12 feet, commonly asked in match-the-following questions."
        }
      ]
    },
    {
      id: "p1-u5",
      unitNumber: 5,
      name: "Mathematical Reasoning & Aptitude",
      icon: "📐",
      theoryNotes: [
        {
          title: "Coding-Decoding & Letter-Number Series",
          points: [
            "• Alphabet Positions: A=1, B=2, C=3 ... Z=26. Reverse: A=26, B=25 ... Z=1.",
            "• Opposite Letter Pairs: Sum of positions of any letter and its exact opposite is always 27.",
            "• Opposite Pairs: AZ (1+26), BY (2+25), CX (3+24), DW (4+23), EV (5+22), FU (6+21), GT (7+20), HS (8+19), IR (9+18), JQ (10+17), KP (11+16), LO (12+15), MN (13+14).",
            "• Series Patterns: Arithmetic progression ($T_n = a + (n-1)d$), Geometric progression ($T_n = a \cdot r^{n-1}$), Alternating difference series, Prime number gaps, Square/Cube deviation ($n^2 \pm 1, n^3 \pm 1$)."
          ]
        },
        {
          title: "Commercial Mathematics: Percentages, Profit-Loss & Interest",
          points: [
            "• Percentage Change: $[(New - Base) / Base] \times 100$.",
            "• Cost Price (CP) & Selling Price (SP): Profit = $SP - CP$; Loss = $CP - SP$. Profit% = $(Profit / CP) \times 100$.",
            "• Discount: Calculated always on Marked Price (MP). $SP = MP - \text{Discount}$.",
            "• Simple Interest (SI): $SI = (P \times R \times T) / 100$; Total Amount $A = P + SI$.",
            "• Compound Interest (CI): $A = P(1 + R/100)^T$; $CI = A - P$. For compounding half-yearly: $R/2$ and $2T$."
          ]
        },
        {
          title: "Speed, Time and Distance",
          points: [
            "• Core Relationship: $\text{Distance} = \text{Speed} \times \text{Time}$.",
            "• Unit Conversions: $km/h \to m/s$ multiply by $5/18$; $m/s \to km/h$ multiply by $18/5$.",
            "• Average Speed for Equal Distance: $\text{Average Speed} = 2xy / (x + y)$ where $x$ and $y$ are speeds for each half.",
            "• Relative Speed: Same direction $= |S_1 - S_2|$; Opposite directions $= S_1 + S_2$.",
            "• Train Problems: Time to cross pole/person $= \text{Length of Train} / \text{Speed}$. Time to cross platform/bridge $= (\text{Train Length} + \text{Platform Length}) / \text{Speed}$."
          ]
        }
      ],
      shortTricks: [
        {
          title: "EJOTY Alphabet Peg",
          mnemonic: "E(5) - J(10) - O(15) - T(20) - Y(25)",
          explanation: "Multiples of 5 for rapid mental calculation of letter numbers.",
          proTip: "Combine with CFILORUX for multiples of 3 (C=3, F=6, I=9, L=12, O=15, R=18, U=21, X=24)."
        },
        {
          title: "Speed Conversion Multiplier",
          mnemonic: "km/h to m/s: × 5/18 | m/s to km/h: × 18/5",
          explanation: "To get smaller unit (m/s), multiply by smaller fraction (5/18).",
          proTip: "To get larger unit (km/h), multiply by larger fraction (18/5)."
        }
      ]
    },
    {
      id: "p1-u6",
      unitNumber: 6,
      name: "Logical Reasoning & Classical Indian Logic",
      icon: "⚖️",
      theoryNotes: [
        {
          title: "Categorical Propositions: Quantity, Quality & Distribution",
          points: [
            "• A (Universal Affirmative: 'All S are P'): Distributes SUBJECT only. Predicate is undistributed.",
            "• E (Universal Negative: 'No S are P'): Distributes BOTH Subject and Predicate.",
            "• I (Particular Affirmative: 'Some S are P'): Distributes NEITHER Subject nor Predicate.",
            "• O (Particular Negative: 'Some S are not P'): Distributes PREDICATE only. Subject is undistributed."
          ]
        },
        {
          title: "Classical Square of Opposition Rules",
          points: [
            "• Contradictories (A ↔ O, E ↔ I): Diagonal opposites. Must have opposite truth values. If one is True, the other MUST be False. They can never be both true or both false.",
            "• Contraries (A ↔ E): Top universals. Cannot both be TRUE together, but CAN both be FALSE.",
            "• Sub-contraries (I ↔ O): Bottom particulars. Cannot both be FALSE together, but CAN both be TRUE.",
            "• Subalternation (A → I, E → O):",
            "  - Truth descends: If Universal (A/E) is TRUE, then Particular (I/O) is definitely TRUE.",
            "  - Falsehood ascends: If Particular (I/O) is FALSE, then Universal (A/E) is definitely FALSE.",
            "  - If Universal is False, Particular is Doubtful / Undetermined. If Particular is True, Universal is Doubtful."
          ]
        },
        {
          title: "Formal & Informal Fallacies",
          points: [
            "• Fallacy of Undistributed Middle: Middle term is not distributed in at least one premise.",
            "• Illicit Major: Major term is distributed in conclusion but was undistributed in major premise.",
            "• Illicit Minor: Minor term is distributed in conclusion but was undistributed in minor premise.",
            "• Exclusive Premises: An argument with two negative premises can yield no valid conclusion.",
            "• Fallacy of Four Terms (Quaternio Terminorum): Equivocal use of a term causing 4 terms instead of 3.",
            "• Informal Fallacies:",
            "  - Ad Hominem: Attacking the person's character rather than their argument.",
            "  - Straw Man: Distorting an opponent's argument to make it easier to attack.",
            "  - Begging the Question (Petitio Principii): Circular reasoning where conclusion is assumed in premise.",
            "  - Slippery Slope: Asserting that a minor first step will inevitably lead to a chain of negative events.",
            "  - Ad Populum: Appealing to popular opinion or bandwagon majority.",
            "  - Red Herring: Introducing an irrelevant topic to divert attention from original issue."
          ]
        },
        {
          title: "Classical Indian Logic: Pramanas (Sources of Valid Knowledge)",
          points: [
            "• 6 Pramanas in Indian Philosophy (Advaita Vedanta & Bhatta Mimamsa recognize all 6; Nyaya recognizes first 4):",
            "  1. Pratyaksha (Perception): Direct sensory contact with object. Nirvikalpa (indeterminate, bare sensory impression) vs Savikalpa (determinate, categorized with name and genus).",
            "  2. Anumana (Inference): Cognition of an unperceived object through perception of a sign (Linga/Hetu) via Vyapti.",
            "  3. Upamana (Comparison / Analogy): Knowledge of relationship between name and object based on resemblance (e.g. learning that wild cow Gavaya resembles domestic cow).",
            "  4. Shabda (Verbal Testimony): Words of a reliable authority (Aptavakya). Vaidika (scriptural, infallible) vs Laukika (secular, trustworthy human).",
            "  5. Arthapatti (Postulation / Presumption): Deducing an unperceived fact to reconcile two apparently contradictory known facts (e.g. Fat Devadatta eats not by day, hence he must eat at night).",
            "  6. Anupalabdhi (Non-Perception): Cognition of non-existence (Abhava) of an object (e.g. knowing there is no jar on the ground because it is not perceived when conditions for perception exist)."
          ]
        },
        {
          title: "Nyaya Syllogism (5 Steps) & Structural Terms",
          points: [
            "• 5 Members of Pararthanumana (Syllogism for others):",
            "  1. Pratijna (Proposition): 'The hill has fire' (Asserts what is to be proved).",
            "  2. Hetu (Reason): 'Because it has smoke' (States the ground/reason).",
            "  3. Udaharana (Exemplification): 'Whatever has smoke has fire, as in a kitchen hearth' (Universal proposition with concrete example).",
            "  4. Upanaya (Application): 'This hill has smoke which is invariably accompanied by fire' (Applying universal relation to subject).",
            "  5. Nigamana (Conclusion): 'Therefore, this hill has fire' (Final restatement).",
            "• 3 Terms of Indian Syllogism:",
            "  - Paksha: Minor term (The Hill / subject of inference where Sadhya is suspected).",
            "  - Sadhya: Major term (Fire / object to be established).",
            "  - Hetu / Linga: Middle term (Smoke / sign that indicates Sadhya).",
            "• Vyapti: Invariable, unconditional (Anupadhika) concomitance between Hetu and Sadhya. Anvaya Vyapti (positive: where there is smoke, there is fire) vs Vyatireka Vyapti (negative: where there is no fire, there is no smoke)."
          ]
        },
        {
          title: "Hetvabhasa (Fallacies of Inference in Indian Logic)",
          points: [
            "• 5 Types of Hetvabhasa (Defects of the Middle Term):",
            "  1. Savyabhichara (Irregular Middle / Fallacy of Inconstant Concomitance): Middle term is not exclusively concomitant with major term. (Sadharana = too wide, Asadharana = too narrow, Anupasamhari = non-exclusive).",
            "  2. Viruddha (Contradictory Middle): Middle term proves the exact opposite of the major term it was supposed to prove (e.g. 'Sound is eternal, because it is produced' - being produced proves non-eternality).",
            "  3. Satpratipaksha (Counter-Balanced Middle): When a middle term is countered by another equally valid middle term establishing the contrary conclusion.",
            "  4. Asiddha (Unproved Middle / Sadhya-sama): When the middle term itself is unproved or non-existent:",
            "     - Ashrayasiddha: The subject (Paksha) does not exist (e.g. 'Sky-lotus is fragrant').",
            "     - Svarupasiddha: Middle term does not exist in the subject (e.g. 'Sound is a quality, because it is visible').",
            "     - Vyapyatvasiddha: Invariable relation is conditional (concomitance depends on an extraneous condition / Upadhi).",
            "  5. Badhita (Non-Inferentially Contradicted): When the conclusion is directly contradicted by a stronger means of knowledge like direct perception (e.g. 'Fire is cold because it is a substance' - perception directly confirms that fire is hot)."
          ]
        }
      ],
      shortTricks: [
        {
          title: "Square of Opposition Directional Flow",
          mnemonic: "Truth Flows DOWN ↓ | Falsehood Flows UP ↑",
          explanation: "Universal (A/E) True ⟹ Particular (I/O) True. Particular (I/O) False ⟹ Universal (A/E) False.",
          proTip: "Diagonal contradictories (A-O, E-I) are always exact opposite truth values."
        },
        {
          title: "Nyaya Syllogism 5 Steps",
          mnemonic: "PHUUN: 'Phone Uthao Urgently Now'",
          explanation: "Pratijna → Hetu → Udaharana → Upanaya → Nigamana.",
          proTip: "Upanaya is the application step showing the invariable relation on the paksha."
        },
        {
          title: "Hetvabhasa 5 Types",
          mnemonic: "SVSAB: 'Super Vigilant Students Avoid Badhita'",
          explanation: "Savyabhichara (Irregular) | Viruddha (Contradictory) | Satpratipaksha (Counterbalanced) | Asiddha (Unproved) | Badhita (Contradicted by Perception).",
          proTip: "Whenever an example says 'Fire is cold', choose Badhita without hesitation."
        }
      ]
    },
    {
      id: "p1-u7",
      unitNumber: 7,
      name: "Data Interpretation",
      icon: "📊",
      theoryNotes: [
        {
          title: "Tabular Calculations, Ratios & Percentages",
          points: [
            "• Percentage Increase / Decrease: $[(Final - Initial) / Initial] \times 100$. Initial value is always the base denominator.",
            "• Percentage Share: $(\text{Part Value} / \text{Total Value}) \times 100$.",
            "• Cross-Multiplication Fraction Decider: To compare $a/b$ vs $c/d$, compute $(a \times d)$ vs $(b \times c)$. If $a \times d > b \times c$, then $a/b > c/d$. Eliminates manual decimal division.",
            "• 10% and 1% Mental Splitting: To find 17% of a number: $10\% + 5\% + 2\%$. (e.g. for 480: $48 + 24 + 9.6 = 81.6$).",
            "• Weighted Average Formula: $(\sum w_i x_i) / (\sum w_i)$."
          ]
        }
      ],
      shortTricks: [
        {
          title: "Cross-Product Fraction Decider",
          mnemonic: "Compare (a × d) vs (b × c) without dividing!",
          explanation: "Instantly compare fractions without long division.",
          proTip: "17/23 vs 19/27 ⟹ 17×27=459 > 23×19=437 ⟹ 17/23 is greater."
        }
      ]
    },
    {
      id: "p1-u8",
      unitNumber: 8,
      name: "Information & Communication Technology (ICT)",
      icon: "💻",
      theoryNotes: [
        {
          title: "Computer Hardware, Memory Hierarchy & Unit Conversions",
          points: [
            "• CPU Architecture: ALU (Arithmetic Logic Unit), CU (Control Unit), Registers (fastest, internal CPU memory), Cache (L1, L2, L3 SRAM).",
            "• Primary Memory: RAM (Volatile, read-write, dynamic DRAM needs periodic refreshing; static SRAM uses flip-flops) vs ROM (Non-volatile, firmware BIOS, PROM, EPROM, EEPROM).",
            "• Memory Units Hierarchy (Ascending Powers of 2):",
            "  - 1 Byte = 8 bits | 1 Nibble = 4 bits.",
            "  - 1 KB (Kilobyte) = 2^10 bytes = 1,024 bytes.",
            "  - 1 MB (Megabyte) = 2^20 bytes = 1,024 KB.",
            "  - 1 GB (Gigabyte) = 2^30 bytes = 1,024 MB.",
            "  - 1 TB (Terabyte) = 2^40 bytes = 1,024 GB.",
            "  - 1 PB (Petabyte) = 2^50 bytes = 1,024 TB.",
            "  - 1 EB (Exabyte) = 2^60 bytes = 1,024 PB.",
            "  - 1 ZB (Zettabyte) = 2^70 bytes = 1,024 EB.",
            "  - 1 YB (Yottabyte) = 2^80 bytes = 1,024 ZB."
          ]
        },
        {
          title: "Number Systems & Binary Representation",
          points: [
            "• Base Radix: Binary (Base 2: 0,1), Octal (Base 8: 0-7), Decimal (Base 10: 0-9), Hexadecimal (Base 16: 0-9, A-F where A=10, B=11, C=12, D=13, E=14, F=15).",
            "• Hex to Binary: Each hex digit represents exactly 4 binary bits (8-4-2-1 rule).",
            "• Octal to Binary: Each octal digit represents exactly 3 binary bits (4-2-1 rule).",
            "• Two's Complement: Invert all bits (1's complement) and add 1. Range for n bits signed integer is $-2^{n-1}$ to $2^{n-1} - 1$."
          ]
        },
        {
          title: "Internet Protocols & Email Privacy Architecture",
          points: [
            "• URL Anatomy: Protocol (https://) + Subdomain (www.) + Domain name (ugcnet) + Top-Level Domain (.nic.in) + Path / File.",
            "• Port Numbers: HTTP (80), HTTPS (443 - uses SSL/TLS encryption), FTP Data (20), FTP Control (21), SMTP (25 - sending mail), POP3 (110 - downloading mail, removes from server), IMAP (143 - synchronizing mail across multiple devices), DNS (53).",
            "• Email Fields:",
            "  - To: Primary recipients; visible to everyone.",
            "  - CC (Carbon Copy): Secondary informed recipients; visible to everyone.",
            "  - BCC (Blind Carbon Copy): Hidden recipients; concealed from To and CC.",
            "  - BCC Privacy Rule: BCC recipients can see To and CC, but NOBODY can see who is in BCC, and BCC recipients cannot see other BCC recipients."
          ]
        },
        {
          title: "Malware Classification & Cyber Security",
          points: [
            "• Virus: Malicious code attached to a host program or file; requires human execution/action to propagate.",
            "• Worm: Self-replicating standalone malware; propagates automatically over networks without needing a host file or user action.",
            "• Trojan Horse: Malware disguised as genuine or useful software; creates a backdoor for remote access.",
            "• Ransomware: Encrypts victim's files and demands financial ransom for decryption key (e.g. WannaCry).",
            "• Phishing: Fraudulent attempts via spoofed emails or websites to deceive users into disclosing sensitive credentials.",
            "• Spyware: Covertly monitors user activity and keystrokes (Keylogger) to transmit data to unauthorized third parties."
          ]
        },
        {
          title: "Digital Initiatives in Higher Education",
          points: [
            "• SWAYAM: National MOOC platform providing online credit courses across school to post-graduate education.",
            "• Swayam Prabha: 34+ DTH channels dedicated to 24x7 educational telecasting via GSAT-15.",
            "• National Digital Library of India (NDLI): Single-window virtual digital library repository maintained by IIT Kharagpur.",
            "• National Academic Depository (NAD): 24x7 online storehouse of all academic awards (degrees, diplomas, certificates) verified via DigiLocker.",
            "• Shodhganga: National repository of electronic theses and doctoral dissertations submitted to Indian universities.",
            "• ShodhGangotri: National repository of approved research synopses and doctoral proposals.",
            "• e-ShodhSindhu: Consortia for higher education electronic resources providing access to peer-reviewed e-journals and citation databases.",
            "• e-PG Pathshala: High-quality interactive curriculum-based e-content across 70+ post-graduate disciplines."
          ]
        }
      ],
      shortTricks: [
        {
          title: "Storage Units Ascending Order",
          mnemonic: "King Mike Goes To Pub Every Zero Year",
          explanation: "KB (2^10) → MB (2^20) → GB (2^30) → TB (2^40) → PB (2^50) → EB (2^60) → ZB (2^70) → YB (2^80).",
          proTip: "Every step multiplies by 1,024 (2^10)."
        },
        {
          title: "BCC One-Way Mirror Rule",
          mnemonic: "BCC can see everyone, but NOBODY can see BCC!",
          explanation: "BCC recipients see sender, To, and CC. Nobody can see BCC list.",
          proTip: "Even two recipients both inside BCC cannot see each other."
        }
      ]
    },
    {
      id: "p1-u9",
      unitNumber: 9,
      name: "People, Development and Environment",
      icon: "🌍",
      theoryNotes: [
        {
          title: "MDGs vs SDGs: Targets & Exact Sequence",
          points: [
            "• MDGs (Millennium Development Goals: 2000–2015): 8 Goals, 21 Targets. Focused predominantly on developing nations.",
            "• SDGs (Sustainable Development Goals / Agenda 2030: 2015–2030): 17 Goals, 169 Targets. Universal application to all countries.",
            "• Exact Numerical Order of 17 SDGs:",
            "  - Goal 1: No Poverty.",
            "  - Goal 2: Zero Hunger.",
            "  - Goal 3: Good Health and Well-Being.",
            "  - Goal 4: Quality Education (Lifelong learning opportunities).",
            "  - Goal 5: Gender Equality.",
            "  - Goal 6: Clean Water and Sanitation.",
            "  - Goal 7: Affordable and Clean Energy.",
            "  - Goal 8: Decent Work and Economic Growth.",
            "  - Goal 9: Industry, Innovation, and Infrastructure.",
            "  - Goal 10: Reduced Inequalities.",
            "  - Goal 11: Sustainable Cities and Communities.",
            "  - Goal 12: Responsible Consumption and Production.",
            "  - Goal 13: Climate Action.",
            "  - Goal 14: Life Below Water (Marine conservation).",
            "  - Goal 15: Life on Land (Terrestrial ecosystems & biodiversity).",
            "  - Goal 16: Peace, Justice, and Strong Institutions.",
            "  - Goal 17: Partnerships for the Goals."
          ]
        },
        {
          title: "Air Pollutants, Smog & National Air Quality Index (AQI)",
          points: [
            "• Primary Pollutants (Emitted directly): Carbon Monoxide (CO), Sulfur Dioxide (SO2), Nitrogen Oxides (NOx), PM2.5, PM10, Lead (Pb).",
            "• Secondary Pollutants (Formed via atmospheric chemical reactions): Ground-level Ozone (O3), Peroxyacyl Nitrates (PAN), Sulfuric acid (Acid rain), Photochemical smog.",
            "• Classical (London) Smog: Reducing smog, occurs in cool humid climate, contains SO2 + smoke + fog.",
            "• Photochemical (Los Angeles) Smog: Oxidizing smog, occurs in warm sunny climate, formed by reaction of sunlight on NOx and Volatile Organic Compounds (VOCs).",
            "• National Air Quality Index (AQI): Tracks 8 key pollutants: PM10, PM2.5, NO2, SO2, CO, O3, NH3, Pb.",
            "• 6 AQI Categories: Good (0-50), Satisfactory (51-100), Moderate (101-200), Poor (201-300), Very Poor (301-400), Severe (401-500)."
          ]
        },
        {
          title: "Greenhouse Gases (GHG) & Global Warming Potential (GWP)",
          points: [
            "• Primary Greenhouse Gases: Water Vapor (H2O - highest natural contributor), Carbon Dioxide (CO2 - primary anthropogenic driver), Methane (CH4 - 28x GWP of CO2), Nitrous Oxide (N2O - 265x GWP), Fluorinated gases (CFCs, HFCs, SF6).",
            "• Sulfur Hexafluoride (SF6): Highest global warming potential among all greenhouse gases (approx 23,500x of CO2).",
            "• Kyoto Protocol Greenhouse Gases: CO2, CH4, N2O, HFCs, PFCs, SF6 (and later NF3 added in Doha amendment)."
          ]
        },
        {
          title: "Water Contaminants & Specific Diseases",
          points: [
            "• Nitrate in Drinking Water: Methemoglobinemia (Blue Baby Syndrome) due to reduced oxygen-carrying capacity of hemoglobin.",
            "• Arsenic Poisoning: Black Foot Disease, hyperkeratosis, skin cancers.",
            "• Cadmium Poisoning: Itai-Itai Disease ('Ouch-Ouch' disease - severe osteomalacia and renal failure).",
            "• Mercury Contamination: Minamata Disease (severe neurological damage, numbness, ataxia).",
            "• Fluoride Excess: Dental fluorosis (mottling of teeth) and skeletal fluorosis."
          ]
        },
        {
          title: "Major International Treaties, Conventions & NAPCC",
          points: [
            "• Montreal Protocol: Protection of the Stratospheric Ozone Layer by phasing out Chlorofluorocarbons (CFCs), Halons, and HCFCs. Kigali Amendment mandates gradual phase-down of Hydrofluorocarbons (HFCs).",
            "• Kyoto Protocol: Legally binding greenhouse gas reduction commitments for Annex I industrialized nations. Introduced Market Mechanisms: Emissions Trading, Clean Development Mechanism (CDM), Joint Implementation.",
            "• Paris Agreement: Replaced Kyoto framework. Goal: Keep global temperature rise well below 2°C above pre-industrial levels, with ambitious efforts to limit rise to 1.5°C. Implemented via Nationally Determined Contributions (NDCs).",
            "• International Solar Alliance (ISA): Joint treaty initiative launched by India and France at COP21 Paris. Headquarters located in Gurugram, Haryana, India.",
            "• National Action Plan on Climate Change (NAPCC - 8 National Missions):",
            "  1. National Solar Mission.",
            "  2. National Mission for Enhanced Energy Efficiency.",
            "  3. National Mission on Sustainable Habitat.",
            "  4. National Water Mission.",
            "  5. National Mission for Sustaining the Himalayan Ecosystem.",
            "  6. National Mission for a Green India.",
            "  7. National Mission for Sustainable Agriculture.",
            "  8. National Mission on Strategic Knowledge for Climate Change."
          ]
        }
      ],
      shortTricks: [
        {
          title: "First 6 SDGs Human Story",
          mnemonic: "Poor (1) & Hungry (2) people need Health (3) and Education (4) for Gender Equality (5) and Clean Water (6)",
          explanation: "Goal 1: No Poverty → Goal 2: Zero Hunger → Goal 3: Good Health → Goal 4: Quality Education → Goal 5: Gender Equality → Goal 6: Clean Water.",
          proTip: "SDG 4 is Quality Education; SDG 13 is Climate Action."
        },
        {
          title: "Treaty Subject Matter Shortcut",
          mnemonic: "M-O: Montreal = Ozone | K-C: Kyoto = Carbon/Climate | P-2: Paris = 2°C Limit",
          explanation: "Montreal = Ozone layer. Kyoto = Carbon emissions. Paris = Below 2°C.",
          proTip: "The Kigali amendment added HFC phase-down to Montreal Protocol."
        },
        {
          title: "Water Contaminant Disease Mnemonics",
          mnemonic: "Nitrate = Blue Baby | Arsenic = Black Foot | Cadmium = Itai-Itai | Mercury = Minamata (M-M)",
          explanation: "Nitrate → Blue Baby. Arsenic → Black Foot. Cadmium → Itai-Itai. Mercury → Minamata.",
          proTip: "Fluoride excess causes skeletal fluorosis."
        }
      ]
    },
    {
      id: "p1-u10",
      unitNumber: 10,
      name: "Higher Education System",
      icon: "🏛️",
      theoryNotes: [
        {
          title: "Ancient Indian Higher Learning Institutions",
          points: [
            "• Takshashila (Taxila): Oldest seat of classical learning, located in modern-day Pakistan. No centralized campus, examinations, or degree certificates; students studied individually under renowned acharyas. Famous for military science, medicine, archery, law, and statecraft. Associated with Chanakya (Arthashastra), Panini (Ashtadhyayi Sanskrit grammar), Charaka (medicine), Jivaka (Buddha's physician), King Prasenajit.",
            "• Nalanda (Bihar): Premier international residential Buddhist university founded by Kumaragupta I of the Gupta dynasty. Renowned for Mahayana Buddhism, logic, medicine, astronomy, and philosophy. Entrance was extremely rigorous, conducted at the gate by the Dvarapandita (gate-scholar) with only 20-30% acceptance. Famed library complex Dharmaganja consisting of three multi-storey buildings: Ratnasagara, Ratnodadhi, and Ratnaranjaka. Visited by Xuanzang (Hiuen Tsang) and Yijing (I-Tsing). Destroyed by Bakhtiyar Khilji.",
            "• Vikramashila (Bihar): Vajrayana (Tantric) Buddhist university founded by King Dharmapala of the Pala dynasty. Renowned for logic, metaphysics, and tantra. Scholar Atisha Dipankara journeyed from here to Tibet to reform Buddhism.",
            "• Vallabhi (Gujarat): Hinayana Buddhist seat of learning founded under the Maitraka dynasty. Prominent for secular studies, civil administration, statecraft, and commerce.",
            "• Odantapuri & Jagaddala: Universities established in Bengal/Bihar under the Pala kings.",
            "• Mithila (Bihar): Renowned center for Nyaya philosophy and logic (Tarka Shastra), established by Gangesha Upadhyaya."
          ]
        },
        {
          title: "Pre-Independence Education Policy Milestones",
          points: [
            "• Charter Act 1813: First state financial allocation of Rs. 1 Lakh per annum for education in India.",
            "• Macaulay's Minute 1835: Advocated English as medium of higher instruction; introduced Downward Filtration Theory (educating the elite who would filter knowledge down to the masses).",
            "• Wood's Despatch 1854: Known as the 'Magna Carta of English Education in India'. Recommended establishment of modern universities on the model of London University at Calcutta, Bombay, and Madras (founded in 1857).",
            "• Hunter Commission 1882: First Indian Education Commission; recommended state support for primary and secondary education and private participation.",
            "• Indian Universities Act 1904: Formulated under Lord Curzon based on Raleigh Commission (1902); tightened government control and inspection over universities.",
            "• Sadler Commission (Calcutta University Commission 1917): Recommended separating secondary and intermediate education from university degree; 12 years of school + 3-year degree.",
            "• Hartog Committee 1929: Focused on improving primary education quality to curb wastage and stagnation.",
            "• Wardha Scheme of Basic Education / Nai Talim 1937: Formulated under Mahatma Gandhi (Zakir Hussain Committee); recommended free compulsory mother-tongue education centered around productive manual crafts.",
            "• Sargent Plan 1944: Post-War Educational Development memorandum recommending universal free education within 40 years."
          ]
        },
        {
          title: "Post-Independence Education Commissions",
          points: [
            "• Radhakrishnan Commission (1948–49): University Education Commission; recommended setting up the University Grants Commission (UGC) to oversee university standards.",
            "• Mudaliar Commission (1952–53): Secondary Education Commission; recommended multipurpose secondary schools and diversified technical streams.",
            "• Kothari Commission (1964–66): Titled 'Education and National Development'; recommended standardized 10+2+3 pattern, investing 6% of GDP in education, Common School System, and work experience.",
            "• National Policy on Education (NPE 1968): First national policy based on Kothari Commission.",
            "• National Policy on Education (NPE 1986): Emphasized equal opportunities, establishment of Navodaya Vidyalayas, and distance education (modified in 1992 Programme of Action under Acharya Ramamurti).",
            "• National Knowledge Commission (NKC 2005–2009): Chaired by Sam Pitroda; recommended creating 1,500 universities and an Independent Regulatory Authority for Higher Education.",
            "• Yashpal Committee (2009): Titled 'Renovation and Rejuvenation of Higher Education'; recommended abolishing existing multiple regulatory bodies (UGC, AICTE) into a single apex body."
          ]
        },
        {
          title: "National Education Policy (NEP) & Regulatory Structure",
          points: [
            "• Curricular Reform: Replaces the 10+2 structure with 5+3+3+4 model (Foundational 5 yrs, Preparatory 3 yrs, Middle 3 yrs, Secondary 4 yrs).",
            "• Higher Education Target: 50% Gross Enrolment Ratio (GER) in higher education by 2035.",
            "• HECI (Higher Education Commission of India) 4 Independent Verticals:",
            "  1. NHERC (National Higher Education Regulatory Council): Single common regulator for all higher education (excluding medical and legal).",
            "  2. NAC (National Accreditation Council): Apex accrediting body overseeing institutional accreditation.",
            "  3. HEGC (Higher Education Grants Council): Transparent funding and scholarship allocation body.",
            "  4. GEC (General Education Council): Formulates expected learning attributes through National Higher Education Qualifications Framework (NHEQF).",
            "• Academic Bank of Credits (ABC): Digitally stores academic credits earned from recognized higher education institutions, facilitating credit transfer and multiple entry and exit points.",
            "• Multiple Entry / Exit Framework: Certificate after 1 year, Undergraduate Diploma after 2 years, Bachelor's Degree after 3 years, Bachelor's with Research after 4 years.",
            "• MERUs: Multidisciplinary Education and Research Universities to be established at par with IITs and IIMs.",
            "• Apex Regulatory Bodies: UGC (statutory body established in 1956), AICTE (statutory in 1987), NAAC (National Assessment and Accreditation Council, HQ Bengaluru), NIRF (National Institutional Ranking Framework across teaching, research, graduation outcomes)."
          ]
        }
      ],
      shortTricks: [
        {
          title: "HECI 4 Verticals Mnemonic",
          mnemonic: "R-A-F-S: 'Rules, Accreditation, Funding, Standards' (NHERC - NAC - HEGC - GEC)",
          explanation: "NHERC = Regulation | NAC = Accreditation | HEGC = Funding | GEC = Standards.",
          proTip: "Medical and legal education are strictly outside the jurisdiction of HECI."
        },
        {
          title: "Commissions Chronology Mnemonic",
          mnemonic: "R-M-K-N-P-Y-NEP: 'Radha Mudaliar Kothari Ne Sam Yash Ko Padhaaya'",
          explanation: "Radhakrishnan (1948) → Mudaliar (1952) → Kothari (1964) → NPE (1986) → Pitroda NKC (2005) → Yashpal (2009) → NEP.",
          proTip: "Kothari Commission is universally remembered for 10+2+3 structure and 6% of GDP allocation."
        },
        {
          title: "Ancient Universities Specialization Peg",
          mnemonic: "Taxila = Chanakya/Medicine | Nalanda = Mahayana | Vikramashila = Tantra (Dharmapala) | Vallabhi = Hinayana",
          explanation: "Nalanda library was Dharmaganja. Taxila had no formal examination system.",
          proTip: "If Tantric Buddhism or Atisha Dipankara is mentioned, the answer is Vikramashila."
        }
      ]
    }
  ]
};
