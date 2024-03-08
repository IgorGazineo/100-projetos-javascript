const productNameInputElement = document.getElementById("product-name");
const charCounterElement = document.getElementById("char-counter");

function productNameCharsRemaining(event) {
  const remainingChars = event.target.maxLength - event.target.value.length;
  charCounterElement.textContent = remainingChars;
  if (remainingChars <= 10) {
    charCounterElement.classList.add("warning");
    if (remainingChars < 10) {
      charCounterElement.textContent = "0" + remainingChars;
    }
  } else {
    charCounterElement.classList.remove("warning");
  }
}

productNameInputElement.addEventListener("input", productNameCharsRemaining);
