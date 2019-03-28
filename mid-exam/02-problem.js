function solve(input) {
    let budget = +input[1];
    let items = input[0].split('|');
    let newPrices = [];
    let profit = 0;

    for (itemRow of items) {
        let nextItem = itemRow.split('->');
        let theItem = nextItem[0];
        let price = +nextItem[1];

        switch (theItem) {
            case 'Clothes':
                if (price <= 50.00) {
                    if (price <= budget) {
                        budget -= price;
                        newPrices.push((price * 1.4).toFixed(2));
                        profit += price * 0.4;
                    }
                }
                break;
            case 'Shoes':
                if (price <= 35.00) {
                    if (price <= budget) {
                        budget -= price;
                        newPrices.push((price * 1.4).toFixed(2));
                        profit += price * 0.4;
                    }
                }
                break;
            case 'Accessories':
                if (price <= 20.50) {
                    if (price <= budget) {
                        budget -= price;
                        newPrices.push((price * 1.4).toFixed(2));
                        profit += price * 0.4;
                    }
                }
                break;
        }

    }
    let finalBudget = newPrices.map(Number).reduce((a, b) => a + b);

    console.log(newPrices.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);

    if (finalBudget + budget >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
}

solve(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    '90']);