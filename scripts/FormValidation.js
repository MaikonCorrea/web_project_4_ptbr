
class FormValidation {
  constructor(options) {
    this._inputErrorClass = options.inputErrorClass;
    this._editButtonSave = options.editButtonSave;
    this._includeButtonSave = options.includeButtonSave;
    this._inactiveButtonSaveClass = options.inactiveButtonSaveClass;
    this._inactiveButtonIncludeClass = options.inactiveButtonIncludeClass;
  }

  enableValidation() {
    const inputFieldsValidation = (input) => {
      input.addEventListener("input", (event) => {
        const element = event.target;
        const messageSpan = document.querySelector(`.span_${element.name}-message`);
        if (!element.validity.valid) {
          input.classList.add(this._inputErrorClass);

          if (element.type === "url" && element.value.trim() !== "") {
            messageSpan.textContent = "Por favor, insira um endereÃ§o web.";
          } else {
            messageSpan.textContent = element.validationMessage;
          }
         disableButtons();
        } else {
          input.classList.remove(this._inputErrorClass);
          messageSpan.textContent = "";

          if (this.isValidForm) {
            enableButtons();
          }
        }
      });
    };



    const disableButtons = () => {
      const saveButtonEdit = document.querySelector(this._editButtonSave);
      const saveButtonInclude = document.querySelector(this._includeButtonSave);
      saveButtonEdit.setAttribute("disabled", true);
      saveButtonInclude.setAttribute("disabled", true);
      saveButtonEdit.classList.add(this._inactiveButtonSaveClass);
      saveButtonInclude.classList.add(this._inactiveButtonIncludeClass);
    };

    const enableButtons = () => {
      const saveButtonEdit = document.querySelector(this._editButtonSave);
      const saveButtonInclude = document.querySelector(this._includeButtonSave);
      saveButtonEdit.removeAttribute("disabled");
      saveButtonInclude.removeAttribute("disabled");
      saveButtonEdit.classList.remove(this._inactiveButtonSaveClass);
      saveButtonInclude.classList.remove(this._inactiveButtonIncludeClass);
    };

    const allForms = Array.from(document.forms);
    for (const form of allForms) {
      const inputs = Array.from(form.elements);
      const isValidForm = () => inputs.every((input) => input.validity.valid);
      inputs.forEach((element) => {
        inputFieldsValidation(element);
        element.addEventListener("input", (event) => {
          if (isValidForm()) {
            enableButtons();
          } else {
            disableButtons();
          }
        });
      });
    }
  }
}


export { FormValidation };
