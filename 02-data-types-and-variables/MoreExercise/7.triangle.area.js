// function solve(sideA, sideB, sideC) {
//     let sidesArray = [sideA, sideB, sideC];
//     sidesArray.sort(function (x, y) {
//         return y - x;
//     });
//     let a = sidesArray[0];
//     let b = sidesArray[1];
//     let c = sidesArray[2];
//     let S = Math.sqrt((a + (b + c)) * (c - (a - b)) * (c + (a - b)) * (a + (b - c))) / 4;
//     console.log(S);
// }

// solve(2, 3.5, 4);

function solve(sideA, sideB, sideC) {
    let a = sideA;
    let b = sideB;
    let c = sideC;
    let S = Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c)) / 4;
    console.log(S.toPrecision(11));
}

solve(2, 3.5, 4);