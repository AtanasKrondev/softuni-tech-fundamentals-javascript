function solve(input) {
    let warehouse = {};

    for (let inputRow of input) {
        let [command, brand, type, expiration, quantity] = inputRow.split(', ');
        quantity = +quantity;

        switch (command) {
            case 'IN':
                if (!warehouse.hasOwnProperty(brand)) {
                    warehouse[brand] = {};
                }

                if (!warehouse[brand].hasOwnProperty(type)) {
                    warehouse[brand][type] = {
                        expiration: expiration,
                        quantity: 0
                    };
                }

                let currrentExpiration = warehouse[brand][type].expiration;

                if (currrentExpiration === expiration) {
                    warehouse[brand][type].quantity += quantity;
                } else if (expiration > currrentExpiration) {
                    warehouse[brand][type].quantity = quantity;
                    warehouse[brand][type].expiration = expiration;
                }
                break;
            case 'OUT':
                if (warehouse.hasOwnProperty(brand)) {
                    if (warehouse[brand].hasOwnProperty(type)) {
                        let currrentExpiration = warehouse[brand][type].expiration;
                        let currrentQuantity = warehouse[brand][type].quantity;

                        if (currrentExpiration >= expiration && currrentQuantity >= quantity) {
                            warehouse[brand][type].quantity -= quantity;
                            if (warehouse[brand][type].quantity === 0) {
                                delete warehouse[brand][type];
                            }
                        }
                    }
                }
                break;
            case 'REPORT':
                console.log('>>>>> REPORT! <<<<<');
                let warehouseArr = Object.entries(warehouse);

                for (let brand of warehouseArr) {
                    console.log(`Brand: ${brand[0]}:`);
                    let brandArr = Object.entries(brand[1]);
                    for (let type of brandArr) {
                        console.log(`-> ${type[0]} -> ${type[1].expiration} -> ${type[1].quantity}.`);
                    }
                }
                break;
            case 'INSPECTION':
                console.log('>>>>> INSPECTION! <<<<<');
                let sortedWarehouseArr = Object.entries(warehouse)
                    .sort((a, b) => a[0].localeCompare(b[0]));

                for (let brand of sortedWarehouseArr) {
                    console.log(`Brand: ${brand[0]}:`);
                    let sortedBrandArr = Object.entries(brand[1])
                        .sort((a, b) => b[1].quantity - a[1].quantity);

                    for (let type of sortedBrandArr) {
                        console.log(`-> ${type[0]} -> ${type[1].expiration} -> ${type[1].quantity}.`);
                    }
                }
                break;
        }
    }
}

solve([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);