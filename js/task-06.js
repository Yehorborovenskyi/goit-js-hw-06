const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputFocus);

function onInputFocus(event) {
  input.classList.remove("invalid", "valid");
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    return input.classList.add("valid");
  }
  return input.classList.add("invalid");
}
