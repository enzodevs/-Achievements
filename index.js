console.log("Index Js Created")

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Check if the number is even or odd
if (randomNumber % 2 === 0) {
    console.log(`${randomNumber} is an even number.`);
} else {
    console.log(`${randomNumber} is an odd number.`);
}

// Create an array of colors
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// Randomly select a color from the array
const randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(`The randomly selected color is ${randomColor}.`);