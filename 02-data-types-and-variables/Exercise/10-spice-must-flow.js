function solve(startingYield) {
    let yield = startingYield;
    let daysMined = 0;
    let totalSpice = 0;
    while (yield >= 100) {
        daysMined++;
        totalSpice += yield - 26;
        yield -= 10;
    }
    totalSpice -=26;
    if (totalSpice < 0) {
        totalSpice = 0;
    }
    console.log(daysMined);
    console.log(totalSpice); 
}

solve(111);