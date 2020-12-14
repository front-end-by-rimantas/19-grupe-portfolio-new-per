
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
    const count = skillsData.maxLimit || skillsData.data.length;

    for (let i = 0; i < count; i++) {
        const skills = skillsData.data[i];
        
        HTML += `<div class="progress-bar">
        <div class="label">${skills.label}</div>
        <div class="pbar">
            <div class="pbar loading"></div>
            <div class="bar-value">${skills.value}</div>
        </div>
        </div>`;
    }

    DOM.innerHTML = HTML;

}

export { renderMySkills }