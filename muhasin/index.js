// 1. Store Mark's and John's mass and height in variables.
let markM = 75;
let markH = 1.80;
let johnM = 72.5;
let johnH = 1.65;

// 2. Calculate both their BMIs and store their BMIs in variables.

let markBmi = (markM / (markH * markH)).toFixed(2);
console.log("Mark BMI ==>", markBmi); // Mark BMI ==> 23.15

let johnBmi = (johnM / (johnH * johnH)).toFixed(2);
console.log("John BMI ==>", johnBmi); // John BMI ==> 26.63

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let markIsHigherBmi = true;
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(`Is Mark's BMI higher than John's  Why yes, it's ${markIsHigherBmi}, it is`);

// 5. Create an if statement which prints the name and BMI of the person with the highest BMI.
if (markBmi > johnBmi) {
    console.log(`Mark ${markBmi}`);

} else {
    console.log(`John ${johnBmi}`); // John 26.63

}