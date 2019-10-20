window.insertSort =  function (array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            console.log('###', array[j + 1], j)
            j = j - 1;
        }
        array[j + 1] = temp;
    }
    return array;
};

insertSort([5, 1, 3, 4, 2]);