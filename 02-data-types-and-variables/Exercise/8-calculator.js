function solve(firstNum, char, secondNum) {
    let first = firstNum;
    let second = secondNum;
    let operator = char;
    switch (operator) {
        case '+':
            console.log((first + second).toFixed(2));
            break;
        case '-':
            console.log((first - second).toFixed(2));
            break;
        case '*':
            console.log((first * second).toFixed(2));
            break;
        case '/':
            console.log((first / second).toFixed(2));
            break;
    }
}

solve(5, '+', 10)