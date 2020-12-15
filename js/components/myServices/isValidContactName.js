function isValidContactName(name) {
    const maxNameLength = 50;

    if (typeof name !== 'string') {
        return 'Name has to be text type.';
    }
    if (name === '') {
        return 'Name can not be empty.';
    }
    if (name.length > maxNameLength) {
        return `Name can not be longer than ${maxNameLength} symbols (excelled ${name.length - maxNameLength}).`;
    }
    const abc = 'qwertyuioplkjhgfdsazxcvbnm';
    for (let letter of name) {
        if (!abc.includes(letter.toLocaleLowerCase())) {
            return `Not allowed symbol was used in Name Section (you can not use ${letter}).`;
        }
    }
    if (name.toLocaleLowerCase() === name) {
        return 'Name can not be only from lowercase letters, please include first uppercase letter.';
    }
    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLocaleLowerCase();
    if (realNameFormat !== name) {
        return 'Name can not be from uppercase letters, please include lowercase letters and just the first uppercase letter.';
    }

    return true;
}

export { isValidContactName }