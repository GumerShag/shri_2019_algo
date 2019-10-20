window.primeNumbers = function (number) {
    if (number === 1) return;
    let primeNumbersArray = [];
    for (let i = 2; i <= number; i++) {
        if ((i !== 2 && i % 2 !== 0) && (i !== 3 && i % 3 !== 0) && (i !== 5 && i % 5 !== 0)) {
            primeNumbersArray.push(i)
        } else if (i === 2 || i === 3 || i === 5) {
            primeNumbersArray.push(i)
        }
    }
    return primeNumbersArray;
};

primeNumbers(200)