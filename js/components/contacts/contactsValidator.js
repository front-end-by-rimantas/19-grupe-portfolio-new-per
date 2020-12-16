import { isValidContactEmail, isValidContactName, isValidContactText } from './contactsValidationRules.js';

function contactsValidator(selector) {
  const contactsDOM = document.querySelector(selector);
  const submitBtnDOM = contactsDOM.querySelector('button[type="submit"]');

  const allInputDOMs = contactsDOM.querySelectorAll('input:not([type="submit"])');
  const allTextareaDOMs = contactsDOM.querySelectorAll('textarea');

  const allElements = [...allInputDOMs, ...allTextareaDOMs];

  if (!submitBtnDOM) {
    console.error('ERROR: input:submit button can not be found in contacts form.');
    return false;
  }

  submitBtnDOM.addEventListener('click', () => {
    let errorCount = 0;
    console.clear();

    for (let input of allElements) {
      const validationRule = input.dataset.validation;
      const text = input.value;

      const nameError = isValidContactName(text);
      const emailError = isValidContactEmail(text);
      const textError = isValidContactText(text);

      if (validationRule === 'name') {
        const nameError = isValidContactName(text);
        if (nameError !== true) {
          console.log(nameError);
          errorCount++;

        }
      }
      if (validationRule === 'email') {
        const emailError = isValidContactEmail(text);
        if (emailError !== true) {
          console.log(emailError);
          errorCount++;

        }
      }
      if (validationRule === 'text') {
        const textError = isValidContactText(text);
        if (textError !== true) {
          console.log(textError);
          errorCount++;

        }
      }
    }

    if (errorCount === 0) {
      console.log('all good..');
    }
  })
}

export { contactsValidator }