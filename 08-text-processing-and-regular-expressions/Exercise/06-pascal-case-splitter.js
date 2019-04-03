function solve(str) {
    let regex = /[A-Z][a-z]*/g;
    let m;
    let result = []

    while ((m = regex.exec(str)) !== null) {
        result.push(m[0]);
    }

    console.log(result.join(', '));    
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');