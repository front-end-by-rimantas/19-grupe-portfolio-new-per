function isValidInput(selector, servicesData) {
    if (typeof selector !== 'string') {
        console.error('ERROR: services selector has to be a string type.');
        return false;
    }
    if (!Array.isArray(servicesData.data)) {
        console.error('ERROR: services data has to be an array type.');
        return false;
    }
    return true;
}

export { isValidInput }