
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
    return newFib(n - 1) + newFib(n - 2)
}


const newFib = memoize(fib)

console.log(newFib(100))