const inputFieldsValidation = (input) => {
  input.addEventListener("input", function (event) {
    const element = event.target;
    const messageSpan = document.querySelector(`.input__${element.name}-message`);
    if (!element.validity.valid) {
      input.classList.add("input__error");
      messageSpan.textContent = element.validationMessage;
    } else {
      input.classList.remove("input__error");
      messageSpan.textContent = "";
    }
  });
};

const allForms = Array.from(document.forms);
for (const form of allForms) {
  const inputs = Array.from(form.elements);
  inputs.forEach((element) => {
    inputFieldsValidation(element);
  });
}
