const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputFocus);

function onInputFocus(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");

    return input.classList.add("valid");
  }
  return input.classList.add("invalid");
}
