function renderHeroIcons(heroIconData) {
    let HTML = '';

    for (let i = 0; i < heroIconData.data.length; i++) {
        const item = heroIconData.data[i];
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;

    }
    console.log(HTML);
}

export { renderHeroIcons }