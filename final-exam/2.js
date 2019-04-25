function solve(input) {
    let stores = {};

    for (let line of input) {
        if (line === 'END') {
            break;
        }

        let [command, store, items] = line.split('->');

        switch (command) {
            case 'Add':
                if (!stores.hasOwnProperty(store)) {
                    stores[store] = [];
                }
                items = items.split(',');
                for (let item of items) {
                    stores[store].push(item);
                }
                break;

            case 'Remove':
                if (stores.hasOwnProperty(store)) {
                    delete stores[store];
                }
                break;
        }
    }

    console.log('Stores list:');
    let storesSorted = Object.entries(stores)
        .sort((a, b) => b[1].length - a[1].length || b[0].localeCompare(a[0]))
        .forEach(e => {
            console.log(e[0]);
            e[1].forEach(f=> console.log(`<<${f}>>`))
        });
}

solve(['Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END']);
solve(['Add->Peak->Waterproof,Umbrella',
    'Add->Groceries->Water,Juice,Food',
    'Add->Peak->Tent',
    'Add->Peak->Sleeping-Bag',
    'Add->Peak->Jacket',
    'Add->Groceries->Lighter',
    'Remove->Groceries',
    'Remove->Store',
    'END']);