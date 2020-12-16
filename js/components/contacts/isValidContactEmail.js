function isValidContactEmail(email) {
    const maxEmailLength = 50;

    if (typeof email !== 'string') {
        return 'Email has to be text type.';
    }
    if (email === '') {
        return 'Email can not be empty.';
    }
    if (email.length > maxEmailLength) {
        return `Email can not be longer than ${maxEmailLength} symbols (excelled ${email.length - maxEmailLength}).`;
    }
    return true;
}

export { isValidContactEmail }