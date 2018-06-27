// --- Directions
// Write a function that accepts a string.  The function should capitalize the first letter of each word in the string 
// then return the capitalized string.

// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


const capitalize = (str) => {

	const arr = [...str];
	arr[0] = arr[0].toUpperCase();

	arr.forEach((char, i) => {
		if (char === ' ') {
			arr[i + 1] = arr[i + 1].toUpperCase();
		}
	})

	return arr.join('');
}

console.log(capitalize('i love breakfast at bill miller bbq'));
