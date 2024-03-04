const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let inputValue = input.value;

  if (inputValue !== "") {
    const paragraph = document.createElement("p");
    paragraph.textContent = inputValue;
    container.append(paragraph);
    input.value = "";
  }
});
