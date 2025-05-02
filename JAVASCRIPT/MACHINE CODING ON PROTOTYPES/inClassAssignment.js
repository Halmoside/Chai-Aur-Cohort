console.log("Lecture 4 of Javascript by Chai aur cohort");

console.log("Live class assignments of objects in javascript");

// Problem 1 : Create an object representing a type of tea with properties for name, type, and caffeine content

// Solution

const tea ={
    name: "Green Tea",
    type: "herbal",      // Another way of writing this ----> "type": "herbal",
    caffeineContent: "Low"
}


console.log(tea);
console.log(tea.name);    // Another way of writing this ----> console.log(tea["type"]);
console.log(tea.type);
console.log(tea.caffeineContent);


// Problem 2 : Access and print the name and type properties of the tea object

// Solution

console.log(tea.name);
console.log(tea.type);


// Problem 3 : Add a new property "origin" to the tea object

// Solution

tea.origin = "India";
console.log(tea);


// Problem 4 : Change the caffeine level of the tea object to "medium"

// Solution

teas.caffeineContent = "Medium";
console.log(tea.caffeineContent);


// Problem 5 : Remove the type property from the tea object

// Solution

delete tea.type;
console.log(tea);


// Problem 6 : Check if the tea object has a property called "origin"

// Solution

console.log("origin" in tea);


// Problem 7 : Use a for.....in loop to print the all properties of the tea object

// Solution

for(let key in tea) {
    console.log(`${key} : ${tea[key]}`);
}


// Problem 8 : Create a nested object representing different types of teas and their properties

// Solution

const differentTeas = {
    "Green Tea" : {
        name: "Green Tea",
        type: "herbal",
    },
    "Black Tea" : {
        name: "Black Tea",
        type: "herbal",
    }
}

console.log(differentTeas);


// Problem 9 : Create a copy of the tea object 

// Solution

const teaCopy = {...tea};
console.log(teaCopy);


// Example of a prototype
Object.prototype.chai = function() {
    console.log("chai aur code");
}

const tea = {
    name: "Ice Tea",
    type: "Cool"
}

tea.chai();