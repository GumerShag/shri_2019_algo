window.validateBrackets = function (valueToValidate) {
    let bracketsStack = [];
    let isValid = true;

    valueToValidate.split('').forEach(value => {
        if (value === '{' || value === '(' || value === '[') {
            bracketsStack.push(value);
        }
        if (value === '}' &&  bracketsStack.pop() !== '{') {
            isValid = false;
        }
        if (value === ']' &&  bracketsStack.pop() !== '[') {
            isValid = false;
        }
        if (value === ')' &&  bracketsStack.pop() !== '(') {
            isValid = false;
        }

    });
    if (bracketsStack.length !== 0) {
        isValid = false;
    }
    return isValid;

};

console.log(validateBrackets('{qwe[sdf(sdf)(ewer)sdf]sdf}'));