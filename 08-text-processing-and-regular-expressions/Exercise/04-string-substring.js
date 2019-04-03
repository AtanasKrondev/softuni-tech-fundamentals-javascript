function solve(word, text) {
    let someTextArr = text.toLowerCase().split(' ');
    if (someTextArr.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
        
    }
}

solve('javascrsgdipt',
    'JavaScript is the best programming language');