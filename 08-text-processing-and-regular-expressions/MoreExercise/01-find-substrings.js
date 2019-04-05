function solve(text, subStr) {
    let cnt = 0;
    let stringToCheck = text.toLowerCase();
    let pattern = subStr !== undefined ? subStr.toLowerCase() : ' ';
    while (stringToCheck.indexOf(pattern) != -1) {
        cnt++;
        var index = stringToCheck.indexOf(pattern) + 1;
        stringToCheck = stringToCheck.substring(index);
    }
    console.log(cnt);
}

solve("Welcome to the Software University (SoftUni)! Welcome to programming. Programming is wellness for developers, said Maxwell.", 'wel');