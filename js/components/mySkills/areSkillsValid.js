import { Validator } from '../validator/Validator.js';

function areSkillsValid(skills) {
    if (!Validator.isObject(skills)) {
        console.error('ERROR: skills has to be an object type');
        return false;
    }
    if (!Validator.isTitle(skills.label)) {
        console.error('ERROR: skills label has to be a string type');
        return false;
    }
    if (typeof skills.value !== 'string') {
        return false;
    }
    return true;
}

export { areSkillsValid }