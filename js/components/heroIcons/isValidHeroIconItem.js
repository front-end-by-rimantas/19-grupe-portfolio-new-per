/**
 * renderHeroIcons() funkcijos metu vykdomame cikle gaunamu duomenu validacija
 * @param {object} itemObject objektas aprasantis viena social nuoroda, kuri sudaro ikona ir nuoroda (href)
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju - `true`
 */
function isValidHeroIconItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.error('ERROR: item should be an object type.');
        return false;
    }
    if (typeof itemObject.link !== 'string' ||
        itemObject.link === '') {
        console.error('ERROR: icon link should be text and not empty.');
        return false;
    }
    if (typeof itemObject.icon !== 'string' ||
        itemObject.icon === '') {
        console.error('ERROR: icon should be text and not empty.');
        return false;
    }
    return true;
}

export { isValidHeroIconItem }