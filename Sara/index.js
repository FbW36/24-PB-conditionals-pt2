// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.
let markMass = 100 ;
let markHeight = 1.89 ;

let johnMass = 95 ;
let johnHeight = 1.98 ;

//2. Calculate both their BMIs and store their BMIs in variables. 
let markBmi = markMass / (markHeight * markHeight) ;
let johnBmi = johnMass / (johnHeight * johnHeight) ;

//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let boolean = markBmi > johnBmi ; // 
console.log('boolean ==>', boolean) ; // true

//4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
console.log('4 ==>', `Is Mark's BMI higher than Joan's? Why yes, its ${boolean}, it is!`) ;

//5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 
if(markBmi > johnBmi){
    console.log('Mark has greater BMI')
}else{
    console.log('John has greater BMI')
} ; // Mark has greater BMI
