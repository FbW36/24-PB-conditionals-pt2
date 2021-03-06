// # 24-PB-conditionals-pt2
// # Programming Basics: Conditionals Part 2

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.
let marksMass = 50;
let marksHeight = 1.58;
let johnsMass = 71.5;
let johnsHeight = 1.80;

// 2. Calculate both their BMIs and store their BMIs in variables.
let marksBmi = (marksMass / (marksHeight * marksHeight)).toFixed(2);
let johnsBmi = (johnsMass / (johnsHeight * johnsHeight)).toFixed(2);
console.log(marksBmi); // 20.03
console.log(johnsBmi); // 22.07

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let markIsFitter = true;

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
console.log(`Is Mark's BMI higher than John's Why yes, it's ${markIsFitter}, it is`);

// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 
if (marksBmi > johnsBmi) {
    console.log(`Mark ${marksBmi}`);
}
else {
    console.log(`John ${johnsBmi}`); // John 22.07
}