function solve(searchString, char, stringToMatch) {
    let modificatedString = searchString.replace('_', char);
    if (modificatedString === stringToMatch) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve()