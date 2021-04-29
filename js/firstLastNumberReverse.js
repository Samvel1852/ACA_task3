//3.Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the
//last digit of the inserted number is 0, number remains the same.
let num = 8;
let strNum = num.toString();
let splStrNum = strNum.split("");
if (splStrNum[splStrNum.length - 1] === "0") {
  console.log(num);
} else {
  let lastItem = splStrNum.pop();
  splStrNum.unshift(lastItem);
  strNum = splStrNum.join("");
  num = +strNum;
  console.log(num);
}
// console.log(typeof strNum);
// console.log(splStrNum);
// for (let i = 0; i < strNum.length; i++) {}
