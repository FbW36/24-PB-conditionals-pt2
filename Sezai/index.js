// body mass index

let markMass = 95;
let markHeight = 1.87;

let johnMass = 70;
let johnHeight = 1.70;

let markBmi = markMass/(markHeight*markHeight)
let johnBmi = johnMass/(johnHeight*johnHeight)

console.log("BMI Mark ==> ", markBmi);
console.log("BMI John ==> ", johnBmi);


let isMarkBmiHigher = markBmi > johnBmi;
console.log(isMarkBmiHigher);

console.log(`Is Mark's BMI higher than John's? Why yes, it's ${isMarkBmiHigher}, it is`);


if(markBmi>johnBmi){
    console.log(`Mark has the highest BMI with ${markBmi}`);
}else
console.log(`John has the highest BMI with ${johnBmi}`);