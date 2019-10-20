Array.prototype.swap = function (firstIndex, secondIndex) {
    let array = this;
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

Array.prototype.findMaxElementIndex = function (rightShift) {
    let array = this;
    let max = array[0];
    let index = 0;
    for (let i = 1; i < array.length - rightShift; i++) {
        if (max < array[i]) {
            max = array[i];
            index = i;
        }
    }

    return index;
};

window.selectSort = function (array) {
    for (let i = 0; i < array.length; i++) {
        let maxElementIndex = array.findMaxElementIndex(i);
        array.swap(maxElementIndex, array.length - i - 1);
    }

};
