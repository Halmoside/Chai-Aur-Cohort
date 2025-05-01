console.log("Array with loops in Javascript");

let myArray = [1, 3, 5, 7, 9, 10];

function sumFactory(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
        // sum += numbers[i]; ---> Shortcut
    }
    return sum;
}

let result = sumFactory(myArray);

console.log(result);

let anotherResult = sumFactory([3, 6, 9, 5]);

console.log(`My result is ${anotherResult}`);
