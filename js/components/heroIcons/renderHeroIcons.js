import { isValidHeroIconInput } from './isValidHeroIconInput.js';


function renderHeroIcons(heroIconData) {
    // if (!isValidHeroIconInput(selector, heroIconData)) {
    //     return false;
    // }
    const heroIconsDOM = document.querySelector('header > .row > .col-12 > div');
    let HTML = '';

    for (let i = 0; i < heroIconData.data.length; i++) {
        const item = heroIconData.data[i];
        if (typeof item !== 'object') {
            continue;
        }
        if (typeof item.link !== 'string' ||
            item.link === '') {
            continue;
        }
        if (typeof item.icon !== 'string' ||
            item.icon === '') {
            continue;
        }
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }
    
    if (HTML === '') {
        console.log('ERROR: could not find hero icons.');
        return false;
    }

    heroIconsDOM.innerHTML = HTML;
    return true;
}

export { renderHeroIcons }