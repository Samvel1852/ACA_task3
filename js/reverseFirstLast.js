//8. Enter a number. Reverse its first and last digits. Print the new number.
let num = 13;
let strNum = num.toString();
let splNum = strNum.split("");
if (splNum.length < 2) {
  console.log(num);
} else {
  //   console.log(splNum);
  let firstDig = Number(splNum.shift());
  //   console.log(typeof firstDig);
  let lastDig = Number(splNum.pop());
  let firstAdd = splNum.push(firstDig);
  let lastAdd = splNum.unshift(lastDig);
  num = splNum.join("");
  console.log(num);
}
