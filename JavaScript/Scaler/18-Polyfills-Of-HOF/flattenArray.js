function flattenArray(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i]))
            res.push(...flattenArray(arr[i]));

        else
            res.push(arr[i]);
    }

    return res;
}

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(flattenArray(arr)); // Output: [1, 2, 3, 4, 5, 6]