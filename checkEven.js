function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

const myNumberIsEven = isEven(303);
console.log("303 is", myNumberIsEven);
const herNumberIsEVen = isEven(1280);
console.log("1280 is", herNumberIsEVen);