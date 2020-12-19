import { Validator } from '../validator/Validator.js';
/**
 * renderClientCounter() funkcijai skirtu ivesties duomenu (input params) validacija.
 * @param {string} selector Selektorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data  Duomenu masyvas su objektais, kurie reprezentuoja klientu skaiciuokle
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju - `true`
 */
function isValidInput(selector, data) {
    if (!Validator.isSelector(selector)) {
        console.error('ERROR: client counter selector has to be text type and not empty.');
        return false;
    }
    if (!Validator.isArray(data)) {
        console.error('ERROR: client counter generation needs not empty array type data.');
        return false;
    }
    return true;
}

export { isValidInput }