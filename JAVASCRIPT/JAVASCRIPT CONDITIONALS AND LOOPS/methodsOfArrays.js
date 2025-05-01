console.log("Array Methods in Javascript");

// 1. at() method --> Yeh array ka element access krne ke liye hota hai ki kis index pe kon sa element hai.

let fruits = ["apple", "banana", "mango", "orange", "grapes"];
console.log(fruits.at(2)); // Output: mango

// 2. concat() method --> Yeh array ko merge/join krne ke liye hota hai.

let fruits1 = ["apple", "banana", "mango", "orange", "grapes"];
let fruits2 = ["Kiwi", "Avacardo", "Dragon Fruit"];

let allFruits = fruits1.concat(fruits2);
console.log(allFruits);

// 3. entries() method --> Yeh array ka iterator return krta hai.

const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value); //Expected output: Array [0, "a"]
console.log(iterator1.next().value); // Expected output: Array [1, "b"]
console.log(iterator1.next().value); // Expected output: Array [2, "c"]

// 4. unShift() method --> Yeh existing array mein element add krta hai woh bhi starting mein.

let fruits3 = ["apple", "banana", "mango", "orange", "grapes"];

fruits3.unshift("Kiwi", "Avacardo", "Dragon Fruit");
console.log(fruits3);

// 5. shift() method --> Yeh existing array mein element remove krta hai woh bhi starting mein.

const arrayyy = [1, 2, 3];

const firstElement = array1.shift();

console.log(arrayyy); // Expected output: Array [2, 3]

console.log(firstElement); // Expected output: 1

// 6. push() method --> Yeh existing array mein element add krta hai woh bhi end mein.

let fruitsss = ["apple", "banana", "mango", "orange", "grapes"];

fruitsss.push("Kiwi");

// 7. pop() method --> Yeh existing array mein element remove krta hai woh bhi end se aur woh hi return krta hai as a output.

const plants = ["broccoli", "cauliflower", "cabbage", "tomato"];

console.log(plants.pop()); // Expected output: "tomato"

console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage"]

plants.pop();

console.log(plants); // Expected output: Array ["broccoli", "cauliflower"]

// 8. indexOf() method --> Array mein jo elements hote hai yeh unka index no. pta krne ke lye hota hai aur yeh -1 bhi return krta hai jb koi element jiska index aap array mein search kr rahe ho woh ho hi nhi uss array mein.

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison")); // Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2)); // Expected output: 4

console.log(beasts.indexOf("giraffe")); // Expected output: -1
