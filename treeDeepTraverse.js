var testObj = {
    val: 1,
    ch: [
        {
            val: 2,
            ch: [{
                val: 3
            }]
        },
        {
            val: 4,
            ch: [
                {
                    val: 5,
                },
                {
                    val: 6,
                },
                {
                    val: 7,
                }
            ]
        }
    ]
};

window.traverseObj = function (obj, array = []) {
    if (!obj) return;
    console.log(obj['val']);
    array.push(obj['val']);
    if (obj['ch'] && obj['ch'] instanceof Array) {
        obj['ch'].forEach(obj => {
            traverseObj(obj, array);
        })
    }
    return array;
};


