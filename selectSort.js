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

    // let insertionSort = (inputArr) => {
    //     let length = inputArr.length;
    //     for (let i = 1; i < length; i++) {
    //         let key = inputArr[i];
    //         let j = i - 1;
    //         while (j >= 0 && inputArr[j] > key) {
    //             inputArr[j + 1] = inputArr[j];
    //             j = j - 1;
    //         }
    //         inputArr[j + 1] = key;
    //     }
    //     return inputArr;
    // };

    return index;
};

window.selectSort = function (array) {
    for (let i = 0; i < array.length; i++) {
        let maxElementIndex = array.findMaxElementIndex(i);
        array.swap(maxElementIndex, array.length - i - 1);
    }

    return array;

};
