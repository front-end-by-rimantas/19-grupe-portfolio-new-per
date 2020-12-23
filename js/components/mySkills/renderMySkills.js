import { isSkillsInputValid } from "./isSkillsInputValid.js";
import { areSkillsValid } from "./areSkillsValid.js";

/**
 * My Services turinį generuojanti funkcija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data Sąrašas objektų, aprašančių kiekvieną paslaugą
 * @returns {*}
 */
function renderMySkills(selector, skillsData) {
    if (!isSkillsInputValid(selector, skillsData)) {
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    const countStartL = 0;
    const countEndL = Math.ceil(skillsData.data.length / 2);
    const countStartR = countEndL;
    const countEndR = skillsData.data.length;
    if ( selector === '#skillsLeft' ) {
        for (let i = countStartL; i < countEndL; i++) {
            const skills = skillsData.data[i];
            if (!areSkillsValid(skills)) {
                continue;
            }
            HTML += `<div class="progress-bar">
            <div class="label">${skills.label}</div>
            <div class="pbar">
            <div style="width:${skills.value * 0.99}%" class="pbar bottom">
                <div class="pbar loading">
                <div class="bar-value">${skills.value}%</div>
                </div>
            </div>    
            </div>
            </div>`;
        }
    }
    if ( selector === '#skillsRight' ) {
        for (let i = countStartR; i < countEndR; i++) {
            const skills = skillsData.data[i];
            if (!areSkillsValid(skills)) {
                continue;
            }
            HTML += `<div class="progress-bar">
            <div class="label">${skills.label}</div>
            <div class="pbar">
            <div style="width:${skills.value * 0.99}%" class="pbar bottom">
                <div class="pbar loading">
                <div class="bar-value">${skills.value}%</div>
                </div>
            </div>    
            </div>
            </div>`;
        }
    }

    DOM.innerHTML = HTML;

    const allProgressBars = document.querySelectorAll('.progress-bar');
    addEventListener('load', () => {
        const screenBottom = innerHeight + scrollY;
        for (let bar of allProgressBars) {
            const barBottom = bar.offsetHeight + bar.offsetTop;
            if (screenBottom >= barBottom) {
                bar.classList.add('animate');
            }
        }
    })
    addEventListener('scroll', () => {
        const screenBottom = innerHeight + scrollY;
        for (let bar of allProgressBars) {
            const barBottom = bar.offsetHeight + bar.offsetTop;
            if (screenBottom >= barBottom) {
                bar.classList.add('animate');
            }
        }
    })
    return true;
}

export { renderMySkills }