function memoizedSum() {

    const cache = {};

    return function (...args) {
        let key = String(args);

        if (cache[key]) {
            console.log('Fetching from cache for arguments:', args);
            return cache[key];
        } else {
            console.log('Calculating result for arguments:', args);
            let result = args[0] + args[1];
            cache[key] = result;
            return result;
        }
    }
}

const sum = memoizedSum();

console.log(sum(2, 3)); // 5
console.log(sum(2, 3)); // 5 (from cache)
console.log(sum(4, 5)); // 9
console.log(sum(2, 3)); // 5 (from cache)
console.log(sum(4, 5)); // 9 (from cache)