/**
 * PAPER 1 - UNIT 9: PEOPLE, DEVELOPMENT AND ENVIRONMENT (30 Authentic & Expected PYQs)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers SDGs/MDGs, Air/Water/Noise Pollution, Climate Change Treaties (Paris, Kyoto, Montreal), ISA, and NAPCC.
 */

export const p1Unit9Questions = [
  {
    id: "p1-u9-q1",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET June 2024",
    question: "Under the United Nations 2030 Agenda for Sustainable Development, how many Sustainable Development Goals (SDGs) and associated targets were adopted by member nations?",
    options: [
      { id: "A", text: "8 Goals and 21 Targets" },
      { id: "B", text: "15 Goals and 120 Targets" },
      { id: "C", text: "17 Goals and 169 Targets" },
      { id: "D", text: "20 Goals and 200 Targets" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "8 Goals and 21 Targets: These were the Millennium Development Goals (MDGs, 2000–2015).",
      "B": "15 Goals: Incorrect count.",
      "C": "17 Goals and 169 Targets: Correct! Adopted in September 2015 at UNGA (Transforming Our World: The 2030 Agenda), comprising 17 SDGs and 169 targets.",
      "D": "20 Goals: Exaggerated number."
    },
    summaryExplanation: "The UN 2030 Agenda established 17 Sustainable Development Goals (SDGs) and 169 specific targets."
  },
  {
    id: "p1-u9-q2",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "MH-SET 2024",
    question: "Where is the permanent interim secretariat and global headquarters of the International Solar Alliance (ISA) situated?",
    options: [
      { id: "A", text: "Paris, France" },
      { id: "B", text: "Gurugram (Haryana), India" },
      { id: "C", text: "Geneva, Switzerland" },
      { id: "D", text: "Nairobi, Kenya" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Paris: Where ISA was jointly launched by India and France at COP21 (2015), but headquarters is in India.",
      "B": "Gurugram, India: Correct! ISA headquarters is situated at the National Institute of Solar Energy (NISE) campus in Gurugram, Haryana, India.",
      "C": "Geneva: Houses WHO and WTO.",
      "D": "Nairobi: Headquarters of UNEP."
    },
    summaryExplanation: "The International Solar Alliance (ISA) is headquartered at Gurugram (Haryana), India."
  },
  {
    id: "p1-u9-q3",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following greenhouse gases possesses the HIGHEST Global Warming Potential (GWP) over a 100-year time horizon?",
    options: [
      { id: "A", text: "Carbon dioxide (CO₂)" },
      { id: "B", text: "Methane (CH₄)" },
      { id: "C", text: "Nitrous Oxide (N₂O)" },
      { id: "D", text: "Sulfur Hexafluoride (SF₆)" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "CO₂: Baseline reference gas with GWP = 1.",
      "B": "Methane: GWP ≈ 28–36 over 100 years.",
      "C": "Nitrous Oxide: GWP ≈ 265–298.",
      "D": "Sulfur Hexafluoride (SF₆): Correct! SF₆ has an enormous GWP of approximately 23,500 over 100 years, making it the most potent greenhouse gas known."
    },
    summaryExplanation: "Sulfur Hexafluoride (SF₆) has a GWP of ~23,500, vastly exceeding CO₂ (1), CH₄ (~28), and N₂O (~273)."
  },
  {
    id: "p1-u9-q4",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "WB-SET 2023",
    question: "The Montreal Protocol (1987) and its subsequent Kigali Amendment (2016) are internationally binding treaties designed primarily to protect:",
    options: [
      { id: "A", text: "Marine coral reefs from plastic disposal" },
      { id: "B", text: "The Stratospheric Ozone Layer by phasing out Ozone Depleting Substances (ODS) and HFCs" },
      { id: "C", text: "Antarctic polar bears from hunting" },
      { id: "D", text: "International freshwater wetlands" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Marine reefs: UN Convention on Law of the Sea (UNCLOS).",
      "B": "Stratospheric ozone protection: Correct! Montreal Protocol phased out CFCs and halons; the Kigali Amendment phases down hydrofluorocarbons (HFCs).",
      "C": "Polar wildlife: CITES.",
      "D": "Wetlands: Ramsar Convention (1971)."
    },
    summaryExplanation: "The Montreal Protocol phases out ozone-depleting substances (ODS) to safeguard the stratospheric ozone layer."
  },
  {
    id: "p1-u9-q5",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "KSET 2023",
    question: "According to the Central Pollution Control Board (CPCB) of India, what is the permissible ambient noise limit in a 'Silence Zone' during the daytime (6:00 AM to 10:00 PM)?",
    options: [
      { id: "A", text: "40 dB(A)" },
      { id: "B", text: "50 dB(A)" },
      { id: "C", text: "55 dB(A)" },
      { id: "D", text: "65 dB(A)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "40 dB(A): Permissible limit for Silence Zone during *nighttime*.",
      "B": "50 dB(A): Correct! Silence zone limits under Noise Pollution Rules 2000 are: Day = 50 dB(A), Night = 40 dB(A).",
      "C": "55 dB(A): Day limit for Residential Zone.",
      "D": "65 dB(A): Day limit for Commercial Zone."
    },
    summaryExplanation: "CPCB ambient noise standards for Silence Zones: 50 dB(A) day / 40 dB(A) night."
  },
  {
    id: "p1-u9-q6",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "AP-SET 2024",
    question: "High values of Biochemical Oxygen Demand (BOD) in a freshwater lake or river water sample indicate that the water:",
    options: [
      { id: "A", text: "Is completely pure and fit for drinking" },
      { id: "B", text: "Has high dissolved oxygen and zero aquatic organisms" },
      { id: "C", text: "Is heavily polluted with organic matter demanding rapid microbial decomposition" },
      { id: "D", text: "Is rich in dissolved heavy gold ions" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Pure drinking water: Has very low BOD (< 1–2 mg/L).",
      "B": "High dissolved oxygen: High BOD depletes dissolved oxygen.",
      "C": "Heavily polluted: Correct! High BOD means aerobic microorganisms require substantial oxygen to decompose high loads of organic pollutants/sewage.",
      "D": "Gold ions: Spurious."
    },
    summaryExplanation: "Elevated BOD signifies severe organic water pollution requiring substantial oxygen for microbial decay."
  },
  {
    id: "p1-u9-q7",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET Dec 2022",
    question: "Which of the following is NOT one of the eight core National Missions under India's National Action Plan on Climate Change (NAPCC) launched in 2008?",
    options: [
      { id: "A", text: "National Solar Mission" },
      { id: "B", text: "National Mission for Enhanced Energy Efficiency" },
      { id: "C", text: "National Mission on River Interlinking" },
      { id: "D", text: "National Mission on Sustainable Habitat" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "National Solar Mission: One of the 8 missions.",
      "B": "National Mission for Enhanced Energy Efficiency (NMEEE): One of the 8 missions.",
      "C": "National Mission on River Interlinking: Correct! River interlinking is not part of NAPCC's 8 missions.",
      "D": "National Mission on Sustainable Habitat: One of the 8 missions."
    },
    summaryExplanation: "The 8 NAPCC missions are: Solar, Energy Efficiency, Sustainable Habitat, Water, Himalayan Ecosystem, Green India, Sustainable Agriculture, and Strategic Knowledge."
  },
  {
    id: "p1-u9-q8",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "GSET 2023",
    question: "Which secondary air pollutant is formed in the atmosphere during bright daylight through photochemical reactions between nitrogen oxides (NOx) and volatile organic compounds (VOCs)?",
    options: [
      { id: "A", text: "Carbon Monoxide (CO)" },
      { id: "B", text: "Ground-Level (Tropospheric) Ozone (O₃)" },
      { id: "C", text: "Sulphur Dioxide (SO₂)" },
      { id: "D", text: "Chlorofluorocarbons (CFCs)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Carbon Monoxide: Primary pollutant emitted directly from incomplete combustion.",
      "B": "Tropospheric Ozone: Correct! Secondary pollutant and key constituent of photochemical smog generated by solar UV irradiation of NOx and VOC precursors.",
      "C": "Sulphur Dioxide: Primary pollutant emitted from coal thermal plants.",
      "D": "CFCs: Primary synthetic refrigerants."
    },
    summaryExplanation: "Tropospheric ozone is a harmful secondary pollutant formed by photochemical reaction between NOx and VOCs."
  },
  {
    id: "p1-u9-q9",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET June 2023",
    question: "The 'Sendai Framework' adopted at the Third UN World Conference in Japan deals comprehensively with:",
    options: [
      { id: "A", text: "Disaster Risk Reduction (2015–2030)" },
      { id: "B", text: "Nuclear Non-Proliferation" },
      { id: "C", text: "Digital Currency Regulations" },
      { id: "D", text: "Elimination of Ozone Depleting Gases" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Disaster Risk Reduction: Correct! The Sendai Framework (2015–2030) succeeded the Hyogo Framework to prevent new and reduce existing disaster risks globally.",
      "B": "Nuclear: NPT / IAEA treaties.",
      "C": "Digital currency: Basel Committee / FATF.",
      "D": "Ozone: Montreal Protocol."
    },
    summaryExplanation: "The Sendai Framework establishes global disaster risk reduction and resilience goals for 2015–2030."
  },
  {
    id: "p1-u9-q10",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "TN-SET 2024",
    question: "Which of the following is a water-borne chemical toxin that causes 'Minamata Disease' due to bioaccumulation in aquatic food chains?",
    options: [
      { id: "A", text: "Lead (Plumbism)" },
      { id: "B", text: "Methyl Mercury" },
      { id: "C", text: "Cadmium (Itai-Itai)" },
      { id: "D", text: "Arsenic (Black Foot disease)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Lead: Causes plumbism and neurological developmental damage.",
      "B": "Methyl Mercury: Correct! Minamata disease (first discovered in Minamata Bay, Japan) is a severe neurological syndrome caused by methylmercury poisoning.",
      "C": "Cadmium: Causes Itai-Itai disease (painful osteomalacia and renal failure).",
      "D": "Arsenic: Causes Black Foot disease and hyperkeratosis."
    },
    summaryExplanation: "Minamata disease is caused by methylmercury bioaccumulation, while Itai-Itai is caused by cadmium."
  },
  {
    id: "p1-u9-q11",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET Dec 2023",
    question: "Which Sustainable Development Goal (SDG) specifically focuses on ensuring 'Quality Education' and lifelong learning opportunities for all?",
    options: [
      { id: "A", text: "SDG 1" },
      { id: "B", text: "SDG 3" },
      { id: "C", text: "SDG 4" },
      { id: "D", text: "SDG 5" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "SDG 1: No Poverty.",
      "B": "SDG 3: Good Health and Well-being.",
      "C": "SDG 4: Correct! SDG 4 aims to 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all'.",
      "D": "SDG 5: Gender Equality."
    },
    summaryExplanation: "SDG 4 is dedicated to Quality Education, inclusive learning, and skill development."
  },
  {
    id: "p1-u9-q12",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "MH-SET 2023",
    question: "The historic Paris Climate Agreement (COP21, 2015) aims to hold the increase in global average temperature to well below:",
    options: [
      { id: "A", text: "5.0 °C above pre-industrial levels" },
      { id: "B", text: "3.5 °C above pre-industrial levels" },
      { id: "C", text: "2.0 °C above pre-industrial levels and pursue efforts to limit it to 1.5 °C" },
      { id: "D", text: "0.5 °C above pre-industrial levels" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "5.0 °C: Catastrophic warming.",
      "B": "3.5 °C: Far exceeds treaty benchmarks.",
      "C": "2.0 °C and 1.5 °C: Correct! Article 2 of Paris Agreement explicitly mandates keeping temperature rise well below 2.0°C and striving for 1.5°C.",
      "D": "0.5 °C: Unrealistic target already exceeded."
    },
    summaryExplanation: "Paris Agreement commits parties to hold global warming well below 2°C, striving to limit it to 1.5°C."
  },
  {
    id: "p1-u9-q13",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "WB-SET 2024",
    question: "What is the phenomenon of excessive nutrient enrichment (especially nitrates and phosphates) in water bodies leading to algal blooms and oxygen depletion called?",
    options: [
      { id: "A", text: "Biomagnification" },
      { id: "B", text: "Eutrophication" },
      { id: "C", text: "Salinization" },
      { id: "D", text: "Bioaccumulation" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Biomagnification: Progressive increase of toxin concentration at successive trophic levels.",
      "B": "Eutrophication: Correct! Nutrient loading from fertilizers/sewage triggers explosive algal growth, blocking sunlight and creating hypoxic 'dead zones'.",
      "C": "Salinization: Accumulation of water-soluble salts in soil.",
      "D": "Bioaccumulation: Accumulation of chemical pollutants inside an organism's tissue."
    },
    summaryExplanation: "Eutrophication is aquatic nutrient over-enrichment causing destructive algal blooms and oxygen starvation."
  },
  {
    id: "p1-u9-q14",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET June 2024",
    question: "Which of the following forms of energy generation emits ZERO greenhouse gas emissions during its electrical operational phase?",
    options: [
      { id: "A", text: "Coal-fired thermal power plant" },
      { id: "B", text: "Diesel generator set" },
      { id: "C", text: "Nuclear power plant and Solar Photovoltaic" },
      { id: "D", text: "Natural gas combined-cycle turbine" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Coal: Heaviest CO₂ and SO₂ emitter.",
      "B": "Diesel: Emits particulate matter and greenhouse gases.",
      "C": "Nuclear and Solar: Correct! During operational electricity generation, nuclear fission and solar PV produce zero carbon dioxide or greenhouse gas emissions.",
      "D": "Natural gas: Fossil fuel emitting methane and CO₂."
    },
    summaryExplanation: "Solar PV and nuclear power plants emit zero direct greenhouse gases during power generation."
  },
  {
    id: "p1-u9-q15",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "KSET 2024",
    question: "The Indian Environment (Protection) Act was enacted in the year 1986 under Article 253 of the Constitution, prompted largely by which catastrophic industrial disaster?",
    options: [
      { id: "A", text: "Chernobyl Nuclear Disaster" },
      { id: "B", text: "Bhopal Gas Tragedy (December 1984)" },
      { id: "C", text: "Fukushima Daiichi Disaster" },
      { id: "D", text: "Exxon Valdez Oil Spill" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Chernobyl: Occurred in USSR in 1986.",
      "B": "Bhopal Gas Tragedy: Correct! The lethal leakage of Methyl Isocyanate (MIC) at Union Carbide in Bhopal (Dec 1984) prompted Parliament to enact the comprehensive umbrella EPA 1986.",
      "C": "Fukushima: Occurred in Japan in 2011.",
      "D": "Exxon Valdez: Occurred in Alaska in 1989."
    },
    summaryExplanation: "The Environment (Protection) Act 1986 was enacted following the tragic Bhopal Gas Tragedy."
  },
  {
    id: "p1-u9-q16",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET Dec 2023",
    question: "What is the size range of airborne Particulate Matter (PM2.5) that makes it particularly hazardous to human cardiovascular and respiratory systems?",
    options: [
      { id: "A", text: "Greater than 100 micrometres" },
      { id: "B", text: "Aerodynamic diameter of 2.5 micrometres or smaller, allowing deep penetration into pulmonary alveoli" },
      { id: "C", text: "Exactly 2.5 millimetres" },
      { id: "D", text: "Visible sand granules" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Greater than 100 µm: Coarse dust filtered by nasal hairs.",
      "B": "2.5 µm or smaller: Correct! PM2.5 particles are fine enough to bypass upper respiratory defenses, penetrate deep into the alveoli, and cross into bloodstream.",
      "C": "2.5 mm: 1000 times larger than actual PM2.5.",
      "D": "Sand granules: Macroscopic particles."
    },
    summaryExplanation: "PM2.5 particles have diameters ≤ 2.5 micrometres, enabling deep lung alveolar penetration and arterial damage."
  },
  {
    id: "p1-u9-q17",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "AP-SET 2023",
    question: "Under the National Air Quality Index (AQI) of India, what color code and health category corresponds to an AQI range of 401 to 500?",
    options: [
      { id: "A", text: "Good (Green)" },
      { id: "B", text: "Moderate (Yellow)" },
      { id: "C", text: "Very Poor (Purple)" },
      { id: "D", text: "Severe (Dark Red / Maroon)" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Good: 0–50 (Green).",
      "B": "Moderate: 101–200 (Yellow).",
      "C": "Very Poor: 301–400 (Purple).",
      "D": "Severe: Correct! 401–500 is classified as 'Severe' (Dark Red / Maroon), causing serious respiratory impacts on healthy people."
    },
    summaryExplanation: "Indian AQI: 0–50 (Good), 51–100 (Satisfactory), 101–200 (Moderate), 201–300 (Poor), 301–400 (Very Poor), 401–500 (Severe)."
  },
  {
    id: "p1-u9-q18",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "MH-SET 2024",
    question: "Which layer of the Earth's atmosphere contains the beneficial 'Ozone Layer' that absorbs harmful incoming ultraviolet (UV-B and UV-C) solar radiation?",
    options: [
      { id: "A", text: "Troposphere" },
      { id: "B", text: "Stratosphere" },
      { id: "C", text: "Mesosphere" },
      { id: "D", text: "Thermosphere" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Troposphere: Lowest layer; ozone here is a hazardous pollutant.",
      "B": "Stratosphere: Correct! Contains the protective ozone shield at altitudes between ~15 to 35 km absorbing lethal solar UV rays.",
      "C": "Mesosphere: Middle layer where meteors burn.",
      "D": "Thermosphere: High temperature outer ionosphere layer."
    },
    summaryExplanation: "The stratospheric ozone shield absorbs carcinogenic UV radiation before reaching the surface."
  },
  {
    id: "p1-u9-q19",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET June 2023",
    question: "The Kyoto Protocol (1997) introduced which market-based mechanism enabling industrialized countries to invest in emission-reduction projects in developing nations to earn carbon credits?",
    options: [
      { id: "A", text: "Clean Development Mechanism (CDM)" },
      { id: "B", text: "Joint Implementation (JI)" },
      { id: "C", text: "International Emissions Trading (IET)" },
      { id: "D", text: "Sendai Mechanism" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Clean Development Mechanism (CDM): Correct! Article 12 mechanism allowing Annex I countries to implement emission-reduction projects in non-Annex I (developing) nations for CER credits.",
      "B": "Joint Implementation: Operates strictly between two industrialized Annex I countries.",
      "C": "Emissions Trading: Trade in unused emissions permits among Annex B parties.",
      "D": "Sendai: Disaster framework."
    },
    summaryExplanation: "The Clean Development Mechanism (CDM) allows developed nations to earn carbon credits by funding green projects in developing countries."
  },
  {
    id: "p1-u9-q20",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "GSET 2024",
    question: "Groundwater contamination by which toxic metalloid element is widely prevalent in the Gangetic plains (especially West Bengal and Bangladesh), causing keratosis and skin cancer?",
    options: [
      { id: "A", text: "Arsenic" },
      { id: "B", text: "Iron" },
      { id: "C", text: "Calcium" },
      { id: "D", text: "Magnesium" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Arsenic: Correct! Chronic arsenicosis from geological arsenic in alluvial aquifers causes hyperpigmentation, keratosis, and gangrene.",
      "B": "Iron: Causes reddish staining and metallic taste, not carcinogenic.",
      "C": "Calcium: Essential mineral causing water hardness.",
      "D": "Magnesium: Causes hardness."
    },
    summaryExplanation: "Arsenic contamination in deltaic groundwater is a major environmental health crisis in eastern India."
  },
  {
    id: "p1-u9-q21",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "WB-SET 2023",
    question: "Which of the following renewable energy sources harnesses heat energy stored in the Earth's interior crust and hot springs?",
    options: [
      { id: "A", text: "Tidal Energy" },
      { id: "B", text: "Geothermal Energy" },
      { id: "C", text: "Ocean Thermal Energy Conversion (OTEC)" },
      { id: "D", text: "Biogas" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Tidal: Gravitational pull of moon on oceans.",
      "B": "Geothermal Energy: Correct! Exploits thermal energy generated from radioactive decay and primordial heat in the Earth's mantle/crust (e.g., Manikaran, Puga Valley).",
      "C": "OTEC: Temperature difference between warm ocean surface and cold deep water.",
      "D": "Biogas: Anaerobic digestion of organic waste."
    },
    summaryExplanation: "Geothermal energy extracts subterranean heat from hot aquifers and rocks within the Earth's crust."
  },
  {
    id: "p1-u9-q22",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET Dec 2023",
    question: "What was the target deadline set for the Millennium Development Goals (MDGs) adopted in the year 2000?",
    options: [
      { id: "A", text: "2010" },
      { id: "B", text: "2015" },
      { id: "C", text: "2020" },
      { id: "D", text: "2030" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2010: Intermediate milestone.",
      "B": "2015: Correct! The 8 MDGs spanned the 15-year period from 2000 to 2015, succeeded thereafter by the 17 SDGs (2016–2030).",
      "C": "2020: Aichi biodiversity targets deadline.",
      "D": "2030: Target deadline for the SDGs."
    },
    summaryExplanation: "The 8 MDGs covered 2000 to 2015, handing over to the 17 SDGs for 2016–2030."
  },
  {
    id: "p1-u9-q23",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "KSET 2023",
    question: "Which of the following is the apex statutory body for disaster management planning and policy formulation in India, headed ex-officio by the Prime Minister?",
    options: [
      { id: "A", text: "National Disaster Management Authority (NDMA)" },
      { id: "B", text: "Central Pollution Control Board (CPCB)" },
      { id: "C", text: "Geological Survey of India (GSI)" },
      { id: "D", text: "Indian Meteorological Department (IMD)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "NDMA: Correct! Established under the Disaster Management Act 2005; chaired by the Prime Minister of India.",
      "B": "CPCB: Air and water quality regulator.",
      "C": "GSI: Mineral and geological mapping.",
      "D": "IMD: Weather forecasting agency."
    },
    summaryExplanation: "The Prime Minister chairs the National Disaster Management Authority (NDMA)."
  },
  {
    id: "p1-u9-q24",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET June 2024",
    question: "Excessive concentrations of fluoride in drinking groundwater (exceeding BIS limit of 1.5 mg/L) causes which endemic pathological condition in humans?",
    options: [
      { id: "A", text: "Dental and Skeletal Fluorosis" },
      { id: "B", text: "Goitre" },
      { id: "C", text: "Scurvy" },
      { id: "D", text: "Rickets" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Fluorosis: Correct! Causes mottling/browning of teeth enamel (dental fluorosis) and severe joint crippling/bone deformity (skeletal fluorosis).",
      "B": "Goitre: Caused by iodine deficiency.",
      "C": "Scurvy: Caused by vitamin C deficiency.",
      "D": "Rickets: Caused by vitamin D deficiency."
    },
    summaryExplanation: "High groundwater fluoride causes permanent dental enamel damage and crippling skeletal fluorosis."
  },
  {
    id: "p1-u9-q25",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "MH-SET 2023",
    question: "Which of the following treaties was signed at the historic Rio Earth Summit (UNCED) in 1992 to combat desertification and mitigate drought effects?",
    options: [
      { id: "A", text: "UNCCD" },
      { id: "B", text: "Ramsar Convention" },
      { id: "C", text: "Stockholm Convention" },
      { id: "D", text: "Minamata Convention" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "UNCCD: Correct! United Nations Convention to Combat Desertification is one of the three Rio Conventions (along with UNFCCC and CBD).",
      "B": "Ramsar: 1971 treaty on wetlands.",
      "C": "Stockholm: 2001 treaty on persistent organic pollutants (POPs).",
      "D": "Minamata: 2013 treaty on mercury."
    },
    summaryExplanation: "The 3 Rio Conventions (1992) are UNFCCC (climate), CBD (biodiversity), and UNCCD (desertification)."
  },
  {
    id: "p1-u9-q26",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "AP-SET 2024",
    question: "Under the Bio-Medical Waste Management Rules in India, contaminated anatomical human tissues and organs must be discarded in which color-coded bin/bag for incineration?",
    options: [
      { id: "A", text: "Yellow" },
      { id: "B", text: "Red" },
      { id: "C", text: "White (Translucent)" },
      { id: "D", text: "Blue" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Yellow: Correct! Yellow bags are strictly for human anatomical waste, animal waste, soiled dressings, and discarded medicines destined for incineration or plasma pyrolysis.",
      "B": "Red: Contaminated recyclable plastics (catheters, IV bottles, syringes).",
      "C": "White: Sharps, needles, scalpels.",
      "D": "Blue: Broken glass, vials, metal implants."
    },
    summaryExplanation: "Yellow bags are designated for anatomical human tissues and infectious soiled wastes meant for incineration."
  },
  {
    id: "p1-u9-q27",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following is an example of an 'In-situ' biodiversity conservation method?",
    options: [
      { id: "A", text: "Botanical Garden" },
      { id: "B", text: "National Park / Biosphere Reserve" },
      { id: "C", text: "Zoological Park" },
      { id: "D", text: "Cryopreservation Seed Bank" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Botanical Garden: Ex-situ (off-site) conservation.",
      "B": "National Park / Biosphere Reserve: Correct! In-situ (on-site) conservation preserves ecosystems in their natural geographical habitat.",
      "C": "Zoological Park: Ex-situ conservation in artificial enclosures.",
      "D": "Seed Bank: Ex-situ gene bank."
    },
    summaryExplanation: "National parks and biosphere reserves conserve species in their wild natural habitat (in-situ)."
  },
  {
    id: "p1-u9-q28",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "WB-SET 2024",
    question: "Acid rain is primarily caused by atmospheric chemical reactions involving elevated emissions of which two industrial gases?",
    options: [
      { id: "A", text: "Oxygen and Nitrogen" },
      { id: "B", text: "Sulphur Dioxide (SO₂) and Nitrogen Oxides (NOx)" },
      { id: "C", text: "Argon and Carbon Monoxide" },
      { id: "D", text: "Methane and Helium" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Oxygen and nitrogen: Abundant non-acidifying atmospheric gases.",
      "B": "SO₂ and NOx: Correct! Industrial combustion releases SO₂ and NOx which oxidize with water vapor to form sulfuric acid (H₂SO₄) and nitric acid (HNO₃), producing precipitation with pH < 5.6.",
      "C": "Argon and CO: Non-acid rain precursors.",
      "D": "Methane and helium: Inert/fuel gases."
    },
    summaryExplanation: "SO₂ and NOx react with atmospheric water vapor to precipitate as sulfuric and nitric acid rain."
  },
  {
    id: "p1-u9-q29",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET June 2023",
    question: "Under the E-Waste (Management) Rules in India, the regulatory principle holding computer and electronic manufacturers legally accountable for financing the collection and recycling of their end-of-life products is called:",
    options: [
      { id: "A", text: "Extended Producer Responsibility (EPR)" },
      { id: "B", text: "Public Trust Doctrine" },
      { id: "C", text: "Strict Precautionary Principle" },
      { id: "D", text: "Consumer Sovereignty" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Extended Producer Responsibility (EPR): Correct! Environmental policy holding producers financially and operationally responsible for the post-consumer recycling of electronics.",
      "B": "Public Trust: State stewardship of common natural resources.",
      "C": "Precautionary: Preventing environmental harm before full scientific proof.",
      "D": "Consumer Sovereignty: Free market economics term."
    },
    summaryExplanation: "EPR (Extended Producer Responsibility) obligates manufacturers to collect and recycle end-of-life electronics."
  },
  {
    id: "p1-u9-q30",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "MH-SET 2024",
    question: "Which of the following is the single largest contributor to human-induced global methane (CH₄) emissions from agriculture?",
    options: [
      { id: "A", text: "Enteric fermentation in ruminant livestock and inundated paddy rice cultivation" },
      { id: "B", text: "Spraying chemical pesticides on cotton" },
      { id: "C", text: "Drip irrigation in orchards" },
      { id: "D", text: "Solar water pumps" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Enteric fermentation and paddy rice: Correct! Methanogenic archaebacteria in ruminant digestive tracts and submerged anaerobic rice soils emit substantial methane globally.",
      "B": "Pesticides: Chemical toxic issue, not methane source.",
      "C": "Drip irrigation: Water-saving method reducing anaerobiosis.",
      "D": "Solar pumps: Clean renewable energy."
    },
    summaryExplanation: "Enteric fermentation in cattle and submerged flooded paddy fields generate the majority of agricultural methane."
  }
];
