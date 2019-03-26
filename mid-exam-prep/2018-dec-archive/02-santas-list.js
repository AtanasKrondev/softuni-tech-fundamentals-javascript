function solve(input) {
    let santasList = input.shift().split('&');
    input.pop();

    for (let inputRow of input) {
        let commandLine = inputRow.split(' ');
        let command = commandLine[0];

        switch (command) {
            case 'Bad':
                let badKid = commandLine[1];
                if (!santasList.includes(badKid)) {
                    santasList.unshift(badKid);
                }
                break;
            case 'Good':
                let goodKid = commandLine[1];
                if (santasList.includes(goodKid)) {
                    santasList.splice(santasList.indexOf(goodKid), 1);
                }
                break;
            case 'Rename':
                let kidToRename = commandLine[1];
                let newName = commandLine[2];
                if (santasList.includes(kidToRename)) {
                    santasList[santasList.indexOf(kidToRename)] = newName
                }
                break;
            case 'Rearrange':
                let kidToRearange = commandLine[1];
                if (santasList.includes(kidToRearange)) {
                    santasList.push(santasList.splice(santasList.indexOf(kidToRearange), 1));
                }
                break;
        }

    }

    console.log(santasList.join(', '));

}

solve(['Joshua&Aaron&Walt&Dustin&William',
    'Good Walt',
    'Bad Jon ',
    'Rename Aaron Paul',
    'Rearrange Jon',
    'Rename Peter George',
    'Finished!']);