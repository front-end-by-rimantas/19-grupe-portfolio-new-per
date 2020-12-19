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

    static isImageFile(text) {
        const validationExtension = ['png', 'jpg', 'gif', 'jpeg'];

        // pavadinimas.pletinys

        if (typeof text !== 'string' ||
            text.length < 5 ||
            text.length > 100 ||
            text[0] === '.' ||
            text[text.length - 1] === '.') {
            return false;
        }
        const parts = text.split('.');

        // isitikanme ar tinkama galune

        if (parts.length !== 2) {
            return false;
        }
        if (!validationExtension.includes(parts[1])) {
            return false;
        }
        //TODO: isitikiname ar tinkamas pavadinimas

        return true;
    }

    static isHref(href) {
        if (typeof href !== 'string' ||
            href === '') {
                return false;
        }
        return true;
    }
    
    static isTitle(text) {
        if (typeof text !== 'string' ||
            text === '' ||
            text.length > 100) {
            return false;
        }
        //TODO: leidziami simboliai: raides, skaiciai, tarpai
        return true;
    }

    static isDescription(text) {
        if (typeof text !== 'string' ||
            text === '' ||
            text.length > 1000) {
            return false;
        }
        //TODO: leidziami simboliai: raides, skaiciai, tarpai, spec. simboliai
        return true;
    }
}

export { Validator }