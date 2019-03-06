function solve(firstArr, secArr) {
    for (let element of firstArr) {
        if (secArr.includes(element)) {
            console.log(element);            
        }
    }
}

solve(["Hey", "hello", 2, 4, "Pesho", "e"], ["Pecho", 10, "hey", 4, "hello", "2"]);