 

// Syntex of if-else

if(condition) {
    // code   
}else {
    // code
}

let weatherOfCity = "rainy";
// let result = weatherOfCity = "rainy"; ------> Another way to write

if(weatherOfCity === "rainy") {
    console.log("its raining, umbrella lekr jana bhai!!!");
}else {
    console.log("else part hai jii !!!");
}

let weatherOfTown = "cloudy";

if (weatherOfTown === "rainy") {
    console.log("its raining, umbrella lekr jana bhai!!!");
} else if (weatherOfTown === "cloudy") {
    console.log("Jacket lee jana bhai");  
} else if (weatherOfTown === "sunny") {
    console.log("Sunny hai jii aaj toh !!");
}