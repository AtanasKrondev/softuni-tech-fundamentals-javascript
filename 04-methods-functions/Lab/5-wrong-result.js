function solve(numOne, numTwo, numThree) {

    function checkIfProductIsPositive(numOne, numTwo, numThree) {
        if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
            return true;
        } else if (numOne === 0 || numTwo === 0 || numThree === 0) {
            return true;
        } else if (numOne < 0 && numTwo >= 0 && numThree >= 0) {
            return false;
        } else if (numOne >= 0 && numTwo < 0 && numThree >= 0) {
            return false;
        } else if (numOne >= 0 && numTwo >= 0 && numThree < 0) {
            return false;
        } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
            return false;
        } else return true;
    }

    let isPositive = checkIfProductIsPositive(numOne, numTwo, numThree);

    if (isPositive) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

solve(5, 12, -15);