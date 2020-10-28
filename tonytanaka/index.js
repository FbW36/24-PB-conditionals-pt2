// 1
let markMass = 60;
let markHeight = 1.8;
let johnMass = 90;
let johnHeight = 1.9;

// 2
let markBMI = markMass / markHeight ** 2;
console.log("markBMI ==>", markBMI);
let johnBMI = johnMass / johnHeight ** 2;
console.log("johnBMI ==>", johnBMI);

// 3
let markHigherThanJohn = markBMI > johnBMI === true;

// 4
if (markHigherThanJohn == true) {
  console.log(
    `Is Mark's BMI higher than John's? Yes, it's ${markHigherThanJohn}, it is ${markBMI}`
  );
} else
  console.log(
    `Is Mark's BMI higher than John's? No, it's ${markHigherThanJohn}, it is ${markBMI}`
  );

// 5
if (markBMI > johnBMI) {
  console.log("markBMI is highest ==>", markBMI);
} else console.log("johnBMI is heighest ==>", johnBMI);
