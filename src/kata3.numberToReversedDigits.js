const numberToReversedDigits = number => {

    let myFunc = num => Number(num);
    return Array.from(String(number), myFunc).reverse();

};

module.exports = numberToReversedDigits;

