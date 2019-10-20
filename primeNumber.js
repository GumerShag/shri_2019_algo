window.primeNumbers = function (number) {
    if (number === 1) return;
    let numberArray = [];
    for (let i = 2; i <= number; i++) {
        if ((i !== 2 && i % 2 !== 0) && (i !== 3 && i % 3 !== 0) && (i !== 5 && i % 5 !== 0)) {
            numberArray.push(i)
        } else if (i === 2) {
            numberArray.push(i)
        } else if (i === 3) {
            numberArray.push(3)
        } else if (i === 5) {
            numberArray.push(5)
        }
    }
};

primeNumbers(200)