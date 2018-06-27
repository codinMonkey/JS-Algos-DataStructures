// --- Directions
// Write a function that accepts a positive number N. The function should console log a step shape
// with N levels using the # character.  Make sure the step has spaces on the right hand side!

// --- Examples
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (n) => {

	let char = '#'
	
	for (let i = 1; i < n + 1; i++) {
		console.log(char.repeat(i) + ' '.repeat(n - i))
	}

}
steps(4);
