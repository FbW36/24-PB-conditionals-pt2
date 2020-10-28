/*Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).*/

//? 1. Store Mark's and John's mass and height in variables.

let johnWeight = 80;
let johnHeight = 1.76;
let markWeight = 95;
let markHeight = 1.91;

//? 2.Calculate both their BMIs and store their BMIs in variables.

let johnBmi = (johnWeight / (johnHeight * johnHeight)).toFixed(2);
let markBmi = (markWeight / (markHeight * markHeight)).toFixed(2);

//? 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

let johnHigherBmi = johnBmi > markBmi; // False

//? 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(
  "Is John's BMI higher than Mark's?",
  johnHigherBmi
    ? `Yes, its ${johnHigherBmi}, it is.`
    : `No its ${johnHigherBmi}, Marks is higher.`
);

//?Create an if statement which prints the name and BMI of the person with the highest BMI.

if (johnBmi > markBmi) {
  console.log(
    `Johns BMI  is with ${johnBmi} higher than Marks with ${markBmi}.`
  );
} else {
  console.log(
    `Marks BMI is with ${markBmi} higher than Johns with ${johnBmi}.`
  );
}
