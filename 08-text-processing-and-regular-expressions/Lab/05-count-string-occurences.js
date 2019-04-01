function solve(text, strToMatch) {
    let words = text.split(' ');
    let count = 0;
    for (let word of words) {
        if (word === strToMatch) {
            count++;
        }
    }
    console.log(count);
}

solve("This is a word and it also is a sentence",
    "is");