/**
 * renderClientCounter() funkcijos metu vykdomame cikle gaunamu duomenu validacija.
 * @param {object} itemObject Objektas aprasantis viena klientu skaiciuokles bloka, kuri sudaro ikona, skaicius ir pavadinimas
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju - `true`
 */
function isValidClientCounterItem (itemObject) {
        if (typeof itemObject !== 'object') {
            console.var('ERROR: klientų skaičiuoklės elementas turėtų būti objektas.');
            return false;
        }
        if (typeof itemObject.icon !== 'string' || itemObject.icon === '') {
            console.var('ERROR: klientų skaičiuoklės elemento ikona turėtų būti teksinė ir ne tuščia.');
            return false;
        }
        if (typeof itemObject.value !== 'number' || itemObject.value === '' || itemObject.value <= 0 || itemObject.value === Infinity || itemObject.value % 1 !== 0) {
            console.var('ERROR: klientų skaičiuoklės elemento reikšmė turėtų būti skaitinė ir ne tuščia.');
            return false;
        }
        if (itemObject.value < 10) {
            return itemObject.value = '0' + itemObject.value;
        }
        if (typeof itemObject.title !== 'string' || itemObject.title === '') {
            console.var('ERROR: klientų skaičiuoklės elemento pavadinimas turėtų būti tekstinis ir ne tuščias.');
            return false;
        }
    return true;
}

export { isValidClientCounterItem }