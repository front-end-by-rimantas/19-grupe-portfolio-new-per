function contactsValidator(selector) {
    const contactsDOM = document.querySelector(selector);
  const submitBtnDOM = contactsDOM.querySelector('button [type="submit"]');

    console.log(contactsDOM);
  console.log(submitBtnDOM);
}

export { contactsValidator }