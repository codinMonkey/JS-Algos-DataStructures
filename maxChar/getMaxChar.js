// --- Directions
// Given a string, return the character that is most commonly used in the string.

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {

	let charList = {};
	let maxLength = 0;
	let maxChar = '';

	for (let char of str) {
		if (!charList[char]) {
			charList[char] = 1
		} else {
			charList[char]++;
			if (charList[char] > maxLength) {
				maxLength = charList[char]
				maxChar = char
			}
		}
	}

	return maxChar
}
console.log(maxChar('adasdafdfadsda'));
