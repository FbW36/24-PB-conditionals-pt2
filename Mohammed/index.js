
// 1-
let markMass = 72.5;
let markHeight = 1.65;

let johnMass = 76;
let johnHeight = 1.62;

// 2-
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

// 3-
let markBMI_flag;
if (markBMI > johnBMI)
{
    markBMI_flag = true;
}
else
{
    markBMI_flag = false;
}


// 4-
let BMI_comparison = markBMI_flag ? `Mark's BMI is higher than John's BMI` :  `Mark's BMI is NOT higher than John's BMI`;
console.log(BMI_comparison);


// 5-
if (markBMI_flag)
{
    console.log(`Mark's BMI is higher: ${markBMI}`);
}
else
{
    console.log(`John's BMI is higher: ${johnBMI}`);

}