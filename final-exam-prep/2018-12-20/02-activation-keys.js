function solve(input) {
    let keys = input[0].split('&');
    let regex = /^[a-zA-Z0-9]+$/;
    let validKeys = [];

    for (let key of keys) {
        if (regex.test(key)) {
            key = key.toUpperCase()
                .split('')
                .map(function (e) {
                    if ((/[0-9]/).test(e)) {
                        return 9 - +e;
                    } else return e;
                })
                .join('');

            if (key.length === 16) {
                validKeys.push(key.match(/.{1,4}/g).join('-'));
            } else if (key.length === 25) {
                validKeys.push(key.match(/.{1,5}/g).join('-'));
            }
        }
    }
    
    if (validKeys.length > 0) {
        console.log(validKeys.join(', '));
    }
}

solve(['xxPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&yy6fT5EGFgZHqlFiS']);
solve(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);