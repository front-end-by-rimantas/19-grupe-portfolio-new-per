import { Validator } from '../validator/Validator.js';
function isValidInput(selector, servicesData) {
    if (!Validator.isSelector(selector)) {
        console.error('ERROR: services selector has to be a string type.');
        return false;
    }
    if (!Validator.isArray(servicesData.data)) {
        console.error('ERROR: services data has to be an array type.');
        return false;
    }
    return true;
}

export { isValidInput }