function solve(radius, height) {
    let h = height;
    let r = radius;
    let s = Math.sqrt((r ** 2) + (h ** 2));
    let V = (Math.PI * r * r * h) / 3;
    let A = (Math.PI * r * s) + (Math.PI * r * r);
    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${A.toFixed(4)}`);
}

solve(3.3, 7.8);