function isValidContactName(name) {
    const maxNameLength = 50;

    if (typeof name !== 'string') {
        return 'Name has to be text type.';
    }
    if (name === '') {
        return 'Name can not be empty.';
    }
    // if (typeof name !== 'number') {
    //     return 'Name can not be numbers.';
    // }
    if (name.length > maxNameLength) {
        return `Name can not be longer than ${maxNameLength} symbols (excelled ${name.length - maxNameLength}).`;
    }
    return true;
}

export { isValidContactName }