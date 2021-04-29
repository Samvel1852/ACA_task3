//7. Insert a digit and a number. Check whether the digits contains in the number or not.
let dig = 8;
let strDig = dig.toString();
let num = 45689;
let strNum = num.toString();
let splNum = strNum.split("");
if (splNum.includes(strDig)) {
  console.log("YES");
} else {
  console.log("NO");
}
// console.log(splNum);
