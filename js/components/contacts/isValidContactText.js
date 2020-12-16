function isValidContactText(text) {
    const maxTextLength = 1000;

    if (typeof text !== 'string') {
        return 'Text has to be text type';
    }
    if (text === '') {
        return 'Text can not be empty.';
    }
    if (text.length > maxTextLength) {
        return `Text can not be longer than ${maxTextLength} symbols (excelled ${text.length - maxTextLength}).`;
    }
    return true;
}

export { isValidContactText }