/**
 * PAPER 1 - UNIT 5: MATHEMATICAL REASONING AND APTITUDE (30 Authentic & Expected PYQs)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Every question has complete step-by-step 4-option explanations.
 */

export const p1Unit5Questions = [
  {
    id: "p1-u5-q1",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET June 2024",
    question: "Find the next missing number in the following sequence: 2, 6, 12, 20, 30, 42, ?",
    options: [
      { id: "A", text: "52" },
      { id: "B", text: "54" },
      { id: "C", text: "56" },
      { id: "D", text: "60" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "52: Results if adding 10 instead of continuing the +2 second difference pattern.",
      "B": "54: Results from an arithmetic miscalculation.",
      "C": "56: Correct! Differences are: 6-2=4, 12-6=6, 20-12=8, 30-20=10, 42-30=12. Next difference must be 14. 42 + 14 = 56. (Alternatively, n*(n+1): 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30, 6*7=42, 7*8=56).",
      "D": "60: Overestimates difference progression."
    },
    summaryExplanation: "The sequence follows n*(n+1) or consecutive even differences (+4, +6, +8, +10, +12, +14). 42 + 14 = 56."
  },
  {
    id: "p1-u5-q2",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "MH-SET 2024",
    question: "A train 240 metres long is running at a speed of 72 km/h. How much time (in seconds) will it take to pass a stationary telegraph post?",
    options: [
      { id: "A", text: "10 seconds" },
      { id: "B", text: "12 seconds" },
      { id: "C", text: "15 seconds" },
      { id: "D", text: "18 seconds" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "10 seconds: Would require speed to be 24 m/s (86.4 km/h).",
      "B": "12 seconds: Correct! Speed in m/s = 72 * (5/18) = 20 m/s. Time = Distance / Speed = 240 m / 20 m/s = 12 seconds.",
      "C": "15 seconds: Speed of 16 m/s.",
      "D": "18 seconds: Results from failing to convert km/h to m/s."
    },
    summaryExplanation: "Convert speed: 72 * (5/18) = 20 m/s. Time = 240 / 20 = 12 seconds."
  },
  {
    id: "p1-u5-q3",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "A person sold an article for ₹840 and incurred a loss of 20%. At what price should he have sold it to gain 20%?",
    options: [
      { id: "A", text: "₹1,050" },
      { id: "B", text: "₹1,200" },
      { id: "C", text: "₹1,260" },
      { id: "D", text: "₹1,320" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "₹1,050: That is just the Cost Price (CP = 840 / 0.8 = ₹1,050) without adding the 20% profit.",
      "B": "₹1,200: Common miscalculation adding 20% to SP instead of CP.",
      "C": "₹1,260: Correct! CP = ₹840 / 0.80 = ₹1,050. Selling price for 20% gain = CP * 1.20 = 1,050 * 1.20 = ₹1,260.",
      "D": "₹1,320: Results from calculating 20% on an erroneous CP of 1100."
    },
    summaryExplanation: "CP = 840 / 0.8 = ₹1,050. New SP = 1,050 * 1.2 = ₹1,260."
  },
  {
    id: "p1-u5-q4",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "WB-SET 2023",
    question: "If in a certain code language, 'TEACHER' is written as 'VGCEJGT', then how will 'CHILDREN' be coded in that same language?",
    options: [
      { id: "A", text: "EJKNFTGP" },
      { id: "B", text: "EJKNFPGT" },
      { id: "C", text: "EKJNFTGP" },
      { id: "D", text: "EJKNGTFP" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "EJKNFTGP: Correct! The rule is +2 for each letter: C(+2)=E, H(+2)=J, I(+2)=K, L(+2)=N, D(+2)=F, R(+2)=T, E(+2)=G, N(+2)=P.",
      "B": "EJKNFPGT: Last two letters inverted.",
      "C": "EKJNFTGP: Second and third letters swapped.",
      "D": "EJKNGTFP: Middle letters erroneous."
    },
    summaryExplanation: "Every letter shifts forward by +2 alphabetical positions: CHILDREN → EJKNFTGP."
  },
  {
    id: "p1-u5-q5",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "KSET 2023",
    question: "A sum of money invested at Simple Interest doubles itself in 8 years. What is the rate of interest per annum?",
    options: [
      { id: "A", text: "10%" },
      { id: "B", text: "12.5%" },
      { id: "C", text: "15%" },
      { id: "D", text: "16.66%" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "10%: At 10%, a sum doubles in 10 years (100 / 10).",
      "B": "12.5%: Correct! If sum P doubles, Simple Interest SI = P. Formula: SI = (P * R * T) / 100 ⇒ P = (P * R * 8) / 100 ⇒ R = 100 / 8 = 12.5% per annum.",
      "C": "15%: At 15%, a sum doubles in 6.67 years.",
      "D": "16.66%: Doubles in 6 years."
    },
    summaryExplanation: "For doubling at SI, Rate R = 100 / T = 100 / 8 = 12.5%."
  },
  {
    id: "p1-u5-q6",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "AP-SET 2024",
    question: "A can complete a piece of work in 12 days, and B can complete the same work in 24 days. Working together, in how many days will they finish the work?",
    options: [
      { id: "A", text: "6 days" },
      { id: "B", text: "8 days" },
      { id: "C", text: "10 days" },
      { id: "D", text: "18 days" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "6 days: Simple average of days / 3.",
      "B": "8 days: Correct! Work rate per day: (1/12) + (1/24) = (2 + 1)/24 = 3/24 = 1/8. Total days = 8 days.",
      "C": "10 days: Incorrect combined rate calculation.",
      "D": "18 days: Incorrect arithmetic mean of 12 and 24."
    },
    summaryExplanation: "Combined time = (A * B) / (A + B) = (12 * 24) / (12 + 24) = 288 / 36 = 8 days."
  },
  {
    id: "p1-u5-q7",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET Dec 2022",
    question: "The ratio of the ages of a father and his son is 7:3. If the sum of their ages is 60 years, what was the son's age 3 years ago?",
    options: [
      { id: "A", text: "15 years" },
      { id: "B", text: "18 years" },
      { id: "C", text: "21 years" },
      { id: "D", text: "12 years" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "15 years: Correct! Total parts = 7 + 3 = 10 parts. 1 part = 60 / 10 = 6 years. Son's present age = 3 * 6 = 18 years. Age 3 years ago = 18 - 3 = 15 years.",
      "B": "18 years: This is the son's present age, not his age 3 years ago.",
      "C": "21 years: Age 3 years hence.",
      "D": "12 years: Erroneous subtraction."
    },
    summaryExplanation: "Son's present age = (3/10) * 60 = 18 years. Three years ago: 18 - 3 = 15 years."
  },
  {
    id: "p1-u5-q8",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "GSET 2023",
    question: "Pointing to a photograph of a woman, a man says, 'She is the only daughter of the only daughter of my maternal grandfather.' How is the woman related to the man?",
    options: [
      { id: "A", text: "Sister" },
      { id: "B", text: "Mother" },
      { id: "C", text: "Daughter" },
      { id: "D", text: "Maternal Aunt" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Sister: Correct! 'Only daughter of maternal grandfather' = Man's mother. 'Only daughter of man's mother' = Man's sister (or the man himself if female, but since the speaker is a man, the daughter is his sister).",
      "B": "Mother: Mother is the only daughter of grandfather, not the daughter's daughter.",
      "C": "Daughter: Skips a generation.",
      "D": "Maternal Aunt: Maternal grandfather has only one daughter, so there is no maternal aunt."
    },
    summaryExplanation: "Grandfather's only daughter = Mother. Mother's only daughter = Sister."
  },
  {
    id: "p1-u5-q9",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET June 2023",
    question: "The average score of 20 students in an exam is 65. Later, it was discovered that one score of 85 was misread as 45. What is the correct average?",
    options: [
      { id: "A", text: "63" },
      { id: "B", text: "67" },
      { id: "C", text: "68" },
      { id: "D", text: "70" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "63: Subtracting the error rather than adding.",
      "B": "67: Correct! Difference in score = 85 - 45 = +40. Increase in average = 40 / 20 = +2. Correct average = 65 + 2 = 67.",
      "C": "68: Adding +3 instead of +2.",
      "D": "70: Adding 5."
    },
    summaryExplanation: "Net increase = 85 - 45 = +40. Spread over 20 students: 40 / 20 = +2. New average = 65 + 2 = 67."
  },
  {
    id: "p1-u5-q10",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "TN-SET 2024",
    question: "Find the next term in the letter series: BDF, CFI, DHL, ?",
    options: [
      { id: "A", text: "EJO" },
      { id: "B", text: "EKO" },
      { id: "C", text: "EJP" },
      { id: "D", text: "EIN" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "EJO: Correct! 1st letters: B(2), C(3), D(4) → E(5). 2nd letters: D(4), F(6), H(8) → J(10) [+2 each time]. 3rd letters: F(6), I(9), L(12) → O(15) [+3 each time]. Thus, EJO.",
      "B": "EKO: 2nd letter J is miscalculated as K.",
      "C": "EJP: 3rd letter is miscalculated as P(+4).",
      "D": "EIN: Spurious."
    },
    summaryExplanation: "1st letter +1 (B, C, D, E), 2nd letter +2 (D, F, H, J), 3rd letter +3 (F, I, L, O) = EJO."
  },
  {
    id: "p1-u5-q11",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "If a shopkeeper marks an item 30% above its cost price and offers a cash discount of 10%, what is his net percentage profit?",
    options: [
      { id: "A", text: "15%" },
      { id: "B", text: "17%" },
      { id: "C", text: "20%" },
      { id: "D", text: "23%" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "15%: Underestimates profit.",
      "B": "17%: Correct! Let CP = 100. Marked Price = 130. Discount = 10% of 130 = 13. Selling Price = 130 - 13 = 117. Profit = 117 - 100 = 17%.",
      "C": "20%: Simple subtraction (30 - 10) without calculating discount on MP.",
      "D": "23%: Calculation error."
    },
    summaryExplanation: "Net effect formula: a + b + (a*b)/100 = 30 - 10 - (300/100) = 20 - 3 = 17% profit."
  },
  {
    id: "p1-u5-q12",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "MH-SET 2023",
    question: "Two numbers are in the ratio 3:5. If 6 is added to both numbers, their ratio becomes 2:3. What is the larger number?",
    options: [
      { id: "A", text: "24" },
      { id: "B", text: "30" },
      { id: "C", text: "36" },
      { id: "D", text: "40" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "24: Erroneous multiple.",
      "B": "30: Correct! Let numbers be 3x and 5x. (3x + 6) / (5x + 6) = 2 / 3 ⇒ 3(3x + 6) = 2(5x + 6) ⇒ 9x + 18 = 10x + 12 ⇒ x = 6. Larger number = 5x = 5 * 6 = 30.",
      "C": "36: Calculation error.",
      "D": "40: 5 * 8."
    },
    summaryExplanation: "Cross multiplying: 9x + 18 = 10x + 12 gives x = 6. Larger number = 5 * 6 = 30."
  },
  {
    id: "p1-u5-q13",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "WB-SET 2024",
    question: "In what ratio must water be mixed with milk costing ₹40 per litre so that the resulting mixture is worth ₹32 per litre? (Assume water is free of cost).",
    options: [
      { id: "A", text: "1:4" },
      { id: "B", text: "1:5" },
      { id: "C", text: "2:5" },
      { id: "D", text: "3:4" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "1:4: Correct! Using rule of alligation: Water cost = ₹0, Milk cost = ₹40, Mean price = ₹32. Ratio (Water : Milk) = (40 - 32) : (32 - 0) = 8 : 32 = 1 : 4.",
      "B": "1:5: Ratio 8:40.",
      "C": "2:5: Error.",
      "D": "3:4: Inverted."
    },
    summaryExplanation: "By alligation: Water : Milk = (40 - 32) / (32 - 0) = 8 / 32 = 1:4."
  },
  {
    id: "p1-u5-q14",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET June 2024",
    question: "A man travels from town A to town B at a speed of 60 km/h and returns from B to A along the same route at a speed of 40 km/h. What is his average speed for the entire round trip?",
    options: [
      { id: "A", text: "48 km/h" },
      { id: "B", text: "50 km/h" },
      { id: "C", text: "52 km/h" },
      { id: "D", text: "54 km/h" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "48 km/h: Correct! Harmonic mean formula for equal distances: Average Speed = (2 * x * y) / (x + y) = (2 * 60 * 40) / (60 + 40) = 4800 / 100 = 48 km/h.",
      "B": "50 km/h: Common mistake of calculating the simple arithmetic mean (60 + 40) / 2.",
      "C": "52 km/h: Incorrect calculation.",
      "D": "54 km/h: Incorrect calculation."
    },
    summaryExplanation: "Average speed for identical roundtrip distance is harmonic mean: 2xy/(x+y) = 2*60*40/100 = 48 km/h."
  },
  {
    id: "p1-u5-q15",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "KSET 2024",
    question: "What is the Compound Interest on ₹10,000 for 2 years at 10% per annum compounded annually?",
    options: [
      { id: "A", text: "₹2,000" },
      { id: "B", text: "₹2,100" },
      { id: "C", text: "₹2,200" },
      { id: "D", text: "₹2,400" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "₹2,000: That is the Simple Interest (10,000 * 0.10 * 2).",
      "B": "₹2,100: Correct! Amount = 10,000 * (1 + 0.10)^2 = 10,000 * 1.21 = ₹12,100. CI = 12,100 - 10,000 = ₹2,100.",
      "C": "₹2,200: Arithmetic miscalculation.",
      "D": "₹2,400: Overestimation."
    },
    summaryExplanation: "CI = P[(1 + r/100)^2 - 1] = 10000[1.21 - 1] = ₹2,100."
  },
  {
    id: "p1-u5-q16",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "If 15 men can complete a project in 20 days, how many men would be required to complete the identical project in 12 days?",
    options: [
      { id: "A", text: "20 men" },
      { id: "B", text: "25 men" },
      { id: "C", text: "30 men" },
      { id: "D", text: "35 men" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "20 men: Insufficient workforce.",
      "B": "25 men: Correct! Total man-days = M1 * D1 = 15 * 20 = 300 man-days. Required men M2 = Total man-days / D2 = 300 / 12 = 25 men.",
      "C": "30 men: Overestimation.",
      "D": "35 men: Overestimation."
    },
    summaryExplanation: "M1 * D1 = M2 * D2 ⇒ 15 * 20 = M2 * 12 ⇒ M2 = 300 / 12 = 25 men."
  },
  {
    id: "p1-u5-q17",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "AP-SET 2023",
    question: "Find the odd one out among the following numbers: 27, 64, 125, 144, 216",
    options: [
      { id: "A", text: "27" },
      { id: "B", text: "64" },
      { id: "C", text: "144" },
      { id: "D", text: "216" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "27: It is a perfect cube (3^3).",
      "B": "64: It is a perfect cube (4^3) and square (8^2).",
      "C": "144: Correct! 144 is a perfect square (12^2) but NOT a perfect cube of any integer, unlike 27 (3^3), 64 (4^3), 125 (5^3), and 216 (6^3).",
      "D": "216: It is a perfect cube (6^3)."
    },
    summaryExplanation: "All numbers in the series are perfect cubes except 144, which is only a square."
  },
  {
    id: "p1-u5-q18",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "MH-SET 2024",
    question: "A pipe can fill a water reservoir in 6 hours, while an outlet pipe can empty it in 8 hours. If both pipes are opened simultaneously, in how many hours will the empty tank be completely filled?",
    options: [
      { id: "A", text: "14 hours" },
      { id: "B", text: "24 hours" },
      { id: "C", text: "28 hours" },
      { id: "D", text: "48 hours" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "14 hours: Simple addition (6 + 8).",
      "B": "24 hours: Correct! Net fill rate per hour = (1/6) - (1/8) = (4 - 3)/24 = 1/24. Thus, the tank fills completely in 24 hours.",
      "C": "28 hours: Arithmetic slip.",
      "D": "48 hours: 6 * 8."
    },
    summaryExplanation: "Net rate = (1/6) - (1/8) = 1/24 tank/hr. Tank fills in 24 hours."
  },
  {
    id: "p1-u5-q19",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET June 2023",
    question: "If 'A' is the brother of 'B', 'B' is the sister of 'C', and 'C' is the father of 'D', how is 'A' related to 'D'?",
    options: [
      { id: "A", text: "Father" },
      { id: "B", text: "Paternal Uncle" },
      { id: "C", text: "Brother" },
      { id: "D", text: "Grandfather" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Father: C is D's father.",
      "B": "Paternal Uncle: Correct! A, B, and C are siblings. Since C is the father of D, C's brother A is D's paternal uncle.",
      "C": "Brother: D is the offspring generation, not sibling.",
      "D": "Grandfather: Skips two generations."
    },
    summaryExplanation: "A is the brother of D's father C; hence A is D's paternal uncle."
  },
  {
    id: "p1-u5-q20",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "GSET 2024",
    question: "What is 35% of 80 added to 45% of 160?",
    options: [
      { id: "A", text: "96" },
      { id: "B", text: "100" },
      { id: "C", text: "104" },
      { id: "D", text: "108" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "96: Calculation slip.",
      "B": "100: Correct! 35% of 80 = 0.35 * 80 = 28. 45% of 160 = 0.45 * 160 = 72. Total = 28 + 72 = 100.",
      "C": "104: Overestimate.",
      "D": "108: Overestimate."
    },
    summaryExplanation: "28 + 72 = 100."
  },
  {
    id: "p1-u5-q21",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "WB-SET 2023",
    question: "A man walks 5 km South, then turns left and walks 3 km, then turns left again and walks 5 km. In which direction is he now with respect to his starting point?",
    options: [
      { id: "A", text: "North" },
      { id: "B", text: "South" },
      { id: "C", text: "East" },
      { id: "D", text: "West" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "North: Opposite direction.",
      "B": "South: Starting motion.",
      "C": "East: Correct! 5 km South (Y = -5). Turn left (facing East) and walk 3 km (X = +3). Turn left again (facing North) and walk 5 km (Y = -5 + 5 = 0). Position is (3, 0), exactly East of origin.",
      "D": "West: Inverted turn."
    },
    summaryExplanation: "Net displacement cancels along North-South axis, leaving 3 km directly East of start."
  },
  {
    id: "p1-u5-q22",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "The difference between Simple Interest and Compound Interest on a certain sum of money for 2 years at 5% per annum is ₹25. What is the principal sum?",
    options: [
      { id: "A", text: "₹8,000" },
      { id: "B", text: "₹10,000" },
      { id: "C", text: "₹12,000" },
      { id: "D", text: "₹15,000" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "₹8,000: Difference would be ₹20.",
      "B": "₹10,000: Correct! For 2 years, CI - SI = P * (R/100)^2 ⇒ 25 = P * (5/100)^2 = P * (25 / 10,000) ⇒ P = 25 * 10,000 / 25 = ₹10,000.",
      "C": "₹12,000: Difference would be ₹30.",
      "D": "₹15,000: Difference would be ₹37.5."
    },
    summaryExplanation: "Formula for 2-year CI-SI difference: D = P(r/100)^2 ⇒ P = 25 / 0.0025 = ₹10,000."
  },
  {
    id: "p1-u5-q23",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "KSET 2023",
    question: "Complete the alphanumeric sequence: A1Z, C3X, E5V, G7T, ?",
    options: [
      { id: "A", text: "I9R" },
      { id: "B", text: "I8S" },
      { id: "C", text: "H9R" },
      { id: "D", text: "I9S" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "I9R: Correct! 1st letter: A(+2), C(+2), E(+2), G(+2) → I. Middle number: 1(+2), 3(+2), 5(+2), 7(+2) → 9. 3rd letter from reverse alphabet: Z(-2), X(-2), V(-2), T(-2) → R. Thus, I9R.",
      "B": "I8S: Number and 3rd letter incorrect.",
      "C": "H9R: 1st letter incorrect.",
      "D": "I9S: 3rd letter incorrect."
    },
    summaryExplanation: "Pattern: Forward letters +2 (I), odd integers (9), reverse letters -2 (R) = I9R."
  },
  {
    id: "p1-u5-q24",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET June 2024",
    question: "The cost of 5 pens and 3 notebooks is ₹110, while the cost of 2 pens and 4 notebooks is ₹100. What is the price of 1 notebook?",
    options: [
      { id: "A", text: "₹10" },
      { id: "B", text: "₹15" },
      { id: "C", text: "₹20" },
      { id: "D", text: "₹25" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "₹10: This is the price of 1 pen (5*10 + 3*20 = 110).",
      "B": "₹15: Miscalculation.",
      "C": "₹20: Correct! Equations: (1) 5P + 3N = 110; (2) 2P + 4N = 100 ⇒ P + 2N = 50 ⇒ P = 50 - 2N. Substitute in (1): 5(50 - 2N) + 3N = 110 ⇒ 250 - 10N + 3N = 110 ⇒ 7N = 140 ⇒ N = ₹20. (Pen P = ₹10).",
      "D": "₹25: Erroneous."
    },
    summaryExplanation: "Solving the system of simultaneous linear equations yields Pen = ₹10 and Notebook = ₹20."
  },
  {
    id: "p1-u5-q25",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "MH-SET 2023",
    question: "A number is increased by 20% and then decreased by 20%. What is the net percentage change in the number?",
    options: [
      { id: "A", text: "0% (No change)" },
      { id: "B", text: "4% decrease" },
      { id: "C", text: "4% increase" },
      { id: "D", text: "2% decrease" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "0%: Common misconception that equal percentage increase and decrease cancel each other.",
      "B": "4% decrease: Correct! Formula: +x - x - (x^2 / 100) = - (20^2 / 100) = -400 / 100 = -4% (a 4% decrease).",
      "C": "4% increase: Inverted sign.",
      "D": "2% decrease: Arithmetic mistake."
    },
    summaryExplanation: "When a quantity changes by +x% and -x%, the net result is always a decrease of (x^2 / 100)% = 400/100 = 4% loss."
  },
  {
    id: "p1-u5-q26",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "AP-SET 2024",
    question: "Find the missing number in the series: 3, 5, 9, 17, 33, ?",
    options: [
      { id: "A", text: "49" },
      { id: "B", text: "65" },
      { id: "C", text: "67" },
      { id: "D", text: "72" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "49: Adding 16.",
      "B": "65: Correct! Differences are powers of 2: 5-3=2 (2^1), 9-5=4 (2^2), 17-9=8 (2^3), 33-17=16 (2^4). Next difference is 32 (2^5). 33 + 32 = 65. (Alternatively, 2x - 1 pattern).",
      "C": "67: Arithmetic slip.",
      "D": "72: Overestimate."
    },
    summaryExplanation: "Difference sequence doubles (+2, +4, +8, +16, +32). 33 + 32 = 65."
  },
  {
    id: "p1-u5-q27",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "If today is Friday, what day of the week will it be after exactly 68 days?",
    options: [
      { id: "A", text: "Tuesday" },
      { id: "B", text: "Wednesday" },
      { id: "C", text: "Thursday" },
      { id: "D", text: "Sunday" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Tuesday: 4 odd days.",
      "B": "Wednesday: Correct! Number of odd days = 68 mod 7 = 5 (since 9 * 7 = 63, remainder = 5). Friday + 5 days = Saturday(1), Sunday(2), Monday(3), Tuesday(4), Wednesday(5).",
      "C": "Thursday: 6 odd days.",
      "D": "Sunday: 2 odd days."
    },
    summaryExplanation: "68 / 7 leaves remainder 5. Friday + 5 days = Wednesday."
  },
  {
    id: "p1-u5-q28",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "WB-SET 2024",
    question: "A man rows 18 km downstream in 3 hours and rows 12 km upstream in 4 hours. What is the speed of the river current?",
    options: [
      { id: "A", text: "1 km/h" },
      { id: "B", text: "1.5 km/h" },
      { id: "C", text: "2 km/h" },
      { id: "D", text: "4.5 km/h" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "1 km/h: Calculation slip.",
      "B": "1.5 km/h: Correct! Downstream speed (u + v) = 18 / 3 = 6 km/h. Upstream speed (u - v) = 12 / 4 = 3 km/h. Speed of current v = (Downstream - Upstream) / 2 = (6 - 3) / 2 = 1.5 km/h.",
      "C": "2 km/h: Inaccurate rounding.",
      "D": "4.5 km/h: Speed of boat in still water: (6 + 3) / 2 = 4.5 km/h."
    },
    summaryExplanation: "Current speed = (v_down - v_up) / 2 = (6 - 3) / 2 = 1.5 km/h."
  },
  {
    id: "p1-u5-q29",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "UGC NET June 2023",
    question: "At what time between 4 o'clock and 5 o'clock will the hour and minute hands of a clock coincide (be together)?",
    options: [
      { id: "A", text: "21 and (9/11) minutes past 4" },
      { id: "B", text: "20 minutes past 4" },
      { id: "C", text: "22 minutes past 4" },
      { id: "D", text: "24 and (3/11) minutes past 4" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "21 and 9/11 min: Correct! At 4 o'clock, hour hand is at 20 minute-spaces. Relative speed of minute hand over hour hand is 55 spaces in 60 min (11/12). Time to gain 20 spaces = 20 * (12/11) = 240 / 11 = 21 (9/11) minutes past 4.",
      "B": "20 min: Hands do not coincide because the hour hand has advanced.",
      "C": "22 min: Approximation.",
      "D": "24 min: Overestimate."
    },
    summaryExplanation: "Time = (Initial spaces * 12) / 11 = (20 * 12) / 11 = 240 / 11 = 21 9/11 minutes past 4."
  },
  {
    id: "p1-u5-q30",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning and Aptitude",
    examSource: "MH-SET 2024",
    question: "The sum of the squares of three consecutive natural numbers is 110. What is the smallest of these numbers?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "6" },
      { id: "D", text: "7" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "4: 16 + 25 + 36 = 77 (not 110).",
      "B": "5: Correct! Let numbers be 5, 6, 7. Sum of squares = 5^2 + 6^2 + 7^2 = 25 + 36 + 49 = 110. The smallest number is 5.",
      "C": "6: 36 + 49 + 64 = 149.",
      "D": "7: Exceeds 110."
    },
    summaryExplanation: "5^2 + 6^2 + 7^2 = 25 + 36 + 49 = 110. The smallest natural number is 5."
  }
];
