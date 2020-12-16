function isValidHeroIconInput(selector, heroIconData) {
    // if (typeof selector !== 'string') {
    //     console.error('ERROR: hero icon selector has to be a string type.');
    //     return false;
    // }
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