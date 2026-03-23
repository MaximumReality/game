const SCENARIOS = [
  {
    id:0, name:"John Harmon", age:67, room:"7A",
    acuity:"HIGH RISK", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Chest pain radiating to left arm. Diaphoretic on admission.",
    dialogue:"Nurse... I've had this crushing pressure in my chest for about 2 hours. It goes right up into my jaw. I feel like I'm sweating but I'm cold.",
    critical:true,
    tools:{
      "BP Cuff":      {result:"168/98 — ELEVATED",class:"warn",note:"Hypertensive"},
      "Pulse Ox":     {result:"94% SpO₂ — LOW NORMAL",class:"warn",note:"Monitor closely"},
      "12-Lead ECG":  {result:"ST elevation leads II, III, aVF — STEMI pattern",class:"danger",note:"⚠ CRITICAL FINDING",key:true},
      "Stethoscope":  {result:"S1/S2 present. Mild S3 gallop.",class:"warn",note:"Possible cardiac failure"},
      "Troponin Draw":{result:"Troponin I: 2.8 ng/mL (↑↑ Critical)",class:"danger",note:"⚠ Cardiac injury confirmed",key:true},
      "IV Pump":      {result:"Access Patent. Ready for Heparin/Nitro drip.",class:"ok",note:"Needs rate calculation"},
      "Thermometer":  {result:"37.1°C — Normal",class:"ok",note:"Afebrile"}
    },
    requiredTools:["12-Lead ECG","Troponin Draw","IV Pump"],
    chartQuestion:{
      prompt:"PRIORITY nursing diagnosis for Mr. Harmon?",
      options:[
        {text:"Acute Pain r/t myocardial ischemia AEB chest pressure, ST elevation, elevated troponin",correct:true,points:50},
        {text:"Risk for Infection r/t IV access",correct:false,points:0},
        {text:"Ineffective Tissue Perfusion r/t dehydration",correct:false,points:0},
        {text:"Anxiety r/t hospitalization environment",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"STAT order received. Most critical intervention RIGHT NOW?",
      options:[
        {text:"Aspirin 325mg PO + activate cath lab / call cardiology STAT",correct:true,points:75},
        {text:"Provide blanket and dim lights for comfort",correct:false,points:0},
        {text:"Encourage ambulation to improve circulation",correct:false,points:0},
        {text:"Obtain urine specimen for UA",correct:false,points:0},
      ]
    },
    education:"STEMI: Crushing chest pain, jaw/arm radiation, diaphoresis, ST elevation, elevated troponin. TIME IS MUSCLE — activate cath lab immediately. Aspirin 325mg inhibits platelet aggregation. Door-to-balloon target: <90 min."
  },
  {
    id:1, name:"Maria Delgado", age:52, room:"7B",
    acuity:"STABLE", acuityColor:"var(--success)",
    cc:"Chief Complaint: Shortness of breath, productive cough x2 days, fever.",
    dialogue:"I've been coughing up thick yellow stuff for two days. My chest hurts when I breathe deep and I can't catch my breath. Had a fever at home — 101 something.",
    critical:false,
    tools:{
      "Thermometer": {result:"38.9°C — FEBRILE",class:"danger",note:"Fever confirmed",key:true},
      "Pulse Ox":    {result:"91% SpO₂ — HYPOXIC",class:"danger",note:"⚠ Requires supplemental O₂",key:true},
      "BP Cuff":     {result:"118/76 — Normal",class:"ok",note:"Hemodynamically stable"},
      "Stethoscope": {result:"Decreased breath sounds RLL. Crackles on inspiration.",class:"warn",note:"Consolidation suspected",key:true},
      "12-Lead ECG": {result:"Sinus tachycardia 104 bpm",class:"warn",note:"Likely fever-related"},
      "Glucometer":  {result:"Blood glucose 118 mg/dL — Normal",class:"ok",note:"No concern"}
    },
    requiredTools:["Thermometer","Pulse Ox","Stethoscope"],
    chartQuestion:{
      prompt:"Primary nursing diagnosis for Ms. Delgado?",
      options:[
        {text:"Impaired Gas Exchange r/t alveolar consolidation AEB SpO₂ 91%, crackles, productive cough",correct:true,points:50},
        {text:"Deficient Knowledge r/t new medication regimen",correct:false,points:0},
        {text:"Imbalanced Nutrition: Less Than Body Requirements",correct:false,points:0},
        {text:"Risk for Falls r/t altered mobility",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Priority intervention for Ms. Delgado's hypoxia?",
      options:[
        {text:"Supplemental O₂ via nasal cannula, obtain sputum culture, notify MD for antibiotic order",correct:true,points:75},
        {text:"Deep breathing exercises only — no O₂ needed yet",correct:false,points:0},
        {text:"Increase IV fluid rate and reposition prone",correct:false,points:0},
        {text:"PRN acetaminophen and reassess in 4 hours",correct:false,points:0},
      ]
    },
    education:"Community-Acquired Pneumonia: Fever, productive cough, crackles, ↓ breath sounds, hypoxia. SpO₂ <94% requires O₂. Cultures BEFORE antibiotics. Most common pathogen: Streptococcus pneumoniae. Monitor for sepsis progression."
  },
  {
    id:2, name:"Derek Phan", age:44, room:"7C",
    acuity:"CRITICAL", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Found unresponsive. History of Type 1 Diabetes.",
    dialogue:"...unresponsive on arrival. Wife reports he skipped dinner and took his insulin. Found on kitchen floor at 02:30.",
    critical:true,
    tools:{
      "Glucometer":  {result:"Blood glucose: 34 mg/dL — CRITICAL LOW",class:"danger",note:"⚠ Severe hypoglycemia",key:true},
      "Neuro Check": {result:"GCS 8 — E2V2M4. Pupils equal/reactive.",class:"danger",note:"⚠ Altered consciousness",key:true},
      "IV Pump":     {result:"D50W infusion required.",class:"warn",note:"Calculate rate for maintenance fluids"},
      "BP Cuff":     {result:"92/60 — LOW",class:"danger",note:"Hypotensive — shock risk"},
      "Pulse Ox":    {result:"97% SpO₂ — Normal",class:"ok",note:"Airway maintained"}
    },
    requiredTools:["Glucometer","Neuro Check","IV Pump"],
    chartQuestion:{
      prompt:"Priority nursing diagnosis for Mr. Phan?",
      options:[
        {text:"Risk for Injury r/t altered LOC AEB GCS 8, blood glucose 34 mg/dL",correct:true,points:50},
        {text:"Chronic Pain r/t diabetic neuropathy",correct:false,points:0},
        {text:"Ineffective Health Management r/t diabetes education deficit",correct:false,points:0},
        {text:"Disturbed Sleep Pattern r/t hospitalization",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Mr. Phan cannot swallow safely (GCS 8). Correct intervention?",
      options:[
        {text:"IV Dextrose 50% (D50W) 25g IV push STAT — recheck glucose in 15 min",correct:true,points:75},
        {text:"Oral glucose gel under tongue — easiest and safest",correct:false,points:0},
        {text:"Glucagon IM and call family to bring food",correct:false,points:0},
        {text:"Hold — wait for physician orders first",correct:false,points:0},
      ]
    },
    education:"Severe Hypoglycemia (<50 mg/dL + altered LOC): NEVER give oral glucose to unconscious patients — aspiration risk. IV D50W 25g is first-line. No IV access: Glucagon 1mg IM/SC. Rule of 15: 15g carbs → recheck in 15 min."
  },
  {
    id:3, name:"Eleanor Simms", age:78, room:"7D",
    acuity:"MONITOR", acuityColor:"var(--warn)",
    cc:"Chief Complaint: Confusion, decreased urine output. History of HTN, CKD stage 3.",
    dialogue:"I... where am I? I was at home... I don't feel right. My daughter brought me in. I'm so thirsty. Haven't needed to use the bathroom much.",
    critical:false,
    tools:{
      "BP Cuff":      {result:"88/58 — HYPOTENSIVE",class:"danger",note:"⚠ Hemodynamically unstable",key:true},
      "Thermometer":  {result:"37.8°C — Low-grade fever",class:"warn",note:"Possible infection"},
      "Urine Output": {result:"UO: 18mL / 4hrs — OLIGURIA",class:"danger",note:"⚠ AKI pattern",key:true},
      "Skin Turgor":  {result:"Tenting present. Dry mucous membranes.",class:"danger",note:"⚠ Severe dehydration",key:true},
      "Pulse Ox":     {result:"96% SpO₂ — Normal",class:"ok",note:"Adequate oxygenation"},
      "Neuro Check":  {result:"GCS 13 — Oriented x1. Mild agitation.",class:"warn",note:"Altered cognition — likely metabolic"}
    },
    requiredTools:["BP Cuff","Urine Output","Skin Turgor"],
    chartQuestion:{
      prompt:"PRIORITY nursing diagnosis for Mrs. Simms?",
      options:[
        {text:"Deficient Fluid Volume r/t inadequate intake AEB hypotension, oliguria, skin tenting, altered LOC",correct:true,points:50},
        {text:"Chronic Confusion r/t dementia progression",correct:false,points:0},
        {text:"Risk for Pressure Injury r/t immobility",correct:false,points:0},
        {text:"Caregiver Role Strain r/t patient dependence",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Which intervention bundle is CORRECT for Mrs. Simms?",
      options:[
        {text:"IV NS bolus 500mL/hr, strict I&O q1h, Foley catheter, BMP/BUN/Cr labs, fall precautions",correct:true,points:75},
        {text:"Encourage oral fluids, recheck BP in 4 hours",correct:false,points:0},
        {text:"Fluid restrict to 1L/day given CKD history",correct:false,points:0},
        {text:"Start diuretic therapy to improve kidney function",correct:false,points:0},
      ]
    },
    education:"Hypovolemia in Elderly: ↓BP, oliguria (<0.5mL/kg/hr), skin tenting, dry mucous membranes, acute confusion. AKI risk with CKD baseline. IV resuscitation + strict I&O. Diuretics CONTRAINDICATED in hypovolemia — they worsen it."
  },
  {
    id:4, name:"Tyrone Wallace", age:58, room:"7E",
    acuity:"CRITICAL", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Fever, hypotension, confusion. UTI diagnosed 3 days ago — not improving.",
    dialogue:"I started antibiotics for my UTI... but I'm getting worse. I'm burning up and everything feels foggy. My wife says I was confused at home.",
    critical:true,
    tools:{
      "Thermometer":  {result:"39.8°C — HIGH FEVER",class:"danger",note:"⚠ Systemic infection",key:true},
      "BP Cuff":      {result:"84/52 — CRITICALLY LOW",class:"danger",note:"⚠ Septic shock pattern",key:true},
      "Pulse Ox":     {result:"93% SpO₂ — LOW",class:"warn",note:"Monitor — may need O₂"},
      "Neuro Check":  {result:"GCS 12. Confused. Oriented to person only.",class:"danger",note:"⚠ Sepsis encephalopathy",key:true},
      "Lactate Draw": {result:"Serum lactate: 4.2 mmol/L — CRITICALLY ELEVATED",class:"danger",note:"⚠ Tissue hypoperfusion confirmed",key:true},
      "Stethoscope":  {result:"Tachycardic 118 bpm. Faint heart sounds.",class:"warn",note:"Cardiovascular strain"}
    },
    requiredTools:["Thermometer","BP Cuff","Lactate Draw"],
    chartQuestion:{
      prompt:"Priority nursing diagnosis for Mr. Wallace?",
      options:[
        {text:"Ineffective Tissue Perfusion r/t septic shock AEB BP 84/52, lactate 4.2, fever 39.8°C, confusion",correct:true,points:50},
        {text:"Hyperthermia r/t environmental exposure",correct:false,points:0},
        {text:"Deficient Knowledge r/t antibiotic therapy",correct:false,points:0},
        {text:"Risk for Falls r/t dizziness",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Sepsis protocol activated. CORRECT Sepsis-3 Hour Bundle?",
      options:[
        {text:"Blood cultures x2 STAT → broad-spectrum IV antibiotics → 30mL/kg crystalloid bolus → recheck lactate",correct:true,points:75},
        {text:"Oral antibiotics, PO fluids, monitor every 4 hours",correct:false,points:0},
        {text:"Antipyretics only — treat the fever first",correct:false,points:0},
        {text:"Restart original UTI antibiotic at a higher dose",correct:false,points:0},
      ]
    },
    education:"Sepsis-3: Infection + organ dysfunction (SOFA ≥2). Septic shock: vasopressors needed + lactate >2 mmol/L. 3-Hour Bundle: cultures → antibiotics (within 1hr!) → 30mL/kg IV crystalloid. Every hour antibiotic delay ↑ mortality ~7%."
  },
  {
    id:5, name:"Constance Adeyemi", age:71, room:"7F",
    acuity:"HIGH RISK", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Sudden facial droop, left arm weakness, slurred speech. Onset 45 min ago.",
    dialogue:"I... was making tea... and then... my face felt funny. My arm won't work right. I can hear you but... the words are hard.",
    critical:true,
    tools:{
      "Neuro Check":  {result:"NIHSS score 14. Left hemiplegia. Facial droop. Aphasia.",class:"danger",note:"⚠ Significant stroke deficit",key:true},
      "BP Cuff":      {result:"188/104 — SEVERELY ELEVATED",class:"danger",note:"⚠ Hypertensive — common in acute stroke",key:true},
      "Glucometer":   {result:"Blood glucose: 122 mg/dL — Normal",class:"ok",note:"Hypoglycemia ruled out",key:true},
      "Pulse Ox":     {result:"96% SpO₂ — Adequate",class:"ok",note:"Airway intact"},
      "12-Lead ECG":  {result:"A-fib with rate 88 bpm",class:"warn",note:"Cardioembolic stroke source possible"},
      "Thermometer":  {result:"36.9°C — Normal",class:"ok",note:"Afebrile"}
    },
    requiredTools:["Neuro Check","BP Cuff","Glucometer"],
    chartQuestion:{
      prompt:"Priority nursing diagnosis for Mrs. Adeyemi?",
      options:[
        {text:"Impaired Physical Mobility r/t neuromuscular impairment AEB left hemiplegia, aphasia, NIHSS 14",correct:true,points:50},
        {text:"Anxiety r/t unfamiliar hospital environment",correct:false,points:0},
        {text:"Risk for Infection r/t IV catheter",correct:false,points:0},
        {text:"Chronic Pain r/t arthritic joint disease",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Onset 45 min ago — within tPA window. Priority action?",
      options:[
        {text:"STAT CT head (no contrast) → neurology alert → assess tPA eligibility → NPO / aspiration precautions",correct:true,points:75},
        {text:"Administer aspirin 325mg immediately — standard stroke treatment",correct:false,points:0},
        {text:"Lower BP aggressively with IV labetalol to <140 systolic",correct:false,points:0},
        {text:"Position supine, reassess neuro in 1 hour",correct:false,points:0},
      ]
    },
    education:"Ischemic Stroke: FAST (Face, Arms, Speech, Time). tPA window: 3–4.5hrs from onset. CT head rules out hemorrhage BEFORE tPA. Don't aggressively lower BP in ischemic stroke (target <185/110 if giving tPA). Aspirin NOT first-line before imaging. A-fib = major cardioembolic risk."
  },
  {
    id:6, name:"Lucas Brennan", age:29, room:"7G",
    acuity:"CRITICAL", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Severe allergic reaction after eating at restaurant 20 min ago. Known peanut allergy.",
    dialogue:"I think I ate something with peanuts... my throat feels like it's closing and I can't stop itching everywhere. I feel really dizzy. I have my EpiPen but I'm scared to use it.",
    critical:true,
    tools:{
      "Pulse Ox":    {result:"88% SpO₂ — CRITICALLY LOW",class:"danger",note:"⚠ Airway compromising",key:true},
      "BP Cuff":     {result:"78/48 — SHOCK",class:"danger",note:"⚠ Distributive shock pattern",key:true},
      "Stethoscope": {result:"Bilateral diffuse wheezing. Stridor on inspiration.",class:"danger",note:"⚠ Upper airway obstruction",key:true},
      "Thermometer": {result:"36.6°C — Normal",class:"ok",note:"Afebrile"},
      "Skin Check":  {result:"Generalized urticaria. Angioedema face/lips/tongue.",class:"danger",note:"⚠ Classic anaphylaxis triad",key:true},
      "Neuro Check": {result:"Alert but anxious. GCS 15.",class:"ok",note:"Conscious — act NOW before deterioration"}
    },
    requiredTools:["Pulse Ox","BP Cuff","Stethoscope"],
    chartQuestion:{
      prompt:"Priority nursing diagnosis for Mr. Brennan?",
      options:[
        {text:"Ineffective Airway Clearance r/t anaphylaxis AEB stridor, SpO₂ 88%, angioedema, distributive shock",correct:true,points:50},
        {text:"Anxiety r/t fear of allergic reaction",correct:false,points:0},
        {text:"Risk for Impaired Skin Integrity r/t urticaria",correct:false,points:0},
        {text:"Deficient Knowledge r/t allergen avoidance",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"ANAPHYLAXIS confirmed. First-line treatment?",
      options:[
        {text:"Epinephrine 0.3mg IM (anterolateral thigh) STAT → rapid response → O₂ → IV access → diphenhydramine",correct:true,points:75},
        {text:"Diphenhydramine (Benadryl) IV first — antihistamine stops the reaction",correct:false,points:0},
        {text:"Albuterol nebulizer for wheezing, then reassess",correct:false,points:0},
        {text:"IV corticosteroids — fastest-acting anti-inflammatory for anaphylaxis",correct:false,points:0},
      ]
    },
    education:"Anaphylaxis: Epinephrine IM is ALWAYS first-line — never antihistamines or steroids first. Site: anterolateral thigh 0.3–0.5mg (1:1000). Antihistamines treat hives but don't stop anaphylaxis. Steroids prevent biphasic reaction but take hours. Lay patient supine with legs elevated (unless respiratory distress)."
  },
  {
    id:7, name:"Abby Torres", age:34, room:"7H",
    acuity:"CRITICAL", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Unresponsive. Found by roommate. Suspected opioid overdose.",
    dialogue:"...unresponsive. Roommate reports history of opioid use disorder. Found in bathroom with drug paraphernalia. Last seen approximately 1 hour ago.",
    critical:true,
    tools:{
      "Neuro Check":  {result:"GCS 5 — E1V1M3. Pinpoint pupils bilaterally.",class:"danger",note:"⚠ Classic opioid toxidrome",key:true},
      "Pulse Ox":     {result:"72% SpO₂ — CRITICALLY LOW",class:"danger",note:"⚠ Respiratory failure — immediate action",key:true},
      "Stethoscope":  {result:"RR 4/min. Shallow agonal respirations. Airway intact.",class:"danger",note:"⚠ Severe respiratory depression",key:true},
      "BP Cuff":      {result:"96/60 — LOW NORMAL",class:"warn",note:"Hemodynamically marginal"},
      "Thermometer":  {result:"35.8°C — Mild hypothermia",class:"warn",note:"Possible environmental exposure"},
      "Glucometer":   {result:"Blood glucose: 88 mg/dL — Normal",class:"ok",note:"Hypoglycemia ruled out"}
    },
    requiredTools:["Neuro Check","Pulse Ox","Stethoscope"],
    chartQuestion:{
      prompt:"Priority nursing diagnosis for Ms. Torres?",
      options:[
        {text:"Ineffective Breathing Pattern r/t opioid CNS depression AEB RR 4/min, SpO₂ 72%, GCS 5, pinpoint pupils",correct:true,points:50},
        {text:"Substance Use Disorder r/t opioid dependence",correct:false,points:0},
        {text:"Risk for Infection r/t IV drug use",correct:false,points:0},
        {text:"Disturbed Sensory Perception r/t altered LOC",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"SpO₂ 72%, RR 4/min, GCS 5. Correct priority sequence?",
      options:[
        {text:"BVM ventilation FIRST → Naloxone 0.4–2mg IV/IM/IN STAT → O₂ → monitor for re-narcotization",correct:true,points:75},
        {text:"Naloxone first, then assist ventilation if needed",correct:false,points:0},
        {text:"High-flow O₂ via non-rebreather, then contact physician for naloxone order",correct:false,points:0},
        {text:"Stimulate patient firmly and call for crash cart",correct:false,points:0},
      ]
    },
    education:"Opioid Overdose Triad: Pinpoint pupils + respiratory depression + altered LOC. AIRWAY FIRST — BVM if RR <8 or SpO₂ <90%. Naloxone (Narcan) 0.4–2mg IV/IM/IN reverses opioids. Watch for re-narcotization — naloxone half-life is shorter than most opioids. Repeat q2–3 min PRN. Approach with compassion — OUD is a medical condition."
  }
];
