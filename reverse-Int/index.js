// --- Directions
// Given an integer, return an integer that is the reverse ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {

	let str = n.toString();
	let reversed = [...str];

	reversed.reverse();
	let final = parseInt(reversed.join('')) * Math.sign(n)

	return final
}

console.log(reverseInt(212344233))
console.log(reverseInt(-5100))