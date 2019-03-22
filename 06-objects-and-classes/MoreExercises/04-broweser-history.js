function solve(browserHistory, actions) {
    for (let command of actions) {
        if (command === 'Clear History and Cache') {
            browserHistory['Open Tabs'] = [];
            browserHistory['Recently Closed'] = [];
            browserHistory['Browser Logs'] = [];
        }

        if (command.startsWith('Open ')) {
            let currentSite = command.replace('Open ', '');
            if (!browserHistory['Open Tabs'].includes(currentSite)) {
                browserHistory['Open Tabs'].push(currentSite);
                browserHistory['Browser Logs'].push(command);
            }
        }

        if (command.startsWith('Close ')) {
            let currentSite = command.replace('Close ', '');
            if (browserHistory['Open Tabs'].includes(currentSite)) {
                browserHistory['Open Tabs'].splice(browserHistory['Open Tabs'].indexOf(currentSite), 1);
                browserHistory['Recently Closed'].push(currentSite);
                browserHistory['Browser Logs'].push(command);
            }
        }
    }

    console.log(browserHistory['Browser Name']);
    console.log(`Open Tabs: ${browserHistory['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserHistory['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserHistory['Browser Logs'].join(', ')}`);
}

solve({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);