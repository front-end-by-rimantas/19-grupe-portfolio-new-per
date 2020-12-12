function areServicesValid(services) {
    if (typeof services !== 'object') {
        console.error('ERROR: ...');
        return false;
    }
    if (typeof services.icon !== 'string') {
        console.error('ERROR: ...');
        return false;
    }
    if (typeof services.icon.length < 1) {
        console.error('ERROR: ...');
        return false;
    }
    if (typeof services.icon.length > 50) {
        console.error('ERROR: ...');
        return false;
    }
    if (typeof services.title !== 'string') {
        console.error('ERROR: ...');
        return false;
    }
    if (typeof services.text !== 'string') {
        console.error('ERROR: ...');
        return false;
    }

    return true;
}

export { areServicesValid }