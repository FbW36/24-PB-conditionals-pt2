// 1.
let massMark = 75;
let heightMark = 1.82;

let massJohn = 90;
let heightJohn = 1.93;

// 2.
let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

// 3.
let com = bmiMark > bmiJohn;

// 4.
console.log(`Is Mark's BMI higher than John's? Why yes, it's ${com}, it is`);

// 5.
let res = Math.max(bmiMark, bmiMark);

if (bmiMark == res) {
  console.log(`Mark ${bmiMark}`);
} else {
  console.log(`John ${bmiJohn}`);
}
