function solve(singleChar) {
    let myInput = singleChar;
    if (myInput >= 'a' && myInput <= 'z') {
        console.log('lower-case');
        
    } else {
        console.log('upper-case');        
    }
}

solve('L');