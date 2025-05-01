console.log("Grade Calculator");

function calculateGrade(score) {

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

calculateGrade(76);
console.log(calculateGrade(76));


let result = calculateGrade(95);
console.log(result );
