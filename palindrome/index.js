// --- Directions
// Given a string, return true if the string is a palindrome or false if it is not.  
// Palindromes are strings that form the same word if it is reversed. 
// *Do* include spaces and punctuation in determining if the string is a palindrome.

// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ---------- using inbuilt Reverse method ---------- //

const palindrome_reverse = (str) => {

	let reversed = '' // [...str].reverse().join('');

	for (char of str) {
		reversed = char + reversed;
	}

	return str === reversed;
}

// ---------- not using inbuilt Reverse method ---------- //

const palindrome = (str) => {
	let arr = [...str];

	for (let i = 0; i < arr.length / 2; i++) {
		if (arr[i] !== arr[arr.length - i - 1])
			return false
	}

	return true
}

console.log(palindrome(abdccdba))
console.log(palindrome_reverse(abdccdba))
