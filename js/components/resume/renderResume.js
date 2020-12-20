/**
 * My Services turinį generuojanti funkcija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data Sąrašas objektų, aprašančių kiekvieną paslaugą
 * @returns {*}
 */
function renderResume(selector, resumeData) {
    
     const DOM = document.querySelector(selector);
     if (!DOM) {
         return false;
     }

    let HTML = '';
    const countStartL = 0;
    const countEndL = Math.ceil(resumeData.data.length / 2);
    const countStartR = countEndL;
    const countEndR = resumeData.data.length;
        if ( selector === '#resumeLeft' ) {
            for (let i = countStartL; i < countEndL; i++) {
                const resume = resumeData.data[i];
                if (!resume) {
                    continue;
                }
            HTML += `
            <ul class="left-column">
            <li class="list">
                <span class="res-dot" class="res-dot">${resume.duration}</span>
                <h5>${resume.course}</h5>
                <h6>${resume.uni}</h6>
            </li>
        </ul>`;

        }        
    }
    if ( selector === '#resumeRight' ) {
        for (let i = countStartR; i < countEndR; i++) {
            const resume = resumeData.data[i];
            HTML += `<ul class="right-column">
            <li class="list">
                <span class="res-dot">${resume.duration}</span>
                <h5>${resume.course}</h5>
                <h6>University Of Studies, Poland, Cracow</h6>
            </li>
        </ul>`;

        }
    
    }

    DOM.innerHTML = HTML;
}

export { renderResume }