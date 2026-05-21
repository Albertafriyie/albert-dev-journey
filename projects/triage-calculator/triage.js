// =====
// Patient Risk Triage Calculator
// Albert - Day 16
// Clinical basis: Modified Early Warning Score (MEWS)
// =====

function calculateTriageRisk(age, systolicBP, heartRate, isSmoker, isDiabetic) {
  // Validate inputs
  if (age < 0 || age > 130)
    return {
      risk: "invalid",
      score: 0,
      advice: "Please enter a valid age (0-130)",
    };
  if (systolicBP < 50 || systolicBP > 300)
    return {
      risk: "invalid",
      score: 0,
      advice: "Please enter a valid systolic BP (50-300)",
    };
  if (heartRate < 20 || heartRate > 300)
    return {
      risk: "invalid",
      score: 0,
      advice: "Please enter a valid heart rate (20-300)",
    };

  let score = 0;

  // Age risk
  if (age >= 65) score += 2;
  else if (age >= 45) score += 1;

  //Blood pressure risk
  if (systolicBP >= 180) score += 3;
  else if (systolicBP >= 140) score += 2;
  else if (systolicBP >= 130) score += 1;
  else if (systolicBP < 90) score += 3; //hypotension also dangerous

  // Heart rate risk
  if (heartRate > 130 || heartRate < 50) score += 3;
  else if (heartRate > 100 || heartRate < 60) score += 1;

  // Risk factors
  if (isSmoker) score += 1;
  if (isDiabetic) score += 1;

  // Determine risk category
  let risk, color, advice;
  if (score <= 2) {
    risk = "LOW RISK";
    color = "green";
    advice = "Routine assessment. Proceed to standard triage queue.";
  } else if (score <= 4) {
    risk = "MODERATE RISK";
    color = "amber";
    advice =
      "Needs closer monitoring. Reassess in 30 minutes. Clinician review recommended.";
  } else if (score <= 6) {
    risk = "HIGH RISK";
    color = "orange";
    advice =
      "Priority review required. Immediate clinician assessment. Consider further workup.";
  } else {
    risk = "CRITICAL RISK";
    color = "red";
    advice =
      "URGENT: Immediate medical intervention required. Do not leave patient unattended.";
  }
  return { risk, score, advice, color };
}

// Test it in Node:
let result = calculateTriageRisk(70, 185, 110, true, true);
console.log(result);
// { risk: 'CRITICAL RISK'. score: 9, advice: 'URGENT...', color: 'red' }
