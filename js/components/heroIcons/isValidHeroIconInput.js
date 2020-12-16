function isValidHeroIconInput(selector, heroIconData) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selector has to be an array type');
        return false;
    }
    if (selector === '') {
        console.error('ERROR: selector can not be empty');
        return false;
    }
    if (!Array.isArray(heroIconData.data)) {
        console.error('ERROR: hero icons has to be an array type.');
        return false;
    }
    if (heroIconData.data.length === 0) {
        console.error('ERROR: hero icons has to be not empty array type.');
        return false;
    }
    return true;
}
export { isValidHeroIconInput }