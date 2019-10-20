Array.prototype.swap = function(firstIndex, secondIndex) {
     let array = this;
     let temp = array[firstIndex];
     array[firstIndex] = array[secondIndex];
     array[secondIndex] = temp;
}


window.bubbleSort = function f(unsortedArray) {
    console.log('Works');
    for (let i = 0; i < unsortedArray.length; i++) {
        for (let k = i; k < unsortedArray.length - i -1; k++) {
            if (unsortedArray[k] > unsortedArray[k + 1]) {
                unsortedArray.swap(k, k + 1)
            }
        }
    }

    return unsortedArray;
};

