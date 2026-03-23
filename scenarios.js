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
  },
    {
    id:8, name:"Marcus Thorne", age:62, room:"7I",
    acuity:"CRITICAL", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Sudden onset shortness of breath and sharp chest pain. Post-op Day 2: Total Hip Arthroplasty.",
    dialogue:"I was just... trying to get to the chair... and I couldn't breathe. My chest hurts right here when I take a deep breath. I feel like I'm going to pass out.",
    critical:true,
    tools: {
      "Pulse Ox":     {result:"86% SpO₂ — CRITICAL",class:"danger",note:"⚠ Acute desaturation",key:true},
      "BP Cuff":      {result:"102/64 — Borderline",class:"warn",note:"Dropping from baseline"},
      "Stethoscope":  {result:"Lungs clear bilaterally. Tachycardic 124 bpm.",class:"warn",note:"Tachycardia out of proportion to pain"},
      "12-Lead ECG":  {result:"Sinus Tachycardia. S1Q3T3 pattern present.",class:"danger",note:"⚠ Suggestive of Right Heart Strain",key:true},
      "Lower Extremity":{result:"Right calf: Warm, erythematous, +2 edema.",class:"danger",note:"⚠ DVT suspected",key:true},
      "Thermometer":  {result:"37.4°C — Low-grade",class:"ok",note:"Post-op expected"}
    },
    requiredTools:["Pulse Ox","12-Lead ECG","Lower Extremity"],
    chartQuestion:{
      prompt:"PRIORITY nursing diagnosis for Mr. Thorne?",
      options:[
        {text:"Impaired Gas Exchange r/t ventilation-perfusion mismatch AEB SpO₂ 86%, tachycardia, sharp chest pain",correct:true,points:50},
        {text:"Acute Pain r/t surgical incision",correct:false,points:0},
        {text:"Impaired Mobility r/t recent hip surgery",correct:false,points:0},
        {text:"Risk for Bleeding r/t anticoagulant therapy",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Sudden SOB and suspected PE. Immediate priority?",
      options:[
        {text:"High-flow O₂ via NRB → Notify MD/Rapid Response → Prepare for CT Angiogram (PE Protocol) → Start Heparin",correct:true,points:75},
        {text:"Administer PRN pain medication and encourage incentive spirometry",correct:false,points:0},
        {text:"Apply sequential compression devices (SCDs) to both legs immediately",correct:false,points:0},
        {text:"Lower the head of the bed to improve cerebral perfusion",correct:false,points:0},
      ]
    },
    education:"Pulmonary Embolism (PE): Sudden SOB, pleuritic chest pain, and hypoxia. Post-op patients are high risk due to Virchow's Triad (stasis, injury, hypercoagulability). S1Q3T3 is a classic (though rare) ECG sign of right heart strain. NEVER apply SCDs/Massage a suspected DVT limb—it can dislodge the clot."
  },
  {
    id:9, name:"Sarah Jenkins", age:48, room:"7J",
    acuity:"HIGH RISK", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Dizziness and 'coffee-ground' emesis. History of chronic NSAID use.",
    dialogue:"I've been taking a lot of ibuprofen for my back... today I felt so dizzy I nearly fell. Then I threw up and it looked like... old coffee? I'm so weak.",
    critical:true,
    tools: {
      "BP Cuff":      {result:"82/44 — CRITICALLY LOW",class:"danger",note:"⚠ Hypovolemic shock risk",key:true},
      "Stethoscope":  {result:"Hyperactive bowel sounds. Tachycardic 130 bpm.",class:"warn",note:"Compensatory tachycardia"},
      "Skin Check":   {result:"Pale, cool, and clammy skin.",class:"danger",note:"⚠ Poor peripheral perfusion",key:true},
      "Hgb/Hct Draw": {result:"Hgb: 6.8 g/dL — CRITICAL LOW",class:"danger",note:"⚠ Severe anemia",key:true},
      "Pulse Ox":     {result:"95% SpO₂ — Normal",class:"ok",note:"Oxygenation stable for now"},
      "NG Tube":      {result:"Coffee-ground drainage noted in canister.",class:"warn",note:"Confirming Upper GI source"}
    },
    requiredTools:["BP Cuff","Skin Check","Hgb/Hct Draw"],
    chartQuestion:{
      prompt:"Primary nursing diagnosis for Ms. Jenkins?",
      options:[
        {text:"Deficient Fluid Volume r/t active GI bleeding AEB hypotension, tachycardia, Hgb 6.8",correct:true,points:50},
        {text:"Nausea r/t gastric irritation",correct:false,points:0},
        {text:"Risk for Aspiration r/t emesis",correct:false,points:0},
        {text:"Impaired Comfort r/t epigastric pain",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Hgb is 6.8 and BP is 82/44. Correct nursing action?",
      options:[
        {text:"Insert 2 large-bore IVs (18G+) → Rapid IV fluid resuscitation → Prepare for Blood Transfusion (Type/Cross) → NPO for Endoscopy",correct:true,points:75},
        {text:"Give oral fluids to raise blood pressure and wait for labs",correct:false,points:0},
        {text:"Administer IV morphine for epigastric pain and reassess",correct:false,points:0},
        {text:"Place patient in high-Fowler's position and start clear liquid diet",correct:false,points:0},
      ]
    },
    education:"Upper GI Bleed (UGIB): Coffee-ground emesis (digested blood) or melena (black tarry stool). NSAIDs inhibit prostaglandins, weakening gastric mucosa. Priority: Circulation (Volume first!). Hemoglobin <7 usually requires transfusion. Large-bore IVs are crucial for rapid volume/blood replacement."
  },
  {
    id:10, name:"Leo Vance", age:4, room:"7K",
    acuity:"CRITICAL", acuityColor:"var(--danger)",
    cc:"Chief Complaint: High fever, sore throat, and drooling. Onset was sudden.",
    dialogue:"(Patient is silent, leaning forward in 'tripod' position, mouth open, drooling. Mother: 'He won't swallow and he's making a high-pitched noise when he breathes.')",
    critical:true,
    tools:{
      "Stethoscope":  {result:"Inspiratory stridor heard. Diminished breath sounds.",class:"danger",note:"⚠ Impending airway loss",key:true},
      "Thermometer":  {result:"39.9°C — HIGH FEVER",class:"danger",note:"⚠ Systemic infection"},
      "Pulse Ox":     {result:"89% SpO₂ — HYPOXIC",class:"danger",note:"⚠ Significant distress",key:true},
      "Visual Exam":  {result:"Drooling, 'Tripod' positioning, anxious appearance.",class:"danger",note:"⚠ Classic epiglottitis presentation",key:true},
      "BP Cuff":      {result:"104/68 — Normal for age",class:"ok",note:"Stable hemodynamics"},
      "Tongue Blade": {result:"⚠ DO NOT ATTEMPT — Risk of laryngospasm",class:"danger",note:"CRITICAL SAFETY ERROR"}
    },
    requiredTools:["Stethoscope","Pulse Ox","Visual Exam"],
    chartQuestion:{
      prompt:"PRIORITY nursing diagnosis for Leo?",
      options:[
        {text:"Ineffective Airway Clearance r/t inflammation of the epiglottis AEB stridor, drooling, and tripod positioning",correct:true,points:50},
        {text:"Deficient Fluid Volume r/t inability to swallow",correct:false,points:0},
        {text:"Hyperthermia r/t infectious process",correct:false,points:0},
        {text:"Anxiety r/t respiratory distress and unfamiliar environment",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Leo is in the 'Tripod' position and drooling. CORRECT priority action?",
      options:[
        {text:"Keep child calm and in parent's lap → Notify MD/Anesthesia STAT → Prepare for emergent intubation → Provide humidified O₂",correct:true,points:75},
        {text:"Use a tongue depressor to visualize the throat immediately",correct:false,points:0},
        {text:"Place the child supine to assess lung sounds more easily",correct:false,points:0},
        {text:"Attempt to start a painful IV line right away to give antibiotics",correct:false,points:0},
      ]
    },
    education:"Epiglottitis: A pediatric emergency. H. influenzae type B (Hib) is a common cause. Clinical triad: Drooling, Dysphagia, Distress. NEVER use a tongue blade or agitate the child—it can trigger fatal laryngospasm. Airway management is the absolute priority."
  },
  {
    id:11, name:"Jax Miller", age:42, room:"7L",
    acuity:"MONITOR", acuityColor:"var(--warn)",
    cc:"Chief Complaint: Confusion, ataxia (unsteady gait), and double vision. History of chronic alcohol use.",
    dialogue:"I... I don't know how I got here. The floor is moving. My eyes... I can't focus. Where's my shoes?",
    critical:false,
    tools:{
      "Neuro Check":  {result:"Nystagmus (involuntary eye movement) and ophthalmoplegia.",class:"danger",note:"⚠ Cranial nerve involvement",key:true},
      "Gait Assess":  {result:"Wide-based, unsteady gait (Ataxia). High fall risk.",class:"danger",note:"⚠ Neurological motor deficit",key:true},
      "Glucometer":   {result:"Blood glucose: 72 mg/dL — Low Normal",class:"ok",note:"Rule out hypoglycemia"},
      "BP Cuff":      {result:"138/88 — Slightly elevated",class:"warn",note:"Withdrawal risk?"},
      "Skin Check":   {result:"Spider angiomas on chest. Jaundice noted in sclera.",class:"warn",note:"Suggestive of liver disease",key:true},
      "Pulse Ox":     {result:"98% SpO₂ — Normal",class:"ok",note:"Respiration stable"}
    },
    requiredTools:["Neuro Check","Gait Assess","Skin Check"],
    chartQuestion:{
      prompt:"What is the likely cause of Mr. Miller’s neurological triad?",
      options:[
        {text:"Wernicke's Encephalopathy r/t Thiamine (Vitamin B1) deficiency",correct:true,points:50},
        {text:"Acute Ischemic Stroke",correct:false,points:0},
        {text:"Opioid Intoxication",correct:false,points:0},
        {text:"Acute Schizophrenia",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"The physician orders IV Thiamine and IV Dextrose. Which is the CORRECT administration sequence?",
      options:[
        {text:"Administer Thiamine FIRST, then Dextrose. (Giving dextrose first can worsen the brain injury).",correct:true,points:75},
        {text:"Administer Dextrose first to treat the low-normal blood sugar",correct:false,points:0},
        {text:"Give both simultaneously in the same IV line",correct:false,points:0},
        {text:"Hold Thiamine; it is only a vitamin and not a priority in acute confusion",correct:false,points:0},
      ]
    },
    education:"Wernicke's Encephalopathy: Triad of Confusion, Ataxia, and Ophthalmoplegia (eye changes). Caused by Thiamine (B1) deficiency, often in chronic alcohol use. CRITICAL: Always give Thiamine before Glucose to avoid precipitating Korsakoff Syndrome (permanent memory loss)."
  },
  {
    id:12, name:"Arthur Gable", age:84, room:"7N",
    acuity:"MONITOR", acuityColor:"var(--warn)",
    cc:"Chief Complaint: Admitted for UTI. Disoriented to place and time. Attempting to climb out of bed.",
    dialogue:"I need to get to the train station... where are my pants? I'm going to be late for work. Let me out of this bed!",
    critical:false,
    tools:{
      "Neuro Check":  {result:"Oriented to person only. Confused. GCS 14.",class:"warn",note:"Acute confusion — likely delirium",key:true},
      "BP Cuff":      {result:"132/78 — Stable",class:"ok",note:"Hemodynamically stable"},
      "Urine Output": {result:"Dark, cloudy, malodorous urine in bag.",class:"warn",note:"Confirms UTI source"},
      "Bed Alarm":    {result:"Currently OFF.",class:"danger",note:"⚠ HIGH FALL RISK",key:true},
      "Skin Check":   {result:"Bruising noted on left hip from previous fall at home.",class:"warn",note:"History of falls",key:true}
    },
    requiredTools:["Neuro Check","Bed Alarm","Skin Check"],
    chartQuestion:{
      prompt:"What is the PRIMARY nursing priority for Mr. Gable?",
      options:[
        {text:"Risk for Injury r/t acute confusion and history of falls",correct:true,points:50},
        {text:"Deficient Knowledge r/t antibiotic use",correct:false,points:0},
        {text:"Impaired Urinary Elimination r/t UTI",correct:false,points:0},
        {text:"Disturbed Sleep Pattern r/t hospital noise",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"Mr. Gable is agitated and trying to get up. Correct safety intervention?",
      options:[
        {text:"Move patient closer to nurse's station → Activate bed alarm → Provide nonslip socks → Reorient frequently",correct:true,points:75},
        {text:"Apply soft wrist restraints so he cannot get out of bed",correct:false,points:0},
        {text:"Administer a sedative and dim the lights to help him sleep",correct:false,points:0},
        {text:"Tell the patient he must stay in bed or he will get hurt",correct:false,points:0},
      ]
    },
    education:"Fall Prevention: One of the 'Big Three' in nursing school. Restraints are ALWAYS a last resort. Use the 'Least Restrictive' environment first: bed alarms, low beds, and frequent rounding. Delirium in the elderly is often a primary symptom of a UTI."
  },
  {
    id:13, name:"Elena Rossi", age:55, room:"7O",
    acuity:"CRITICAL", acuityColor:"var(--danger)",
    cc:"Chief Complaint: Severe muscle weakness and palpitations. History of heart failure; taking Furosemide (Lasix).",
    dialogue:"My legs feel like lead... and my heart feels like it's flopping in my chest. I've been taking my 'water pill' every day like the doctor said.",
    critical:true,
    tools:{
      "12-Lead ECG":  {result:"Frequent PVCs. Flattened T-waves and prominent U-waves.",class:"danger",note:"⚠ Arrhythmia detected",key:true},
      "Potassium Draw":{result:"K+: 2.6 mEq/L — CRITICAL LOW",class:"danger",note:"⚠ Severe Hypokalemia",key:true},
      "BP Cuff":      {result:"108/62 — Low Normal",class:"warn",note:"Monitor trends"},
      "Stethoscope":  {result:"Irregular heart rhythm heard.",class:"danger",note:"⚠ Dysrhythmia"},
      "Pulse Ox":     {result:"96% SpO₂ — Normal",class:"ok",note:"Oxygenation stable"}
    },
    requiredTools:["12-Lead ECG","Potassium Draw"],
    chartQuestion:{
      prompt:"Which finding is the MOST likely cause of Ms. Rossi's symptoms?",
      options:[
        {text:"Hypokalemia (Low Potassium) r/t loop diuretic (Lasix) use",correct:true,points:50},
        {text:"Hypernatremia (High Sodium) r/t dehydration",correct:false,points:0},
        {text:"Hypocalcemia (Low Calcium) r/t vitamin deficiency",correct:false,points:0},
        {text:"Myocardial Infarction r/t coronary artery disease",correct:false,points:0},
      ]
    },
    interventionQuestion:{
      prompt:"The physician orders Potassium Chloride (KCl) 40 mEq. Correct administration?",
      options:[
        {text:"Verify K+ level and renal function → Infuse via IV pump (max 10mEq/hr) → Monitor ECG",correct:true,points:75},
        {text:"Give KCl via IV Push (bolus) for rapid replacement",correct:false,points:0},
        {text:"Hold the dose because the patient is already weak",correct:false,points:0},
        {text:"Give the medication only if the patient's blood pressure increases",correct:false,points:0},
      ]
    },
    education:"Hypokalemia: Normal K+ is 3.5–5.0. Loop diuretics (Lasix) 'waste' potassium. CRITICAL: Never, EVER give Potassium IV Push—it will stop the heart. It must be diluted and given via a slow infusion pump. Watch for U-waves on the ECG."
  }


];
