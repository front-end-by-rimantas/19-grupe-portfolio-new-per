/**
 * renderHeroIcons() funkcijos metu vykdomame cikle gaunamu duomenu validacija
 * @param {object} itemObject objektas aprasantis viena social nuoroda, kuri sudaro ikona ir nuoroda (href)
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju - `true`
 */
function isValidHeroIconItem(itemObject) {
    if (!Validator.isObject(itemObject)) {
        console.var('ERROR: hero icon element has to be an object.');
        return false;
    }
    if (!Validator.isHref(itemObject.link)) {
        console.var('ERROR: hero icon link has to be text type and not empty.');
        return false;
    }
    if (!Validator.isIcon(itemObject.icon)) {
        console.error('ERROR: icon data should be a string type, not empty and no longer than 50 symbols.');
        return false;
    }
    return true;
}

export { isValidHeroIconItem }