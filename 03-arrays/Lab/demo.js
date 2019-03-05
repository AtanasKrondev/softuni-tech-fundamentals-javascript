let students = ['Pesho', 'Maryika', 'Stamat', 'Petkan'];
students.push('Gosho');

for (let i = 0; i < students.length; i++) {
    students[i] = 'Mr. ' + students[i];
    console.log(students[i]);
}
