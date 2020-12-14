
/**
 * My Services turinį generuojanti funkcija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data Sąrašas objektų, aprašančių kiekvieną paslaugą
 * @returns {*}
 */
function renderMySkills(selector, skillsData) {

    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: could not find an elements by a given selector.')
        return false;
    }

    let HTML = '';
    const countStartL = 0;
    const countEndL = Math.ceil(skillsData.data.length / 2);
    const countStartR = countEndL;
    const countEndR = skillsData.data.length;
    console.log(countEndR);
    if ( selector === '#skillsLeft' ) {
        for (let i = countStartL; i < countEndL; i++) {
            const skills = skillsData.data[i];
            HTML += `<div class="progress-bar">
            <div class="label">${skills.label}</div>
            <div class="pbar">
                <div class="pbar loading"></div>
                <div class="bar-value">${skills.value}</div>
            </div>
            </div>`;
        }
    }
    if ( selector === '#skillsRight' ) {
        for (let i = countStartR; i < countEndR; i++) {
            const skills = skillsData.data[i];
            HTML += `<div class="progress-bar">
            <div class="label">${skills.label}</div>
            <div class="pbar">
                <div class="pbar loading"></div>
                <div class="bar-value">${skills.value}</div>
            </div>
            </div>`;
        }
    }

    DOM.innerHTML = HTML;

}

export { renderMySkills }