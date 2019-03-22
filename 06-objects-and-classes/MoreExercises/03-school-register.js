function solve(input) {
    let lastYearRegister = [];
    let emptyString = '';

    for (let inputRow of input) {
        let thisRow = inputRow.split(', ');
        let student = {};
        for (let iterator of thisRow) {
            let splitIterator = iterator.split(': ');
            student[splitIterator[0]] = splitIterator[1];
            student.Grade = +student.Grade;
            student['Graduated with an average score'] = +student['Graduated with an average score'];
        }

        if (student['Graduated with an average score'] >= 3) {
            student.Grade++;
            lastYearRegister.push(student);
        }
    }

    let thisYearRegister = {};

    for (let student of lastYearRegister) {
        if (!thisYearRegister.hasOwnProperty(student.Grade)) {
            thisYearRegister[student.Grade] = {};
        }

        let studentGrade = thisYearRegister[student.Grade];
        studentGrade[student['Student name']] = student['Graduated with an average score'];
    }

    let thisYearSorted = Object.entries(thisYearRegister)
        .sort((a, b) => a[0] - b[0]);

    for (let [grade, students] of thisYearSorted) {
        let studentsArray = Object.entries(students);
        let averageGrade = 0;
        let counter = 0;
        let studentsList = []
        for (let grade of studentsArray) {
            studentsList.push(grade[0]);
            averageGrade += grade[1];
            counter++;
        }
        console.log(`${grade} Grade \nList of students: ${studentsList.join(', ')}\nAverage annual grade from last year: ${(averageGrade / counter).toFixed(2)}`);
        console.log();        
    }
}

solve(['Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00']);