function solve(input) {
    let systemDatabase = {};

    for (let inputRow of input) {
        let [systemName, componentName, subcomponentName] = inputRow.split(' | ');
        if (!systemDatabase.hasOwnProperty(systemName)) {
            systemDatabase[systemName] = {};
        }
        if (!systemDatabase[systemName].hasOwnProperty(componentName)) {
            systemDatabase[systemName][componentName] = [];
        }
        systemDatabase[systemName][componentName].push(subcomponentName);
    }

    let sortedSystemDatabase = Object.entries(systemDatabase);
    sortedSystemDatabase.forEach(el => el[1] = Object.entries(el[1]))
    sortedSystemDatabase.sort((a, b) => (b[1].length - a[1].length) || (a[0].localeCompare(b[0])));

    for (let system of sortedSystemDatabase) {
        system[1].sort((a, b) => (b[1].length - a[1].length));        
    }

    for (let system of sortedSystemDatabase) {
        console.log(system[0]);
        for (component of system[1]) {
            console.log(`|||${component[0]}`);
            for (let subComponent of component[1]) {
                console.log(`||||||${subComponent}`);                
            }
        }
        
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);