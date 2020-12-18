class Validator {
    static isSelector(text) {
        if (typeof text !== 'string' ||
            text === '') {
            return false;
        }
        return true;
    }

    static isArray(array) {
        if (!Array.isArray(array) ||
            array.length === 0) {
            return false;
        }
        return true;
    }

    static isObject(object) {
        if (typeof object !== 'object' ||
            Array.isArray(object) ||
            object === null) {
            return false;
        }
        return true;
    }
}

export { Validator }