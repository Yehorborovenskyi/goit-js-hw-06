const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  if (formElements.email.value === "") {
    alert("Введите email");
    return;
  } else if (formElements.password.value === "") {
    alert("Введите password");
    return;
  }
  event.currentTarget.reset();
  console.log(formData);
}
