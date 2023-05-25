const inputFieldsValidation = (input) => {
  input.addEventListener("input", function (event) {
    const element = event.target;
    const messageSpan = document.querySelector(`.input__${element.name}-message`);
    const saveButtonEdit = document.querySelector(".edit__button-save");
    const saveButtonInclude = document.querySelector(".include__button-save");
    if (!element.validity.valid) {
      input.classList.add("input__error");
      messageSpan.textContent = element.validationMessage;
      saveButtonEdit.setAttribute("disabled", true);
      saveButtonInclude.setAttribute("disabled", true);
      saveButtonEdit.classList.add("edit__button-save_disabled");
      saveButtonInclude.classList.add("include__button-save_disabled");
    } else {
      input.classList.remove("input__error");
      messageSpan.textContent = "";
      saveButtonEdit.removeAttribute("disabled");
      saveButtonInclude.removeAttribute("disabled");
      saveButtonEdit.classList.remove("edit__button-save_disabled");
      saveButtonInclude.classList.remove("include__button-save_disabled");
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


