/*
    get all subsets of [1, 2, 3]

    1) start with array of empty set --  [[]] 
    2) concat First element to all existing sets and add new sets to the array  -- [[], [1]]
    3) concat Second element to all existing sets and add new sets to the array -- [[], [1], [2], [1,2]]
    3) concat Third element to all existing sets and add new sets to the array  -- [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]

*/


// Generate all the Subsets for a PowerSet using REDUCE function

const generateSubsets_reduce = (arr) => arr.reduce(
    (subsets, element) => {
        return subsets.concat(
            subsets.map(subset => [...subset, element])
        )
    },
    [[]]
);

console.log(generateSubsets_reduce([1, 2, 3]));



// Generate all the Subsets for a PowerSet using Loops

const generateSubsets = (arr) => {

    let subsets = [[]];

    arr.forEach(element => {
        const newElements = subsets.map((subset) => { return [...subset, element] })
        subsets = subsets.concat(newElements)
    });

    return subsets

}

console.log(generateSubsets([1, 2, 3]))