function isSkillsInputValid(selector, skillsData) {
    if (typeof selector !== 'string') {
        return false;
    }
    if (!Array.isArray(skillsData.data)) {
        return false;
    }
    return true;
}

export { isSkillsInputValid }