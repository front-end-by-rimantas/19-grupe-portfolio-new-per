import { Validator } from "../validator/Validator.js";

/**
 * renderHeroIcons() funkcijai skirtu ivesties duomenu (input params) validacija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} heroIconData Sąrašas objektų, aprašančių kiekvieną paslaugą
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju - `true`
 */
function isValidHeroIconInput(selector, heroIconData) {
    if (!Validator.isSelector(selector)) {
        console.error('ERROR: hero icon selector has to be text type and not empty.');
        return false;
    }
    if (!Validator.isArray(heroIconData.data)) {
        console.error('ERROR: hero icons generation needs not empty array type data.');
        return false;
    }
}
export { isValidHeroIconInput }