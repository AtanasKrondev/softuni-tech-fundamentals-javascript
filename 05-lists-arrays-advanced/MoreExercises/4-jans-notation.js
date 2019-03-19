function jansNotation(input) {

    function mathOperation(numsContainer, operand) {
        let secondOperand = numsContainer.pop();
        let firstOperand = numsContainer.pop();

        switch (operand) {
            case '+':
                numsContainer.push(firstOperand + secondOperand);
                break;
            case '-':
                numsContainer.push(firstOperand - secondOperand);
                break;
            case '*':
                numsContainer.push(firstOperand * secondOperand);
                break;
            case '/':
                numsContainer.push(firstOperand / secondOperand);
                break;
        }
        return numsContainer;
    }

    let numsContainer = [];

    for (let i = 0; i < input.length; i++) {

        if (typeof input[i] === 'number') {
            numsContainer.push(input[i]);
        } else {
            if (numsContainer.length < 2) {
                console.log('Error: not enough operands!');
                return;
            } else {
                mathOperation(numsContainer, input[i]);
            }
        }
    }

    if (numsContainer.length === 1) {
        console.log(numsContainer[0]);
    } else {
        console.log('Error: too many operands!');
    }
}

jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);