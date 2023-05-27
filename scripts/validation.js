const enableValidation = ({
  inputErrorClass,
  editButtonSave,
  includeButtonSave,
  inactiveButtonSaveClass,
  inactiveButtonincludeClass,
}) =>{
  const inputFieldsValidation = (input) => {
    input.addEventListener("input", function (event) {
      const element = event.target;
      const messageSpan = document.querySelector(`.input__${element.name}-message`);
      if (!element.validity.valid) {
        input.classList.add(inputErrorClass);
        messageSpan.textContent = element.validationMessage;
        disableButtons();
      } else {
        input.classList.remove(inputErrorClass);
        messageSpan.textContent = "";
        if (isValidForm()) {
          enableButtons();
        }
      }
    });
  };

  const disableButtons = () => {
    const saveButtonEdit = document.querySelector(editButtonSave);
    const saveButtonInclude = document.querySelector(includeButtonSave);
    saveButtonEdit.setAttribute("disabled", true);
    saveButtonInclude.setAttribute("disabled", true);
    saveButtonEdit.classList.add(inactiveButtonSaveClass);
    saveButtonInclude.classList.add(inactiveButtonincludeClass);
  };

  const enableButtons = () => {
    const saveButtonEdit = document.querySelector(editButtonSave);
    const saveButtonInclude = document.querySelector(includeButtonSave);
    saveButtonEdit.removeAttribute("disabled");
    saveButtonInclude.removeAttribute("disabled");
    saveButtonEdit.classList.remove(inactiveButtonSaveClass);
    saveButtonInclude.classList.remove(inactiveButtonincludeClass);
  };

  const allForms = Array.from(document.forms);
  for (const form of allForms) {
    const inputs = Array.from(form.elements);
    const isValidForm = () => inputs.every((input) => input.validity.valid);

    inputs.forEach((element) => {
      inputFieldsValidation(element);
      element.addEventListener("input", function (event) {
        if (isValidForm()) {
          enableButtons();
        } else {
          disableButtons();
        }
    });
    });
  }
};

enableValidation({
  inputErrorClass: "input__error",
  editButtonSave: ".edit__button-save",
  includeButtonSave: ".include__button-save",
  inactiveButtonSaveClass: "edit__button-save_disabled",
  inactiveButtonincludeClass: "include__button-save_disabled",
});
