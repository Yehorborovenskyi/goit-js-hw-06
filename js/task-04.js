// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.incrementBtn.addEventListener("click", addlValue);
refs.decrementBtn.addEventListener("click", removeValue);

function addlValue() {
  counterValue += 1;
  return (value.textContent = counterValue);
}
function removeValue() {
  counterValue -= 1;
  return (value.textContent = counterValue);
}
