import { Validator } from '../validator/Validator.js';

function isSkillsInputValid(selector, skillsData) {
    if (!Validator.isSelector(selector)) {
        console.error('ERROR: selector has to be an object type');
        return false;
    }
    if (!Validator.isArray(skillsData.data)) {
        console.error('ERROR: skills generation needs not empty array type data.');
        return false;
    }
    return true;
}

export { isSkillsInputValid }