function solve(accLog) {
    let peshosAcc = accLog[0].split(' ');
    accLog.shift();
    for (let i = 0; i < accLog.length; i++) {
        let commandLine = accLog[i].split(' ');
        switch (commandLine[0]) {
            case 'Install':
                if (peshosAcc.includes(commandLine[1])) {
                    break;
                } else {
                    peshosAcc.push(commandLine[1]);
                }
                break;
            case 'Uninstall':
                peshosAcc = peshosAcc.filter(e => e !== commandLine[1]);
                break;
            case 'Update':
                if (peshosAcc.includes(commandLine[1])) {
                    peshosAcc = peshosAcc.filter(e => e !== commandLine[1]);
                    peshosAcc.push(commandLine[1]);
                }
                break;
            case 'Expansion':
                let gameToExpand = commandLine[1].split('-');
                for (let j = 0; j < peshosAcc.length; j++) {
                    if (gameToExpand[0] === peshosAcc[j]) {
                        peshosAcc.splice(j + 1, 0, peshosAcc[j] + ':' + gameToExpand[1]);
                        break;
                    }
                }
                break;
            case 'Play!':
                break;
        }
    }
    console.log(peshosAcc.join(' '));
}

solve(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);