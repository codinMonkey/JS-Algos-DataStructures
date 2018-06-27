//--------------  RECURSIVE FUNCTION  --------------/

const steps_recursive = (n, row = 0, step = '') => {

    // Base Case
    if (n === row) {
        return;
    }

    // Next Step
    if (step.length === n) {
        console.log(step)
        return steps_recursive(n, row + 1);
    }

    // construct the Steps
    if (step.length <= n) {
        if (step.length <= row) {
            step += '#'
        } else {
            step += ' '
        }
        return steps_recursive(n, row, step)
    }

}

steps_recursive(10)