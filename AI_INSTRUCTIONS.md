# AI Instructions: Updating the NCLEX Medication Database

This document defines the strict operational rules and verification standards for any AI assistant tasked with adding, updating, or removing medications in this widget.

---

## 🎯 Primary Directive

When the user asks you to add, modify, or delete a medication (e.g., *"Add carvedilol"*, *"Update lithium toxicity signs"*, *"Remove haloperidol"*):

1. **Modify ONLY `medications.js`.**
2. **Do NOT modify `index.html`, styles, UI logic, categories, or the schema** unless the user explicitly requests an interface change.
3. **Preserve the existing 10-field data structure** without adding, deleting, or renaming object keys.
4. **Check for existing entries** before adding a new medication to avoid duplicates.
5. **Study Status Separation:** User study statuses (`Know`, `Review`, `Unmarked`) are managed entirely client-side via `localStorage` by the medication's `generic` name. Do NOT add status fields to `medications.js`.

---

## 🔬 Clinical Verification & Safety Standards

Every AI assistant **must verify medication facts using authoritative, current clinical and pharmacology sources** before writing or modifying entries.

### 1. Authoritative Sources Required
* **FDA Drug Labels & DailyMed** (National Library of Medicine)
* **Standard Pharmacology References** (Davis’s Drug Guide, Lexicomp, Micromedex)
* **Established Nursing & NCLEX Test Prep References** (ATI Nursing Pharmacology, Saunders Comprehensive Review for NCLEX-RN)

### 2. Zero-Assumption Rule (Never Invent or Guess)
You must **never invent, assume, or hallucinate**:
* Hold parameters or vital sign cutoffs
* Therapeutic blood levels or lab ranges
* Administration rates or IV push infusion times
* Contraindications, black box warnings, or drug interactions
* Antidotes or reversal agents
* Monitoring parameters or patient education rules

### 3. Universal Safety vs. Provider Orders / Institutional Policy
* **Universal NCLEX/Safety Rules:** Only state numeric parameters if they represent standardized clinical rules (e.g., *Digoxin apical pulse <60 bpm in adults*, *Morphine hold if RR <12/min*, *Potassium never given IV push*).
* **Variable / Institution Parameters:** If a parameter is provider-specific or hospital-dependent (e.g., *SBP <90 or <100*, *specific sliding scale targets*), phrase it as *"per provider order parameters"* or *"per facility protocol"*.
* **Handling Uncertainty:** If a fact is uncertain, conflicting across sources, or context-dependent, **flag it clearly to the user instead of guessing**.

---

## 📋 Standard Medication Schema

Every entry in the `MEDICATIONS` array inside [`medications.js`](medications.js) must strictly follow this exact 10-field structure:

```javascript
{
  generic: "Generic Name",
  brand: "(Brand Name)",
  category: "cardio", // Valid values: cardio | anticoag | endocrine | resp | neuro | antiinfect | gi
  drugClass: "Pharmacologic Class / Receptor Action",
  indication: "Primary Bedside Indication (e.g., Heart Failure & Hypertension)",
  assess: "Critical assessment before administration (1-2 concise lines). Use <strong>...</strong> for key terms.",
  monitor: "Important vitals / labs / therapeutic ranges to track.",
  watch: "Major adverse effects & essential patient teaching.",
  antidote: "Antidote / Reversal Agent or null if none",
  trap: "Concise ATI/NCLEX exam trap, black box warning, or critical distinction."
}
```

---

## 🏷️ Predefined Category Keys

Always assign the medication to one of these 7 predefined categories:

| Category Key | Category Label | Common Drug Types Included |
| :--- | :--- | :--- |
| `cardio` | `CARDIOVASCULAR` | Antihypertensives, Beta-blockers, ACE-Is, Inotropes, Antiarrhythmics, Nitrates |
| `anticoag` | `ANTICOAGULANT / BLOOD` | Heparins, Warfarin, DOACs, Antiplatelets, Thrombolytics |
| `endocrine` | `ENDOCRINE / DIABETES` | Insulins, Oral Antidiabetics, Thyroid hormones, Systemic Steroids |
| `resp` | `RESPIRATORY & STEROID` | Bronchodilators (SABA/LABA), Inhaled Corticosteroids, Leukotriene Modifiers |
| `neuro` | `NEURO / PSYCH / SEIZURE` | Anticonvulsants, Antipsychotics, Antidepressants, Benzodiazepines, Mood Stabilizers |
| `antiinfect` | `ANTIBIOTIC / INFECTION` | Aminoglycosides, Glycopeptides, Penicillins, Cephalosporins, Fluoroquinolones |
| `gi` | `GI / ELECTROLYTE / PAIN` | Opioids, Electrolytes (KCl, MgSO4), Antiemetics, PPIs, Laxatives |

---

## ✍️ Content & Formatting Guidelines

1. **Concise & High-Yield:** Keep `assess`, `monitor`, `watch`, and `trap` to **1–2 short, scannable lines**.
2. **HTML Formatting:** Wrap critical keywords in `<strong>...</strong>` and use standard HTML entities for comparison operators (`&lt;` for `<`, `&gt;` for `>`, `&ge;` for `≥`).
3. **Accurate Antidotes:** Set `antidote: null` if no specific pharmacologic reversal agent exists. Never invent an antidote.
