function solve(arr) {
    let ourSum = +arr[1];
    let myArr = arr[0].split(' ');
    for (let i = 0; i < myArr.length-1; i++) {
        let currentElement = +myArr[i];
        for (let j = i+1; j < myArr.length; j++) {
            let secondElement = +myArr[j];
            if (currentElement + secondElement === ourSum) {
                console.log(`${currentElement} ${secondElement}`);
            }
        }
    }
}

solve(['14 20 60 13 7 19 8', '27'])