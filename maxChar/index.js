// --- Directions
// Given a string, return the character that is most commonly used in the string.

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {

	let charList = {};

	for (let char of str) {
		if (!charList[char]) {
			charList[char] = 1
		} else {
			charList[char]++;
		}
	}
	
	// using MAP
	// const map = new Map();
	// for (let char of str) {
	// 	if (!map.get(char)) {
	// 		map.set(char, 1);
	// 	} else {
	// 		map.set(char, map.get(char) + 1);
	// 	}
	// }

	return charList
}
console.log(maxChar('adasdafdfadsda'));
