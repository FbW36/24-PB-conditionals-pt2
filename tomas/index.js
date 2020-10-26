log = console.log;

// Store Mark's and John's mass and height in variables.
let heightMark = 1.80;
let heightJohn = 1.92;
let weightMark = 75;
let weightJohn = 82;

// Calculate both their BMIs and store their BMIs in variables
let MarksBMI = weightMark / Math.pow(heightMark, 2);
let JohnsBMI = weightJohn / Math.pow(heightJohn, 2);

// Create a boolean variable containing information about whether Mark has a higher BMI than John
let compareBMI = MarksBMI > JohnsBMI;
log(`Is Mark's BMI higher than John's? Why yes, it's ${compareBMI}, it is`)
if(compareBMI) {
    log('Mark:', MarksBMI);
}
else {
    log("John:", JohnsBMI);
}
