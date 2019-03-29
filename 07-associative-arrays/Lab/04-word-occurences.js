function solve(input) {
    let result = new Map();
    for (let word of input) {

        if (!result.has(word)) {
            result.set(word, 0);
        }
        result.set(word, (result.get(word) + 1));
    }

    [...result]
    .sort((a,b) => b[1] - a[1])
    .forEach(a => console.log(`${a[0]} -> ${a[1]} times`));
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);