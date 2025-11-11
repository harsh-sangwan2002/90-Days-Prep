function flattenArray(arr) {

    let res = [];

    for (let ele of arr) {

        if (Array.isArray(ele))
            res.push(...flattenArray(ele));

        else
            res.push(ele);
    }

    return res;
}

const arr = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];
console.log(flattenArray(arr)); // [1,2,3,4,5,6,7,8,9]