import { Validator } from '../validator/Validator.js';
/**
 * renderClientCounter() funkcijos metu vykdomame cikle gaunamu duomenu validacija.
 * @param {object} itemObject Objektas aprasantis viena klientu skaiciuokles bloka, kuri sudaro ikona, skaicius ir pavadinimas
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju - `true`
 */
function isValidClientCounterItem (itemObject) {
    if (!Validator.isObject(itemObject)) {
        console.var('ERROR: client counter element has to be an object.');
        return false;
    }
    if (!Validator.isTitle(itemObject.icon)) {
        console.var('ERROR: client counter element icon has to be text type and not empty.');
        return false;
    }
    if (typeof itemObject.value !== 'number' || itemObject.value === '' || itemObject.value <= 0 || itemObject.value === Infinity || itemObject.value % 1 !== 0) {
        console.var('ERROR: client counter element value has to be number type, not empty, more than 0, not equal infinity and integer.');
        return false;
    }
    if (itemObject.value < 10) {
        return itemObject.value = '0' + itemObject.value;
    }
    if (!Validator.isTitle(itemObject.title)) {
        console.var('ERROR: client counter element title has to be text type, not empty and no longer than 100 symbols.');
        return false;

    }
    return true;
}
       
export { isValidClientCounterItem }