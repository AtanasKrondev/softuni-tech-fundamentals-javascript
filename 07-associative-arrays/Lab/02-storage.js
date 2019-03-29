function solve(input) {
    let storage = new Map();

    for (const iterator of input) {
        const [item, quantityInput] = iterator.split(' ');
        let quantity = +quantityInput;

        if (storage.has(item)) {
            quantity += storage.get(item);
        }
        storage.set(item, quantity);
    }

    storage.forEach((v,k) => console.log(`${k} -> ${v}`));
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);