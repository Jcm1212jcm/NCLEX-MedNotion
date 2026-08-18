/**
 * =============================================================================
 * NCLEX & CLINICAL MEDICATION DATABASE
 * =============================================================================
 * 
 * INSTRUCTIONS FOR AI AGENTS & USERS:
 * 1. This file contains ONLY the medication database and category definitions.
 * 2. To add a new medication, insert a new object into the `MEDICATIONS` array below.
 * 3. Every medication MUST contain all 10 standardized fields listed in the schema.
 * 4. Do NOT modify the visual layout or UI logic in `index.html` unless explicitly requested.
 *
 * STANDARDIZED SCHEMA:
 * {
 *   generic: "Generic Name",
 *   brand: "(Brand Name)",
 *   category: "cardio" | "anticoag" | "endocrine" | "resp" | "neuro" | "antiinfect" | "gi",
 *   drugClass: "Pharmacologic Class",
 *   indication: "Primary Clinical Indication",
 *   assess: "Critical assessment before administration (1-2 concise lines)",
 *   monitor: "Important vitals / labs / markers to monitor",
 *   watch: "Major adverse effects & patient teaching",
 *   antidote: "Antidote / reversal agent name or null if none",
 *   trap: "Concise ATI/NCLEX exam trap, black box warning, or safety distinction"
 * }
 * =============================================================================
 */

const CATEGORIES = {
  cardio: {
    label: "CARDIOVASCULAR",
    accent: "var(--cat-cardio-accent)",
    bg: "var(--cat-cardio-bg)",
    text: "var(--cat-cardio-text)",
    border: "var(--cat-cardio-border)"
  },
  anticoag: {
    label: "ANTICOAGULANT / BLOOD",
    accent: "var(--cat-anticoag-accent)",
    bg: "var(--cat-anticoag-bg)",
    text: "var(--cat-anticoag-text)",
    border: "var(--cat-anticoag-border)"
  },
  endocrine: {
    label: "ENDOCRINE / DIABETES",
    accent: "var(--cat-endocrine-accent)",
    bg: "var(--cat-endocrine-bg)",
    text: "var(--cat-endocrine-text)",
    border: "var(--cat-endocrine-border)"
  },
  resp: {
    label: "RESPIRATORY & STEROID",
    accent: "var(--cat-resp-accent)",
    bg: "var(--cat-resp-bg)",
    text: "var(--cat-resp-text)",
    border: "var(--cat-resp-border)"
  },
  neuro: {
    label: "NEURO / PSYCH / SEIZURE",
    accent: "var(--cat-neuro-accent)",
    bg: "var(--cat-neuro-bg)",
    text: "var(--cat-neuro-text)",
    border: "var(--cat-neuro-border)"
  },
  antiinfect: {
    label: "ANTIBIOTIC / INFECTION",
    accent: "var(--cat-antiinfect-accent)",
    bg: "var(--cat-antiinfect-bg)",
    text: "var(--cat-antiinfect-text)",
    border: "var(--cat-antiinfect-border)"
  },
  gi: {
    label: "GI / ELECTROLYTE / PAIN",
    accent: "var(--cat-gi-accent)",
    bg: "var(--cat-gi-bg)",
    text: "var(--cat-gi-text)",
    border: "var(--cat-gi-border)"
  }
};

