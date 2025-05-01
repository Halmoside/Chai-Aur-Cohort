console.log("Lecture 1 of Javascript by Chai aur cohort");
console.log("Hello this side Haseeb studen of chai aur cohort");

// Factory Function
function printChai() {
    console.log("Printing Chai");  // Printing inside the function
}

printChai();  // Calling a factory function

function bringBrush(numberOfBrushes) {
    // console.log("Haanjii aa gya brush");
    console.log(`Haannjiii aa gye ${numberOfBrushes} brushes`);
    
}

bringBrush(8);

function addTwo(num1, num2) {
    return num1 + num2;
}

const sum = addTwo(2, 2);
console.log(sum);
