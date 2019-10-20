Array.prototype.swap = function(firstIndex, secondIndex) {
     let array = this;
     let temp = array[firstIndex];
     array[firstIndex] = array[secondIndex];
     array[secondIndex] = temp;
}


window.bubbleSort = function f(unsortedArray) {
    for (let i = 0; i < unsortedArray.length; i++) {
        for (let k = 0; k < unsortedArray.length - i -1; k++) {
            if (unsortedArray[k] > unsortedArray[k + 1]) {
                unsortedArray.swap(k, k + 1)
            }
        }
    }

    return unsortedArray;
};

bubbleSort([3, 2, 1, 0])

