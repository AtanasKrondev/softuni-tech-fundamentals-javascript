function solve(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    function validationCheck(a1, b1, a2, b2) {
        let distance = Math.sqrt(((a1 - a2) ** 2) + ((b1 - b2) ** 2));
        return isInt(distance);
    }

    function isInt(n) {
        return +n === n && !(n % 1);
    }

    function printTheResult(a1, b1, a2, b2) {
        if (validationCheck(a1, b1, a2, b2) === true) {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid`);
        } else{
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`);
        }
    }
    
    printTheResult(x1, y1, 0, 0);
    printTheResult(x2, y2, 0, 0);
    printTheResult(x1, y1, x2, y2);
}

solve([2, 1, 1, 1]);