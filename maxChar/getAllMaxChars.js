// --- Directions
// Given a string, return all the characters that are most commonly used in the string.

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1111332222") === "1, 2"

const getMaxChars = (str) => {

	let charMap = {}
	let maxLength = 0

	for (char of str) {

		if (charMap[char]) {
			charMap[char]++;
			if (charMap[char] > maxLength) {
				maxLength = charMap[char]
			}
		} else {
			charMap[char] = 1
		}
	}

	return {charMap, maxLength}

	// get the keys where value = 5

}

console.log(getMaxChars('adasdafdfadsda'))