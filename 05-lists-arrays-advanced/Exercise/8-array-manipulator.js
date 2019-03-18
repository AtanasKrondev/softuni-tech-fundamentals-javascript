function arrayManipulation(arr, commands) {
    for (let element of commands) {
        let action = element.split(' ');
        let operator = action.shift();
        for (let e in action) {
            action[e] = +action[e];
        }

        switch (operator) {
            case 'add':
                arr.splice(action[0], 0, action[1]);
                break;
            case 'addMany':
                addMultiple(arr, action);
                break;
            case 'contains':
                let indexOfContains = -1;
                if (arr.includes(action[0])) {
                    indexOfContains = arr.indexOf(action[0]);
                }
                console.log(indexOfContains);
                break;
            case 'remove':
                arr.splice(action[0], 1);
                break;
            case 'shift':
                shiftFunction(arr, action);
                break;
            case 'sumPairs':
                sumPairs(arr);
                break;
            case 'print':
                console.log(arr);
                return;
        }
    }

    function addMultiple(arr, action) {
        let position = action.shift();
        for (let e = 0; e < action.length; e++) {
            arr.splice(position + e, 0, action[e]);
        }
        return arr;
    }

    function shiftFunction(arr, action) {
        for (let j = 1; j <= action[0]; j++) {
            let temp = arr.shift();
            arr.push(temp);
        }
        return arr;
    }

    function sumPairs(arr) {
        let initialLength = arr.length;
        if (initialLength % 2 === 0) {
            for (let i = 1; i <= initialLength / 2; i++) {
                let tempSum = arr[0] + arr[1];
                arr.push(tempSum);
                arr.splice(0, 2);
            }
        } else {
            for (let i = 1; i <= (initialLength - 1) / 2; i++) {
                let tempSum = arr[0] + arr[1];
                arr.push(tempSum);
                arr.splice(0, 2);
            }
            shiftFunction(arr, [1]);
        }
        return arr;
    }
}

arrayManipulation([1, 2, 4, 5, 6, 7, 1],
    ['sumPairs', 'print']);