function factorialDivision(first, second) {

    function factorialCalculator(number) {
        let factorial = 1;
        for (let i = 2; i <=number; i++) {
            factorial*=i;
        }
        return factorial;
    }
    
    console.log((factorialCalculator(first)/factorialCalculator(second)).toFixed(2));
}

factorialDivision(5, 2);