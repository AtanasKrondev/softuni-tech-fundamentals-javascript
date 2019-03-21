function solve(input) {
    let set = new Set();
    for (let el of input) {
        set.add(el);
    }

    let sorted = [...set.keys()]
        .sort((a, b) => {
            return a.length - b.length || a.localeCompare(b);
        });

    sorted.forEach(e => console.log(e));

}

solve(["Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"]);