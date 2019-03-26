function solve(input) {
    let quantity = +input[0];
    let days = +input[1];
    let cost = 0;
    let spirit = 0;

    for (let day = 1; day <= days; day++) {
        if (day % 11 === 0) {
            quantity += 2;
        }
        if (day % 2 === 0) {
            cost += quantity * 2;
            spirit += 5;
        }
        if (day % 3 === 0) {
            cost += quantity * 8;
            spirit += 13;
        }
        if (day % 5 === 0) {
            cost += quantity * 15;
            spirit += 17;
        }
        if (day % 15 === 0) {
            spirit += 30;
        }
        if (day % 10 === 0) {
            spirit -= 20;
            cost += (5 + 3 + 15);
        }
        if (day === days && day % 10 === 0) {
            spirit -= 30;
        }
    }

    console.log(`Total cost: ${cost}`);
    console.log(`Total spirit: ${spirit}`);
}

solve(['3', '20']);