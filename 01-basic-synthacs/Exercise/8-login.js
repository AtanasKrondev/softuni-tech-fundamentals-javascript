function solve(input) {
    let userName = input[0];
    let password = '';
    let count = 0;
    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
    }
    for (let i = 1; i <= input.length - 1; i++) {
        if (input[i] === password) {
            console.log(`User ${userName} logged in.`);
            return;
        } else {
            count++;
            if (count === 4) {
                console.log(`User ${userName} blocked!`);
                return;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}

solve(['momo','omom']);


// function login() {
//     let userName = '';
//     readline(userName);
//     let password = '';
//     for (let i = userName.length - 1; i >= 0; i--) {
//         password += userName[i];
//     }
//     console.log(password);
// }