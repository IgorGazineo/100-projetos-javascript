const billInputElementTip = document.querySelector("#bill-amount-tip-cal");
const tipInputElementTip = document.querySelector("#tip-amount-tip-cal");
const tipCalcBtn = document.querySelector("#tip-calc-btn");
const tipSpanElement = document.querySelector("#tip-result span");

function calcTip() {
  const billInputValue = +billInputElementTip.value;
  const tipInputValue = +tipInputElementTip.value;
  const tip = (billInputValue * tipInputValue) / 100;
  tipSpanElement.textContent = tip.toFixed(2);
}

tipCalcBtn.addEventListener("click", calcTip);
