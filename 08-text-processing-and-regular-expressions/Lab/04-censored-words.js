function solve(text, word) {
    let result = text.replace(word, '*'.repeat(word.length));
    while (result.includes(word)) {
        let censored = result.replace(word, '*'.repeat(word.length));
        result = censored;
    }
    console.log(result);
}

solve("A small sentence with some small words", "small");