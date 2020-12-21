import { Validator } from '../validator/Validator.js';

function areServicesValid(services) {
    if (!Validator.isObject(services)) {
        console.error('ERROR: services should be an object type');
        return false;
    }
    if (!Validator.isIcon(services.icon)) {
        console.error('ERROR: icon data should be a string type, not empty and no longer than 50 symbols.');
        return false;
    }
    if (!Validator.isTitle(services.title)) {
        console.error('ERROR: title should be a string type');
        return false;
    }
    if (!Validator.isDescription(services.text)) {
        console.error('ERROR: text should be a string type, not empty and no longer than 1000 symbols.');
        return false;
    }
    return true;
}

export { areServicesValid }