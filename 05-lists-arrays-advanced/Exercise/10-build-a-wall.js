function buildTheWall(sectionsHeight) {
    for (let e in sectionsHeight) {
        sectionsHeight[e] = +sectionsHeight[e];
    }

    let crewsWorking = [];
    let workingDays = 30 - Math.min(...sectionsHeight);

    for (let day = 1; day <= workingDays; day++) {
        let workingToday = 0;

        for (let i = 0; i < sectionsHeight.length; i++) {
            if (sectionsHeight[i] < 30) {
                sectionsHeight[i]++;
                workingToday++;
            }
        }

        crewsWorking.push(workingToday);
    }

    let concretePerDay = crewsWorking.map(a => a * 195);
    let pesos = (concretePerDay.reduce((a, b) => a + b)) * 1900;

    console.log(concretePerDay.join(', '));
    console.log(`${pesos} pesos`);    
}

buildTheWall([21, 25, 28]);