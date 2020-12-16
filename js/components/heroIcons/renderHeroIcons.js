import { isValidHeroIconInput } from './isValidHeroIconInput.js';
import { isValidHeroIconItem } from './isValidHeroIconItem.js';

function renderHeroIcons(selector, heroIconData) {
    if (!isValidHeroIconInput(selector, heroIconData)) {
        return false;
    }
    const heroIconsDOM = document.querySelector(selector);

    if(!heroIconsDOM) {
        console.error('ERORR: the place for icon rendering was not found.');
        return false;
    }

    let HTML = '';

    for (let i = 0; i < heroIconData.data.length; i++) {
        const item = heroIconData.data[i];
        if (!isValidHeroIconItem(item)) {
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