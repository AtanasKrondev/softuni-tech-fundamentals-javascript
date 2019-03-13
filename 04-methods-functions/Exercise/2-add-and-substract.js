function main(firstNumber, secondNumber, lastNumber) {

    function sumOfFirstAndSecondNumber(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    let finalResult = sumOfFirstAndSecondNumber(firstNumber, secondNumber) - lastNumber;
    console.log(finalResult);
    
}

main(23, 6, 10)