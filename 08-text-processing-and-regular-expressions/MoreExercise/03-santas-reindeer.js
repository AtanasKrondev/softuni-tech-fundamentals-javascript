function solve(text) {
    let sub = /\*[A-Z][a-z]+\*/g;
    let result = [];
    let deers = [];
    text = text
        .split(' ')
        .forEach(word => {
            if (!word.match(sub)) {
                result.push(word);
            } else {
                deers.push(word);
            }
        });

    console.log(deers.join(', '));
    console.log('*'.repeat(20));
    console.log(result.join(' '));
}

solve("Oh my *Rudolf* dwarfs! This *Dasher* year's christmas *Prancer is about to be Comet* ruined because Santa has lost his deer and.");