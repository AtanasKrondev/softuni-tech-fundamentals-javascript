function solve(arr) {
    let result = arr
        .sort()
        .map((a, i)=> `${i+1}.${a}`)
        .join('\n');
    console.log(result);        
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);