const MEDICATIONS = [
  // =========================================================================
  // 1. CARDIOVASCULAR & ANTIHYPERTENSIVES
  // =========================================================================
  {
    generic: "Digoxin",
    brand: "(Lanoxin)",
    category: "cardio",
    drugClass: "Cardiac Glycoside / Positive Inotrope",
    indication: "Heart Failure & Atrial Fibrillation",
    assess: "Apical pulse for <strong>1 full minute</strong> before giving. Hold if apical HR &lt;60/min (adult) or per provider order.",
    monitor: "Serum potassium (<strong>hypokalemia &lt;3.5</strong> sharply increases toxicity risk) and therapeutic range (0.5–2.0 ng/mL).",
    watch: "Earliest toxicity: <strong>anorexia, nausea, vomiting, fatigue</strong>. Late classic: yellow-green halos, visual blurs, bradycardia.",
    antidote: "Digoxin Immune Fab (DigiFab)",
    trap: "<strong>GI complaints (anorexia/nausea) are the earliest signs</strong>, not halos. Never give with low K+ without notifying provider."
  },
  {
    generic: "Furosemide",
    brand: "(Lasix)",
    category: "cardio",
    drugClass: "Loop Diuretic (Potassium-Wasting)",
    indication: "Pulmonary Edema, Heart Failure, Hypertension",
    assess: "Blood pressure, daily weights, and baseline serum potassium before administration.",
    monitor: "Serum K+ (risk of severe hypokalemia), BUN/Creatinine, urine output, and orthostatic BP.",
    watch: "<strong>Ototoxicity / tinnitus</strong> if pushed too fast IV (max 20–40 mg/min). Teach high-potassium diet (bananas, potatoes).",
    antidote: null,
    trap: "Rapid IV push causes <strong>permanent hearing loss</strong>. Loop diuretics waste K+, whereas spironolactone retains it."
  },
  {
    generic: "Lisinopril",
    brand: "(Zestril, Prinivil)",
    category: "cardio",
    drugClass: "ACE Inhibitor (-pril)",
    indication: "Hypertension, Heart Failure, Post-MI Renoprotection",
    assess: "Blood pressure and baseline potassium before giving (hold if hypotensive per order parameters).",
    monitor: "Serum potassium (hyperkalemia risk) and serum creatinine.",
    watch: "<strong>Dry, hacking cough</strong> (due to bradykinin; switch to ARB) and life-threatening <strong>angioedema</strong> (lip/tongue swelling).",
    antidote: null,
    trap: "Angioedema is an <strong>airway emergency</strong> and permanent contraindication. Teratogenic: absolute contraindication in pregnancy."
  },
  {
    generic: "Metoprolol",
    brand: "(Lopressor, Toprol-XL)",
    category: "cardio",
    drugClass: "Cardio-Selective Beta-1 Blocker (-olol)",
    indication: "Hypertension, Angina, Heart Failure, Post-MI",
    assess: "Apical pulse and BP before every dose (typically hold if HR &lt;60 bpm or SBP &lt;90–100 per provider order).",
    monitor: "Blood glucose in diabetics (<strong>masks tachycardia of hypoglycemia</strong>, though diaphoresis persists).",
    watch: "Bradycardia, hypotension, heart failure exacerbation (crackles, edema).",
    antidote: "Glucagon (for severe beta-blocker overdose)",
    trap: "Non-selective beta blockers (propranolol) trigger severe <strong>bronchospasm in asthma/COPD</strong>. Never discontinue abruptly (rebound angina/MI)."
  },
  {
    generic: "Carvedilol",
    brand: "(Coreg, Coreg CR)",
    category: "cardio",
    drugClass: "Non-Selective Alpha-1 & Beta-1/Beta-2 Receptor Blocker",
    indication: "Heart Failure (with reduced EF), Post-MI LVD, Hypertension",
    assess: "Apical pulse (<strong>1 full minute</strong>) and blood pressure prior to dose (hold per provider parameters, commonly HR &lt;60 bpm or SBP &lt;90–100).",
    monitor: "Weight gain/edema (worsening HF fluid retention), orthostatic vitals, and blood glucose (<strong>masks hypoglycemia tachycardia</strong>).",
    watch: "Teach: <strong>take with food</strong> to slow absorption and reduce orthostatic dizziness; never stop abruptly (rebound ischemia).",
    antidote: "Glucagon (for severe beta-blocker overdose/toxicity)",
    trap: "Non-selective beta-2 blockade causes <strong>bronchospasm</strong> — contraindicated in patients with severe bronchial asthma or bronchospastic COPD."
  },
  {
    generic: "Spironolactone",
    brand: "(Aldactone)",
    category: "cardio",
    drugClass: "Potassium-Sparing Diuretic / Aldosterone Antagonist",
    indication: "Heart Failure, Hypertension, Ascites, Hyperaldosteronism",
    assess: "Serum potassium (&gt;5.0 mEq/L is a contraindication) and renal function before giving.",
    monitor: "ECG changes from hyperkalemia (peaked T waves, widened QRS).",
    watch: "Teach patients to <strong>avoid salt substitutes</strong> (which contain potassium chloride) and potassium supplements.",
    antidote: null,
    trap: "Patients often unknowingly use <strong>salt substitutes</strong> high in KCl, leading to fatal hyperkalemia and cardiac arrest."
  },
  {
    generic: "Nitroglycerin",
    brand: "(Nitrostat, Nitro-Dur)",
    category: "cardio",
    drugClass: "Nitrate / Coronary Vasodilator",
    indication: "Acute Angina Pectoris & Prophylaxis",
    assess: "Blood pressure before each dose (causes profound venous/arterial vasodilation).",
    monitor: "Pain scale, BP, and HR after each dose.",
    watch: "Severe throbbing headache (expected/common), orthostatic hypotension, reflex tachycardia.",
    antidote: null,
    trap: "<strong>Fatal hypotension</strong> if taken with PDE-5 inhibitors (sildenafil, tadalafil within 24–48 hrs). Take 1 tab SL q5min x 3 doses; call 911 if pain unresolved after 1st."
  },
  {
    generic: "Amiodarone",
    brand: "(Pacerone, Cordarone)",
    category: "cardio",
    drugClass: "Class III Antiarrhythmic",
    indication: "Ventricular Tachycardia, V-Fib, Refractory A-Fib",
    assess: "Baseline ECG (QT interval), pulmonary function tests, and baseline liver/thyroid panels.",
    monitor: "Continuous ECG (watch for QT prolongation and torsades de pointes) and respiratory status.",
    watch: "<strong>Pulmonary toxicity / fibrosis</strong> (dry cough, progressive dyspnea), blue-gray skin discoloration, thyroid dysfunction.",
    antidote: null,
    trap: "<strong>Pulmonary toxicity is amiodarone's most lethal complication</strong>; report any new shortness of breath or cough immediately."
  },

  // =========================================================================
  // 2. ANTICOAGULANTS & BLOOD
  // =========================================================================
  {
    generic: "Heparin (Unfractionated)",
    brand: "(Hepalean)",
    category: "anticoag",
    drugClass: "Anticoagulant (Thrombin/Factor Xa Inhibitor)",
    indication: "DVT/PE Prophylaxis & Treatment, Acute Coronary Syndrome",
    assess: "Baseline CBC, PT/INR, aPTT, and occult bleeding signs before IV infusion.",
    monitor: "<strong>aPTT</strong> (therapeutic target typically 1.5–2.5x control, ~60–80 sec) and daily <strong>platelet count</strong>.",
    watch: "Bleeding (hematuria, melena, epistaxis) and <strong>HIT (Heparin-Induced Thrombocytopenia)</strong>: &gt;50% drop in platelets.",
    antidote: "Protamine Sulfate",
    trap: "HIT causes paradoxically <strong>life-threatening arterial/venous thrombosis</strong>, not just bleeding. Stop heparin immediately if platelets plunge."
  },
  {
    generic: "Warfarin",
    brand: "(Coumadin)",
    category: "anticoag",
    drugClass: "Vitamin K Antagonist (VKA)",
    indication: "Atrial Fibrillation, DVT/PE Prevention, Mechanical Valves",
    assess: "Current <strong>PT/INR</strong> prior to daily evening dose and evaluate for bruising/bleeding.",
    monitor: "INR (target 2.0–3.0 for Afib/DVT; 2.5–3.5 for mechanical heart valves).",
    watch: "Teach: keep <strong>dietary Vitamin K intake consistent</strong> (green leafy veggies); avoid sudden binge or elimination.",
    antidote: "Vitamin K (Phytonadione) / Kcentra (4-factor PCC)",
    trap: "Takes <strong>3–5 days to become therapeutic</strong>; IV heparin is overlapped as 'bridge therapy' until INR is in target range."
  },
  {
    generic: "Enoxaparin",
    brand: "(Lovenox)",
    category: "anticoag",
    drugClass: "Low Molecular Weight Heparin (LMWH)",
    indication: "DVT/PE Prophylaxis & Treatment, Post-Surgical",
    assess: "Platelet count and renal function (dose adjusted in renal impairment).",
    monitor: "CBC (hemoglobin/hematocrit/platelets); does NOT require routine aPTT monitoring.",
    watch: "SubQ injection: inject at 90° in <strong>anterolateral abdomen ('love handles')</strong>. <strong>Do NOT expel air bubble</strong>; do NOT rub site.",
    antidote: "Protamine Sulfate",
    trap: "<strong>Never expel the nitrogen air bubble</strong> from pre-filled syringe (it seals medication in SubQ tissue); never rub site (causes hematoma)."
  },
  {
    generic: "Clopidogrel",
    brand: "(Plavix)",
    category: "anticoag",
    drugClass: "Antiplatelet (ADP Receptor Inhibitor)",
    indication: "Stent Thrombosis Prevention, Post-MI/Stroke",
    assess: "Baseline CBC, platelet count, and upcoming surgical schedule.",
    monitor: "Signs of occult gastrointestinal bleeding, bruising, petechiae, purpura.",
    watch: "Must typically be <strong>held 5–7 days before elective surgeries</strong> to prevent catastrophic hemorrhage per surgical orders.",
    antidote: null,
    trap: "Antiplatelets do NOT dissolve existing clots (not thrombolytics); they prevent platelet aggregation and future occlusion."
  },

  // =========================================================================
  // 3. ENDOCRINE & DIABETES
  // =========================================================================
  {
    generic: "Regular Insulin",
    brand: "(Humulin R, Novolin R)",
    category: "endocrine",
    drugClass: "Short-Acting Insulin (Clear)",
    indication: "Type 1 & 2 DM, DKA Management, Hyperkalemia",
    assess: "Blood glucose and ensure meal tray is ready/present before injection. Onset: 30–60m, <strong>Peak: 2–4 hr</strong>.",
    monitor: "Signs of hypoglycemia (sweating, tremors, tachycardia, confusion) at the 2–4 hour peak window.",
    watch: "<strong>ONLY insulin that can be given IV</strong>. When mixing with NPH: draw <strong>Clear (Regular) before Cloudy (NPH)</strong>.",
    antidote: "Dextrose 50% IV (D50W) / Glucagon IM/SubQ",
    trap: "Hypoglycemia peaks 2–4 hours after administration. 'RN = Regular before NPH' prevents contaminating the regular vial."
  },
  {
    generic: "Insulin Glargine",
    brand: "(Lantus, Basaglar)",
    category: "endocrine",
    drugClass: "Long-Acting Basal Insulin (Clear)",
    indication: "Basal Glycemic Control in Type 1 & 2 DM",
    assess: "Blood glucose; administer SubQ once daily at the same time each day (typically bedtime or morning).",
    monitor: "Fasting morning blood glucose; <strong>has NO pronounced peak</strong> (steady 24-hr curve, lower hypoglycemia peak risk).",
    watch: "<strong>NEVER mix Insulin Glargine with any other insulin</strong> in the same syringe (causes precipitation and altered kinetics).",
    antidote: "Dextrose 50% IV / Oral Fast-Acting Carbs",
    trap: "Never mix Glargine with short/rapid insulins in one syringe; always administer as two separate injections."
  },
  {
    generic: "Metformin",
    brand: "(Glucophage)",
    category: "endocrine",
    drugClass: "Biguanide Antidiabetic",
    indication: "Type 2 Diabetes Mellitus (First-Line)",
    assess: "Renal function (eGFR/Creatinine) and upcoming imaging schedules with IV contrast.",
    monitor: "Blood glucose and signs of lactic acidosis (muscle pain, hyperventilation, somnolence).",
    watch: "<strong>HOLD 48 hours before & after IV iodinated contrast</strong> procedures due to acute renal failure & lactic acidosis risk.",
    antidote: null,
    trap: "Metformin alone rarely causes hypoglycemia, but combined with <strong>IV contrast causes acute kidney injury & fatal lactic acidosis</strong>."
  },
  {
    generic: "Levothyroxine",
    brand: "(Synthroid)",
    category: "endocrine",
    drugClass: "Thyroid Hormone Replacement (Synthetic T4)",
    indication: "Hypothyroidism & Myxedema Coma",
    assess: "Resting pulse and baseline thyroid panel (TSH, free T4).",
    monitor: "Signs of hyperthyroidism/overdose (tachycardia, palpitations, angina, insomnia, tremors).",
    watch: "Teach: Take <strong>in the morning on an empty stomach</strong> with full glass of water, 30–60 min before breakfast. Separate from calcium/iron by 4h.",
    antidote: null,
    trap: "<strong>Lifelong therapy</strong> taking 4–6 weeks for full therapeutic effect. Never stop abruptly or double doses if missed."
  },

  // =========================================================================
  // 4. RESPIRATORY & CORTICOSTEROIDS
  // =========================================================================
  {
    generic: "Albuterol",
    brand: "(Proventil, Ventolin)",
    category: "resp",
    drugClass: "Short-Acting Beta-2 Agonist (SABA) Bronchodilator",
    indication: "Acute Asthma / COPD Bronchospasm (Rescue Inhaler)",
    assess: "Lung sounds, respiratory rate, pulse oximetry, and baseline heart rate before/after treatment.",
    monitor: "Expected sympathomimetic effects: <strong>tachycardia, tremors, anxiety, palpitations</strong>.",
    watch: "If using with an inhaled steroid: <strong>use Albuterol FIRST</strong>, wait 5 minutes, then use corticosteroid (opens airways for steroid).",
    antidote: null,
    trap: "Albuterol is the <strong>rescue inhaler</strong> for acute attacks (steroids are NOT for rescue). Clean mouthpiece weekly."
  },
  {
    generic: "Prednisone / Methylprednisolone",
    brand: "(Deltasone / Solu-Medrol)",
    category: "resp",
    drugClass: "Systemic Glucocorticoid / Corticosteroid",
    indication: "Inflammation, Asthma Exacerbation, Autoimmune Flares",
    assess: "Blood glucose, baseline BP, and check for active occult infections.",
    monitor: "<strong>Hyperglycemia</strong> (even in non-diabetics), hypokalemia, fluid retention/hypertension, GI ulceration.",
    watch: "Teach: <strong>NEVER stop abruptly</strong> (must taper to avoid acute adrenal crisis/Addisonian collapse); take with meals.",
    antidote: null,
    trap: "Adrenal glands atrophy during therapy. <strong>Sudden cessation triggers fatal adrenal crisis</strong> (severe hypotension & shock)."
  },

  // =========================================================================
  // 5. NEURO, PSYCH & SEIZURES
  // =========================================================================
  {
    generic: "Phenytoin",
    brand: "(Dilantin)",
    category: "neuro",
    drugClass: "Hydantoin Anticonvulsant",
    indication: "Tonic-Clonic & Complex Partial Seizures",
    assess: "Baseline seizure frequency, dental history, and current enteral tube feeding.",
    monitor: "<strong>Therapeutic range: 10–20 mcg/mL</strong>. Toxicity signs: <strong>nystagmus, ataxia, slurred speech, lethargy</strong>.",
    watch: "Adverse effect: <strong>gingival hyperplasia</strong> (teach meticulous oral hygiene & soft toothbrush). Flush IV with 0.9% NaCl only.",
    antidote: null,
    trap: "<strong>Tube feedings drastically reduce phenytoin absorption</strong>; stop enteral feeds 1–2 hr before and after oral doses."
  },
  {
    generic: "Lithium Carbonate",
    brand: "(Lithobid)",
    category: "neuro",
    drugClass: "Mood Stabilizer (Antimanic)",
    indication: "Bipolar I Disorder (Manic Episodes & Maintenance)",
    assess: "Serum sodium level, renal function, and baseline fluid intake.",
    monitor: "<strong>Therapeutic level: 0.6–1.2 mEq/L</strong> (toxicity &gt;1.5). Signs: coarse tremors, severe diarrhea, vomiting, confusion, ataxia.",
    watch: "Teach: <strong>maintain consistent sodium & fluid intake (2–3 L/day)</strong>. Low sodium or dehydration causes severe lithium toxicity.",
    antidote: "Hemodialysis (for severe life-threatening toxicity)",
    trap: "<strong>Dehydration, low-sodium diets, and NSAIDs/diuretics</strong> sharply spike lithium levels. Never restrict dietary salt."
  },
  {
    generic: "Lorazepam",
    brand: "(Ativan)",
    category: "neuro",
    drugClass: "Benzodiazepine (GABA Enhancer)",
    indication: "Status Epilepticus, Acute Anxiety, Alcohol Withdrawal",
    assess: "Respiratory rate and depth, level of consciousness, and baseline blood pressure.",
    monitor: "Excessive sedation, respiratory depression, and paradoxical excitation in elderly.",
    watch: "Have emergency resuscitation equipment ready for IV push. Push slowly over at least 2 minutes.",
    antidote: "Flumazenil (Romazicon)",
    trap: "Flumazenil reversal in benzodiazepine-dependent or seizure patients can precipitate <strong>refractory status epilepticus</strong>."
  },
  {
    generic: "Haloperidol",
    brand: "(Haldol)",
    category: "neuro",
    drugClass: "Typical / First-Generation Antipsychotic",
    indication: "Schizophrenia, Acute Psychotic Agitation, Tourette's",
    assess: "Baseline ECG (QT interval), motor function, and mental status.",
    monitor: "<strong>Extrapyramidal Symptoms (EPS)</strong> (dystonia, akathisia) and <strong>Neuroleptic Malignant Syndrome (NMS)</strong>.",
    watch: "NMS emergency signs: <strong>high fever, 'lead-pipe' muscle rigidity, altered mental status, autonomic instability</strong>.",
    antidote: "Bromocriptine / Dantrolene (for NMS); Diphenhydramine (for acute dystonia)",
    trap: "<strong>High fever + extreme muscle rigidity = emergency NMS</strong>. Stop medication immediately and notify provider."
  },

  // =========================================================================
  // 6. ANTIBIOTICS & ANTI-INFECTIVES
  // =========================================================================
  {
    generic: "Vancomycin",
    brand: "(Vancocin)",
    category: "antiinfect",
    drugClass: "Glycopeptide Antibacterial",
    indication: "MRSA, Severe Gram-Positive Infections, Oral for C. diff",
    assess: "Baseline renal function (BUN/Creatinine) and baseline hearing acuity.",
    monitor: "<strong>Trough level</strong> (drawn 30 min prior to next dose, target 10–20 mcg/mL), BUN/Cr (<strong>nephrotoxicity</strong>), and tinnitus (<strong>ototoxicity</strong>).",
    watch: "<strong>Infuse over at least 60 minutes</strong> to prevent Red Man Syndrome (flushing, rash, hypotension from rapid histamine release).",
    antidote: "Antihistamines + slow infusion rate (for Red Man)",
    trap: "<strong>Red Man Syndrome is a rate-related histamine release, NOT an allergic anaphylaxis</strong>; slow the IV infusion rate."
  },
  {
    generic: "Gentamicin",
    brand: "(Garamycin)",
    category: "antiinfect",
    drugClass: "Aminoglycoside Antibiotic",
    indication: "Severe Gram-Negative Aerobic Infections, Sepsis",
    assess: "Baseline renal labs, urine output (&gt;30 mL/hr), and baseline hearing function.",
    monitor: "Peak (30 min post-infusion) and <strong>Trough levels (immediately before next dose)</strong>, BUN, and serum creatinine.",
    watch: "<strong>Ototoxicity</strong> (tinnitus, high-frequency hearing loss, dizziness) and <strong>Nephrotoxicity</strong> (rising creatinine, oliguria).",
    antidote: null,
    trap: "Trough is drawn <strong>within 30 minutes BEFORE the next scheduled dose</strong>. Elevated trough = high risk for renal and hearing damage."
  },
  {
    generic: "Ceftriaxone",
    brand: "(Rocephin)",
    category: "antiinfect",
    drugClass: "Third-Generation Cephalosporin",
    indication: "Meningitis, Gonorrhea, CAP, Sepsis",
    assess: "History of <strong>penicillin allergy</strong> (assess reaction type: mild rash vs severe anaphylaxis/angioedema).",
    monitor: "Signs of allergic reaction, diarrhea (C. difficile), and injection site phlebitis.",
    watch: "Contraindicated in neonates receiving IV calcium-containing solutions (causes fatal calcium-ceftriaxone precipitates).",
    antidote: null,
    trap: "Cross-sensitivity: <strong>Contraindicated if patient has history of severe anaphylaxis/angioedema to penicillin</strong>."
  },
  {
    generic: "Levofloxacin",
    brand: "(Levaquin)",
    category: "antiinfect",
    drugClass: "Fluoroquinolone Antibacterial",
    indication: "Pneumonia, Complicated UTI, Skin Infections",
    assess: "Baseline ECG (QT interval), joint/tendon history, and concurrent antacid/mineral use.",
    monitor: "QT prolongation and joint/muscle discomfort.",
    watch: "Black Box Warning: <strong>Tendonitis & Tendon Rupture (especially Achilles tendon)</strong>. Teach severe photosensitivity (wear sunscreen).",
    antidote: null,
    trap: "Report any <strong>sudden heel/tendon pain immediately</strong>; discontinue drug and avoid weight-bearing to prevent full rupture."
  },

  // =========================================================================
  // 7. GI, ELECTROLYTES & PAIN
  // =========================================================================
  {
    generic: "Morphine Sulfate",
    brand: "(MS Contin, Duramorph)",
    category: "gi",
    drugClass: "Opioid Analgesic (Schedule II)",
    indication: "Moderate-to-Severe Pain, MI Pain, Dyspnea in Palliative",
    assess: "<strong>Respiratory rate and sedation level</strong> prior to administration. Hold if RR &lt;12/min (or per order).",
    monitor: "Pain score, respiratory rate, BP, and bowel movements (prophylactic stool softener required).",
    watch: "Respiratory depression, constipation, urinary retention, sedation, pinpoint pupils (miosis).",
    antidote: "Naloxone (Narcan)",
    trap: "<strong>Naloxone has a shorter half-life (~30–90 min) than morphine</strong>; repeat naloxone doses may be needed as opioid re-emerges."
  },
  {
    generic: "Potassium Chloride (KCl)",
    brand: "(K-Dur, Micro-K)",
    category: "gi",
    drugClass: "Electrolyte Supplement",
    indication: "Treatment & Prevention of Hypokalemia",
    assess: "Serum potassium level and <strong>urine output (&gt;30 mL/hr)</strong> before giving. No pee = no K+.",
    monitor: "Serum potassium and continuous cardiac telemetry with IV infusions.",
    watch: "<strong>NEVER GIVE IV PUSH, IM, OR SUBQ (FATAL CARDIAC ARREST)</strong>. Max peripheral IV rate: 10 mEq/hr.",
    antidote: "Insulin + D50W, Calcium Gluconate, Sodium Polystyrene / Kayexalate",
    trap: "<strong>IV push potassium is lethal</strong>. Always infuse diluted in IV solution via an electronic infusion pump. Never bolus."
  },
  {
    generic: "Ondansetron",
    brand: "(Zofran)",
    category: "gi",
    drugClass: "Serotonin 5-HT3 Receptor Antagonist Antiemetic",
    indication: "Chemotherapy, Post-Operative & Radiation-Induced Nausea",
    assess: "Nausea intensity and baseline ECG (risk of dose-dependent <strong>QT prolongation</strong>).",
    monitor: "ECG rhythm in patients with electrolyte imbalances or on other QT-prolonging drugs.",
    watch: "Common side effects: <strong>headache, constipation, dizziness</strong>. Administer 30 min before chemotherapy.",
    antidote: null,
    trap: "Can cause <strong>torsades de pointes</strong> via QT prolongation; question dose in congenital long QT syndrome or severe hypomagnesemia."
  },
  {
    generic: "Magnesium Sulfate",
    brand: "(Epsom Salt / IV Mag)",
    category: "gi",
    drugClass: "Electrolyte / Anticonvulsant / Tocolytic",
    indication: "Eclampsia Seizure Prevention, Hypomagnesemia, Torsades",
    assess: "<strong>Deep Tendon Reflexes (DTRs)</strong>, respiratory rate (&ge;12/min), and urine output (&ge;30 mL/hr) before/during.",
    monitor: "Signs of magnesium toxicity: <strong>loss of patellar DTRs (earliest sign)</strong>, respiratory depression, oliguria, hypotension.",
    watch: "Keep resuscitation equipment and calcium gluconate at bedside at all times during IV infusion.",
    antidote: "Calcium Gluconate 10% IV",
    trap: "<strong>Loss of deep tendon reflexes is the earliest clinical sign of toxicity</strong>; stop infusion immediately and prepare calcium gluconate."
  }
];
