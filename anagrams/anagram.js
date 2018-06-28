// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters in the same quantity. 
// Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagram = (strA, strB) => {

    // get CharMaps
    let mapA = createCharMap(strA)
    let mapB = createCharMap(strB)
    
    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false
    }

    // check the charMaps for anagrams
    for (char in mapA) {
        if (mapA[char] !== mapB[char]) {
            console.log(mapA[char], mapB[char], char)
            return false
        }
    }

    return true
}


const createCharMap = (str) => {

    // Clean the strings and remove spaces and punctuation
    let cleanStr = str.replace(/[^a-z0-9]/ig, '').toLowerCase()
    let map = {};

    // create a map
    for (char of cleanStr) {
        if (map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    }

    return map
}


console.log(anagram("RAIL! SAFETY!", "fairy talees"))

