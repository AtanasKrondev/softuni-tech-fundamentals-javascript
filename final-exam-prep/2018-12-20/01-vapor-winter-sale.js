function solve(input) {
    let vapor = {};
    let gamesLog = input[0].split(', ');

    for (let line of gamesLog) {
        if (line.includes('-')) {
            let [game, price] = line.split('-');

            if (!vapor.hasOwnProperty(game)) {
                vapor[game] = { price: +price };
            }

        } else if (line.includes(':')) {
            let [game, dlc] = line.split(':');

            if (vapor.hasOwnProperty(game)) {
                vapor[game].dlc = dlc;
                vapor[game].price *= 1.2;
            }
        }
    }

    let vaporArr = Object.entries(vapor);
    let withDlc = [];
    let noDlc = [];

    for (let [game, info] of vaporArr) {
        if (info.hasOwnProperty('dlc')) {
            info.price *= 0.5;
            withDlc.push([game, info]);
        } else {
            info.price *= 0.8;
            noDlc.push([game, info]);
        }
    }

    withDlc.sort((a, b) => a[1].price - b[1].price)
        .forEach(e => console.log(`${e[0]} - ${e[1].dlc} - ${e[1].price.toFixed(2)}`));
    noDlc.sort((a, b) => b[1].price - a[1].price)
        .forEach(e => console.log(`${e[0]} - ${e[1].price.toFixed(2)}`));
}

solve(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']);
solve(['Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC']);