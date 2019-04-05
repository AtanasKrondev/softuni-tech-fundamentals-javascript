function solve(sub, text) {
    let result = [];
    text = text
        .split(' ')
        .forEach(word => {
            if (!word.toLowerCase().includes(sub.toLowerCase())) {
                result.push(word);
            }
        });
    for (let i in result) {
        console.log(`idx[${i}] -> ${result[i]}`);
    }
}

solve('Wel', 'welcome to the Software University!');