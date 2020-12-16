function areSkillsValid(skills) {
    if (typeof skills !== 'object' ||
        skills === null ||
        skills === undefined) {
        return false;
    }
    if (typeof skills.label !== 'string') {
        return false;
    }
    if (typeof skills.value !== 'string') {
        return false;
    }
    return true;
}

export { areSkillsValid }