//----------------- MEMOIZE function -----------------//

const memoize = (fn) => {

    const cache = {}

    return function (n) {

        if (cache[n]) {
            return cache[n]
        }

        const result = fn(n);
        cache[n] = result;
        console.log('caching', n, result)

        return result;
    }
}

//-------------- FIB function --------------//

const fib = (n) => {
    if (n < 2) {
        return n
    }
    return getFibs(n - 1) + getFibs(n - 2) // use the Memoized function
}


const getFibs = memoize(fib)

console.log(getFibs(100))