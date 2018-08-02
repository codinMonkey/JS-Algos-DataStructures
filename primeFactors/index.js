// Print out all Prime Factors for a given number

const getPFs = (n) => {

	let arr = [];

	while (n % 2 === 0) {
		arr.push(2)
		n = n / 2;
	}

	for (let i = 3; i <= n; i = i + 2) {
		while ((n % i) === 0) {
			arr.push(i);
			n = n / i;
		}
	}

	return arr

}

console.log(getPFs(315))
console.log(getPFs(69))