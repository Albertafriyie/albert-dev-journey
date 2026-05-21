document.getElementById("calculate-btn").addEventListener("click", function () {
  // Get values from inputs
  let age = parseInt(document.getElementById("age").value);
  let bp = parseInt(document.getElementById("bp").value);
  let hr = parseInt(document.getElementById("hr").value);
  let isSmoker = parseInt(document.getElementById("smoker").checked);
  let isDiabetic = parseInt(document.getElementById("diabetic").checked);

  // Validate all fields are filled
  if (!age || !bp || !hr) {
    alert("Please fill in all three numeric fields.");
    return;
  }

  // Calculate
  let result = calculateTriageRisk(age, bp, hr, isSmoker, isDiabetic);

  // Display result
  let resultDiv = document.getElementById("result");
  // Display result
  let riskBadge = document.getElementById("risk-badge");
  // Display result
  let scoreValue = document.getElementById("score-value");
  // Display result
  let adviceEl = document.getElementById("advice");

  riskBadge.textContent = result.risk;
  riskBadge.className = `risk-badge risk-${result.color}`;
  scoreValue.textContent = result.score;
  adviceEl.textContent = result.advice;

  resultDiv.classList.remove("hidden");
  resultDiv.scrollIntoView({ behavior: "smooth" });
});
