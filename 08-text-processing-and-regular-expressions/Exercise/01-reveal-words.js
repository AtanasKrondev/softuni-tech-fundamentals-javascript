function solve(words, text) {
    words.split(', ').forEach((word) => {
        text = text.replace('*'.repeat(word.length), word)
    });
    console.log(text);    
}

solve('great, learning',
    'softuni is ***** place for ******** new programming languages')