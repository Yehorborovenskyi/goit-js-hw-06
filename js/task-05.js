const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputFocus);
function onInputFocus(event) {
  refs.span.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.span.textContent = "Anonymous";
  }
}
