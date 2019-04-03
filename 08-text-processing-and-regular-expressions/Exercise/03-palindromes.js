function solve(input) {
    let palindromes = []
    input.forEach(element => {
        let text = element.split(' ').join('');
        let reveresetext = text.split('').reverse().join('');
        if (text === reveresetext) {
            palindromes.push(text);
        }
    });

    if (palindromes.length === 0) {
        console.log('No palindromes found');        
    } else {
        console.log(palindromes.join(', '));
    }
}

solve([' stella won no wallets',
    'not a palindrome']);