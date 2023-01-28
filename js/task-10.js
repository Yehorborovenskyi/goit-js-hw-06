function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
input.addEventListener("input", onBtn);

function onBtn(event) {
  const amount = event.currentTarget.value;

  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const contain = document.createElement("div");
    contain.style.backgroundColor = getRandomHexColor();
    console.log(contain);
    boxes.append(contain);
  }
}
