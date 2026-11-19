// Tip Calculator - Logic (ES6+)

// Select DOM elements (const since references don't change)
const billAmountInput = document.getElementById('bill-amount');
const customTipInput = document.getElementById('custom-tip');
const quickTipButtons = document.querySelectorAll('.tip-btn');
const calculateBtn = document.querySelector('.calculate-btn');
const resultsArea = document.getElementById('results');
const tipAmountValue = document.getElementById('tip-amount');
const totalAmountValue = document.getElementById('total-amount');
const billError = document.getElementById('bill-error');
const tipError = document.getElementById('tip-error');
const globalError = document.getElementById('error-message');

// State tracking
let currentTipPercentage = 15; // default tip percentage

// Show error message in DOM
function showError(inputElement, errorElement, message) {
  inputElement.classList.add('invalid');
  inputElement.classList.remove('valid');
  errorElement.textContent = message;
  errorElement.hidden = false;
}

// Hide error message
function hideError(inputElement, errorElement) {
  inputElement.classList.remove('invalid');
  inputElement.classList.add('valid');
  errorElement.textContent = '';
  errorElement.hidden = true;
}

// Calculate tip and total
function calculateTip(bill, percentage) {
  const tip = bill * (percentage / 100);
  const total = bill + tip;
  return { tip, total };
}

// Update UI with results
function updateUI({ tip, total }) {
  tipAmountValue.textContent = `$${tip.toFixed(2)}`;
  totalAmountValue.textContent = `$${total.toFixed(2)}`;
  resultsArea.hidden = false;
}

// Set active tip button and update custom input
function setActiveTip(percentage) {
  quickTipButtons.forEach(btn => {
    if (parseFloat(btn.dataset.tip) === percentage) {
      btn.setAttribute('aria-pressed', 'true');
      btn.classList.add('active');
    } else {
      btn.setAttribute('aria-pressed', 'false');
      btn.classList.remove('active');
    }
  });

  if (customTipInput) {
    customTipInput.value = percentage;
  }

  currentTipPercentage = percentage;
}

// Event: Quick tip button click
// UX change: only selects the percentage, calculation done via "Calcular" button
function handleQuickTipClick(event) {
  const percentage = parseFloat(event.currentTarget.dataset.tip);
  if (!isNaN(percentage)) {
    setActiveTip(percentage);
    // No calculateAndDisplay() here - calculation happens on "Calcular" button press
  }
}

// Event: Custom tip input change
function handleCustomTipChange(event) {
  const value = parseFloat(event.target.value);

  if (isNaN(value) || value < 0 || value > 100) {
    showError(customTipInput, tipError, 'Porcentaje debe estar entre 0 y 100');
  } else {
    hideError(customTipInput, tipError);
    currentTipPercentage = value;
    calculateAndDisplay();
  }
}

// Event: Calculate button click
function handleCalculateClick() {
  calculateAndDisplay();
}

// Validate bill amount and calculate
function validateAndCalculate() {
  const billValue = parseFloat(billAmountInput.value);

  // Hide previous errors
  hideError(billAmountInput, billError);

  if (isNaN(billValue) || billValue <= 0) {
    showError(billAmountInput, billError, 'Monto debe ser mayor a 0');
    return;
  }

  // Hide tip error if it was shown
  hideError(customTipInput, tipError);

  // Calculate with current tip percentage
  const { tip, total } = calculateTip(billValue, currentTipPercentage);
  updateUI({ tip, total });
}

// Calculate and display results
function calculateAndDisplay() {
  validateAndCalculate();
}

// Event listeners
function initEventListeners() {
  // Quick tip buttons
  quickTipButtons.forEach(btn => {
    btn.addEventListener('click', handleQuickTipClick);
  });

  // Custom tip input
  if (customTipInput) {
    customTipInput.addEventListener('change', handleCustomTipChange);
    customTipInput.addEventListener('input', () => {
      // Real-time validation: only allow numbers
      const value = customTipInput.value.replace(/[^0-9]/g, '');
      customTipInput.value = value;
    });
  }

  // Calculate button
  if (calculateBtn) {
    calculateBtn.addEventListener('click', handleCalculateClick);
  }

  // Form submit (prevent default and calculate)
  const form = document.getElementById('tip-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      calculateAndDisplay();
    });
  }
}

// Initialize when DOM is ready
// Since script is at the bottom of body, DOM is already ready, but keep for robustness
document.addEventListener('DOMContentLoaded', initEventListeners);