// ===
// Medication List Manager
// Albert - Day 17
// ===

// State - the app's data lives here
// 1. LOAD: Initialize state from LocalStorage or use the default array
let medications = JSON.parse(localStorage.getItem("myMedications")) || [];

// Helper to handle auto-incrementing ID
let nextId =
  medications.length > 0 ? Math.max(...medications.map((m) => m.id)) + 1 : 1;

// 2. SAVE: Create a function to save to storage
function saveToStorage() {
  localStorage.setItem("myMedications", JSON.stringify(medications));
}

// DOM references
const medicationList = document.getElementById("medication-list");
const addForm = document.getElementById("add-form");
const medNameInput = document.getElementById("med-name");
const medDoseInput = document.getElementById("med-dose");
const medFreqInput = document.getElementById("med-freq");
const medCountEl = document.getElementById("med-count");

// === RENDER FUNCTION ===
// This re-draws the entire list every time data changes
function renderMedications() {
  // Update count
  medCountEl.textContent = medications.length;

  // Clear current list
  medicationList.innerHTML = "";

  // If empty
  if (medications.length === 0) {
    medicationList.innerHTML =
      '<li class= "empty-state">No medications recorded. Add one above.</li>';
    return;
  }

  // Loop through medications and create list items
  medications.forEach(function (med) {
    let li = document.createElement("li");
    li.className = "med-item";
    li.innerHTML = `
    <div class="med-info">
    <span class="med-name">${med.name}</span>
        <span class="med-details">${med.dose} — ${med.frequency}</span>
        <span class="med-date">Started: ${med.startDate}</span>
      </div>
      <button class="delete-btn" data-id="${med.id}" aria-label="Remove ${med.name}">
        ✕ Remove
      </button>
     `;
    medicationList.appendChild(li);
  });
}

// === ADD MEDICATION ===
addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate
  let name = medNameInput.value.trim();
  let dose = medDoseInput.value.trim();
  let freq = medFreqInput.value;

  if (!name || !dose || !freq) {
    alert("Please fill in all medication details.");
    return;
  }

  // Create and add
  let newMed = {
    id: nextId++,
    name: name,
    dose: dose,
    frequency: freq,
    startDate: new Date().toISOString().split("T")[0],
  };

  medications.push(newMed);
  saveToStorage();
  addForm.reset();
  medNameInput.focus();
  renderMedications();
});

// === DELETE MEDICATION ===
// Event delegation - listen on parent, not each button
medicationList.addEventListener("click", function (event) {
  // Use .closest() to ensure we find the button even if a child element is clicked
  const deleteBtn = event.target.closest(".delete-btn");

  if (deleteBtn) {
    let idToDelete = parseInt(deleteBtn.getAttribute("data-id"));

    // Filter creates a new array excluding the deleted item
    medications = medications.filter((med) => med.id !== idToDelete);

    renderMedications();
  }
});

// === INITIAL RENDER ===
renderMedications();
