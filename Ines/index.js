//1
let markMass = 60;
let markHeight = 1.70;
let johnMass = 90;
let johnHeight = 1.90;

//2
let markBMI = (markMass / (markHeight*markHeight)).toFixed(2);
let johnBMI = (johnMass / (johnHeight*johnHeight)).toFixed(2);
console.log(markBMI);
console.log(johnBMI);

//3
higherMarkBMI = true;

//4
console.log("Is Mark's BMI higher than John's? Why yes, it's " + higherMarkBMI, ", it is");

//5
if(markBMI > johnBMI){
    console.log("Mark's BMI of "+ markBMI + " is higher than John's BMI");
}
else{
    console.log("John's BMI of "+ johnBMI + " is higher than Mark's BMI");
}