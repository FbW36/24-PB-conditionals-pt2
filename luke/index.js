// 1. Store Mark's and John's mass and height in variables.
let marksHeight = 1.9;
let marksMass = 80.25;
let johnsHeight = 1.75;
let johnsMass = 78.1;

// 2. Calculate both their BMIs and store their BMIs in variables.
let marksBMI = marksMass / (marksHeight * marksHeight);
console.log("Marks BMI ==> ", marksBMI);

let johnsBMI = johnsMass / (johnsHeight * johnsHeight);
console.log("Johns BMI ==> ", johnsBMI);

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let markIsHigher;

if (marksBMI > johnsBMI) {
  markIsHigher = true;
} else {
  markIsHigher = false;
}

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(`True or False, Mark's BMI higher than John's? ${markIsHigher}`);

// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI.
if (marksBMI > johnsBMI) {
  console.log(`Mark ${marksBMI}`);
} else {
  console.log(`John ${johnsBMI}`);
}
