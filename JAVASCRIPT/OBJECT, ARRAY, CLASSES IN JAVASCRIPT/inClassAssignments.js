console.log("Lecture 3 of Javascript by Chai aur cohort");

console.log("Live class assignments of arrays in javascript");

// Problem 1 : Create an array containing  different types of teas

// Solution 

let differentTeas = ["Green Tea", "Black Tea", "Masala Tea", "Orange Tea", "Oolong Tea", "Ginger Tea"];
console.log(differentTeas);


// Problem 2 : Add "Chamomile Tea" to the existing list of teas

// Solution

differentTeas.push("Chamomile Tea")
console.log(differentTeas);

// Problem 3 : Remove "Oolong Tea" from the existing list of teas

// Solution

differentTeas.splice(5, 1);  // Yaha pr 5 index no hai jis par Oolong tea hai aur 1 means 1 element remove krna hai
console.log(differentTeas);

// Another Way of doing this 

const index = differentTeas.indexOf("Oolong Tea");
if(index > -1) {
    teas.splice(index, 1)
}

// Problem 4 : Filter the list of teas to only include teas that are caffeinated

// Solution

const teas = ["Green Tea", "Black Tea", "Masala Tea", "Orange Tea", "Oolong Tea", "Ginger Tea", "Herbal Tea"];

const caffeinatedTeas = teas.filter((tea) => (teas !== "Herbal Tea") );

console.log(caffeinatedTeas);

// Problem 5 : Sort the list of teas in alphabetical order.

// Solution

const test = [66, 74, 56, 88, 22, 35]
console.log(test.sort());

// Problem 6 : Use a for loop to print each type of tea in an array

// Solution

const myTeas = ["Green Tea", "Black Tea", "Masala Tea", "Orange Tea", "Oolong Tea", "Ginger Tea", "Herbal Tea"];

for(let i = 0; i < myTeas.length; i++) {
    console.log(myTeas[i]);   
} 

// Problem 7 : Use a for loop to count how many teas are caffeinated (Excluding "herbal teas")

// Solution

const teass = ["Green Tea", "Black Tea", "Masala Tea", "Orange Tea", "Oolong Tea", "Ginger Tea", "Herbal Tea"];

let caffeinatedTeass = 0;

for(let i = 0; i < teass.length; i++) {

    if(teas[i] !== "Herbal Tea") {
        caffeinatedTeass++;
    }
}

console.log(caffeinatedTeass);


// Problem 8 : Use a for loop to create a new array of all teas names in uppercase

// Solution

const uppercaseTeas = ["Green Tea", "Black Tea", "Masala Tea", "Orange Tea",];

for(let i = 0; i < uppercaseTeas.length; i++) {
    uppercaseTeas[i] = uppercaseTeas[i].toUpperCase()
}


// Problem 9 : Use a for loop to find the tea names with the most characters

// Solution

let longestTea = "";

for(let i = 0; i < teas.length; i++) {

    if(teas[i].length > longestTea.length) {
        longestTea = teas[i];
    }
}

console.log(longestTea);

// Problem 10 : Use a for loop to reverse the order of the teas in the array

// Solution

const reversedTeas = [];

for(let i = teas.length - 1; i >= 0; i--) {
    reversedTeas.push(teas[i]);
}






