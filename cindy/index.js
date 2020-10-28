//24-PB-conditionals-pt2
//Programming Basics: Conditionals Part 2

//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

//1. Store Mark's and John's mass and height in variables.
let markHeight = 1.90
let johnHeight = 1.80
let markMass = 79
let johnMass = 85.3

//2. Calculate both their BMIs and store their BMIs in variables.
let markInfo = (markMass / (markHeight * markHeight))
let johnInfo = (johnMass / (johnHeight * johnHeight))
console.log("Mark's BMI => ",markInfo.toFixed(2))
console.log("John's BMI => ", johnInfo.toFixed(2))

//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
if(markInfo > johnInfo){
    console.log(true)
}else{
    console.log(false)
}

//4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(`Is Mark's BMI higher than John's? Why yes, it's ${(markInfo > johnInfo)}, it is ${markInfo.toFixed(2)} not greater than ${johnInfo.toFixed(2)}`)



//5. Create an if statement which prints the name and BMI of the person with the highest BMI.
if(markInfo > johnInfo){
    console.log("Mark has highest BMI")
}else{
    console.log("John has highest BMI")
}