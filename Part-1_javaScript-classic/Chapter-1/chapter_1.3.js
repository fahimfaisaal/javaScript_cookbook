//* Checking for an existing, Nonempty string

const isEmpty = str => {
    if (
        (typeof str !== 'undefined' && str) &&
        typeof str === 'string'
    ) {
        return false;
    }

    return true;
}

console.log(isEmpty('fahim'));