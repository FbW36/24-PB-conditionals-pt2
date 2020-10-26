const massMark = 70;
const heightMark = 1.69;
const massJohn = 90;
const heightJohn = 1.90;


const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn **2);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log( 'Is Marks BMI higher than Johns?', 'it is true, it is' )
} else {
  console.log('Is Marks BMI higher than Johns?', 'No it is not true')
}

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's`)
  } else {
    console.log(`John's BMI (${bmiJohn}) is higher than Marks's`)
  } 

