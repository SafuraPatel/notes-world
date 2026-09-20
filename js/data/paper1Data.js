/**
 * PAPER 1 DATASET - Notes World
 * General Paper on Teaching & Research Aptitude
 * Exhaustive Official Syllabus Coverage (152 In-Depth Theory Topics + 55 Repeated Tricks across All 10 Units).
 * Formatted strictly as pure bullet and point notes.
 */

export const paper1Data = {
  "paperTitle": "Paper 1: General Paper on Teaching & Research Aptitude",
  "paperCode": "GENERAL-00",
  "units": [
    {
      "id": "p1-u1",
      "unitNumber": 1,
      "name": "Teaching Aptitude",
      "icon": "🎓",
      "theoryNotes": [
        {
          "title": "Concept, Nature, Objectives & Basic Requirements of Teaching",
          "points": [
            "• Nature of Teaching: Both an art (requiring creative expression, empathy, interpersonal dynamic) and a science (systematic instructional design, pedagogical theories, empirical assessment).",
            "• Triadic Relation of Teaching (John Dewey): Involves Teacher (Independent Variable), Learner (Dependent Variable), and Curriculum / Subject Matter (Intervening Variable).",
            "• Bipolar Process (John Adams): Interaction between Educator and Educand.",
            "• Objectives of Teaching (Bloom & Gagne): Cognitive development (knowledge acquisition), Affective development (values, attitudes), Psychomotor development (motor skills, dexterity).",
            "• Basic Requirements of Teaching: Mastery of subject matter, pedagogical competence, active learner participation, conducive classroom environment, and continuous feedback loops."
          ]
        },
        {
          "title": "Levels of Teaching: Memory, Understanding & Reflective Levels",
          "points": [
            "• Memory Level (Herbart): Thoughtless stage emphasizing rote memorization, stimulus-response conditioning, factual recall, and retention.",
            "• Herbartian 5 Formal Steps: 1. Preparation, 2. Presentation, 3. Association / Comparison, 4. Generalization, 5. Application.",
            "• Understanding Level (Morrison): Thoughtful stage emphasizing comprehension of relationships, grasping generalized rules, unit mastery, and explaining concepts with examples.",
            "• Morrison's 5 Teaching Stages: 1. Exploration, 2. Presentation, 3. Assimilation, 4. Organization, 5. Recitation.",
            "• Reflective Level (Hunt): Highest introspective and thoughtful level emphasizing problem-raising, hypothesis formulation, student-centred critical inquiry, and original creative problem-solving."
          ],
          "diagram": {
            "type": "stack",
            "title": "Tri-Level Teaching Hierarchy (Herbart → Morrison → Hunt)",
            "badge": "Cognitive Depth",
            "layers": [
              { "level": "Level 3", "badge": "Reflective (Hunt)", "title": "Highest Introspective", "desc": "Problem-raising & creative problem-solving; student-centred inquiry", "accent": "#8b5cf6" },
              { "level": "Level 2", "badge": "Understanding (Morrison)", "title": "Thoughtful Comprehension", "desc": "Mastery of concepts, relations & generalized rules; explanation with examples", "accent": "#06b6d4" },
              { "level": "Level 1", "badge": "Memory (Herbart)", "title": "Thoughtless Conditioning", "desc": "Rote recall, stimulus-response conditioning & factual retention", "accent": "#10b981" }
            ]
          }
        },
        {
          "title": "Major Educational & Learning Theories (Piaget, Vygotsky, Bruner, Ausubel, Gagne)",
          "points": [
            "• Jean Piaget's Cognitive Stages: 1. Sensorimotor (0-2 yrs: Object permanence), 2. Preoperational (2-7 yrs: Egocentrism, symbolic thought, animism), 3. Concrete Operational (7-11 yrs: Conservation, reversibility, logical grouping), 4. Formal Operational (11+ yrs: Abstract, hypothetical-deductive reasoning).",
            "• Lev Vygotsky's Socio-Cultural Theory: Zone of Proximal Development (ZPD - gap between actual performance and potential performance with guidance), Scaffolding (temporary instructional support by More Knowledgeable Other MKO), Private Speech.",
            "• Jerome Bruner's Discovery Learning: Spiral curriculum, 3 modes of representation: Enactive (action-based) → Iconic (image-based) → Symbolic (language/symbol-based).",
            "• David Ausubel's Meaningful Verbal Learning: Advance Organizers (conceptual bridges connecting existing schema with new learning), Subsumption theory.",
            "• Robert Gagne's 9 Events of Instruction: 1. Gain attention, 2. Inform objectives, 3. Stimulate recall, 4. Present stimulus, 5. Provide learning guidance, 6. Elicit performance, 7. Provide feedback, 8. Assess performance, 9. Enhance retention and transfer."
          ]
        },
        {
          "title": "Dale's Cone of Experience & Instructional Media",
          "points": [
            "• Edgar Dale's Cone of Experience (Concrete to Abstract): Direct Purposeful Experiences (Base - 90% retention) → Contrived Experiences (Models, Mockups) → Dramatized Experiences → Demonstrations → Field Trips → Exhibits → Motion Pictures (Video) → Audio Recordings / Still Photos → Visual Symbols (Charts/Maps) → Verbal Symbols (Text/Words - Pinnacle - 10% retention).",
            "• Core Implication: Active doing and multi-sensory experiences yield vastly higher learning retention than passive reading or listening."
          ],
          "diagram": {
            "type": "stack",
            "title": "Dale's Cone of Experience (Retention Gradient)",
            "badge": "Pinnacle to Base",
            "layers": [
              { "level": "10% Retention", "badge": "Abstract Peak", "title": "Verbal Symbols", "desc": "Reading text & listening to words", "accent": "#ef4444" },
              { "level": "30% Retention", "badge": "Visual", "title": "Visual Symbols & Charts", "desc": "Looking at maps, diagrams, photos", "accent": "#f59e0b" },
              { "level": "50% Retention", "badge": "Audio-Visual", "title": "Demonstrations & Video", "desc": "Watching experiments & motion pictures", "accent": "#3b82f6" },
              { "level": "70% Retention", "badge": "Participatory", "title": "Simulations & Drama", "desc": "Role play, hands-on workshops", "accent": "#06b6d4" },
              { "level": "90% Retention", "badge": "Concrete Base", "title": "Direct Purposeful Experience", "desc": "Active physical doing & real-life execution", "accent": "#10b981" }
            ]
          }
        },
        {
          "title": "Bloom's Revised Taxonomy of Educational Objectives",
          "points": [
            "• Cognitive Domain Hierarchy (Low to High): Remember → Understand → Apply → Analyze → Evaluate → Create.",
            "• Anderson & Krathwohl Revision (2001): Replaced static nouns with active verbs; swapped top two levels by moving 'Creating' to the apex above 'Evaluating'.",
            "• Knowledge Dimensions (4 Types): Factual Knowledge (terminology, specific details), Conceptual Knowledge (classifications, theories, principles), Procedural Knowledge (skills, algorithms, techniques), Metacognitive Knowledge (self-awareness of one's own cognition)."
          ],
          "diagram": {
            "type": "stack",
            "title": "Bloom's Revised Taxonomy (Anderson & Krathwohl 2001)",
            "badge": "Apex to Foundation",
            "layers": [
              { "level": "Apex", "badge": "Create", "title": "Highest Cognitive Level", "desc": "Produce new or original work; design, assemble, construct", "accent": "#ec4899" },
              { "level": "Level 5", "badge": "Evaluate", "title": "Justify Stand / Stance", "desc": "Appraise, argue, defend, judge, critique", "accent": "#8b5cf6" },
              { "level": "Level 4", "badge": "Analyze", "title": "Draw Connections", "desc": "Differentiate, organize, relate, compare, contrast", "accent": "#3b82f6" },
              { "level": "Level 3", "badge": "Apply", "title": "Use in New Contexts", "desc": "Execute, implement, solve, use, demonstrate", "accent": "#06b6d4" },
              { "level": "Level 2", "badge": "Understand", "title": "Explain Ideas & Concepts", "desc": "Classify, describe, discuss, explain, identify", "accent": "#10b981" },
              { "level": "Level 1", "badge": "Remember", "title": "Recall Facts & Basic Concepts", "desc": "Define, duplicate, list, memorize, repeat, state", "accent": "#f59e0b" }
            ]
          }
        },
        {
          "title": "Affective & Psychomotor Domains of Educational Objectives",
          "points": [
            "• Affective Domain (Krathwohl, Bloom, Masia): Hierarchy of internalization of values: Receiving (willingness to attend) → Responding (active participation) → Valuing (attaching worth) → Organizing (resolving conflicts between values) → Characterizing by value / Value Complex (behavior consistently guided by philosophy of life).",
            "• Psychomotor Domain (R.H. Dave): Imitation (observing and copying) → Manipulation (performing from memory/instructions) → Precision (performing accurately and independently) → Articulation (coordinating multiple motor skills smoothly) → Naturalization (automatic, effortless high-speed execution)."
          ]
        },
        {
          "title": "Learner Characteristics: Adolescent vs Adult Learners (Pedagogy vs Andragogy)",
          "points": [
            "• Malcolm Knowles' Andragogy (6 Core Assumptions): 1. Need to know (adults must know why they need to learn), 2. Self-concept (autonomous, self-directed), 3. Prior experience (rich experiential reservoir), 4. Readiness to learn (oriented to developmental tasks of social role), 5. Orientation to learning (problem-centred rather than subject-centred), 6. Motivation (internal drivers like self-esteem, job satisfaction).",
            "• Pedagogy: Teacher-directed child learning, subject-centred, externally motivated by grades, teacher decides what and how to learn.",
            "• Adolescent Learners (12-18 years): Academic (transition to abstract conceptualization), Social (peer group conformity, desire for independence), Emotional (identity crisis vs role confusion - Erikson, mood volatility), Cognitive (personal fable, imaginary audience - Elkind)."
          ]
        },
        {
          "title": "Individual Differences, Cognitive Styles & Learning Styles (VARK, Kolb)",
          "points": [
            "• VARK Model (Neil Fleming): Visual (diagrams, charts), Auditory (discussions, lectures), Reading/Writing (notes, essays), Kinesthetic (hands-on, roleplay, laboratory experiments).",
            "• Kolb's Experiential Learning Cycle: Concrete Experience (CE) → Reflective Observation (RO) → Abstract Conceptualization (AC) → Active Experimentation (AE).",
            "• Kolb's 4 Learning Styles: Diverger (CE + RO: imaginative, brainstorming), Assimilator (RO + AC: theoretical models, inductive reasoning), Converger (AC + AE: practical problem solving), Accommodator (AE + CE: hands-on action, risk-taker).",
            "• Field Dependent vs Field Independent: Field Dependent learners perceive situations holistically, rely heavily on social context and external cues; Field Independent learners perceive individual parts analytically, excel in abstract problem-solving and self-guided tasks."
          ]
        },
        {
          "title": "Factors Affecting Teaching Related to Teacher, Learner & Environment",
          "points": [
            "• Teacher Factors: Subject content knowledge, pedagogical knowledge, communication efficacy, emotional intelligence, enthusiasm, teacher expectancy (Pygmalion Effect - Rosenthal & Jacobson: high teacher expectations lead to improved student performance).",
            "• Learner Factors: Prior knowledge, intrinsic motivation, self-efficacy (Bandura), cognitive developmental stage, health and nutritional status.",
            "• Support Material & Institutional Climate: Availability of instructional resources, modern laboratory equipment, student-teacher ratio, administrative leadership, noise and ergonomic conditions."
          ]
        },
        {
          "title": "Teacher-Centred Methods of Teaching in Higher Learning",
          "points": [
            "• Lecture Method: Oldest, most traditional method. Direct expository instruction; highly cost-effective for large lecture halls; conveys massive curriculum content in limited time. Limitations: Passive student role, neglects individual differences, poor retention.",
            "• Demonstration Method: 'Showing and doing'. Combines theoretical explanation with practical visual demonstration. Highly effective for technical and laboratory skills.",
            "• Team Teaching: Cooperative arrangement where two or more teachers jointly plan, instruct, and evaluate a single group of students, pooling specialized expertise.",
            "• TV / Video Presentation: Standardized broadcasting of expert lectures; lacks real-time interactive feedback."
          ]
        },
        {
          "title": "Learner-Centred & Collaborative Methods of Teaching",
          "points": [
            "• Heuristic Method (H.E. Armstrong): Derived from Greek 'Heurisco' ('I find out'). Student placed in the position of an independent original discoverer; minimal teacher intervention.",
            "• Project Method (William Kilpatrick - follower of Dewey): Purposeful, problem-solving activity carried out to completion in a natural, social environment. Steps: Providing situation → Choosing & purposing → Planning → Executing → Evaluating → Recording.",
            "• Dalton Plan (Helen Parkhurst): Abolishes fixed class schedules and bells; students sign monthly learning contracts and work independently in subject laboratories at their own pace.",
            "• Flipped Classroom: Inverts traditional teaching: students absorb instructional video content/readings at home before class; class time is dedicated entirely to active problem-solving, debates, and collaborative inquiries.",
            "• Brainstorming (Alex Osborn): Group creativity technique. 4 Golden Rules: 1. Defer criticism/judgment, 2. Encourage wild ideas, 3. Quantity over quality, 4. Combine and improve ideas."
          ]
        },
        {
          "title": "Micro-Teaching & Flanders Interaction Analysis Categories (FIAC)",
          "points": [
            "• Micro-Teaching (Dwight Allen, Stanford 1963): Scaled-down teacher training encounter: reduced class size (5-10 students), reduced lesson length (5-10 minutes), focus on one specific teaching skill (reinforcement, stimulus variation, questioning).",
            "• NCERT Micro-Teaching Cycle (36 Minutes Total): Plan → Teach (6 min) → Feedback (6 min) → Re-Plan (12 min) → Re-Teach (6 min) → Re-Feedback (6 min).",
            "• Flanders Interaction Analysis Categories (FIAC): Quantitative observational tool to measure classroom verbal climate through 10 Categories:",
            "  - Teacher Talk (Indirect Influence): 1. Accepts feelings, 2. Praises/encourages, 3. Accepts/uses student ideas, 4. Asks questions.",
            "  - Teacher Talk (Direct Influence): 5. Lecturing, 6. Giving directions, 7. Criticizing or justifying authority.",
            "  - Student Talk: 8. Student talk - response, 9. Student talk - initiation.",
            "  - Silence: 10. Silence or confusion."
          ]
        },
        {
          "title": "Teaching Support Systems: Traditional, Modern & ICT-Based",
          "points": [
            "• Traditional Non-Projected Media: Chalkboard, whiteboards, flannel boards, charts, posters, 3D globes and physical specimens.",
            "• Modern Projected Aids: Overhead Projector (OHP - uses transparencies), 35mm slide projector, Episcope / Epidiascope (opaque projector), Document cameras.",
            "• ICT-Based Digital Tools: Interactive Flat Panels (IFP), Learning Management Systems (LMS: Moodle, Canvas, Blackboard, Google Classroom), Virtual Laboratories (e-Sim, PhET simulations), Digital mind mapping (Coggle, MindMeister), Gamified assessment tools (Kahoot, Quizizz, Mentimeter)."
          ]
        },
        {
          "title": "SWAYAM, Swayam Prabha & MOOC Architecture in India",
          "points": [
            "• Massive Open Online Courses (MOOCs): Web-based courses designed for unlimited participation and open access via internet.",
            "• SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds): Indigenous Indian MOOC platform built on 3 Cardinal Principles: Access, Equity, Quality.",
            "• SWAYAM 4 Quadrants: Quadrant 1 = E-Tutorial (video lectures by top faculty); Quadrant 2 = E-Content (downloadable reading material, e-books); Quadrant 3 = Self-Assessment (quizzes, mock tests); Quadrant 4 = Discussion Forum (clearing doubts).",
            "• SWAYAM 9 National Coordinators: AICTE (self-paced/international courses), NPTEL (engineering), UGC (non-technical post-graduation), CEC (undergraduate), NCERT (school education classes 9-10), NIOS (out-of-school classes 9-12), IGNOU (out-of-school/diplomas), IIM Bangalore (management), NITTTR (teacher training).",
            "• Swayam Prabha: Group of 34+ DTH educational channels telecasting 24x7 high-quality curriculum programs using GSAT-15 satellite. Uplinked from BISAG-N Gandhinagar; portal maintained by INFLIBNET."
          ]
        },
        {
          "title": "Evaluation Systems: Types, NRT vs CRT & Choice Based Credit System (CBCS)",
          "points": [
            "• Placement Evaluation: Pre-instructional entry behavior assessment to determine existing student aptitude and appropriate class/stream placement.",
            "• Formative Evaluation (Scriven 1967): Ongoing diagnostic assessment CONDUCTED DURING the instructional process to provide immediate corrective feed-forward (quizzes, homework, class questions). Non-punitive.",
            "• Diagnostic Evaluation: Pinpoints persistent root causes of learning breakdowns that fail to respond to standard formative feedback, designing targeted remedial instruction.",
            "• Summative Evaluation: Terminal assessment at the END of course/term to assign final grades, certify competence, and judge institutional program effectiveness.",
            "• Norm-Referenced Testing (NRT): Compares student performance against a peer cohort (reported in percentiles/z-scores, grading on a bell curve).",
            "• Criterion-Referenced Testing (CRT - Glaser 1963): Evaluates student performance against fixed predetermined absolute mastery standards without peer comparison.",
            "• Choice Based Credit System (CBCS): Core Courses (compulsory) + Elective Courses (Discipline Specific & Generic) + Foundation Courses (Ability & Skill Enhancement).",
            "• 10-Point CBCS Grading Scale: O (Outstanding, 10), A+ (Excellent, 9), A (Very Good, 8), B+ (Good, 7), B (Above Average, 6), C (Average, 5), P (Pass, 4), F (Fail, 0), Ab (Absent, 0)."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Levels of Teaching Proponents",
          "mnemonic": "HM - UM - RH: 'Heavy Memory, Understood Morrison, Reflected on Hunt'",
          "explanation": "Herbart = Memory | Morrison = Understanding | Hunt = Reflective.",
          "proTip": "If the question asks who introduced problem-raising and critical inquiry, choose Hunt."
        },
        {
          "title": "Bloom's Revised Taxonomy Hierarchy",
          "mnemonic": "RUAAEC: 'Ravi Understood All Answers Easily & Correctly'",
          "explanation": "Remember → Understand → Apply → Analyze → Evaluate → Create.",
          "proTip": "The 2001 Anderson-Krathwohl revision places CREATE at the top, replacing Evaluation."
        },
        {
          "title": "SWAYAM 4 Quadrants Mnemonic",
          "mnemonic": "ETAD: 'Every Teacher Answers Doubts'",
          "explanation": "E-Tutorial | Text Content | Assessment | Discussion Forum.",
          "proTip": "Physical classroom attendance or offline lab visits are never quadrants of SWAYAM."
        },
        {
          "title": "Evaluation Types Chronology Peg",
          "mnemonic": "P - F - D - S: 'Pre-flight, Flight, Diagnosis, Safe-landing'",
          "explanation": "Placement (Before) → Formative (During) → Diagnostic (Remedial) → Summative (End/Grade).",
          "proTip": "If question mentions 'feedback during instruction to improve learning', answer is Formative."
        },
        {
          "title": "Micro-teaching 6 Steps Cycle (36 Minutes)",
          "mnemonic": "PTF - RPR: 'Plan, Teach, Feedback → Re-plan, Re-teach, Re-feedback'",
          "explanation": "Teach (6m) + Feedback (6m) + Re-plan (12m) + Re-teach (6m) + Re-feedback (6m) = 36 min.",
          "proTip": "Re-plan gets double time (12 minutes); all other steps are 6 minutes each."
        },
        {
          "title": "Dale's Cone Base vs Apex Retention",
          "mnemonic": "Base = DOING (90%) | Apex = READING (10%)",
          "explanation": "Concrete experiences at the bottom give highest retention; abstract symbols at top give least.",
          "proTip": "Direct purposeful experience provides the strongest learning foundation."
        }
      ]
    },
    {
      "id": "p1-u2",
      "unitNumber": 2,
      "name": "Research Aptitude",
      "icon": "🔬",
      "theoryNotes": [
        {
          "title": "Meaning, Nature, Objectives & Characteristics of Scientific Research",
          "points": [
            "• Meaning of Research: Systematic, controlled, empirical, critical inquiry into hypothetical propositions about presumed relationships among natural phenomena.",
            "• Characteristics of Research: Empirical (grounded in direct observable data), Systematic (procedural order), Controlled (minimizing extraneous variable influence), Replicable / Verifiable (other scholars can reproduce findings), Logical (guided by inductive and deductive rules), Objective (free from investigator bias).",
            "• Deductive Approach: Top-down (Theory → Hypothesis → Observation → Confirmation). Associated with quantitative research.",
            "• Inductive Approach: Bottom-up (Observation → Pattern → Tentative Hypothesis → Theory). Associated with qualitative research."
          ]
        },
        {
          "title": "Positivism vs Post-Positivism Epistemological Paradigms",
          "points": [
            "• Positivism (Auguste Comte): Quantitative, deductive reasoning, value-free, objective empiricism, single verifiable reality governed by immutable natural laws.",
            "• Post-Positivism (Constructivist / Critical Realism): Qualitative, inductive reasoning, value-mediated, subjective interpretation, multiple constructed realities, researcher reflexivity.",
            "• Epistemology vs Ontology vs Axiology: Ontology = What is the nature of reality? Epistemology = How do we acquire valid knowledge about reality? Axiology = What values and ethics guide the inquiry?"
          ]
        },
        {
          "title": "Fundamental, Applied & Action Research (Kurt Lewin)",
          "points": [
            "• Fundamental / Pure / Basic Research: Aims at theory formulation, discovery of universal principles, and broad expansion of knowledge without immediate practical application.",
            "• Applied Research: Utilizes theoretical frameworks to solve concrete, practical societal, industrial, health, or educational problems.",
            "• Action Research (Kurt Lewin 1946): Practitioner-led inquiry aimed at improving educational practice within immediate local classrooms or institutions.",
            "• Cyclical Nature: Continuous spiral of 4 Steps: Plan → Act → Observe → Reflect. Does not aim at broad national generalizability."
          ]
        },
        {
          "title": "Qualitative Research Methodologies (Grounded Theory, Ethnography, Phenomenology)",
          "points": [
            "• Grounded Theory (Glaser & Strauss): Inductive generation of a theoretical model originating directly from empirical field data. Employs Theoretical Sampling, Constant Comparative Method, and Open/Axial/Selective Coding.",
            "• Phenomenology (Edmund Husserl): Studies the lived experiences of individuals regarding a specific phenomenon. Uses 'Bracketing' (Epoché - setting aside researcher preconceptions).",
            "• Ethnography: Immersive in-depth study of the shared culture, beliefs, language, and rituals of a social group. Uses Participant Observation and Field Notes.",
            "• Case Study: Exhaustive, multi-faceted investigation of a single bounded system (individual, institution, event) using multiple sources of evidence.",
            "• Narrative Research: Explores life stories and chronological oral narratives of individuals."
          ]
        },
        {
          "title": "Quantitative & Experimental Research Designs",
          "points": [
            "• Experimental Research (True Experiment): 3 Mandatory Pillars: 1. Manipulation of Independent Variable (IV), 2. Control of Extraneous Variables, 3. Random Assignment (Randomization).",
            "• Pre-Experimental Designs: One-shot case study, One-group pretest-posttest design (no control group, vulnerable to history/maturation).",
            "• Quasi-Experimental Designs: Manipulates IV but lacks random assignment of subjects to groups (e.g., Non-equivalent control group, Time-series design).",
            "• True Experimental Designs: Pretest-Posttest Control Group design, Posttest-Only Control Group design, Solomon Four-Group design (controls for pretest sensitization effect).",
            "• Factorial Designs: Evaluates simultaneous main effects and interaction effects of two or more independent variables (e.g., 2 × 2 Factorial Design)."
          ]
        },
        {
          "title": "Threats to Internal & External Validity (Campbell & Stanley)",
          "points": [
            "• Internal Validity: Extent to which changes in the Dependent Variable (DV) can be definitively attributed to the Independent Variable (IV) rather than extraneous confounds.",
            "• Threats to Internal Validity: History (unplanned external events during study), Maturation (biological/psychological aging of subjects), Testing effect (practice gained from taking pretest), Instrumentation (decay or calibration change in measurement tool), Statistical Regression to the mean, Selection bias (non-equivalent groups), Experimental Mortality / Attrition (differential drop-out).",
            "• External Validity: Extent to which research findings can be generalized across different populations, settings, and times. Threats: Hawthorne Effect (subjects alter behavior because they know they are being observed), Pretest Sensitization, Novelty effects."
          ]
        },
        {
          "title": "Descriptive, Ex-Post Facto & Historical Research",
          "points": [
            "• Descriptive Research: Describes existing phenomena, characteristics, and frequencies without manipulating any variable. Includes Surveys, Cross-Sectional and Longitudinal Studies.",
            "• Ex-Post Facto / Causal-Comparative Research: Investigates possible cause-and-effect relationships by observing an existing condition and searching backward in time for plausible causal factors. The independent variable has ALREADY occurred naturally; researcher CANNOT manipulate it (e.g., studying impact of earthquake on childhood trauma).",
            "• Historical Research: Critical investigation of past events using primary sources (eyewitness accounts, original manuscripts) and secondary sources. Uses External Criticism (authenticity of document) and Internal Criticism (credibility of content)."
          ]
        },
        {
          "title": "8 Sequential Steps of the Research Process",
          "points": [
            "• Step 1: Identification & Formulation of the Research Problem.",
            "• Step 2: Extensive Literature Review (identifying research gaps and theoretical framework).",
            "• Step 3: Formulation of Hypotheses or Research Questions.",
            "• Step 4: Developing the Research Design (blue-print of sampling, variables, methodology).",
            "• Step 5: Sampling Design (defining target population and sample selection).",
            "• Step 6: Data Collection (administering questionnaires, interviews, tests, observations).",
            "• Step 7: Data Processing, Analysis & Hypothesis Testing (statistical evaluation, coding).",
            "• Step 8: Interpretation, Generalization & Preparation of Research Report / Thesis."
          ],
          "diagram": {
            "type": "flow",
            "title": "8-Step Research Process Pipeline",
            "steps": [
              { "title": "1. Problem", "desc": "Identify & formulate research question" },
              { "title": "2. Literature", "desc": "Review prior work & find gaps" },
              { "title": "3. Hypothesis", "desc": "Formulate testable H0 and H1" },
              { "title": "4. Design", "desc": "Develop methodology blueprint" },
              { "title": "5. Sampling", "desc": "Target population & sample frame" },
              { "title": "6. Data Collection", "desc": "Surveys, tests, observations" },
              { "title": "7. Analysis", "desc": "Statistical testing & hypothesis evaluation" },
              { "title": "8. Report", "desc": "Interpretation, thesis & conclusion" }
            ]
          }
        },
        {
          "title": "Hypothesis Formulation, Types & Testing Mechanics",
          "points": [
            "• Directional Hypothesis: Predicts direction of effect ('Method A will produce significantly higher scores than Method B'). Tested using One-Tailed Test.",
            "• Non-Directional Hypothesis: Predicts difference without stating direction. Tested using Two-Tailed Test.",
            "• Null Hypothesis (H0): States no significant difference or relationship exists between variables (observed difference is due to random sampling fluctuation).",
            "• Alternative Hypothesis (H1): Research hypothesis stating significant difference/relationship exists.",
            "• Testing Principle: In inferential statistics, we NEVER prove the alternative hypothesis directly; we reject or fail to reject the NULL hypothesis."
          ]
        },
        {
          "title": "Type I & Type II Statistical Errors & Power of Test",
          "points": [
            "• Type I Error (Alpha Error, α): Rejecting a TRUE Null Hypothesis (False Positive). Alpha is the Level of Significance (commonly set at 0.05 or 0.01).",
            "• Type II Error (Beta Error, β): Failing to reject (Accepting) a FALSE Null Hypothesis (False Negative).",
            "• Power of a Test (1 - β): Probability of correctly rejecting a false null hypothesis. Power increases as sample size increases, effect size increases, or α is relaxed.",
            "• Trade-Off: Decreasing α (e.g. from 0.05 to 0.01) automatically increases β (Type II error risk)."
          ]
        },
        {
          "title": "Parametric vs Non-Parametric Statistical Tests",
          "points": [
            "• Parametric Tests: Require normal distribution of population data, continuous interval/ratio scales, and homogeneity of variance.",
            "  - Student's t-test: Compares means of two groups (Independent t-test) or same group twice (Paired t-test).",
            "  - Z-test: Compares two group means when sample size is large (N > 30) and population variance is known.",
            "  - ANOVA (F-test): Compares means of three or more groups simultaneously, partitioning variance into between-group and within-group variance. ANCOVA controls for confounding covariates.",
            "• Non-Parametric Tests (Distribution-Free): For ordinal or nominal data, skewed distributions.",
            "  - Chi-Square (χ²) Test: Test of Goodness of Fit and Test of Independence of two categorical variables.",
            "  - Mann-Whitney U Test: Non-parametric alternative to independent two-sample t-test.",
            "  - Wilcoxon Signed-Rank Test: Non-parametric alternative to paired t-test.",
            "  - Kruskal-Wallis Test: Non-parametric alternative to one-way ANOVA."
          ]
        },
        {
          "title": "Sampling Techniques: Probability vs Non-Probability Sampling",
          "points": [
            "• Probability Sampling (Every population element has known, non-zero chance of selection; minimizes bias, enables statistical generalization):",
            "  - Simple Random Sampling: Lottery system or random number generator. Equal probability.",
            "  - Systematic Sampling: Selecting every kth element from sampling frame (k = N / n) with random start.",
            "  - Stratified Random Sampling: Population partitioned into mutually exclusive homogeneous strata (e.g., gender, income); random samples drawn proportionally or disproportionately from each stratum.",
            "  - Cluster Sampling: Population divided into heterogeneous natural clusters (schools, cities); entire clusters are randomly selected and all members surveyed.",
            "• Non-Probability Sampling (Selection based on convenience or judgment; non-generalizable):",
            "  - Convenience / Accidental Sampling: Easily accessible subjects.",
            "  - Purposive / Judgmental Sampling: Selected intentionally based on expert judgment of researcher.",
            "  - Quota Sampling: Stratified non-random selection filling predetermined demographic quotas.",
            "  - Snowball Sampling: Referral chain sampling where initial subjects recruit future participants; ideal for rare/hidden populations (drug users, rare disease patients)."
          ]
        },
        {
          "title": "Thesis Structure, Dissertation Formatting & IMRAD Model",
          "points": [
            "• Preliminary Pages: Title Page, Certificate of Supervisor, Declaration, Acknowledgments, Table of Contents, List of Tables, List of Figures, Abstract.",
            "• Main Body (IMRAD Model):",
            "  - Introduction: Background, problem statement, objectives, research questions/hypotheses, theoretical framework, significance, delimitations.",
            "  - Methods: Research design, population, sample size and sampling technique, instruments, validity/reliability, data collection procedures, statistical tools.",
            "  - Results: Presentation of analyzed data via tables and graphs without subjective speculation.",
            "  - And Discussion: Interpretation of findings, comparison with existing literature, implications, limitations, and future directions.",
            "• End Matter: References / Bibliography, Appendices (questionnaires, raw data), Index."
          ]
        },
        {
          "title": "Referencing Styles, Citation Standards & Citation Latin Abbreviations",
          "points": [
            "• APA 7th Edition (American Psychological Association): Author-Date format used in Social Sciences, Psychology, Education. E.g., (Smith, 2020). References: Author, A. A. (Year). Title of work. Publisher.",
            "• MLA 9th Edition (Modern Language Association): Author-Page format used in Humanities, Literature. E.g., (Smith 45).",
            "• Chicago Manual of Style: Two formats: Notes and Bibliography (History/Arts - uses footnotes/endnotes) and Author-Date (Sciences).",
            "• Vancouver Style: Numeric citation sequence format used in Medicine and Biomedical Sciences.",
            "• Latin Citation Abbreviations:",
            "  - Ibid. (Ibidem - 'in the same place'): Refers to the immediately preceding cited work on same page.",
            "  - Op. cit. (Opere citato - 'in the work cited'): Refers to an earlier cited work with intervening citations, used with author name and new page number.",
            "  - Loc. cit. (Loco citato - 'in the place cited'): Refers to the exact same page of an earlier cited work."
          ]
        },
        {
          "title": "Research Ethics, UGC Plagiarism Regulations 2018 & ICT Tools",
          "points": [
            "• Research Misconduct: Falsification (manipulating research materials or altering data), Fabrication (making up data/results), Plagiarism (appropriating another's ideas, processes, or words without credit).",
            "• UGC (Promotion of Academic Integrity and Prevention of Plagiarism in HEIs) Regulations 2018:",
            "  - Level 0 (Minor): Up to 10% similarity (No penalty).",
            "  - Level 1: 10% to 40% similarity (Student: submit revised script within 6 months; Faculty: withdraw manuscript).",
            "  - Level 2: 40% to 60% similarity (Student: debarred from submitting script for 1 year; Faculty: withdraw manuscript, deny 1 annual increment, barred from supervising PhD/MPhil for 2 years).",
            "  - Level 3: Above 60% similarity (Student: registration cancelled; Faculty: deny 2 increments, barred from supervising for 3 years).",
            "• Exclusions from Plagiarism: Quoted work with attribution, references, bibliography, generic terms, table of contents.",
            "• ICT Tools in Research: Data Analysis (SPSS, R, Python, SAS, STATA, NVivo, ATLAS.ti); Reference Management (Mendeley, Zotero, EndNote); Repositories: Shodhganga (theses), Shodhgangotri (synopses), ShodhShuddhi (PDS/Ouriginal)."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Action Research Spiral Mnemonic",
          "mnemonic": "PAOR: 'Plan → Act → Observe → Reflect'",
          "explanation": "Kurt Lewin's cyclical spiral of continuous improvement.",
          "proTip": "Action research is always localized to immediate classroom/institutional problem solving."
        },
        {
          "title": "Type I & Type II Errors Rule",
          "mnemonic": "R-T-A-F: 'Reject True = Type I | Accept False = Type II'",
          "explanation": "Type I (α): Rejecting a True Null. Type II (β): Accepting a False Null.",
          "proTip": "Reducing Type I error increases Type II error. Power of test = 1 - β."
        },
        {
          "title": "Probability Sampling Mnemonic",
          "mnemonic": "SSSC: 'Simple, Stratified, Systematic, Cluster'",
          "explanation": "All 4 use random selection. Any other sampling method is Non-Probability.",
          "proTip": "Snowball, Quota, Convenience, and Purposive are always Non-Probability."
        },
        {
          "title": "UGC Plagiarism 4 Levels Rule",
          "mnemonic": "0-10% (Safe) | 10-40% (6 Months) | 40-60% (1 Year) | >60% (Cancelled!)",
          "explanation": "Level 0: <=10%, Level 1: 10-40%, Level 2: 40-60%, Level 3: >60%.",
          "proTip": "Common references, bibliography, and table of contents are excluded from similarity checks."
        },
        {
          "title": "Shodhganga vs Shodhgangotri Mnemonic",
          "mnemonic": "Ganga = Finished River (Complete Theses) | Gangotri = Origin/Spring (Synopses/Proposals)",
          "explanation": "Shodhganga stores completed PhD theses; Shodhgangotri stores approved synopses.",
          "proTip": "Both are maintained by INFLIBNET Centre, Gandhinagar."
        },
        {
          "title": "Latin Citations Peg",
          "mnemonic": "Ibid = Immediately Above | Op.cit = Earlier Work (New Page) | Loc.cit = Earlier Work (Same Page)",
          "explanation": "Standard scholarly apparatus used in footnotes and endnotes.",
          "proTip": "Ibid cannot be used if another citation appears in between."
        }
      ]
    },
    {
      "id": "p1-u3",
      "unitNumber": 3,
      "name": "Reading Comprehension",
      "icon": "📖",
      "theoryNotes": [
        {
          "title": "Skimming vs Scanning & Speed-Reading Techniques",
          "points": [
            "• Skimming: Rapid preview reading of opening paragraphs, topic sentences, and concluding summaries to grasp the overall structure, central thesis, and main ideas.",
            "• Scanning: Targeted visual search through text to locate specific information bits (numbers, percentages, dates, names, specialized technical terms).",
            "• Subvocalization Reduction: Minimizing internal voice reading to double reading speed without sacrificing conceptual comprehension."
          ]
        },
        {
          "title": "Francis P. Robinson's SQ3R Reading Framework",
          "points": [
            "• 5 Phases of SQ3R: 1. Survey (scan headings, summaries), 2. Question (turn headings into questions), 3. Read (read actively to answer formulated questions), 4. Recite (summarize main ideas aloud or in notes from memory), 5. Review (periodic revision to consolidate retention).",
            "• Application in NET/SET: Reading question stems before the passage embodies the 'Question' stage."
          ]
        },
        {
          "title": "Question Typologies in UGC NET Comprehension",
          "points": [
            "• Direct Factual Questions: Answers explicitly stated in passage text; requires scanning and keyword matching.",
            "• Inferential / Implicit Questions: Answers unstated directly; requires deductive inference based on author's underlying premises.",
            "• Central Theme & Main Idea: Requires holistic synthesis of the author's primary argument across the entire passage.",
            "• Vocabulary in Context: Deducing the exact contextual nuance of words rather than their dictionary definition."
          ]
        },
        {
          "title": "Author's Tone Spectrum & Attitude Identification",
          "points": [
            "• Objective / Neutral / Informative: Presents factual evidence without personal bias or emotional adjectives.",
            "• Analytical: Evaluates arguments, breaks down cause-and-effect mechanisms, weighs advantages and disadvantages.",
            "• Critical / Skeptical: Questions established assumptions, points out structural weaknesses, highlights contradictions.",
            "• Sarcastic / Satirical / Ironic: Uses mockery or ironic phrasing to expose flaws and absurdities.",
            "• Laudatory / Eulogistic: Highly praising, approving, and admiring.",
            "• Didactic: Instructive, moralizing, aiming to teach a moral lesson."
          ]
        },
        {
          "title": "Elimination of Distractors in Comprehension Passages",
          "points": [
            "• Rule 1: Eliminate Extreme Options containing absolute qualifiers ('Always, Never, Completely, Entirely, Solely, All').",
            "• Rule 2: Eliminate Out-of-Scope Options that may be factual truths in real life but are NOT mentioned or implied in the given passage text.",
            "• Rule 3: Eliminate Opposite Options that reverse cause and effect stated in the text."
          ]
        },
        {
          "title": "SQ3R Study Method & Systematic Text Engagement",
          "points": [
            "• Five-Step Strategy: Survey (skimming headers), Question (turning subheadings into queries), Read (focused search for answers), Recite (rephrasing core concepts), Review (retaining long-term memory).",
            "• Developed by: Francis Robinson (1946) to double comprehension speed while halving cognitive fatigue.",
            "• Exam Relevance: Tested in matching questions; remember the exact chronological sequence."
          ]
        },
        {
          "title": "Differentiating Factual Statements from Authorial Opinions",
          "points": [
            "• Fact Identification: Verifiable, empirical statements backed by statistics, documented dates, or objective evidence (e.g., 'The Act was enacted in 1986').",
            "• Opinion Markers: Subjective judgements, normative claims, value adjectives ('indispensable', 'catastrophic', 'superior', 'unjustified').",
            "• Trap Alert: Options presenting subjective author opinions as universal objective facts are classic distractor traps."
          ]
        },
        {
          "title": "Rhetorical Devices and Persuasive Techniques in Passages",
          "points": [
            "• Metaphor & Simile: Figurative comparisons conveying abstract conceptual analogies.",
            "• Hyperbole & Understatement: Deliberate exaggeration or minimization to emphasize emotional gravity.",
            "• Irony & Sarcasm: Stating the opposite of literal meaning to critique, mock, or highlight hypocrisy.",
            "• Anaphora & Parallelism: Repetition of sentence structures to establish rhythm and persuasive emphasis."
          ]
        },
        {
          "title": "Main Idea vs Supporting Details vs Tangential Evidence",
          "points": [
            "• Central Thesis: The umbrella claim uniting all paragraphs; usually stated in introductory or concluding sentences.",
            "• Supporting Evidence: Statistical figures, case studies, citations, and historical anecdotes validating the main claim.",
            "• Narrow Trap: An option may be 100% factually true according to the passage but only represents a narrow supporting detail, NOT the main theme."
          ]
        },
        {
          "title": "Critical Evaluation of Logical Validity and Argumentative Flaws",
          "points": [
            "• Premise-Conclusion Link: Examining whether the author's stated premises logically compel their stated conclusion.",
            "• Hasty Generalization: Spotting when the author extrapolates an entire population trend from a tiny, non-representative sample.",
            "• False Dilemma in Text: Identifying binary black-and-white framing when multiple nuanced alternatives exist."
          ]
        },
        {
          "title": "Contextual Vocabulary & Polysyllabic Connotation Deduction",
          "points": [
            "• Contextual Definition: Determining the precise contextual nuance rather than common dictionary meaning.",
            "• Tone Indicators: Positive connotations ('innovative', 'visionary') vs negative connotations ('obsolete', 'reckless').",
            "• Root Word Clues: Using Latin and Greek prefixes/suffixes (e.g., 'mal-', 'bene-', 'anti-', 'pseudo-') to deduce unfamiliar vocabulary."
          ]
        },
        {
          "title": "Structural Organization Patterns of Comprehension Passages",
          "points": [
            "• Cause-and-Effect Pattern: Tracing antecedents to resulting social, economic, or environmental consequences.",
            "• Problem-Solution Matrix: Outlining an existing dilemma followed by evaluated policy interventions.",
            "• Compare-and-Contrast: Weighing merits and limitations of two competing philosophical or scientific paradigms.",
            "• Chronological/Sequential: Tracing historical evolution or developmental stages over time."
          ]
        },
        {
          "title": "Inference from Subtext and Implicit Authorial Assumptions",
          "points": [
            "• Unstated Assumptions: Foundational presuppositions the author must believe to be true for the argument to hold.",
            "• Implicit Conclusions: Logical consequences the author expects the reader to draw without explicitly stating them.",
            "• Gold Standard Test: If negating the assumption collapses the author's primary argument, the assumption is valid."
          ]
        },
        {
          "title": "Data-Rich & Technical Comprehension Passages Strategy",
          "points": [
            "• Table & Graph Anchoring: Correlating numeric figures in prose with accompanying data visualizations.",
            "• Unit of Measure Pitfall: Watching for shifts between percentages, absolute values, millions, and billions.",
            "• Selective Reading: Reading data-heavy paragraphs only when a specific question directs to them."
          ]
        },
        {
          "title": "Common Question Distractor Patterns in Comprehension",
          "points": [
            "• Too Broad Options: Options extending far beyond the scope and boundaries of the passage.",
            "• Too Narrow Options: Options capturing only one paragraph or a single sentence instead of the passage as a whole.",
            "• Opposite Claims: Options subtly inverting a negative statement or swapping cause and effect.",
            "• Out-of-Passage Truths: Statements that are true in general real-world knowledge but NOT mentioned or supported by the text."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Reverse Reading Method",
          "mnemonic": "Questions First, Passage Second!",
          "explanation": "Read the 5 question stems first and note unique keywords, then read the passage with targeted focus.",
          "proTip": "Never assume external facts; stick strictly to what is stated or directly implied in the passage."
        },
        {
          "title": "Eliminate Extreme Choices in RC",
          "mnemonic": "Avoid: 'Always, Never, Only, Completely, All' in Inference Questions!",
          "explanation": "Correct inference options usually use moderate qualifiers: 'may, can, tends to, generally'.",
          "proTip": "Extreme words almost always indicate wrong distractors in UGC NET."
        },
        {
          "title": "Tone Decider Peg",
          "mnemonic": "Facts Only = Objective | Pros & Cons = Analytical | Mocking = Sarcastic | Praising = Laudatory",
          "explanation": "Look at the adjectives used in the concluding paragraph to identify author's true attitude.",
          "proTip": "A passage explaining historical events neutrally has an informative/narrative tone."
        }
      ]
    },
    {
      "id": "p1-u4",
      "unitNumber": 4,
      "name": "Communication",
      "icon": "🗣️",
      "theoryNotes": [
        {
          "title": "Meaning, Nature, Process & Essential Elements of Communication",
          "points": [
            "• Meaning & Etymology: Derived from Latin 'Communis' (common) or 'Communicare' (to share / impart). Process of establishing commonness of mind and shared meaning.",
            "• 7 Core Elements of Communication: Sender / Encoder (originator of idea) → Message (physical product of encoded idea) → Channel / Medium (vehicle carrying message) → Receiver / Decoder (interprets message) → Feedback (response confirming receipt and comprehension) → Noise (interference degrading fidelity) → Context (physical, cultural, psychological setting).",
            "• Shannon-Weaver Noise Concept: Channel Noise (environmental/technical), Semantic Noise (unclear language/jargon), Psychological Noise (bias/emotions)."
          ]
        },
        {
          "title": "Types of Communication: Intrapersonal, Interpersonal, Group & Mass Communication",
          "points": [
            "• Intrapersonal Communication: Communication within oneself: meditation, internal dialogue, reflection, journaling, prayer, cognitive processing.",
            "• Interpersonal Communication: Dyadic (two-person) or small group face-to-face interaction; provides immediate bidirectional feedback; high degree of personal warmth and adaptability.",
            "• Group Communication: Interaction among members sharing common identity and purpose (committees, seminars, classrooms, team huddles). Roles: task-oriented, maintenance-oriented, self-serving.",
            "• Mass Communication: Dissemination of messages to large, heterogeneous, widely dispersed, anonymous audiences via technological mass media (TV, radio, newspapers, internet). Feedback is delayed, indirect, or mediated."
          ]
        },
        {
          "title": "Directional Flows of Organizational Communication & The Grapevine",
          "points": [
            "• Downward Communication: Flows from higher managerial levels to subordinates (policy directives, instructions, manuals, performance feedback). Risk: message distortion, authoritative climate.",
            "• Upward Communication: Flows from subordinates to management (grievance reports, suggestions, project status, whistleblowing). Risk: filtering by middle management fearing negative reactions.",
            "• Horizontal / Lateral Communication: Exchange between peers of the same hierarchical status or department (coordination, inter-departmental collaboration, problem-solving).",
            "• Diagonal / Crosswise Communication: Communication cutting across different work areas and hierarchical levels (e.g., project engineer directly conferring with finance manager). Promotes agility.",
            "• Informal Communication (Grapevine): Spontaneous, unofficial social network communication. 4 Grapevine Chains (Keith Davis): 1. Single Strand (A to B to C...), 2. Gossip Chain (one tells all), 3. Probability Chain (random sharing), 4. Cluster Chain (most common - one tells selected friends who tell other selected friends)."
          ]
        },
        {
          "title": "Non-Verbal Communication: Kinesics, Oculesics & Facial Expressions",
          "points": [
            "• Kinesics (Ray Birdwhistell): Study of body movements, gestures, posture, and facial expressions.",
            "• 5 Non-Verbal Behaviors (Ekman & Friesen):",
            "  1. Emblems: Gestures with direct verbal translation known to culture (e.g., Thumbs-up = good/approved).",
            "  2. Illustrators: Gestures that accompany and emphasize verbal speech (e.g., spreading hands to show 'huge').",
            "  3. Affect Displays: Facial movements communicating emotional states (happiness, anger, fear, disgust, surprise).",
            "  4. Regulators: Non-verbal cues controlling conversational flow (nodding head to indicate 'continue', eye gaze).",
            "  5. Adaptors: Unconscious body manipulation relieving tension/anxiety (biting nails, twirling hair, tapping feet).",
            "• Oculesics: Study of eye behavior, eye contact, pupil dilation, gaze duration, and blinking patterns."
          ]
        },
        {
          "title": "Proxemics: Interpersonal Space & Physical Distance Zones (Edward T. Hall)",
          "points": [
            "• Proxemics: Study of how human beings use personal physical space and distance in communication.",
            "• 4 Distance Zones (Edward T. Hall):",
            "  1. Intimate Distance: 0 to 1.5 feet (close intimate partners, comforting, confidential whispers).",
            "  2. Personal Distance: 1.5 to 4 feet (friends, acquaintances, informal conversations, handshake distance).",
            "  3. Social Distance: 4 to 12 feet (business associates, formal interviews, customer service, meetings).",
            "  4. Public Distance: 12 feet to 25+ feet (public speaking, political rallies, university lecture halls)."
          ]
        },
        {
          "title": "Paralanguage (Vocalics), Haptics, Chronemics & Artifactics",
          "points": [
            "• Paralanguage / Vocalics: Vocal cues accompanying verbal speech: pitch, tone, tempo, volume, rhythm, pauses, vocal qualifiers (sighs, gasps, throat clearing). 'How something is said rather than what is said'.",
            "• Haptics: Communication through physical touch (handshakes, pats on back, hugging). Highly governed by culture, status, and gender norms.",
            "• Chronemics: Communication through the use of time: punctuality, waiting time, pace of speech. Monochronic time (one task at a time, strict schedules) vs Polychronic time (multitasking, relationship-oriented).",
            "• Artifactics: Communication through personal appearance, clothing, jewellery, office decor, perfumes, status symbols."
          ]
        },
        {
          "title": "Classical Linear Models of Communication (Aristotle, Lasswell, Shannon-Weaver)",
          "points": [
            "• Aristotle's Rhetorical Model: Oldest linear model (Speaker → Speech → Occasion → Audience → Effect). Highly speaker-centred, aimed at persuasive public oratory.",
            "• Harold Lasswell's 5 Ws Model (1948): 'Who (Communicator) → Says What (Message) → In Which Channel (Medium) → To Whom (Receiver) → With What Effect (Impact)'. Linear, no feedback loop.",
            "• Shannon and Weaver Mathematical Model (1949): Mother of all communication models: Information Source → Transmitter (Encoder) → Channel (Noise Source) → Receiver (Decoder) → Destination. First model to introduce systemic Noise and Information Entropy."
          ]
        },
        {
          "title": "Interactive & Circular Models of Communication (Berlo, Schramm, Dance)",
          "points": [
            "• Berlo's SMCR Model (1960): Source → Message → Channel → Receiver. Identifies 5 factors affecting both Source and Receiver: Communication skills, Attitudes, Knowledge, Social system, Culture.",
            "• Wilbur Schramm's Interactive Model (1954): Circular communication emphasizing encoding, decoding, interpreting, and feedback. Introduces 'Field of Experience': effective communication occurs only in the overlapping area of shared experience between sender and receiver.",
            "• Frank Dance's Helical Model (1967): Communication is a dynamic, continuous, ever-expanding helix that builds on past experience and never returns to the identical starting point."
          ]
        },
        {
          "title": "Barriers to Communication: Semantic, Psychological, Physical & Organizational",
          "points": [
            "• Semantic / Language Barriers: Technical jargon, denotative vs connotative word confusion, ambiguous phrasing, faulty grammatical syntax, poor translation.",
            "• Psychological / Emotional Barriers: Premature evaluation (judging before full message received), selective perception, defensive listening, emotional state (anger, fear), halo effect (judging entire message based on single trait).",
            "• Physical & Environmental Barriers: Distant physical proximity, ambient environmental noise, poor lighting, equipment malfunctioning.",
            "• Organizational Barriers: Rigid bureaucracy, excessive hierarchical layers filtering messages, status differentials, absence of grievance mechanisms."
          ]
        },
        {
          "title": "The 7 Cs and 4 Ss of Effective Communication",
          "points": [
            "• The 7 Cs of Effective Communication (Scott Cutlip & Allen Center):",
            "  1. Completeness: Contains all facts the audience needs to make informed decisions.",
            "  2. Conciseness: Expressing message in fewest possible words without sacrificing clarity; avoiding wordiness.",
            "  3. Consideration: Empathy; viewing situation from receiver's perspective (the 'You' attitude).",
            "  4. Concreteness: Being specific, definite, and vivid using precise figures rather than vague generalizations.",
            "  5. Clarity: Clear purpose, simple familiar words, coherent sentence structure.",
            "  6. Courtesy: Respectful, polite, culturally sensitive tone without hidden insults.",
            "  7. Correctness: Accurate grammatical construction, factual accuracy, appropriate format.",
            "• The 4 Ss of Business Communication: Shortness, Simplicity, Strength, Sincerity."
          ]
        },
        {
          "title": "Classroom Communication & Teacher Immediacy Behaviors",
          "points": [
            "• Classroom Communication Dynamics: Transactional process between teacher and learners involving cognitive (intellectual comprehension) and affective (emotional connection) exchanges.",
            "• Albert Mehrabian's Teacher Immediacy: Communication behaviors that enhance physical and psychological closeness:",
            "  - Verbal Immediacy: Addressing students by name, using inclusive pronouns ('we, us, our'), asking for student opinions, self-disclosure, praise.",
            "  - Non-Verbal Immediacy: Smiling, direct eye contact, open forward-leaning posture, purposeful movement around the classroom, vocal modulation.",
            "• Mehrabian's 7-38-55 Rule of Emotional Communication: In emotional communication, meaning is conveyed: 7% by Words (Verbal), 38% by Tone of Voice (Vocal/Paralanguage), 55% by Body Language (Visual/Facial)."
          ]
        },
        {
          "title": "Mass Media Theories & Societal Impact",
          "points": [
            "• Agenda-Setting Theory (McCombs & Shaw 1972): Mass media does not tell people what to think, but rather tells people what to think ABOUT by selecting and framing news topics.",
            "• Cultivation Theory (George Gerbner): Long-term, repeated exposure to television shapes/cultivates viewers' perceptions of reality ('Mean World Syndrome' - heavy TV viewers perceive society as more dangerous than it actually is).",
            "• Hypodermic Needle / Magic Bullet Theory (1920s-30s): Early theory viewing audience as passive victims upon whom media injects immediate, uniform, and powerful persuasive effects.",
            "• Uses and Gratifications Theory (Katz, Blumler): Audience is active and goal-directed, selecting specific media to satisfy specific cognitive, affective, or social integration needs.",
            "• Two-Step Flow Theory (Lazarsfeld & Katz): Media messages flow from mass media to influential 'Opinion Leaders', who interpret and pass them to less active public."
          ]
        },
        {
          "title": "Intercultural and Cross-Cultural Communication Dynamics",
          "points": [
            "• High-Context vs Low-Context Cultures (Edward T. Hall): High-context (implicit, relational, non-verbal cues e.g., Japan, India) vs Low-context (explicit, direct, rule-bound e.g., Germany, USA).",
            "• Ethnocentrism: Judging other cultural practices solely by the standards and values of one's own culture.",
            "• Hofstede's Cultural Dimensions: Power Distance, Individualism vs Collectivism, Masculinity vs Femininity, Uncertainty Avoidance, Long-term Orientation."
          ]
        },
        {
          "title": "Crisis and Strategic Communication in Organizations",
          "points": [
            "• Crisis Communication: Timely, transparent, and coordinated messaging to mitigate reputational damage during emergencies.",
            "• Spokesperson Protocol: Single authoritative voice preventing contradictory leaks or speculative gossip.",
            "• Feedback Loop in Crisis: Continuous monitoring of public sentiment and corrective messaging iterations."
          ]
        },
        {
          "title": "Digital Media Literacy, Infodemics & Communication Ethics",
          "points": [
            "• Infodemic: Rapid spread of an excessive amount of information (both accurate and inaccurate) making solutions difficult to identify.",
            "• Echo Chambers & Filter Bubbles: Algorithmic sorting reinforcing existing beliefs while isolating users from opposing viewpoints.",
            "• Deepfakes & Disinformation: Malicious synthetic media requiring verification via reverse-image search and metadata forensics."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Hall's Proxemics Distance Order",
          "mnemonic": "IPSP: 'Intimate (0-1.5), Personal (1.5-4), Social (4-12), Public (12+)'",
          "explanation": "Ascending order of interpersonal physical distance.",
          "proTip": "Social distance (4-12 ft) is typical for formal office interviews and boardroom meetings."
        },
        {
          "title": "The 7 Cs of Communication Peg",
          "mnemonic": "7Cs: 'Clear, Concise, Concrete, Correct, Considerate, Complete, Courteous'",
          "explanation": "Core principles of effective written and oral business/educational communication.",
          "proTip": "Credibility and Creativity are NOT part of the classical 7 Cs."
        },
        {
          "title": "Lasswell 5 Ws Formula",
          "mnemonic": "'Who Says What In Which Channel To Whom With What Effect'",
          "explanation": "Communicator → Message → Medium → Receiver → Effect.",
          "proTip": "Lasswell's model is linear and does not include an explicit feedback loop."
        },
        {
          "title": "Mehrabian 7-38-55 Rule",
          "mnemonic": "7% Words | 38% Tone/Voice | 55% Body Language",
          "explanation": "Formula for non-verbal dominance when communicating feelings and attitudes.",
          "proTip": "Applies strictly when feelings/attitudes are conveyed and words conflict with non-verbal cues."
        },
        {
          "title": "Grapevine 4 Chains Peg",
          "mnemonic": "Single Strand → Gossip (1 to All) → Probability (Random) → Cluster (Friends of Friends)",
          "explanation": "Keith Davis 4 patterns of informal communication in organizations.",
          "proTip": "Cluster chain is the most dominant informal communication channel in offices."
        },
        {
          "title": "Non-Verbal Codes Mnemonic",
          "mnemonic": "Emblems = Words | Illustrators = Accent | Affect = Face | Regulators = Traffic | Adaptors = Anxiety",
          "explanation": "Ekman & Friesen's 5 functional categories of non-verbal body movements.",
          "proTip": "Biting nails or playing with a pen during an interview is an Adaptor."
        }
      ]
    },
    {
      "id": "p1-u5",
      "unitNumber": 5,
      "name": "Aptitude",
      "icon": "🔢",
      "theoryNotes": [
        {
          "title": "Types of Reasoning: Deductive, Inductive & Abductive",
          "points": [
            "• Deductive Reasoning: Top-down logic moving from general premises to specific, certain conclusions (General → Specific). If premises are true, conclusion MUST be true (Valid/Sound).",
            "• Inductive Reasoning: Bottom-up logic moving from specific observations to broad probabilistic generalizations (Specific → General). Conclusion is probable, never certain (Strong/Cogent).",
            "• Abductive Reasoning: Inference to the best explanation based on incomplete observations (Medical diagnosis, detective work).",
            "• Analogical Reasoning: Inferring that because two things are similar in known aspects, they will also be similar in unknown aspects."
          ]
        },
        {
          "title": "Number Series & Letter Series Logic",
          "points": [
            "• Number Series Typologies: Arithmetic progressions (constant difference), Geometric progressions (constant multiplier), Difference of differences (two-tier arithmetic), Alternating series (two interlaced sequences), Square and cube series (n² ± k, n³ ± k), Prime number sequences, Fibonacci series (sum of preceding two terms: 1, 1, 2, 3, 5, 8, 13...).",
            "• Letter Series Logic: Alphabet positional values (1 to 26), Reverse alphabet values (Z=1 to A=26), Skip-letter patterns (+2, +3, +4), Vowel/consonant alternating patterns, Circular alphabet wraps (Z + 1 = A)."
          ]
        },
        {
          "title": "Coding-Decoding Mechanics & Relationships",
          "points": [
            "• Letter Coding: Direct position shifts (+n forward, -n backward), Reverse word arrangement, Letter-pair sum of 27 (A ↔ Z, B ↔ Y, C ↔ X, D ↔ W, E ↔ V, F ↔ U, G ↔ T, H ↔ S, I ↔ R, J ↔ Q, K ↔ P, L ↔ O, M ↔ N).",
            "• Number/Symbol Coding: Assigning specific digits to letters based on position or assigned key.",
            "• Substitution / Fictitious Language Coding: Deciphering common words across multiple coded sentences by elimination.",
            "• Blood Relations: Family tree diagramming. Generation hierarchy (+2: Grandparents, +1: Parents/Uncles, 0: Self/Siblings/Spouse/Cousins, -1: Children, -2: Grandchildren). Paternal (father's side) vs Maternal (mother's side)."
          ]
        },
        {
          "title": "Percentages & Successive Percentage Changes",
          "points": [
            "• Fraction-to-Percentage Equivalents: 1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.",
            "• Successive Percentage Change Formula: Net % Change = a + b + (ab / 100). (Use negative sign for decreases, discounts, or loss).",
            "• Product Constancy: If price of a commodity increases by R%, consumption must be reduced by [R / (100 + R)] × 100% to keep expenditure unchanged."
          ]
        },
        {
          "title": "Profit, Loss & Discount Mathematics",
          "points": [
            "• Cost Price (CP) & Selling Price (SP): Profit = SP - CP; Loss = CP - SP.",
            "• Percentages: Profit % = (Profit / CP) × 100; Loss % = (Loss / CP) × 100. Profit and loss are ALWAYS calculated on Cost Price unless stated otherwise.",
            "• Marked Price (MP) & Discount: Discount = MP - SP; Discount % = (Discount / MP) × 100.",
            "• Successive Discounts of d1% and d2%: Net Single Discount = d1 + d2 - (d1 × d2 / 100)%.",
            "• Dishonest Dealer: If dealer claims to sell at CP but uses false weight of W grams instead of 1000g: Gain % = [(Error) / (True Value - Error)] × 100."
          ]
        },
        {
          "title": "Simple Interest (SI) vs Compound Interest (CI)",
          "points": [
            "• Simple Interest: SI = (P × R × T) / 100. Total Amount A = P + SI.",
            "• Compound Interest: Amount A = P × (1 + R / 100)^T. CI = A - P.",
            "• Semi-Annual Compounding: Rate becomes R/2, Time becomes 2T.",
            "• 2-Year Difference Shortcut: Difference between CI and SI for 2 years = P × (R / 100)^2.",
            "• 3-Year Difference Shortcut: Difference for 3 years = P × (R / 100)^2 × [3 + (R / 100)]."
          ]
        },
        {
          "title": "Ratio, Proportion & Mixtures / Alligation",
          "points": [
            "• Ratio & Proportion: If a : b = c : d, then Product of Extremes = Product of Means (a × d = b × c). Duplicate ratio = a² : b²; Sub-duplicate = √a : √b.",
            "• Rule of Alligation (Weighted Average Mixtures): (Cheaper Quantity / Dearer Quantity) = (Dearer Price - Mean Price) / (Mean Price - Cheaper Price).",
            "• Replacement Formula: If a container holds x units of liquid and y units are withdrawn and replaced with water n times: Remaining Liquid = x × (1 - y/x)^n."
          ]
        },
        {
          "title": "Averages, Weighted Averages & Age Problems",
          "points": [
            "• Average Formula: Average = (Sum of all observations) / (Total number of observations).",
            "• Deviation Method: Average = Assumed Mean + (Sum of deviations / N).",
            "• Average Speed (Harmonic Mean): When traveling equal distance at speed S1 and S2: Average Speed = (2 × S1 × S2) / (S1 + S2).",
            "• Problems on Ages: Age difference between two individuals remains constant throughout their lifetime. Set up linear equations: Present age = x; n years ago = x - n; n years hence = x + n."
          ]
        },
        {
          "title": "Speed, Time and Distance & Trains / Boats",
          "points": [
            "• Fundamental Mechanics: Distance = Speed × Time; Time = Distance / Speed.",
            "• Unit Conversion: km/h to m/s: Multiply by 5/18. m/s to km/h: Multiply by 18/5.",
            "• Relative Speed: Moving in opposite directions: S_rel = S1 + S2. Moving in same direction: S_rel = |S1 - S2|.",
            "• Train Crossing: Crossing a pole/man: Distance = Length of train. Crossing a platform/bridge: Distance = Length of train + Length of platform.",
            "• Boats & Streams: Speed of boat in still water = u, Speed of stream = v. Downstream Speed = u + v; Upstream Speed = u - v. Boat Speed u = (Downstream + Upstream) / 2; Stream Speed v = (Downstream - Upstream) / 2."
          ]
        },
        {
          "title": "Time and Work, Pipes & Cisterns Mechanics",
          "points": [
            "• Work and Time Fundamental: If A completes a work in n days, A's 1 day work = 1/n. If A does 1/n work in a day, total days required = n.",
            "• Combined Work: If A takes x days and B takes y days: Combined time = (x × y) / (x + y) days.",
            "• Work and Wages: Wages are divided among workers in proportion to the ratio of work done (or their individual 1-day work efficiencies).",
            "• Pipes and Cisterns: Inlet pipe fills in x hours (+1/x per hr); Outlet/drain empties in y hours (-1/y per hr). Net rate = 1/x - 1/y."
          ]
        },
        {
          "title": "Venn Diagrams in Logical & Quantitative Problem Solving",
          "points": [
            "• Two-Set Formula: |A ∪ B| = |A| + |B| - |A ∩ B|.",
            "• Three-Set Formula: |A ∪ B ∪ C| = |A| + |B| + |C| - (|A ∩ B| + |B ∩ C| + |A ∩ C|) + |A ∩ B ∩ C|.",
            "• Only Region Deduction: Calculating elements belonging exclusively to exactly one set."
          ]
        },
        {
          "title": "Clock Angles and Calendar Periodicity Calculations",
          "points": [
            "• Clock Angle Formula: Angle = |30H - (11/2)M| degrees.",
            "• Speed of Hands: Minute hand travels 6° per minute; Hour hand travels 0.5° per minute (Relative speed = 5.5°/min).",
            "• Calendar Odd Days: Non-leap year = 1 odd day (365 = 52*7 + 1); Leap year = 2 odd days; 100 years = 5 odd days; 400 years = 0 odd days."
          ]
        },
        {
          "title": "Age Problems & Linear Algebraic Formulations",
          "points": [
            "• Ratio Over Time: Difference between two persons' ages remains constant regardless of the number of elapsed years.",
            "• Equation Setup: Set current ages as 3x and 4x; in 5 years: (3x + 5)/(4x + 5) = 4/5, solve for x.",
            "• Exam Shortcut: Back-substitution from multiple-choice options is often twice as fast as algebraic expansion."
          ]
        },
        {
          "title": "Probability Fundamentals and Combinatorial Odds",
          "points": [
            "• Classical Probability: P(E) = n(E) / n(S) (Favorable outcomes divided by Total sample space).",
            "• Independent Events: P(A ∩ B) = P(A) * P(B); Mutually Exclusive: P(A ∩ B) = 0.",
            "• Coin & Dice Spaces: n coins tossed = 2^n total outcomes; n six-sided dice rolled = 6^n outcomes."
          ]
        },
        {
          "title": "Boats, Streams, and Relative Water Speed Formulations",
          "points": [
            "• Downstream Speed (u): Speed in still water (x) + Speed of stream (y) -> u = x + y.",
            "• Upstream Speed (v): Speed in still water (x) - Speed of stream (y) -> v = x - y.",
            "• Water Speed & Boat Speed: Speed of boat in still water = (u + v)/2; Speed of current = (u - v)/2."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "EJOTY Alphabet Peg",
          "mnemonic": "E (5) - J (10) - O (15) - T (20) - Y (25)",
          "explanation": "Positions of letters in multiples of 5 for rapid coding-decoding.",
          "proTip": "Opposite letter pair sum is ALWAYS 27! (e.g., A(1) + Z(26) = 27; B(2) + Y(25) = 27)."
        },
        {
          "title": "Speed Conversion Multiplier",
          "mnemonic": "km/h → m/s: Multiply by 5/18 | m/s → km/h: Multiply by 18/5",
          "explanation": "Remember: 18 km/h = exactly 5 m/s. 36 km/h = 10 m/s. 72 km/h = 20 m/s.",
          "proTip": "To go to smaller unit (m/s), put smaller number on top (5/18)."
        },
        {
          "title": "2-Year CI vs SI Difference Shortcut",
          "mnemonic": "Diff = P × (R / 100)^2",
          "explanation": "Direct shortcut for difference between compound interest and simple interest for 2 years.",
          "proTip": "Saves up to 3 minutes of multi-step interest calculations."
        },
        {
          "title": "Successive Percentage Formula",
          "mnemonic": "Net % = a + b + (ab / 100)",
          "explanation": "Works for price hikes, population growth, and successive discounts.",
          "proTip": "Two 20% discounts are NOT 40%: -20 - 20 + 4 = -36% (Single discount of 36%)."
        },
        {
          "title": "Work and Time 2-Person Shortcut",
          "mnemonic": "Time = (A × B) / (A + B)",
          "explanation": "Direct calculation when two people work together.",
          "proTip": "If A takes 10 days and B takes 15 days: (10 × 15) / (10 + 15) = 150 / 25 = 6 days."
        },
        {
          "title": "Boat in Still Water Formula",
          "mnemonic": "Boat Speed = (Downstream + Upstream) / 2",
          "explanation": "Stream Speed = (Downstream - Upstream) / 2.",
          "proTip": "Downstream speed is always strictly greater than upstream speed."
        }
      ]
    },
    {
      "id": "p1-u6",
      "unitNumber": 6,
      "name": "Logical Reasoning",
      "icon": "🧠",
      "theoryNotes": [
        {
          "title": "Categorical Propositions: Structure, Quality, Quantity & Distribution",
          "points": [
            "• 4 Standard Form Categorical Propositions:",
            "  - A (Universal Affirmative): 'All S are P'. Subject Distributed, Predicate Undistributed.",
            "  - E (Universal Negative): 'No S are P'. Subject Distributed, Predicate Distributed.",
            "  - I (Particular Affirmative): 'Some S are P'. Subject Undistributed, Predicate Undistributed.",
            "  - O (Particular Negative): 'Some S are not P'. Subject Undistributed, Predicate Distributed.",
            "• Term Distribution: A term is distributed if the proposition refers to ALL members of the class denoted by the term.",
            "• Memory Rule (ASEBIPOD): A distributes Subject, E distributes Both, I distributes Neither, O distributes Predicate."
          ]
        },
        {
          "title": "Classical Square of Opposition Rules & Inferences",
          "points": [
            "• Contradictory (A ↔ O, E ↔ I): Opposite diagonal corners. Exactly opposite truth values. If one is True, the other MUST be False. Cannot both be true; cannot both be false.",
            "• Contrary (A ↔ E): Top horizontal relation between Universals. Both CANNOT be true simultaneously, but both CAN be false. If one is True, the other is False. If one is False, the other is Undetermined / Doubtful.",
            "• Sub-Contrary (I ↔ O): Bottom horizontal relation between Particulars. Both CANNOT be false simultaneously, but both CAN be true. If one is False, the other is True. If one is True, the other is Undetermined.",
            "• Subalternation (A ↓ I, E ↓ O): Vertical relation between Universal and its corresponding Particular. Truth flows DOWNWARDS (If Universal is True, Particular is True). Falsehood flows UPWARDS (If Particular is False, Universal is False)."
          ],
          "diagram": {
            "type": "matrix",
            "title": "Classical Square of Opposition Matrix",
            "cells": [
              { "tag": "A (Universal Affirmative)", "color": "#8b5cf6", "content": "'All S are P' — Contrary to E (cannot both be true, can both be false); Contradictory to O (strictly opposite truth value); Subaltern down to I." },
              { "tag": "E (Universal Negative)", "color": "#ef4444", "content": "'No S is P' — Contrary to A; Contradictory to I (strictly opposite); Subaltern down to O." },
              { "tag": "I (Particular Affirmative)", "color": "#10b981", "content": "'Some S are P' — Sub-contrary to O (cannot both be false, can both be true); Contradictory to E; Subaltern from A (Truth flows DOWN)." },
              { "tag": "O (Particular Negative)", "color": "#f59e0b", "content": "'Some S are not P' — Sub-contrary to I; Contradictory to A; Subaltern from E (Falsehood flows UP)." }
            ]
          }
        },
        {
          "title": "Mood and Figure of Categorical Syllogisms",
          "points": [
            "• 3 Terms of Syllogism: Major Term (Predicate of conclusion), Minor Term (Subject of conclusion), Middle Term (Appears in both premises, NEVER in conclusion).",
            "• Mood: Characterized by the 3 categorical propositions forming the syllogism in order (e.g., AAA, EAE, AII).",
            "• 4 Figures (Defined by the position of the Middle Term M):",
            "  - Figure 1: M - P, S - M (Sub - Pre)",
            "  - Figure 2: P - M, S - M (Pre - Pre)",
            "  - Figure 3: M - P, M - S (Sub - Sub)",
            "  - Figure 4: P - M, M - S (Pre - Sub)",
            "• 15 Classically Valid Syllogistic Moods:",
            "  - Figure 1: AAA (Barbara), EAE (Celarent), AII (Darii), EIO (Ferio).",
            "  - Figure 2: EAE (Cesare), AEE (Camestres), EIO (Festino), AOO (Baroco).",
            "  - Figure 3: IAI (Disamis), AII (Datisi), OAO (Bocardo), EIO (Ferison).",
            "  - Figure 4: AEE (Camenes), IAI (Dimaris), EIO (Fresison)."
          ]
        },
        {
          "title": "Rules of Syllogistic Validity & Formal Fallacies",
          "points": [
            "• Rule 1: Syllogism must contain exactly 3 terms used in identical sense (Violated by Fallacy of Four Terms / Quaternio Terminorum).",
            "• Rule 2: Middle term must be distributed at least once in the premises (Violated by Fallacy of Undistributed Middle).",
            "• Rule 3: Any term distributed in the conclusion MUST be distributed in its premise (Violated by Fallacy of Illicit Major or Fallacy of Illicit Minor).",
            "• Rule 4: Two negative premises yield NO valid conclusion (Violated by Fallacy of Exclusive Premises).",
            "• Rule 5: If either premise is negative, conclusion MUST be negative.",
            "• Rule 6: Two particular premises yield NO valid conclusion."
          ]
        },
        {
          "title": "Informal Fallacies: Fallacies of Relevance & Ambiguity",
          "points": [
            "• Argumentum Ad Hominem: Attacking the person's character rather than addressing the substance of their argument.",
            "• Straw Man Fallacy: Misrepresenting or exaggerating an opponent's argument to make it easier to attack.",
            "• Argumentum Ad Ignorantiam (Appeal to Ignorance): Claiming a statement is true because it has not been proven false (or vice versa).",
            "• Petitio Principii (Begging the Question / Circular Reasoning): The premise assumes the truth of the conclusion it purports to prove.",
            "• Slippery Slope: Asserting without evidence that an initial small step inevitably triggers a chain of disastrous events.",
            "• Fallacy of Equivocation: Using a single ambiguous word with two different meanings within the same argument.",
            "• Fallacy of Composition: Inferring that because all individual parts have a property, the whole must possess it.",
            "• Fallacy of Division: Inferring that because the whole possesses a property, each individual part must possess it.",
            "• Red Herring: Introducing an irrelevant distracting topic to derail the original argument.",
            "• Post Hoc Ergo Propter Hoc: Falsely assuming that because event Y followed event X, X must have caused Y."
          ]
        },
        {
          "title": "Venn Diagrams & Euler Circles for Argument Testing",
          "points": [
            "• Testing Categorical Syllogisms: Draw 3 overlapping circles representing Major Term, Minor Term, and Middle Term.",
            "• Universal Premises (A & E): Shaded out (indicating emptiness).",
            "• Particular Premises (I & O): Marked with an 'X' (indicating existence of at least one member).",
            "• Validity Rule: If after diagramming BOTH premises, the conclusion is ALREADY depicted in the diagram, the argument is DEDUCTIVELY VALID. Never diagram the conclusion separately."
          ]
        },
        {
          "title": "Classical Indian Logic: Overview of Philosophical Schools",
          "points": [
            "• 6 Astika (Orthodox - accept authority of Vedas) Schools (Shad Darshanas): Nyaya (Logic - Gautama), Vaisheshika (Atomism - Kanada), Sankhya (Dualism - Kapila), Yoga (Meditation - Patanjali), Mimamsa / Purva Mimamsa (Ritualism - Jaimini), Vedanta / Uttara Mimamsa (Metaphysics - Badarayana).",
            "• 3 Nastika (Heterodox - reject authority of Vedas) Schools: Charvaka (Materialism - accepts ONLY Pratyaksha), Buddhism (accepts Pratyaksha and Anumana), Jainism (accepts Pratyaksha, Anumana, and Shabda)."
          ]
        },
        {
          "title": "The 6 Orthodox Pramanas (Sources of Valid Knowledge)",
          "points": [
            "• 1. Pratyaksha (Perception): Direct sensory cognition of an object through sense-organ contact (Indriyartha Sannikarsha). Nirvikalpaka (indeterminate/pure sensation) and Savikalpaka (determinate/conceptual recognition).",
            "• 2. Anumana (Inference): Secondary cognition of an unperceived object through observation of a sign (linga/hetu) based on universal relation (vyapti).",
            "• 3. Upamana (Comparison / Analogy): Knowledge gained through resemblance (e.g., recognizing a wild forest cow Gavaya after being told it resembles a domestic cow).",
            "• 4. Shabda (Verbal Testimony): Statement of an Aptavakya (trustworthy, authoritative person). Vaidika (divine scriptural) vs Laukika (secular testimony).",
            "• 5. Arthapatti (Postulation / Presumption): Supposing an unperceived fact to reconcile two apparently conflicting known facts (e.g., 'Devadatta is fat, but he does not eat during the day' ⟹ he must eat at night). Accepted by Mimamsa and Advaita Vedanta.",
            "• 6. Anupalabdhi (Non-Apprehension): Source of knowledge for perceiving the non-existence / absence of an object (e.g., 'There is no jar on this table'). Accepted by Bhatta Mimamsa and Advaita Vedanta."
          ]
        },
        {
          "title": "Structure of Anumana: Terms, Vyapti & Pakshadharmata",
          "points": [
            "• 3 Essential Terms in Indian Inference:",
            "  - Paksha (Minor Term): The subject/locus in which the inferred property is sought (e.g., The Hill).",
            "  - Sadhya (Major Term): The unperceived property to be proven (e.g., Fire).",
            "  - Hetu / Linga / Sadhana (Middle Term): The perceived mark or sign that indicates Sadhya (e.g., Smoke).",
            "• Vyapti: The relation of invariable, unconditional, universal concomitance between Hetu and Sadhya ('Wherever there is smoke, there is fire'). Free from Upadhi (conditioning factor).",
            "• Pakshadharmata: Presence of Hetu in Paksha ('The hill possesses smoke').",
            "• Paramarsha: The synthesis or recognition of Vyapti qualified by Pakshadharmata ('The hill has smoke which is invariably associated with fire'). Leads directly to Anumiti (inferential knowledge)."
          ]
        },
        {
          "title": "Kinds of Anumana: Purvavat, Sheshavat & Samanyatodrishta",
          "points": [
            "• Classification by Psychological Purpose (Nyaya):",
            "  - Svarthanumana (Inference for oneself): Informal, psychological 3-step internal inference.",
            "  - Pararthanumana (Inference for others): Formal, verbal 5-step syllogism to convince another.",
            "• Classification by Causal Relation (Gotama):",
            "  - Purvavat Anumana: Inferring unperceived effect from perceived cause (e.g., seeing dark dense clouds and inferring future rain).",
            "  - Sheshavat Anumana: Inferring unperceived cause from perceived effect (e.g., seeing muddy, swift muddy river flood and inferring past heavy rain in the mountains).",
            "  - Samanyatodrishta Anumana: Inferring based on uniform correlation rather than direct causation (e.g., seeing changing position of the sun in the sky and inferring that the sun moves, like any moving object).",
            "• Classification by Vyapti Nature: Kevalanvayi (purely positive concomitance), Kevalavyatireki (purely negative concomitance), Anvayavyatireki (both positive and negative concomitance)."
          ]
        },
        {
          "title": "The Nyaya 5-Step Syllogism (Pancha Avayava)",
          "points": [
            "• 5 Structural Steps of Nyaya Pararthanumana Syllogism (PHUUN):",
            "  1. Pratijna (Proposition): 'The hill has fire' (Statement to be proven).",
            "  2. Hetu (Reason): 'Because it has smoke' (Stating the observed sign).",
            "  3. Udaharana (Example): 'Wherever there is smoke, there is fire, as in a kitchen hearth' (Stating universal Vyapti supported by an affirmative example).",
            "  4. Upanaya (Application): 'This hill has smoke which is invariably accompanied by fire' (Applying Vyapti to current case).",
            "  5. Nigamana (Conclusion): 'Therefore, this hill has fire' (Final restatement of proposition as proven fact)."
          ]
        },
        {
          "title": "Hetvabhasa: 5 Material Fallacies of Inference in Indian Logic",
          "points": [
            "• Hetvabhasa: A defective or fallacious reason appearing as a valid hetu. 5 Major Types:",
            "  1. Savyabhichara / Anaikantika (Irregular / Inconstant Middle): Hetu is not universally concomitant with Sadhya. Sub-types: Sadharana (too wide: 'Hill has fire because it is knowable'), Asadharana (too narrow: 'Sound is eternal because it is audible'), Anupasamhari (non-exclusive: 'All things are non-eternal because they are knowable').",
            "  2. Viruddha (Contradictory Middle): Hetu is pervaded by the ABSENCE of Sadhya, thus proving the exact opposite (e.g., 'Sound is eternal because it is produced').",
            "  3. Satpratipaksha (Counterbalanced Middle): Hetu is validly countered by another equally valid hetu establishing the opposite conclusion (e.g., 'Sound is eternal because it is audible' vs 'Sound is non-eternal because it is an effect').",
            "  4. Asiddha / Sadhyasama (Unproved Middle): Hetu is not an established fact. Sub-types: Ashrayasiddha (unreal locus: 'Sky-lotus is fragrant'), Svarupasiddha (unreal nature in locus: 'Sound is a quality because it is visible'), Vyapyatvasiddha (concomitance is conditional / based on Upadhi).",
            "  5. Badhita (Non-inferentially Contradicted): Hetu is contradicted by a stronger means of valid knowledge, such as direct perception (e.g., 'Fire is cold because it is a substance' - touch directly proves fire is hot)."
          ]
        },
        {
          "title": "Navya-Nyaya Epistemological Terminology & Relations",
          "points": [
            "• Viseshya (Qualifier/Subject) vs Prakara (Mode/Attribute): Cognition of a pot as blue involves blueness as prakara and pot as visesya.",
            "• Sannikarsha (Sense-Object Contact): 6 varieties of perceptual contact (Samyoga, Samavaya, Samaveta-samavaya, etc.).",
            "• Samavaya (Inherence): Eternal inseparable relation between whole and parts, substance and attribute."
          ]
        },
        {
          "title": "Informal Linguistic Fallacies: Accent, Amphiboly & Equivocation",
          "points": [
            "• Fallacy of Equivocation: Using a single ambiguous word with two different meanings across premises ('A bank is a river edge; money is in a bank; therefore money is in river edge').",
            "• Fallacy of Amphiboly: Syntactic ambiguity arising from awkward grammatical phrasing rather than a double-meaning word.",
            "• Fallacy of Accent: Distortion of meaning resulting from shifting voice emphasis on different words in a proposition."
          ]
        },
        {
          "title": "Hetvabhasa Sub-Varieties in Detail: Asiddha & Savyabhichara",
          "points": [
            "• Asiddha (Unproved Middle): Ashrayasiddha (unreal locus e.g. sky-lotus), Svarupasiddha (hetu absent in subject), Vyapyatvasiddha (conditioned by Upadhi).",
            "• Savyabhichara (Irregular Middle): Sadharana (too wide/common), Asadharana (too narrow/exclusive), Anupasamhari (inconclusive/all-inclusive).",
            "• Exam Tip: NTA frequently asks: 'Sound is eternal because it is knowable' -> Example of Sadharana Savyabhichara."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Square of Opposition Directional Flow",
          "mnemonic": "Truth Flows DOWN ↓ | Falsehood Flows UP ↑",
          "explanation": "If All (A) is True ⟹ Some (I) is True. If Some (I) is False ⟹ All (A) is False.",
          "proTip": "If question says 'If statement A is False, what can be inferred about E?', answer is Undetermined."
        },
        {
          "title": "Nyaya Syllogism 5 Steps Mnemonic",
          "mnemonic": "PHUUN: 'Pratijna, Hetu, Udaharana, Upanaya, Nigamana'",
          "explanation": "Remember: Proposition → Reason → Example → Application → Conclusion.",
          "proTip": "Aristotle uses 3 steps; Nyaya uses 5 steps combining induction with deduction."
        },
        {
          "title": "Hetvabhasa 5 Fallacies Peg",
          "mnemonic": "SV-SAB: 'Savyabhichara, Viruddha, Satpratipaksha, Asiddha, Badhita'",
          "explanation": "Irregular | Contradictory | Counterbalanced | Unproved | Contradicted by Perception.",
          "proTip": "If reason is refuted by touch/perception (e.g., 'Fire is cold'), it is ALWAYS Badhita."
        },
        {
          "title": "Term Distribution Rule (ASEBIPOD)",
          "mnemonic": "A = Subject | E = Both | I = Neither | O = Predicate",
          "explanation": "Tells you which term is distributed in categorical propositions.",
          "proTip": "In 'Some dogs are not friendly' (O-type), only the Predicate ('friendly') is distributed."
        },
        {
          "title": "Purvavat vs Sheshavat Shortcut",
          "mnemonic": "Purvavat = Clouds ⟹ Rain (Cause to Effect) | Sheshavat = River Flood ⟹ Rain (Effect to Cause)",
          "explanation": "Purvavat looks forward to effect; Sheshavat looks backward to cause.",
          "proTip": "Samanyatodrishta involves non-causal correlation like movement of the sun."
        },
        {
          "title": "Contrary vs Sub-Contrary Peg",
          "mnemonic": "Contrary (Top): Both cannot be TRUE! | Sub-Contrary (Bottom): Both cannot be FALSE!",
          "explanation": "Contrary is between A & E; Sub-contrary is between I & O.",
          "proTip": "Sub-contraries can both be true simultaneously ('Some roses are red' and 'Some roses are not red')."
        }
      ]
    },
    {
      "id": "p1-u7",
      "unitNumber": 7,
      "name": "Data Interpretation",
      "icon": "📊",
      "theoryNotes": [
        {
          "title": "Sources, Acquisition & Classification of Data",
          "points": [
            "• Primary Data: First-hand empirical data collected directly from respondents by investigator for specific research purpose (Questionnaires, structured interviews, controlled experiments, field observations). High accuracy, costly, time-consuming.",
            "• Secondary Data: Previously gathered and published information collected by other agencies for different purposes (Government census reports, NSSO surveys, RBI bulletins, economic surveys, peer-reviewed journals, international databases like World Bank/UN). Economical, requires validation.",
            "• Quantitative vs Qualitative Data: Quantitative = Numerical measurements (Discrete counts of students vs Continuous temperature/height); Qualitative = Categorical attributes (Nominal: blood group/gender vs Ordinal: rankings/satisfaction scales).",
            "• Cross-Sectional vs Time-Series Data: Cross-Sectional = Collected at a single point in time across multiple entities; Time-Series = Collected across consecutive regular intervals over time."
          ]
        },
        {
          "title": "Graphical Representations & Mapping of Data",
          "points": [
            "• Bar Charts: Displays discrete categorical comparisons using rectangular bars whose lengths/heights are proportional to values. Simple, Multiple (grouped), Subdivided (component), and Percentage bar charts.",
            "• Histograms: Area diagram representing continuous class frequency distributions without gaps between adjoining bars. Area of each bar represents frequency. Mode can be graphically located from histogram peak.",
            "• Pie Charts (Circle Graphs): Proportional circular division representing component shares of a whole (Total circle = 100% = 360°). Component Angle θ = (Component Value / Total Value) × 360°.",
            "• Frequency Polygon & Ogives: Ogive = Cumulative frequency curve. Less-than Ogive and More-than Ogive intersect at the exact Median of the distribution.",
            "• Line Graphs: Best visual representation for tracking longitudinal time-series trends and seasonal fluctuations."
          ]
        },
        {
          "title": "Core Quantitative DI Calculations: Percentage Share & Percentage Change",
          "points": [
            "• Percentage Share / Proportion: % Share = (Component Value / Total Aggregate) × 100.",
            "• Percentage Increase: % Increase = [(New Value - Original Value) / Original Value] × 100.",
            "• Percentage Decrease: % Decrease = [(Original Value - New Value) / Original Value] × 100.",
            "• Ratio Analysis: Expressing relationship as A : B. If A is x% more than B: A = B × (1 + x/100). If A is x% of B: A = (x/100) × B.",
            "• Compound Annual Growth Rate (CAGR): CAGR = (End Value / Start Value)^(1 / n) - 1."
          ]
        },
        {
          "title": "Fast Mental Math Shortcuts for High-Speed DI Tables",
          "points": [
            "• The 10% & 1% Partitioning Rule: Find 10% by shifting decimal 1 place left; find 1% by shifting 2 places left. E.g., to find 16% of 4,500: 10% = 450, 5% = 225, 1% = 45 ⟹ Total = 450 + 225 + 45 = 720.",
            "• Cross-Multiplication for Fraction Comparison: To compare a/b vs c/d, compare cross-products (a × d) vs (b × c). If a × d > b × c, then a/b > c/d. Avoids tedious long divisions.",
            "• Approximation & Rounding: Rounding large 6-digit values to 3 significant figures to eliminate calculation bottlenecks."
          ]
        },
        {
          "title": "Data and Governance Initiatives in India",
          "points": [
            "• Open Government Data (OGD) Platform India (data.gov.in): Single-point central portal providing open access to government-owned shareable data for research, civil society analysis, and app development.",
            "• National Data and Analytics Platform (NDAP): Flagship NITI Aayog initiative democratizing access to public government datasets with standardized formats and embedded visualization tools.",
            "• DigiLocker: Digital India flagship enabling citizens to secure electronic copies of official documents (degree certificates, driving license, Aadhaar) directly from issuing authorities.",
            "• UMANG (Unified Mobile Application for New-age Governance): Single mobile platform aggregating over 1,200 central and state government services."
          ]
        },
        {
          "title": "Pie Chart Angle-to-Percentage Dual Conversion Mastery",
          "points": [
            "• Fundamental Identity: 360 degrees = 100% of the total dataset.",
            "• Conversion Factor: 1% = 3.6 degrees; 1 degree = (100/360)% = (5/18)%.",
            "• Benchmark Values: 90° = 25%; 180° = 50%; 45° = 12.5%; 72° = 20%; 108° = 30%.",
            "• Calculation Tip: Convert degrees directly to fractions before multiplying by the gross base value."
          ]
        },
        {
          "title": "Multi-Bar and Stacked (Subdivided) Bar Chart Interpretation",
          "points": [
            "• Comparative Multi-Bar: Side-by-side bars tracking multiple categories (e.g., Imports vs Exports across years).",
            "• Stacked/Subdivided Bars: Each bar total represents gross aggregate, subdivided into proportionate constituent components.",
            "• Percentage Component Bars: All bars standardized to 100% height to compare relative proportion shifts irrespective of gross volume."
          ]
        },
        {
          "title": "Cumulative Frequency Distributions, Ogives & Percentiles",
          "points": [
            "• Less-Than Ogive: S-shaped cumulative curve rising from bottom-left to top-right.",
            "• More-Than Ogive: Curve descending from top-left to bottom-right.",
            "• Median Intersection: The X-axis value corresponding to the intersection point of less-than and more-than ogives gives the exact Median."
          ]
        },
        {
          "title": "Index Numbers, Base Year Deflating & Tabular Indexing",
          "points": [
            "• Price Index Formula: Laspeyres Index (base-weighted) vs Paasche Index (current-weighted) vs Fisher's Ideal Index (geometric mean).",
            "• Deflating Series: Real Value = (Nominal Value / Price Index) * 100.",
            "• Base Shift: Comparing percentage growth relative to a fixed baseline year vs rolling previous year."
          ]
        },
        {
          "title": "Ratio Analysis and Proportional Scaling in Tabular Data",
          "points": [
            "• Cross-Ratio Comparison: Comparing a/b vs c/d using cross multiplication (a*d vs b*c) without calculating decimals.",
            "• Proportion Scaling: If Male:Female = 7:5 and Total = 1440, then Male = 1440 * (7/12) = 840.",
            "• Compounded Ratio: Product of first terms to product of second terms."
          ]
        },
        {
          "title": "Handling Missing and Incomplete Data in Examination Tables",
          "points": [
            "• Reverse Row/Column Totaling: Deducing unknown cells by subtracting known values from marginal row or column totals.",
            "• Simultaneous Equation Deduction: Using percentage of total and ratio relationships to reconstruct blank table entries.",
            "• Systematic Order: Always fill mandatory blank cells first before answering dependent sub-questions."
          ]
        },
        {
          "title": "Trend Projection, Moving Averages and Time-Series Data",
          "points": [
            "• Moving Average: Smoothing short-term seasonal fluctuations to reveal underlying secular trends (3-year or 5-year moving average).",
            "• Compound Annual Growth Rate (CAGR): CAGR = (End Value / Start Value)^(1/n) - 1.",
            "• Growth Direction: Distinguishing between absolute increment (Value2 - Value1) and percentage rate of growth ((V2-V1)/V1 * 100)."
          ]
        },
        {
          "title": "Data Sufficiency in Quantitative and Data Reasoning",
          "points": [
            "• Two-Statement Format: Evaluating whether Statement I alone, Statement II alone, both combined, or neither is sufficient to answer the question.",
            "• Non-Calculation Rule: Do not waste time computing exact numerical solutions; merely verify whether a unique mathematical answer exists.",
            "• Independent Evaluation: Always test Statement I completely in isolation before looking at Statement II."
          ]
        },
        {
          "title": "Open Government Data (OGD) and Indian Statistical Repositories",
          "points": [
            "• Open Government Data Portal (data.gov.in): Centralized repository facilitating public access to government datasets.",
            "• MOSPI (Ministry of Statistics and Programme Implementation): Primary nodal agency for official economic, labor, and demographic statistics.",
            "• Periodic Labour Force Survey (PLFS) & NFHS (National Family Health Survey): Benchmark periodic datasets cited in DI questions."
          ]
        },
        {
          "title": "Critical DI Pitfalls: Misreading Labels, Scales, and Zero Baselines",
          "points": [
            "• Truncated Y-Axis Trap: Visual graphs with non-zero baselines exaggerating minor percentage shifts into seemingly dramatic spikes.",
            "• Unit Discrepancy: Mixing thousands, lakhs, crores, and millions across columns.",
            "• Net vs Gross Profit: Mistaking Total Revenue/Turnover for Profit (Profit = Revenue - Expenditure)."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Cross-Product Fraction Decider",
          "mnemonic": "To compare a/b vs c/d: Multiply a×d and b×c!",
          "explanation": "If a×d > b×c, then a/b > c/d. Avoids tedious long division in DI tables.",
          "proTip": "Example: 17/23 vs 21/29 ⟹ 17×29 = 493, 23×21 = 483 ⟹ 17/23 is greater!"
        },
        {
          "title": "10% and 1% Split Technique",
          "mnemonic": "Find 10% by shifting decimal 1 place left; find 1% by shifting 2 places left!",
          "explanation": "To find 17% of 4,800: 10% = 480, 5% = 240, 2% = 96 ⟹ Total = 480 + 240 + 96 = 816.",
          "proTip": "Saves 90% of calculation time in complex table charts."
        },
        {
          "title": "Pie Chart Degree to Percent Rule",
          "mnemonic": "1% = 3.6° | Percentage = Degrees / 3.6",
          "explanation": "Direct conversion between degrees and percentages on a pie chart.",
          "proTip": "90° = 25%, 180° = 50%, 54° = 15%, 36° = 10%."
        },
        {
          "title": "Ogive Intersection Median Peg",
          "mnemonic": "Less-Than Ogive ∩ More-Than Ogive = MEDIAN!",
          "explanation": "The point of intersection of both cumulative curves projects down to the median on X-axis.",
          "proTip": "Mean cannot be determined graphically from ogives; only Median can."
        }
      ]
    },
    {
      "id": "p1-u8",
      "unitNumber": 8,
      "name": "ICT",
      "icon": "💻",
      "theoryNotes": [
        {
          "title": "Computer Hardware Anatomy, CPU Registers & Complete Memory Hierarchy",
          "points": [
            "• Central Processing Unit (CPU) Components: Arithmetic Logic Unit (ALU - executes arithmetic operations and boolean logic), Control Unit (CU - orchestrates fetch-decode-execute cycle and manages control buses), Registers (ultra-high-speed on-chip memory).",
            "• CPU Registers: Program Counter (PC - holds memory address of next instruction), Memory Address Register (MAR), Memory Buffer Register (MBR/MDR), Instruction Register (IR), Accumulator (AC).",
            "• Memory Hierarchy (Fastest/Costliest/Smallest to Slowest/Cheapest/Largest): CPU Registers → L1/L2/L3 Cache (SRAM) → Main Memory (RAM / DRAM) → Solid State Drives (SSD / NVMe Flash) → Magnetic Hard Disk (HDD) → Optical Storage (CD-ROM 700MB, DVD 4.7GB, Blu-Ray 25GB) → Magnetic Tape."
          ]
        },
        {
          "title": "Volatile vs Non-Volatile Memory (RAM vs ROM vs Flash)",
          "points": [
            "• Volatile Memory: Loses stored data immediately when electrical power is switched off. Includes Cache and RAM (Random Access Memory).",
            "  - SRAM (Static RAM): Built from flip-flops (6 transistors/bit); does not require periodic refreshing; ultra-fast; used for CPU Cache.",
            "  - DRAM (Dynamic RAM): Built from 1 transistor and 1 capacitor; capacitor leaks charge and requires periodic electrical refreshing thousands of times per second; dense, inexpensive; used for Main Memory.",
            "• Non-Volatile Memory: Retains stored data permanently even when powered down.",
            "  - ROM (Read Only Memory): Hardwired at factory; stores bootstrap loader BIOS/UEFI firmware.",
            "  - PROM (Programmable ROM - written once using electrical fuses), EPROM (Erasable PROM - erased by exposure to Ultraviolet UV light), EEPROM (Electrically Erasable PROM - erased electrically; foundation of Flash memory and modern SSDs)."
          ]
        },
        {
          "title": "Memory Storage Units & Binary Conversions",
          "points": [
            "• Bit: Fundamental binary digit (0 or 1). Nibble = 4 bits.",
            "• Byte: 8 bits (Basic unit of addressable storage in computers; can represent 2^8 = 256 unique symbols).",
            "• Storage Units Ascending Order (Powers of 2):",
            "  - Kilobyte (KB): 2^10 Bytes = 1,024 Bytes",
            "  - Megabyte (MB): 2^20 Bytes = 1,024 KB = 1,048,576 Bytes",
            "  - Gigabyte (GB): 2^30 Bytes = 1,024 MB",
            "  - Terabyte (TB): 2^40 Bytes = 1,024 GB",
            "  - Petabyte (PB): 2^50 Bytes = 1,024 TB",
            "  - Exabyte (EB): 2^60 Bytes = 1,024 PB",
            "  - Zettabyte (ZB): 2^70 Bytes = 1,024 EB",
            "  - Yottabyte (YB): 2^80 Bytes = 1,024 ZB."
          ]
        },
        {
          "title": "Number Systems & Binary-Hexadecimal Conversions",
          "points": [
            "• 4 Standard Bases: Binary (Base 2: symbols 0, 1), Octal (Base 8: symbols 0 to 7), Decimal (Base 10: symbols 0 to 9), Hexadecimal (Base 16: symbols 0 to 9 and A=10, B=11, C=12, D=13, E=14, F=15).",
            "• Grouping Rules: 1 Octal digit = exactly 3 binary bits; 1 Hexadecimal digit = exactly 4 binary bits (Nibble).",
            "• Signed Number Representation: Sign-Magnitude, 1's Complement (inverting all bits), 2's Complement (1's complement + 1). Range for n-bit 2's complement: -2^(n-1) to +2^(n-1) - 1."
          ]
        },
        {
          "title": "Character Encoding Systems (ASCII, ISCII & Unicode)",
          "points": [
            "• ASCII (American Standard Code for Information Interchange): Standard ASCII is a 7-bit code representing 2^7 = 128 characters (English alphabet, numbers, control characters: 'A' = 65, 'a' = 97, '0' = 48). Extended ASCII is 8-bit (256 characters).",
            "• ISCII (Indian Standard Code for Information Interchange): 8-bit encoding developed by CDAC for Indian Brahmic scripts.",
            "• Unicode: Universal multilingual character encoding standard capable of representing all writing systems and emojis in the world. Encodings: UTF-8 (Variable 1 to 4 bytes; backward-compatible with ASCII), UTF-16 (2 or 4 bytes), UTF-32 (Fixed 4 bytes)."
          ]
        },
        {
          "title": "Internet Architecture, Intranet, Extranet & IP Addressing",
          "points": [
            "• Internet: Global public network of interconnected computer networks using standard TCP/IP protocol suite.",
            "• Intranet: Private, secured internal network restricted to authorized members of an organization.",
            "• Extranet: Controlled private intranet extension accessible to trusted external vendors, partners, or clients.",
            "• IPv4 Addressing: 32-bit address displayed as 4 dotted-decimal octets (e.g. 192.168.1.1). Total theoretical addresses = 2^32 ≈ 4.3 billion. Classes A (/8), B (/16), C (/24), D (Multicast 224-239), E (Experimental 240-255). Private IPs: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.",
            "• IPv6 Addressing: 128-bit address displayed as 8 colon-separated hexadecimal blocks (e.g. 2001:0db8:85a3::8a2e:0370:7334). Eliminates address exhaustion (2^128 addresses).",
            "• MAC Address (Media Access Control): 48-bit physical hardware address burned into NIC by manufacturer, formatted in 6 hex pairs (e.g., 00:1A:2B:3C:4D:5E)."
          ]
        },
        {
          "title": "Internet Protocols, World Wide Web & Default Port Numbers",
          "points": [
            "• HTTP (Hypertext Transfer Protocol - Port 80): Stateless application protocol for distributed multimedia web pages.",
            "• HTTPS (HTTP Secure - Port 443): HTTP encrypted over SSL / TLS protocol.",
            "• FTP (File Transfer Protocol - Ports 20 data / 21 control): Client-server protocol for transferring files.",
            "• DNS (Domain Name System - Port 53): Translates human-readable domain names (e.g. google.com) into machine IP addresses.",
            "• DHCP (Dynamic Host Configuration Protocol - Ports 67/68): Automatically assigns dynamic IP addresses to network hosts.",
            "• Telnet (Port 23 - unencrypted remote terminal) vs SSH (Secure Shell - Port 22 - encrypted remote login)."
          ]
        },
        {
          "title": "Email Architecture, Protocols & Privacy Dynamics (To, CC, BCC)",
          "points": [
            "• SMTP (Simple Mail Transfer Protocol - Port 25/587): Push protocol used by client to send email to mail server and between mail servers.",
            "• POP3 (Post Office Protocol version 3 - Port 110): Pull protocol that downloads email from server to local client and deletes it from server by default.",
            "• IMAP (Internet Message Access Protocol - Port 143): Pull protocol that synchronizes email across multiple client devices while keeping messages stored on server.",
            "• Email Header Privacy Dynamics:",
            "  - To: Primary recipients expected to take action.",
            "  - CC (Carbon Copy): Secondary recipients kept informed. All recipients in To and CC see each other's addresses.",
            "  - BCC (Blind Carbon Copy): Hidden recipients. BCC addresses are stripped from message headers. To and CC recipients cannot see BCC recipients. BCC recipient sees sender, To, and CC, but cannot see other BCC recipients."
          ]
        },
        {
          "title": "Audio, Video & Image File Formats & Compression Typologies",
          "points": [
            "• Lossy Compression: Permanently discards redundant or imperceptible data to achieve massive file size reduction. Decompressed file is not bit-for-bit identical to original. E.g., JPEG (images), MP3, AAC (audio), MP4, MPEG, AVI (video).",
            "• Lossless Compression: Reduces file size by exploiting mathematical redundancies without losing any data. Original file is perfectly reconstructed on decompression. E.g., PNG, GIF, BMP, TIFF (images), FLAC, WAV, ALAC (audio), ZIP, RAR (data archives).",
            "• Vector Graphics (SVG, EPS): Mathematical formulas of lines and curves; can be scaled infinitely without pixelation or quality loss. Raster / Bitmap (JPEG, PNG): Grid of colored pixels; pixelates on zooming."
          ]
        },
        {
          "title": "Malware Typologies, Cyber Threats & Information Security",
          "points": [
            "• Computer Virus: Malicious code attached to a legitimate host executable program; requires human action to launch; replicates and corrupts files.",
            "• Computer Worm: Standalone self-replicating malware that propagates automatically across networks without host program, consuming bandwidth and crashing systems.",
            "• Trojan Horse: Malware disguised as genuine, useful software (e.g., game, utility) that conceals hidden malicious payload (backdoors, spyware).",
            "• Ransomware: Encrypts victim's data storage and demands cryptocurrency ransom payment for decryption key (e.g., WannaCry, Petya).",
            "• Spyware / Keylogger: Silently monitors user activity, logs keystrokes, and transmits passwords and credit card credentials to remote attacker.",
            "• Social Engineering & Attacks: Phishing (fraudulent emails mimicking authentic institutions to steal login details), Spoofing (faking sender identity/IP), Denial of Service (DoS / DDoS - flooding target server with botnet traffic to crash it)."
          ]
        },
        {
          "title": "Emerging Technologies: Cloud Computing, IoT, AI & Blockchain",
          "points": [
            "• Cloud Computing Service Models:",
            "  - IaaS (Infrastructure as a Service): Renting virtual hardware, servers, storage, networking (e.g., Amazon AWS EC2, Microsoft Azure VM).",
            "  - PaaS (Platform as a Service): Hardware plus operating system, development frameworks, databases for building software (e.g., Google App Engine, AWS Elastic Beanstalk).",
            "  - SaaS (Software as a Service): Fully managed end-user applications delivered over web (e.g., Google Docs, Gmail, Microsoft Office 365, Dropbox).",
            "• Internet of Things (IoT): Network of physical devices equipped with sensors, software, and connectivity to collect and exchange real-time data.",
            "• Blockchain: Decentralized, distributed, immutable cryptographic ledger of transactions replicated across peer-to-peer nodes."
          ]
        },
        {
          "title": "Digital Initiatives in Indian Higher Education (NMEICT Flagships)",
          "points": [
            "• SWAYAM & Swayam Prabha: National MOOC portal and 34+ educational DTH TV channels telecasting 24x7.",
            "• National Digital Library of India (NDLI): Virtual institutional repository developed by IIT Kharagpur hosting millions of academic books, articles, and theses.",
            "• e-ShodhSindhu: Consortia for Higher Education E-Resources formed by merging UGC-INFONET, INDEST-AICTE, and N-LIST, providing access to peer-reviewed e-journals.",
            "• Shodhganga: Digital reservoir of Indian doctoral theses; Shodhgangotri: Repository of approved research synopses.",
            "• e-Yantra: Project empowering colleges in embedded systems and robotics education, led by IIT Bombay.",
            "• FOSSEE (Free and Open Source Software for Education): Promotes open-source software tools (Scilab, Python, OpenFOAM) replacing proprietary commercial software.",
            "• SAMARTH: Open-source University Information Management System deployed across central and state universities.",
            "• NAD (National Academic Depository) & DigiLocker: 24x7 online digital storehouse for authenticating educational degrees and marksheets."
          ]
        },
        {
          "title": "Artificial Intelligence & Generative AI in Academic Research",
          "points": [
            "• Generative AI & Large Language Models (LLMs): Neural networks predicting token distributions for automated synthesis and text generation.",
            "• Academic Integrity & Hallucination: Fabrication of plausible-sounding but fictitious references and citations by AI models.",
            "• UGC/COPE Guidelines: AI tools cannot be credited as authors on research publications because they cannot assume legal responsibility."
          ]
        },
        {
          "title": "Internet of Things (IoT) and Smart Campus Architectures",
          "points": [
            "• IoT Architecture: Perception Layer (sensors, RFID), Network Layer (5G, WiFi, LoRaWAN), Application Layer (smart attendance, LMS integration).",
            "• Edge Computing vs Cloud: Processing sensitive biometric and sensor telemetry locally at network edges to reduce latency and bandwidth.",
            "• Smart Classroom Applications: Automated attendance via RFID/facial recognition, adaptive environmental controls, smart digital podiums."
          ]
        },
        {
          "title": "Green Computing, Carbon Footprint & E-Waste Management Rules",
          "points": [
            "• Green Computing: Environmentally responsible design, manufacture, use, and disposal of computing hardware with maximum energy efficiency.",
            "• E-Waste (Management) Rules 2022: Extended Producer Responsibility (EPR) mandates electronic manufacturers to ensure regulated recycling targets.",
            "• Hazardous Substances: Restriction of Hazardous Substances (RoHS) curbing Lead, Mercury, Cadmium, Hexavalent Chromium in IT equipment."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Storage Units Ascending Order",
          "mnemonic": "B - K - M - G - T - P - E - Z - Y: 'Big Kids Make Good Tacos, Please Eat Zesty Yum!'",
          "explanation": "Byte → KB → MB → GB → TB → PB → EB → ZB → YB.",
          "proTip": "Every successive unit is 2^10 = 1,024 times the previous one."
        },
        {
          "title": "BCC Privacy One-Way Mirror Rule",
          "mnemonic": "BCC Sees Everyone; NO ONE Sees BCC!",
          "explanation": "BCC recipients can see the sender and all To/CC addresses. However, To and CC recipients cannot see who is in BCC.",
          "proTip": "If sending to 100 students without revealing their personal emails, place all in BCC."
        },
        {
          "title": "IPv4 vs IPv6 Quick Bit Spec",
          "mnemonic": "IPv4 = 32 bits (4 bytes) | IPv6 = 128 bits (16 bytes) | MAC = 48 bits (6 bytes)",
          "explanation": "Direct factual question tested in almost every session.",
          "proTip": "IPv4 uses decimal dots; IPv6 uses hexadecimal colons."
        },
        {
          "title": "Cloud Models Pyramid (I-P-S)",
          "mnemonic": "IaaS = Hardware/VM | PaaS = Platform for Devs | SaaS = Ready Apps for Users",
          "explanation": "Infrastructure → Platform → Software as a Service.",
          "proTip": "Gmail and Google Docs are classic SaaS examples."
        },
        {
          "title": "Email Protocols Traffic Rule",
          "mnemonic": "SMTP = SENDING (Pushes mail) | POP3/IMAP = RECEIVING (Pulls mail)",
          "explanation": "SMTP sends mail outward; POP3/IMAP download incoming mail.",
          "proTip": "IMAP keeps mail synced on the server; POP3 downloads and removes it from server."
        },
        {
          "title": "Lossy vs Lossless Image Peg",
          "mnemonic": "Lossy = JPEG | Lossless = PNG, GIF, BMP",
          "explanation": "JPEG permanently drops imperceptible color data to achieve compact sizes.",
          "proTip": "PNG supports transparency and text without compression artifacts."
        }
      ]
    },
    {
      "id": "p1-u9",
      "unitNumber": 9,
      "name": "Environment",
      "icon": "🌿",
      "theoryNotes": [
        {
          "title": "Millennium Development Goals (MDGs 2000-2015): 8 Goals & Targets",
          "points": [
            "• Adopted at UN Millennium Summit 2000 in New York; target deadline 2015. 8 Goals, 21 Targets:",
            "  - Goal 1: Eradicate extreme poverty and hunger (halve proportion of people living on less than $1.25/day).",
            "  - Goal 2: Achieve universal primary education.",
            "  - Goal 3: Promote gender equality and empower women (eliminate gender disparity in schooling).",
            "  - Goal 4: Reduce child mortality (reduce under-five mortality rate by two-thirds).",
            "  - Goal 5: Improve maternal health (reduce maternal mortality ratio by three-quarters).",
            "  - Goal 6: Combat HIV/AIDS, malaria and other major diseases.",
            "  - Goal 7: Ensure environmental sustainability (halve proportion of people without safe drinking water).",
            "  - Goal 8: Develop a global partnership for development."
          ]
        },
        {
          "title": "Sustainable Development Goals (SDGs 2015-2030 - Agenda 2030): All 17 Goals in Sequence",
          "points": [
            "• Adopted at UN Sustainable Development Summit in September 2015 ('Transforming our World: the 2030 Agenda'). Applicable universally to both developing and developed nations. 17 Goals, 169 Targets (2015-2030):",
            "  - SDG 1: No Poverty (End poverty in all its forms everywhere).",
            "  - SDG 2: Zero Hunger (End hunger, achieve food security, promote sustainable agriculture).",
            "  - SDG 3: Good Health and Well-Being.",
            "  - SDG 4: Quality Education (Ensure inclusive and equitable quality education and lifelong learning).",
            "  - SDG 5: Gender Equality (Achieve gender equality and empower all women and girls).",
            "  - SDG 6: Clean Water and Sanitation (Ensure availability and sustainable management of water).",
            "  - SDG 7: Affordable and Clean Energy.",
            "  - SDG 8: Decent Work and Economic Growth.",
            "  - SDG 9: Industry, Innovation and Infrastructure.",
            "  - SDG 10: Reduced Inequalities (Reduce inequality within and among countries).",
            "  - SDG 11: Sustainable Cities and Communities.",
            "  - SDG 12: Responsible Consumption and Production.",
            "  - SDG 13: Climate Action (Take urgent action to combat climate change and its impacts).",
            "  - SDG 14: Life Below Water (Conserve and sustainably use oceans, seas and marine resources).",
            "  - SDG 15: Life on Land (Protect, restore terrestrial ecosystems, halt biodiversity loss).",
            "  - SDG 16: Peace, Justice and Strong Institutions.",
            "  - SDG 17: Partnerships for the Goals."
          ]
        },
        {
          "title": "Anthropogenic Activities & Impact on Natural Ecosystems",
          "points": [
            "• Anthropogenic Impacts: Human-induced environmental modifications: Deforestation, urbanization, fossil-fuel burning, intensive chemical agriculture, industrial effluent discharge, habitat fragmentation.",
            "• Ecological Footprint: Measure of human demand on the Earth's ecosystems (measured in global hectares gha). Earth Overshoot Day marks the date when humanity's resource consumption exceeds Earth's annual regenerative capacity.",
            "• Biomes & Biodiversity Hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland (Nicobar Islands) in India."
          ]
        },
        {
          "title": "Air Pollutants: Primary vs Secondary Pollutants & Smog Formation",
          "points": [
            "• Primary Pollutants: Emitted directly from identifiable sources into atmosphere: Carbon Monoxide (CO - incomplete combustion, binds with hemoglobin to form carboxyhemoglobin causing asphyxiation), Sulfur Dioxide (SO2 - coal power plants, primary cause of acid rain), Nitric Oxide (NO), Particulate Matter (PM2.5, PM10).",
            "• Secondary Pollutants: Formed in atmosphere through chemical/photochemical reactions among primary pollutants and atmospheric gases: Tropospheric / Ground-Level Ozone (O3), Peroxyacetyl Nitrate (PAN), Smog, Acid Rain (H2SO4, HNO3).",
            "• Classical Smog (London Smog): Reducing smog, formed in cool humid winter climate; contains coal smoke + fog + SO2.",
            "• Photochemical Smog (Los Angeles Smog): Oxidizing smog, formed in warm, sunny, dry climate from reaction of Nitrogen Oxides (NOx) and Volatile Organic Compounds (VOCs) in sunlight; rich in Ozone, PAN, aldehydes; causes intense eye irritation."
          ]
        },
        {
          "title": "National Air Quality Index (AQI) Standards in India",
          "points": [
            "• National AQI (Launched 2014 by MoEFCC - 'One Number - One Colour - One Description'): Monitors 8 Pollutants: PM10, PM2.5, Nitrogen Dioxide (NO2), Sulfur Dioxide (SO2), Carbon Monoxide (CO), Ozone (O3), Ammonia (NH3), Lead (Pb).",
            "• 6 AQI Categories & Numerical Ranges:",
            "  - Good: 0 to 50 (Minimal impact).",
            "  - Satisfactory: 51 to 100 (Minor breathing discomfort to sensitive people).",
            "  - Moderate: 101 to 200 (Breathing discomfort to people with asthma and heart disease).",
            "  - Poor: 201 to 300 (Breathing discomfort to most people on prolonged exposure).",
            "  - Very Poor: 301 to 400 (Respiratory illness on prolonged exposure).",
            "  - Severe: 401 to 500 (Affects healthy people and seriously impacts those with existing diseases)."
          ]
        },
        {
          "title": "Major Greenhouse Gases (GHG) & Global Warming Potential (GWP)",
          "points": [
            "• Greenhouse Effect: Trapping of outgoing terrestrial infrared radiation by atmospheric gases, warming troposphere.",
            "• Primary Greenhouse Gases: Water Vapor (H2O - largest natural contributor), Carbon Dioxide (CO2 - largest anthropogenic contributor ~65%), Methane (CH4 - wetlands, rice paddies, enteric fermentation ~16%), Nitrous Oxide (N2O - synthetic fertilizers ~6%), Fluorinated Gases (CFCs, HFCs, PFCs, SF6).",
            "• Global Warming Potential (100-Year GWP relative to CO2 = 1):",
            "  - CO2: 1 (Baseline)",
            "  - Methane (CH4): 28 to 36 times",
            "  - Nitrous Oxide (N2O): 265 to 298 times",
            "  - HFC-23: 12,400 times",
            "  - Sulfur Hexafluoride (SF6): 23,500 times (Highest single chemical GWP!)."
          ]
        },
        {
          "title": "Water Pollution Indicators & Contaminant Pathologies",
          "points": [
            "• Dissolved Oxygen (DO): Healthy freshwater requires DO ≥ 4 to 6 mg/L. As temperature rises or organic pollution increases, DO decreases.",
            "• Biochemical Oxygen Demand (BOD): Amount of oxygen required by aerobic microbes to biologically decompose organic matter in a water sample over 5 days at 20°C (BOD5). High BOD indicates heavy organic sewage pollution and depleted DO.",
            "• Chemical Oxygen Demand (COD): Oxygen required to chemically oxidize all organic matter (both biodegradable and non-biodegradable) using a strong chemical oxidant (potassium dichromate). COD is ALWAYS strictly greater than BOD (COD > BOD).",
            "• Eutrophication: Excessive nutrient runoff (Phosphates and Nitrates) causing algal blooms, light blockage, massive microbial decomposition, DO depletion, and fish kills.",
            "• Heavy Metal Contaminants & Specific Diseases:",
            "  - Mercury (Hg): Minamata Disease (severe neurological damage, numbness, ataxia).",
            "  - Cadmium (Cd): Itai-Itai Disease ('Ouch-ouch' disease - severe osteomalacia, bone fractures, kidney failure).",
            "  - Nitrate (NO3): Blue Baby Syndrome (Methemoglobinemia - impaired blood oxygen carrying capacity in infants).",
            "  - Arsenic (As): Black Foot Disease (Arsenicosis - peripheral vascular disease, skin lesions, gangrene).",
            "  - Fluoride (F): Dental and Skeletal Fluorosis (teeth mottling, crippling bone deformities)."
          ]
        },
        {
          "title": "Soil Pollution, Agricultural Runoff & Bioaccumulation",
          "points": [
            "• Soil Contamination: Heavy metals (lead, cadmium), chemical pesticide runoff, excessive nitrogenous fertilizers (causes soil acidification).",
            "• Bioaccumulation vs Biomagnification:",
            "  - Bioaccumulation: Increase in concentration of a non-biodegradable chemical within an individual organism over its lifetime (e.g., DDT accumulating in fish fat tissue).",
            "  - Biomagnification / Biological Amplification: Progressive increase in chemical concentration at each successively higher trophic level along a food chain (e.g., Phytoplankton → Zooplankton → Fish → Fish-eating Osprey/Eagle: top predators suffer highest concentration, eggshell thinning)."
          ]
        },
        {
          "title": "CPCB Noise Pollution Standards in India",
          "points": [
            "• Noise Pollution (Regulation and Control) Rules 2000 (Central Pollution Control Board CPCB):",
            "  - Industrial Zone: Day Limit = 75 dB | Night Limit = 70 dB.",
            "  - Commercial Zone: Day Limit = 65 dB | Night Limit = 55 dB.",
            "  - Residential Zone: Day Limit = 55 dB | Night Limit = 45 dB.",
            "  - Silence Zone: Day Limit = 50 dB | Night Limit = 40 dB.",
            "• Definitions: Day Time = 6:00 AM to 10:00 PM | Night Time = 10:00 PM to 6:00 AM.",
            "• Silence Zone Definition: Area comprising not less than 100 meters around hospitals, educational institutions, courts, and religious shrines."
          ]
        },
        {
          "title": "Waste Management Rules: Solid, Biomedical, Hazardous & E-Waste",
          "points": [
            "• Solid Waste Management Rules 2016: Segregation at source into 3 streams: Biodegradable (Wet waste), Non-biodegradable (Dry recyclable), Domestic hazardous.",
            "• Biomedical Waste Management Rules 2016: Color-coded bin segregation: Yellow (anatomical waste, soiled dressings - incineration), Red (contaminated plastics, catheters, syringes - autoclaving/recycling), White translucent (needles, sharps - puncture proof), Blue (glassware, medicine vials).",
            "• E-Waste Management Rules 2022: Covers electrical/electronic equipment. Extended Producer Responsibility (EPR) mandates manufacturers/importers to collect and channelize electronic waste to registered recyclers."
          ]
        },
        {
          "title": "Renewable Energy Resources & India's Clean Energy Targets",
          "points": [
            "• Solar Energy: Photovoltaic (PV) cells convert sunlight directly into electricity via photoelectric effect (Silicon semiconductors). Concentrated Solar Power (CSP) uses mirrors.",
            "• Wind Energy: Kinetic energy of wind converted by aerodynamic turbine blades. Betz's Law: Maximum theoretical wind turbine efficiency = 59.3%.",
            "• Biomass & Biogas: Anaerobic digestion of organic matter producing biogas (primarily Methane 55-70% and CO2 30-45%).",
            "• Geothermal Energy: Harnesses natural subsurface geothermal steam/hot water.",
            "• India's Clean Energy Ambitions (COP26 Glasgow 5 Pledges / Panchamrit):",
            "  - Achieve 500 GW of non-fossil energy capacity by 2030.",
            "  - Meet 50% of energy requirements from renewable energy by 2030.",
            "  - Reduce total projected carbon emissions by 1 billion tonnes by 2030.",
            "  - Reduce carbon intensity of economy by 45% by 2030.",
            "  - Achieve Net Zero Carbon Emissions by 2070."
          ]
        },
        {
          "title": "Natural Hazards & Disaster Management (NDMA & Sendai Framework)",
          "points": [
            "• Disaster Management Cycle: 1. Mitigation (risk reduction before disaster), 2. Preparedness (early warning, drills), 3. Response (immediate search, rescue, relief during disaster), 4. Recovery (rehabilitation, reconstruction, 'Build Back Better').",
            "• Disaster Management Act 2005: Established National Disaster Management Authority (NDMA), chaired by the Prime Minister of India. State DMA chaired by Chief Minister.",
            "• Sendai Framework for Disaster Risk Reduction (2015-2030): Adopted at 3rd UN World Conference in Sendai, Japan. Successor to Hyogo Framework (2005-2015). 4 Priorities for Action: Understanding risk, Strengthening governance, Investing in resilience, Enhancing disaster preparedness for effective response and 'Build Back Better'."
          ]
        },
        {
          "title": "Environmental Protection Act (1986) & National Action Plan on Climate Change (NAPCC)",
          "points": [
            "• Environment (Protection) Act, 1986: Enacted under Article 253 of Indian Constitution in the aftermath of Bhopal Gas Tragedy (1984). Umbrella legislation empowering Central Government to protect and improve environmental quality, set industrial emission standards, and regulate hazardous substances.",
            "• National Action Plan on Climate Change (NAPCC - Launched 2008): 8 Core National Missions:",
            "  1. National Solar Mission",
            "  2. National Mission for Enhanced Energy Efficiency (NMEEE / PAT scheme)",
            "  3. National Mission on Sustainable Habitat",
            "  4. National Water Mission (20% improvement in water use efficiency)",
            "  5. National Mission for Sustaining the Himalayan Ecosystem",
            "  6. National Mission for a Green India (afforestation)",
            "  7. National Mission for Sustainable Agriculture",
            "  8. National Mission on Strategic Knowledge for Climate Change."
          ]
        },
        {
          "title": "Major International Environmental Treaties & Agreements",
          "points": [
            "• Ramsar Convention (1971, Iran): Treaty for the conservation and sustainable utilization of Wetlands. Montreux Record: register of wetland sites where ecological character has changed or is threatened.",
            "• Stockholm Conference (1972): UN Conference on the Human Environment; established UNEP (Nairobi, Kenya); declared June 5 as World Environment Day.",
            "• Vienna Convention (1985) & Montreal Protocol (1987): Legally binding global treaty to phase out Ozone Depleting Substances (CFCs, Halons). Kigali Amendment (2016) phases down greenhouse HFCs.",
            "• Rio Earth Summit (1992, UNCED): Produced Agenda 21, Rio Declaration, and established 3 Rio Conventions: UNFCCC (Climate Change), CBD (Convention on Biological Diversity), UNCCD (Desertification).",
            "• Kyoto Protocol (COP3, 1997 - entered force 2005): Legally binding greenhouse gas reduction targets on Annex-I developed nations. Mechanisms: Clean Development Mechanism (CDM), Joint Implementation (JI), International Emissions Trading (Carbon Credits).",
            "• Paris Agreement (COP21, 2015): Legally binding treaty committing all nations to hold global temperature increase to well below 2.0°C above pre-industrial levels, and pursue efforts to limit to 1.5°C through Nationally Determined Contributions (NDCs).",
            "• International Solar Alliance (ISA): Jointly launched in 2015 by India and France at Paris COP21; treaty-based intergovernmental alliance headquartered at Gurugram, India."
          ]
        },
        {
          "title": "Coastal Regulation Zones (CRZ) & Marine Ecosystem Protection",
          "points": [
            "• CRZ Classification (2019 Notification): CRZ-I (Ecologically sensitive areas e.g., mangroves, corals), CRZ-II (developed urban shoreline), CRZ-III (rural coastal areas), CRZ-IV (water area up to 12 nautical miles).",
            "• No Development Zone (NDZ): 20 meters from High Tide Line in densely populated rural areas (CRZ-III A); 50 meters in less populated (CRZ-III B).",
            "• Coral Bleaching Drivers: Thermal stress from rising sea surface temperatures disrupting symbiotic zooxanthellae algae."
          ]
        },
        {
          "title": "Biodiversity Hotspots & Protected Area Network of India",
          "points": [
            "• Norman Myers Hotspot Criteria: Must contain at least 1,500 endemic vascular plant species and have lost ≥70% of its primary vegetation.",
            "• 4 Hotspots in India: Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland (Nicobar Islands).",
            "• Protected Hierarchy: National Parks (highest protection, no human exploitation), Wildlife Sanctuaries (limited traditional rights allowed), Biosphere Reserves (Core, Buffer, Transition zones)."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "First 6 SDGs Human Story",
          "mnemonic": "Poverty → Hunger → Health → Education → Gender → Water",
          "explanation": "SDG 1 No Poverty, 2 Zero Hunger, 3 Good Health, 4 Quality Education, 5 Gender Equality, 6 Clean Water.",
          "proTip": "Remember: A poor hungry person gets healthy, goes to school, treats girls equally, and drinks clean water."
        },
        {
          "title": "CPCB Noise Limits Formula (75, 65, 55, 50)",
          "mnemonic": "ICRS: Industrial (75/70), Commercial (65/55), Residential (55/45), Silence (50/40)",
          "explanation": "Day limits drop by 10 dB each step down to residential, then 5 dB for silence. Night limit is 10 dB lower (except industrial which is 5 dB lower).",
          "proTip": "Silence zone is defined as within 100 meters of hospitals, educational institutions, and courts."
        },
        {
          "title": "Major Treaties Subject Peg",
          "mnemonic": "Montreal = Ozone | Kyoto = Greenhouse Gas (Binding) | Paris = 1.5-2°C (NDCs) | Basel = Hazardous Waste | Ramsar = Wetlands",
          "explanation": "Direct matching question repeated in almost every NET/SET exam.",
          "proTip": "Montreal Protocol is the only UN treaty ratified by all 198 member states."
        },
        {
          "title": "Water Contaminant Disease Mnemonic",
          "mnemonic": "Mercury = Minamata | Cadmium = Itai-Itai | Nitrate = Blue Baby | Arsenic = Black Foot",
          "explanation": "Direct pairing for List I & List II questions.",
          "proTip": "Fluoride in water causes fluorosis (teeth & bones); excess lead causes neurological anemia."
        },
        {
          "title": "GWP Hierarchy Shortcut",
          "mnemonic": "CO2 (1) < CH4 (~30) < N2O (~300) < HFCs (10,000+) < SF6 (23,500 - HIGHEST!)",
          "explanation": "Sulfur Hexafluoride has the highest global warming potential of all gases.",
          "proTip": "Carbon dioxide has GWP of 1 by definition, serving as the benchmark."
        },
        {
          "title": "NAPCC 8 Missions Peg",
          "mnemonic": "Solar, Energy, Habitat, Water, Himalayas, Green, Agriculture, Knowledge",
          "explanation": "The 8 pillars of India's climate policy launched in 2008.",
          "proTip": "Nuclear power is NOT one of the 8 missions of NAPCC."
        }
      ]
    },
    {
      "id": "p1-u10",
      "unitNumber": 10,
      "name": "Higher Education",
      "icon": "🏛️",
      "theoryNotes": [
        {
          "title": "Institutions of Higher Learning in Ancient India: Takshashila, Nalanda, Valabhi, Vikramashila",
          "points": [
            "• Takshashila (Taxila - now in Pakistan): Oldest centre of learning in ancient world (c. 6th century BCE). World-renowned for Statecraft & Economics (Chanakya / Kautilya who composed Arthashastra here), Medicine (Charaka), Surgery (Jivaka - physician of Buddha), and Sanskrit Grammar (Panini). Not a centralized degree-granting university; independent teachers taught customized curricula.",
            "• Nalanda (Bihar): Founded by Kumaragupta I (Gupta Dynasty, 5th century CE). World's premier residential Buddhist Mahavihara hosting 10,000 students and 2,000 teachers from China, Korea, Tibet, and Persia. Famous for its magnificent 9-storey library 'Dharmaganja' (consisting of 3 towering buildings: Ratnasagara, Ratnodadhi, Ratnaranjaka). Visited and chronicled by Chinese pilgrims Hiuen Tsang and I-Qing. Destroyed by Bakhtiyar Khilji in 1193 CE.",
            "• Valabhi (Gujarat): Western Indian centre of Buddhist learning, specializing in Hinayana Buddhism, statecraft, administration, law, and economics. Rivalled Nalanda; visited by Hiuen Tsang.",
            "• Vikramashila (Bhagalpur, Bihar): Founded by King Dharmapala (Pala Dynasty, late 8th century CE) to counterbalance Nalanda. Celebrated international centre for Tantric Buddhism, logic, metaphysics, and grammar. Headed by the scholar Atisa Dipankara Srijnana.",
            "• Other Ancient Centres: Odantapuri (Bihar - Pala dynasty, Mahayana Buddhism), Jagaddala (Bengal - Pala dynasty, Vajrayana Buddhism), Mithila (Logic - Nyaya school founded by Gangesha Upadhyaya), Nadia / Navadvipa (Bengal - Navya Nyaya school)."
          ]
        },
        {
          "title": "Ancient Educational Concepts & Cultural Traditions",
          "points": [
            "• Gurukul System: Residential learning system where students lived with the Guru as family members. Focused on holistic character formation, self-reliance, and spiritual development.",
            "• Educational Rituals:",
            "  - Upanayana Ceremony: Sacred thread initiation ceremony marking entry into student life (Brahmacharya).",
            "  - Upakarma: Annual ceremony commencing academic study of Vedas.",
            "  - Samavartana Ceremony: Graduation convocation ceremony marking completion of education and transition to Grihastha ashrama.",
            "  - Pabbajja & Upasampada: Buddhist initiation ceremonies (Pabbajja marks entry into novitiate at age 8; Upasampada marks ordination as full monk at age 20)."
          ]
        },
        {
          "title": "Pre-Independence Milestones in Indian Education",
          "points": [
            "• Charter Act of 1813: First official British state allocation of Rs. 1 Lakh per annum for the revival of literature and promotion of science among natives.",
            "• Macaulay's Minute (1835): Approved by Lord William Bentinck. Advocated English medium of instruction, European sciences, and the 'Downward Filtration Theory' (educating an elite Indian class who would interpret and filter knowledge down to the masses).",
            "• Wood's Despatch (1854): Charles Wood. Universally hailed as the 'Magna Carta of English Education in India'. Recommended vernacular primary schools, Anglo-vernacular high schools, affiliated colleges, grants-in-aid system, female education, and establishment of universities.",
            "• 1857: Establishment of the first three modern Indian universities at Calcutta, Bombay, and Madras (modelled on University of London as examining and affiliating bodies)."
          ]
        },
        {
          "title": "British Educational Commissions (Hunter to Sargent)",
          "points": [
            "• Hunter Education Commission (1882): Lord Ripon. Evaluated progress of Wood's Despatch; emphasized primary education expansion and private management of secondary schools.",
            "• Indian Universities Act 1904 (Lord Curzon): Based on Raleigh Commission (1902). Imposed strict government control over university senates and tightened affiliation standards.",
            "• Sadler Commission / Calcutta University Commission (1917): Recommended 12-year school course (10+2 intermediate stage) and 3-year degree course; creation of Intermediate Boards and secondary education departments.",
            "• Hartog Committee (1929): Emphasized consolidation and quality improvement over quantitative expansion; targeted wastage (dropping out) and stagnation (repeating grades) in primary schools.",
            "• Wardha Scheme of Basic Education / Nai Talim (1937): Formulated by Mahatma Gandhi, committee headed by Dr. Zakir Hussain. Mother-tongue instruction, free and compulsory education for 7-14 years, craft-centred self-supporting education.",
            "• Sargent Report (1944): Post-war educational development plan proposing universal free primary education within 40 years."
          ]
        },
        {
          "title": "Post-Independence Commissions: Radhakrishnan, Mudaliar & Kothari",
          "points": [
            "• Radhakrishnan Commission (1948-49): University Education Commission. Headed by Dr. S. Radhakrishnan. First education commission of independent India. Recommended establishing the University Grants Commission (UGC), integrating general and vocational education, setting up rural universities, and 3-year bachelor's degree courses.",
            "• Mudaliar Commission (1952-53): Secondary Education Commission. Headed by Dr. A. Lakshmanaswami Mudaliar. Recommended multipurpose secondary schools, technical streams, and three-language formula.",
            "• Kothari Commission (1964-66): Education and National Development. Headed by Prof. D.S. Kothari. Most comprehensive commission in Indian history. Proposed: 10+2+3 educational structure, Common School System for social justice, neighborhood schools, work experience (SUPW), and allocating at least 6% of national income / GDP to education."
          ]
        },
        {
          "title": "National Policies on Education (NPE 1968, NPE 1986 & 1992 Revision)",
          "points": [
            "• National Policy on Education (NPE 1968): Formulated under Indira Gandhi government based on Kothari Commission. Advocated 10+2+3 structure, three-language formula, and 6% of GDP allocation.",
            "• National Policy on Education (NPE 1986): Formulated under Rajiv Gandhi government. Emphasized equality of educational opportunities, Operation Blackboard (providing minimum essential physical facilities to primary schools), establishment of Navodaya Vidyalayas for talented rural children, vocationalization of secondary education, and distance learning (IGNOU established in 1985).",
            "• Program of Action (POA 1992): Revision of NPE 1986 based on recommendations of Acharya Ramamurti Committee (1990) and Janardhana Reddy Committee (1992)."
          ]
        },
        {
          "title": "National Knowledge Commission (2005) & Yashpal Committee (2009)",
          "points": [
            "• National Knowledge Commission (NKC 2005-2008): High-level advisory body constituted under Prime Minister Dr. Manmohan Singh, chaired by Sam Pitroda. Recommended massive expansion of higher education to create 1,500 universities by 2020 to reach 30% GER, establishing an Independent Regulatory Authority for Higher Education (IRAHE), and upgrading library networks.",
            "• Yashpal Committee Report (2009): 'The Committee to Advise on Renovation and Rejuvenation of Higher Education', chaired by Prof. Yashpal. Recommended: Dismantling artificial boundaries between disciplines, curbing the commercialization of deemed universities, and establishing an overarching single apex body called National Commission for Higher Education and Research (NCHER) to replace UGC, AICTE, and NCTE."
          ]
        },
        {
          "title": "National Education Policy (NEP 2020): Schooling Structural Transformation (5+3+3+4)",
          "points": [
            "• Formulation: Drafted by Committee for Draft National Education Policy chaired by eminent scientist Dr. K. Kasturirangan (submitted 2019, approved July 29, 2020). Replaces NPE 1986 after 34 years.",
            "• School Structure Overhaul: Replaces 10+2 structure with a pedagogical 5+3+3+4 design covering ages 3 to 18:",
            "  1. Foundational Stage (5 Years: Ages 3 to 8): 3 years of Anganwadi / Pre-school + Classes 1 & 2. Play-based, multi-level learning. NIPUN Bharat Mission for Foundational Literacy and Numeracy (FLN).",
            "  2. Preparatory Stage (3 Years: Ages 8 to 11): Classes 3 to 5. Experiential, activity-based learning across language, math, science.",
            "  3. Middle Stage (3 Years: Ages 11 to 14): Classes 6 to 8. Subject-oriented learning, introduction of coding and vocational crafts (10 bagless days).",
            "  4. Secondary Stage (4 Years: Ages 14 to 18): Classes 9 to 12. Multidisciplinary study, high critical thinking, flexible subject choice across arts/science/commerce without rigid streaming."
          ]
        },
        {
          "title": "NEP 2020 Higher Education Reforms: Multiple Entry-Exit & Credit Framework",
          "points": [
            "• Targets: Gross Enrolment Ratio (GER) in higher education to increase to 50% by 2035 (from 26.3% in 2018). Education expenditure target = 6% of GDP.",
            "• Undergraduate Degree Restructuring (4-Year Holistic Multidisciplinary UG Program):",
            "  - Exit after 1 Year: Certificate in a discipline.",
            "  - Exit after 2 Years: Advanced Diploma.",
            "  - Exit after 3 Years: Bachelor's Degree.",
            "  - Exit after 4 Years: Multidisciplinary Bachelor's Degree with Research (eligible for direct 1-year Master's or direct PhD).",
            "• MPhil Discontinuation: Master of Philosophy (MPhil) program completely discontinued.",
            "• Academic Bank of Credits (ABC) & APAAR ID: Digital commercial bank for academic credits earned by students from authorized HEIs, enabling seamless credit transfer and institutional mobility ('One Nation, One Student ID')."
          ]
        },
        {
          "title": "HECI Structure: 4 Independent Verticals of Higher Education Commission of India",
          "points": [
            "• HECI (Higher Education Commission of India): Single overarching umbrella apex regulatory body replacing UGC and AICTE. Excludes Medical (NMC) and Legal (BCI) education.",
            "• 4 Independent Verticals:",
            "  1. NHERC (National Higher Education Regulatory Council): Single regulator for higher education; light-touch, integrity-based regulation.",
            "  2. NAC (National Accreditation Council): Meta-accreditation body overseeing multi-agency accreditation ecosystem.",
            "  3. HEGC (Higher Education Grants Council): Independent body for transparent funding and financing of higher educational institutions based on merit.",
            "  4. GEC (General Education Council): Standard-setting body framing Expected Learning Outcomes and the National Higher Education Qualification Framework (NHEQF)."
          ]
        },
        {
          "title": "Quality Assurance Bodies: NAAC Assessment Criteria & Grading System",
          "points": [
            "• National Assessment and Accreditation Council (NAAC): Autonomous body established in 1994 by UGC, HQ at Bengaluru. Evaluates performance of HEIs across 7 Core Assessment Criteria:",
            "  1. Curricular Aspects",
            "  2. Teaching-Learning and Evaluation",
            "  3. Research, Innovations and Extension",
            "  4. Infrastructure and Learning Resources",
            "  5. Student Support and Progression",
            "  6. Governance, Leadership and Management",
            "  7. Institutional Values and Best Practices.",
            "• NAAC Grading Scale (CGPA Based): A++ (3.51 - 4.00), A+ (3.26 - 3.50), A (3.01 - 3.25), B++ (2.76 - 3.00), B+ (2.51 - 2.75), B (2.01 - 2.50), C (1.51 - 2.00), D (≤ 1.50 - Not Accredited)."
          ]
        },
        {
          "title": "National Institutional Ranking Framework (NIRF) & Assessment Parameters",
          "points": [
            "• National Institutional Ranking Framework (NIRF): Launched in September 2015 by Ministry of Education (MoE). Annually ranks Indian universities and colleges across 5 Broad Parameters:",
            "  1. Teaching, Learning & Resources (TLR - Student strength, faculty-student ratio, faculty qualifications, financial resources).",
            "  2. Research and Professional Practice (RPC - Publications, citations, patents, research project funding).",
            "  3. Graduation Outcomes (GO - Metric for university examinations, median salary of placed students).",
            "  4. Outreach and Inclusivity (OI - Regional diversity, percentage of women, economically/socially disadvantaged students).",
            "  5. Perception (PR - Peer perception among academics and employers)."
          ]
        },
        {
          "title": "Types of Universities in India (Central, State, Deemed, Private & INIs)",
          "points": [
            "• Central Universities: Established by an Act of Parliament, funded fully by Central Government through UGC. President of India is Visitor.",
            "• State Universities: Established by an Act of State Legislature, funded primarily by state government. Governor of State is Chancellor.",
            "• Deemed-to-be Universities: Institutions of high academic excellence granted autonomous university status under Section 3 of the UGC Act, 1956.",
            "• Private Universities: Established by an Act of State Legislature, self-financed, cannot affiliate outside colleges.",
            "• Institutes of National Importance (INI): Conferred by an Act of Parliament (IITs, IIMs, IISc, NITs, AIIMS). Highest academic and research autonomy."
          ]
        },
        {
          "title": "Statutory Professional Councils in Higher Education",
          "points": [
            "• All India Council for Technical Education (AICTE): Regulates technical, engineering, management, and pharmacy education (Est. 1945, statutory status 1987).",
            "• National Council for Teacher Education (NCTE): Regulates teacher education curricula (B.Ed, M.Ed) (Statutory status 1993).",
            "• Bar Council of India (BCI): Regulates legal education and law universities.",
            "• Pharmacy Council of India (PCI): Regulates pharmacy education under Pharmacy Act 1948.",
            "• Indian Council of Agricultural Research (ICAR): Apex body coordinating agricultural research and education (Est. 1929).",
            "• National Medical Commission (NMC): Replaced Medical Council of India (MCI) in 2020 to regulate medical education.",
            "• Council of Architecture (CoA): Regulates architectural education under Architects Act 1972."
          ]
        },
        {
          "title": "Rashtriya Uchchatar Shiksha Abhiyan (RUSA) & PM-USHA Scheme",
          "points": [
            "• RUSA Objectives: Centrally Sponsored Scheme launched in 2013 to provide strategic funding to eligible state higher educational institutions.",
            "• Funding Pattern: 60:40 for general states; 90:10 for Special Category, North-Eastern, and Himalayan states.",
            "• Transition to PM-USHA (2023): Pradhan Mantri Uchchatar Shiksha Abhiyan prioritizing equity, access, multidisciplinary education, and infrastructure in aspirational districts."
          ]
        },
        {
          "title": "Academic Bank of Credits (ABC) & APAAR ID Ecosystem",
          "points": [
            "• Academic Bank of Credits (ABC): Digital repository under NEP 2020 enabling credit transfer and multiple entry/exit options across universities.",
            "• APAAR ID ('One Nation, One Student ID'): Automated Permanent Academic Account Registry 12-digit unique digital identifier tracking student academic journey from pre-primary to higher education.",
            "• Multiple Entry/Exit: Certificate after 1 year, Diploma after 2 years, Bachelor's Degree after 3 years, Bachelor's with Research after 4 years."
          ]
        }
      ],
      "shortTricks": [
        {
          "title": "Post-Independence Commissions Chronology",
          "mnemonic": "RMK - NYN: 'Radhakrishnan (1948) → Mudaliar (1952) → Kothari (1964) → NPE (1986) → Yashpal (2009) → NEP (2020)'",
          "explanation": "Chronological order of key post-independence educational commissions.",
          "proTip": "If question asks about 6% of GDP recommendation, it first appeared in Kothari Commission (1964-66)."
        },
        {
          "title": "HECI 4 Verticals Mnemonic",
          "mnemonic": "R-A-F-S: 'Regulation, Accreditation, Funding, Standards'",
          "explanation": "NHERC (Regulation) | NAC (Accreditation) | HEGC (Funding) | GEC (Standards).",
          "proTip": "Medical (NMC) and Legal (BCI) education are excluded from HECI."
        },
        {
          "title": "Ancient Universities Specialization Peg",
          "mnemonic": "Taxila = Medicine & Chanakya | Nalanda = Mahayana & Library | Vikramashila = Tantric | Valabhi = Hinayana",
          "explanation": "Frequent matching question in UGC NET List I & List II.",
          "proTip": "Nalanda's library Dharmaganja had 3 buildings: Ratnasagara, Ratnodadhi, and Ratnaranjaka."
        },
        {
          "title": "NIRF 5 Parameters Peg",
          "mnemonic": "T-R-G-O-P: 'Teaching, Research, Graduation, Outreach, Perception'",
          "explanation": "TLR + RPC + GO + OI + PR = 100% total score.",
          "proTip": "Teaching Learning Resources (TLR) and Research (RPC) carry the highest weightage."
        },
        {
          "title": "NEP 2020 School Stages Peg",
          "mnemonic": "5 + 3 + 3 + 4: 'Foundational (3-8), Preparatory (8-11), Middle (11-14), Secondary (14-18)'",
          "explanation": "Replaces 10+2 structure with 4 distinct pedagogical stages.",
          "proTip": "Coding and vocational crafts begin at the Middle Stage (Class 6)."
        },
        {
          "title": "NAAC 7 Criteria Shortcut",
          "mnemonic": "Curriculum, Teaching, Research, Infrastructure, Student Support, Governance, Institutional Values",
          "explanation": "The 7 pillars used to award NAAC CGPA grades.",
          "proTip": "Autonomous status and NIRF rankings rely heavily on NAAC score."
        }
      ]
    }
  ]
};
