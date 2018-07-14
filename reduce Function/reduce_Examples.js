// ###############################################################################
// Find the number of Instances of each fruit

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const final = fruitBasket.reduce((acc, fruit, index, arr) => {
    acc[fruit] = (acc[fruit] || 1) + 1
    return acc;
}, {})

console.log(final)


// ###############################################################################
// Calculate Average

const arr = [29.76, 41.85, 46.5];

const avg = arr.reduce((accumlator, number, index, arr) => {
    accumlator = accumlator + number;
    if (index === arr.length - 1) {
        return accumlator / arr.length
    }
    return accumlator
}, 0)

console.log(avg)


// ###############################################################################
// Flat out Array of Arrays

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11], [12]];

const flatData = data.reduce((flatArray, element, index, arr) => { 

    flatArray.push(...element);
    return flatArray
}, [])

console.log(flatData)


