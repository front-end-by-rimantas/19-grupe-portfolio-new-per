/**
 * renderClientCounter() funkcijai skirtu ivesties duomenu (input params) validacija.
 * @param {string} selector Selektorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data  Duomenu masyvas su objektais, kurie reprezentuoja klientu skaiciuokle
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju - `true`
 */
function isValidInput(selector, data) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selektorius turi būti tekstinio tipo.')
    }
    if (typeof selector === '') {
        console.error('ERROR: selektorius negali būti tuščias.')
    }
    if (!Array.isArray(data)) {
        console.error('ERROR: Klientų skaičiuoklei generuoti reikia array tipo duomenų.');
        return false;
    }
    if (data.length === 0) {
        console.error('ERROR: klientų skaičiuoklei generuoti reikia ne tuščio array tipo duomenų sąrašo.');
        return false;
    }
    return true;
}

export { isValidInput }