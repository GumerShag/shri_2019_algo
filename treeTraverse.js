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
                }
            ]
        }
    ]
};

window.traverseTree  = function (obj) {
    let resultArray = [];
    if (!obj) return;
     let queue = [];
     queue.push(obj);
     while (queue.length) {
        let node = queue.shift();
        resultArray.push(node['val']);
         if (node['ch']) {
             queue.push(...node['ch']);
         }
     }

     return resultArray
};

console.log(traverseTree(testObj));

