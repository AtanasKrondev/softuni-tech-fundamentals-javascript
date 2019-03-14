function solve(number) {
    number = number.toString();

    function sumOfAllDigits(number) {
        let sum = 0;

        for (let i = 0; i < number.length; i++) {
            sum += +number[i];
        }
        return [sum, number.length];
    }

    let result = sumOfAllDigits(number);
    let sumOfDigits = result[0];
    let numbersCount = result[1];

    while (sumOfDigits / numbersCount <= 5) {
        number = number + 9;
        result = sumOfAllDigits(number);
        sumOfDigits = result[0];
        numbersCount = result[1];

    }

    console.log(number);
}

solve(5835);