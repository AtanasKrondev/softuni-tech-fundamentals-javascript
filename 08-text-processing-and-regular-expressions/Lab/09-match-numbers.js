function solve(str) {
    let regex = /(?<=\s|^)-?\d+(\.\d+)?(?=\s|$)/g;
    let match;
    let result = [];

    while ((match = regex.exec(str)) !== null) {
        result.push(match[0]);        
    }

    console.log(result.join(' '));    
}

solve("1 -1 1s 123 s-s -123 _55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5");