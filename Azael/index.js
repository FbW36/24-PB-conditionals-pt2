// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.

let massMark = 95;
let heightMark = 1.8;
let massJohn = 75;
let heightJohn = 1.65;

// 2. Calculate both their BMIs and store their BMIs in variables.

let BMIMark = massMark / heightMark ** 2;
console.log("BMIMark :>> ", BMIMark); //26.234567901234566

let BMIJohn = massJohn / heightJohn ** 2;
console.log("BMIJohn :>> ", BMIJohn); //27.548209366391188

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

let comparedBMI = BMIMark >= BMIJohn;

console.log("comparedBMI :>> ", comparedBMI); //false
// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(
  "Is Mark's BMI higher than John's? :>> ",
  "it's " + comparedBMI + "," + " he should eat more steaks"
);
// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI.
if (BMIMark > BMIJohn) {
  console.log("BMIMark :>> ", BMIMark);
} else {
  console.log("BMIJohn :>> ", BMIJohn);
}
