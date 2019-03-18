function searchForANumber(input, commands) {
    let arr = input.slice(0, commands[0]);
    arr.splice(0, commands[1]);
    let occuranceCount = 0;
    for (let element of arr) {
        if (element === commands[2]) {
            occuranceCount++;
        }
    }

    console.log(`Number ${commands[2]} occurs ${occuranceCount} time.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);