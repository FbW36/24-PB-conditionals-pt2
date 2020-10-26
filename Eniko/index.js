// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// Store Mark's and John's mass and height in variables.
let MarkHeight = 1.70;
let JohnHeight = 1.75;
let MarkWeight = 65;
let JohnWeight = 99;

// Calculate both their BMIs and store their BMIs in variables.
let MarkBMI = MarkWeight / (MarkHeight * MarkHeight);
let JohnBMI = JohnWeight / (JohnHeight* JohnHeight);
console.log(MarkBMI, JohnBMI);

// Create a boolean variable containing information about whether Mark has a higher BMI than John.
console.log("does Mark has a higher BMI than John", MarkBMI > JohnBMI);


// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log("Does Mark has a higher BMI than John? It is", MarkBMI > JohnBMI, "because Mark's BMI is", MarkBMI.toFixed(2), "and John's BMI is", JohnBMI.toFixed(2));

// Create an if statement which prints the name and BMI of the person with the highest BMI.
if (JohnBMI > MarkBMI) {
    console.log("John BMI is higher");
} else {
    console.log("Mark BMI is higher");
}