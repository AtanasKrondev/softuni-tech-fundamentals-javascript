function solve(input) {
    let result = []

    for (let inputRow of input) {
        let sortedRow = JSON.parse(inputRow)
            .sort((a, b) => b - a);
        sortedRow = JSON.stringify(sortedRow);
        if (!result.includes(sortedRow)) {
            result.push(sortedRow);
        }
    }

    result = result
        .map(a => JSON.parse(a))
        .sort((a, b) => a.length - b.length)
        .forEach(a => console.log(`[${a.join(', ')}]`));
}

solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);