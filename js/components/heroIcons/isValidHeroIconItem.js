function isValidHeroIconItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.error('ERROR: item should be an object type.');
        return false;
    }
    if (typeof itemObject.link !== 'string' ||
        itemObject.link === '') {
        console.error('ERROR: icon link should be text and not empty.');
        return false;
    }
    if (typeof itemObject.icon !== 'string' ||
        itemObject.icon === '') {
        console.error('ERROR: icon should be text and not empty.');
        return false;
    }
    return true;
}

export { isValidHeroIconItem }