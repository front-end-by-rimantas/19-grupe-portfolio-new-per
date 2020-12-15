import { isValidInput } from './isValidInput.js';
import { isValidClientCounterItem } from './isValidClientCounterItem.js';
/**
 * Klientu skaiciuokles generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector Selektorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida grazinamas `false`, o funkcijai suveikus teisingai - `true`
 */
function renderClientCounter (selector, data) {
    // input validation
    if (!isValidInput(selector, data)) {
        return false;
    }
    const clientCounterDOM = document.querySelector(selector);

    if (!clientCounterDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta.');
        return false;
    }
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (!isValidClientCounterItem(item)) {
            continue;
        }
        HTML += `<div class="col-3 col-sm-6 col-xs-12">
        <div class="block-counter">
            <div class="counter-icon">
                <span class="fa fa-${item.icon}"></span>
            </div>
            <h4 class="integers">${item.value}</h4>
            <h5 class="counter-label">${item.title}</h5>
        </div>
    </div>`;
    }

    // post logic validation
    if (HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti klientų skaičiuoklės.');
        return false;
    }
    clientCounterDOM.innerHTML = HTML;
    return true;
}

export { renderClientCounter }