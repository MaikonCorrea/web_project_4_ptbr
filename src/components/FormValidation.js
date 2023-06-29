export default class FormValidation {
  constructor({inputErrorClass, editButtonSave, includeButtonSave, inactiveButtonSaveClass, inactiveButtonIncludeClass}) {
    this._inputErrorClass = inputErrorClass;
    this._editButtonSave = editButtonSave;
    this._includeButtonSave = includeButtonSave;
    this._inactiveButtonSaveClass =inactiveButtonSaveClass;
    this._inactiveButtonIncludeClass =inactiveButtonIncludeClass;
  }

  enableValidation() {
    const inputFieldsValidation = (input) => {
      input.addEventListener("input", (event) => {
        const element = event.target;
        const messageSpan = document.querySelector(`.span_${element.name}-message`);
        if (!element.validity.valid) {
          input.classList.add(this.inputErrorClass);
          if (element.type === "url" && element.value.trim() !== "") {
            messageSpan.textContent = "Por favor, insira um endereço web.";
          } else {
            messageSpan.textContent = element.validationMessage;
          }
          this.disableButtons;
        } else {
          input.classList.remove(this.inputErrorClass);
          messageSpan.textContent = "";
          if (this.isValidForm) {
            this.enableButtons;
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


