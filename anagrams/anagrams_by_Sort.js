// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters in the same quantity. 
// Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagram = (strA, strB) => {

    // Clean the strings and remove spaces and punctuation
    let cleanStrA = strA.replace(/[^a-z0-9]/ig, '').toLowerCase()
    let cleanStrB = strB.replace(/[^a-z0-9]/ig, '').toLowerCase()

    // spread it to an array, Sort and concatenate it back to a string
    let newA = [...cleanStrA].sort().join('')
    let newB = [...cleanStrB].sort().join('')

    //console.log(newA, newB)
    return (newA === newB)
}

console.log(anagram("RAIL! SAFETY!", "fairy tales"))

