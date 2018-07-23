// FIBs -- 1,1,2,3,5,8...

const getFibs = (n) => {

	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [1]
	}

	let arr = [1, 1];

	for (i = 2; i < n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}

	return arr
}

console.log(getFibs(5))