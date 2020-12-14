function areServicesValid(services) {
    if (typeof services !== 'object') {
        console.error('ERROR: services should be an object type');
        return false;
    }
    if (typeof services.icon !== 'string') {
        console.error('ERROR: icon data should be a string type');
        return false;
    }
    if (typeof services.icon.length === 0 ) {
        console.error('ERROR: icon data length should be equal or longer then 1');
        return false;
    }
    if (typeof services.icon.length > 50) {
        console.error('ERROR: icon data length cannot be longer then 50');
        return false;
    }
    if (typeof services.title !== 'string') {
        console.error('ERROR: title should be a string type');
        return false;
    }
    if (typeof services.text !== 'string') {
        console.error('ERROR: text should be a string type');
        return false;
    }

    return true;
}

export { areServicesValid }