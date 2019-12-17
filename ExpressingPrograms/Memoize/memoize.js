function expensiveOperation() {
    console.log('expensiveOperation function is called!');
    return 22;
}


/* Below function is for caching a function call
   which remembers the input, and returns the cached
   result if same fn parameter is passed */

function memoize(fn) {
    let cache = {};
    return (...args) => {
        if (fn in cache) {
            return cache[fn];
        }
        else {
            let result = fn();
            cache[fn] = result;
            return result;
        }
    }
}

const memoized = memoize(expensiveOperation); // <- memoize function
console.log(memoized());
console.log(memoized());