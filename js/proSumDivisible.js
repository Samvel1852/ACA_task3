// 11. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
//print the quotient, otherwise print the remainder.
let num = 455;
let strNum = num.toString();
let splNum = strNum.split("");
let sum = 0;
let prod = 1;

for (let i = 0; i < splNum.length; i++) {
  sum = splNum.reduce((a, b) => +a + +b);
  prod = splNum.reduce((a, b) => +a * +b);
}
// console.log(sum, prod);

if (num === 0) {
  console.log("Cannot calculate");
} else if (prod % sum === 0) {
  console.log("Quotient is " + prod / sum);
} else {
  console.log("Reminder is " + (prod % sum));
}
