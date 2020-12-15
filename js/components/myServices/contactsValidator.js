import { isValidContactEmail, isValidContactName, isValidContactText } from './contactsValidationRules.js';

function contactsValidator(selector) {
  const contactsDOM = document.querySelector(selector);
  const submitBtnDOM = contactsDOM.querySelector('button[type="submit"]');

  const allInputDOMs = contactsDOM.querySelectorAll('input:not([type="submit"])');
  const allTextareaDOMs = contactsDOM.querySelectorAll('textarea');

  const allElements = [...allInputDOMs, ...allTextareaDOMs];

  submitBtnDOM.addEventListener('click', () => {
    for (let input of allElements) {
      const validationRule = input.dataset.validation;
      const text = input.value;

      if (validationRule === 'name' && isValidContactName(text)) {
        console.log('Name is correct.');
      }
      if (validationRule === 'email' && isValidContactEmail(text)) {
        console.log('Email is correct.');
      }
      if (validationRule === 'text' && isValidContactText(text)) {
        console.log('Text is correct.');
      }
    }
  })
}

export { contactsValidator }