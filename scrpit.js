// DOM Elements
const plotAreaInput = document.getElementById("plot-area");
const tdrSelect = document.getElementById("tdr");
const ancillarySelect = document.getElementById("ancillary-selection");
const applyAncillaryButton = document.getElementById("apply-ancillary-fsi");
const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const netPlotAreaElement = document.getElementById("net-plot-area");
const basicFSIElement = document.getElementById("basic-fsi");
const premiumFSIElement = document.getElementById("premium-fsi");
const tdrValueElement = document.getElementById("tdr-value");
const totalFSIElement = document.getElementById("total-fsi");
const ancillaryFSIElement = document.getElementById("ancillary-fsi");
const permissibleBuiltUpElement = document.getElementById("permissible-built-up");

// Variables to store values
let plotArea = 0;
let basicFSI = 1; // Default value
let premiumFSI = 0.5; // Default value
let tdrFSI = 0;
let ancillaryFSI = 0;

// Function to calculate Total FSI and Permissible Built-Up
function calculateFSI() {
  plotArea = parseFloat(plotAreaInput.value) || 0;
  tdrFSI = parseFloat(tdrSelect.value);

  // Total FSI Calculation
  const totalFSI = basicFSI + premiumFSI + tdrFSI + ancillaryFSI;
  const permissibleBuiltUp = plotArea * totalFSI;

  // Update Results
  netPlotAreaElement.textContent = plotArea.toFixed(2);
  basicFSIElement.textContent = basicFSI.toFixed(2);
  premiumFSIElement.textContent = premiumFSI.toFixed(2);
  tdrValueElement.textContent = tdrFSI.toFixed(2);
  totalFSIElement.textContent = totalFSI.toFixed(2);
  permissibleBuiltUpElement.textContent = permissibleBuiltUp.toFixed(2);
}

// Apply Ancillary FSI
applyAncillaryButton.addEventListener("click", () => {
  const selectedValue = parseFloat(ancillarySelect.value);
  ancillaryFSI = selectedValue * basicFSI;
  ancillaryFSIElement.textContent = ancillaryFSI.toFixed(2);
  calculateFSI();
});

// Calculate Button
calculateButton.addEventListener("click", calculateFSI);

// Reset Button
resetButton.addEventListener("click", () => {
  plotAreaInput.value = "";
  tdrSelect.value = "0.4";
  ancillarySelect.value = "0.6";
  ancillaryFSI = 0;

  // Reset Results
  netPlotAreaElement.textContent = "0";
  basicFSIElement.textContent = "0";
  premiumFSIElement.textContent = "0";
  tdrValueElement.textContent = "0";
  totalFSIElement.textContent = "0";
  ancillaryFSIElement.textContent = "0";
  permissibleBuiltUpElement.textContent = "0";
});
