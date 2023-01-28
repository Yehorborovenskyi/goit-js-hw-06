const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputFocus);

function onInputFocus(event) {
  if (event.currentTarget.value.length <= input.dataset.length) {
    return input.classList.add("valid");
  }
  return input.classList.add("invalid");
}
