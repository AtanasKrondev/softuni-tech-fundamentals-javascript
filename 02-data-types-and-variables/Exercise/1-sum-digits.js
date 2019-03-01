function solve(number) {
    let ourNumber = +number;
    let lastDigit;
    let sumOfDigits = 0;

    while (ourNumber !== 0) {
        lastDigit = ourNumber % 10;
        sumOfDigits += lastDigit;
        ourNumber = parseInt(ourNumber / 10);
    }
    console.log(sumOfDigits);    
}

solve(245678);