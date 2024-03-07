const billInputElementTotal = document.getElementById("bill-amount-total-calc");
const tipInputElementTotal = document.getElementById(
  "tip-percentage-total-calc"
);
const totalCalcBtn = document.getElementById("total-calc-btn");
const totalSpanElement = document.querySelector("#total-result span");

function calcTotalBill() {
  const billValue = +billInputElementTotal.value;
  const tipValue = +tipInputElementTotal.value;
  const total = billValue + (tipValue / 100) * billValue;
  console.log(total);
  totalSpanElement.textContent = total.toFixed(2);
}

totalCalcBtn.addEventListener("click", calcTotalBill);
