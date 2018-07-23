const getFibs = (n) => {

	if (n < 2) {
		return n
	}

	return getFibs(n - 1) + getFibs(n - 2)
}

console.log(getFibs(6))