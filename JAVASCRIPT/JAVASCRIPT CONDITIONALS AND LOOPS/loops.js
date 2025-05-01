console.log("Loops in Javascript");

let teas = ["Green Tea", "Black Tea", "Masala Tea", "Orange Tea", "Oolang Tea", "Ginger Tea"];

teas[h]
teas.length // 6
let h = 0;

// Condition ----> h <= 5 || h < 6

// loops ---> iterations

// Steps for the for loop

// 1. Variable lekr aao
// 2. Limit btao
// 3. Increment/Decrement btao  ===> h = h + 1

for(let h = 0; h < teas.length; h++) {
    console.log(`Teas at indexn ${h} is ${teas[h]}`);
}