function questJournal(input) {
    let yourQuestJournal = input.shift();
    yourQuestJournal = yourQuestJournal.split(', ');
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' - ');
        let action = command[0];
        let questName = command[1];

        switch (action) {
            case 'Start':
                if (!yourQuestJournal.includes(questName)) {
                    yourQuestJournal.push(questName);
                }
                break;
            case 'Complete':
                if (yourQuestJournal.includes(questName)) {
                    yourQuestJournal.splice(yourQuestJournal.indexOf(questName), 1);
                }
                break;
            case 'Side Quest':
                let questAndSideQuestName = questName.split(':');
                let mainQuest = questAndSideQuestName[0];
                let sideQuest = questAndSideQuestName[1];

                if (yourQuestJournal.includes(mainQuest) && !yourQuestJournal.includes(sideQuest)) {
                    yourQuestJournal.splice((yourQuestJournal.indexOf(mainQuest) + 1), 0, sideQuest);
                }
                break;
            case 'Renew':
                if (yourQuestJournal.includes(questName)) {
                    let renew = yourQuestJournal.splice(yourQuestJournal.indexOf(questName), 1);
                    yourQuestJournal.push(renew);
                }
                break;
            case 'Retire!':
                console.log(yourQuestJournal.join(', '));
                return;
        }
    }
}

questJournal(['Hello World, If else',
    'Complete - Homework',
    'Side Quest - If else:Switch',
    'Renew - Hello World',
    'Retire!']);