// 1. Store Mark's and John's mass and height in variables.
let massMark = 75;
let heightMark = 1.82;

let massJohn = 90;
let heightJohn = 1.93;

// 2. Calculate both their BMIs and store their BMIs in variables.
let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let isHigherMark = bmiMark > bmiJohn;
console.log(isHigherMark);

// 4. Print a string to the console containing the variable from step 3 using string interpolation.
console.log(`Is Mark's BMI higher than John's? It's ${isHigherMark}`);

// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI
if (bmiMark > bmiJohn) {
  console.log(`Mark ${bmiMark}`);
} else {
  console.log(`John ${bmiJohn}`);
}
