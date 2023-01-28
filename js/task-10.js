function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", onBtn);
destroyBtn.addEventListener("click", destroyBoxes);

function onBtn() {
  const amount = document.querySelector("#controls input").value;
  console.log(amount);
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const contain = `<div style="width:${30 + 10 * i}px; height:${
      30 + 10 * i
    }px; background-color: ${getRandomHexColor()}"></div>`;
    boxes.innerHTML += contain;
  }
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
