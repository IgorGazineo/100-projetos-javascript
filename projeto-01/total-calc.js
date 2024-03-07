const billInputElement = document.getElementById("bill-amount-total-calc");
const tipInputElement = document.getElementById("tip-percentage-total-calc");
const totalCalcBtn = document.getElementById("total-calc-btn");
const totalSpanElement = document.querySelector("#tip-result span");
function calcTotalBill() {
  const billValue = +billInputElement.value;
  const tipValue = +tipInputElement.value;
  const total = billValue + (tipValue / 100) * billValue;
  console.log(total);
  totalSpanElement.textContent = total.toFixed(2);
}

totalCalcBtn.addEventListener("click", calcTotalBill);
