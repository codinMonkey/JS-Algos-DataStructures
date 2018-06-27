// Given a string, return a new string with the reversed order of characters


// ---------- using inbuilt Reverse method ---------- //

function reverse_helper(str) {

	const arr = [...str].reverse();
	//return arr.toString();
	return arr.join('');
}


// not using built in REVERSE method

const reverse = (str) => {
	let finalStr = '';
	let arr = [...str];

	for (let char of str) {
		finalStr = char + finalStr;
	}
	return finalStr;
}

console.log(reverse('whatever'))
console.log(reverse_helper('whatever'))