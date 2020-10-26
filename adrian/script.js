//Store Mark's and John's mass and height in variables.
let markMass = 74.5;
let markHeight = 181;

let JohnMass = 66;
let JohnHeight = 170;

//Calculate both their BMIs and store their BMIs in variables.

function calcBodyMassIndex(mass, height) {
  let BMI = mass / (height * height);
  return BMI;
}

let markBMI = calcBodyMassIndex(markMass, markHeight);
let johnBMI = calcBodyMassIndex(JohnMass, JohnHeight);

//Create a boolean variable containing information about whether Mark has a higher BMI than John.
let isMarkBMIHigher = markBMI > johnBMI;
console.log(isMarkBMIHigher);

//Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(
  `Is Mark's BMI higher than John's? The answer is ${isMarkBMIHigher}`
);

//Create an if statement which prints the name and BMI of the person with the highest BMI.
if (markBMI > johnBMI)
  console.log(`Mark is the person with the highest BMI with ${markBMI} `);
else console.log(`John is the person with the highest BMI with ${johnBMI} `);
