const pyramid_recursive = (n, row = 1, step = '') => {

    // Base Class
    if (n < row) {
        return
    }

    // Next row
    if (step.length === (2 * n - 1)) {
        console.log(step);
        return pyramid_recursive(n, row + 1)
    }

    // Build the step
    if ((n - row - 1) < step.length && step.length < ((2 * n - 1) - (n - row))) {
        step += '#'
    } else {
        step += '.'
    }
    return pyramid_recursive(n, row, step)

}

pyramid_recursive(10)

