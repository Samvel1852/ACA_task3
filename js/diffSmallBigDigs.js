// 21. Enter a number. Find the difference between its biggest and smallest digits.
let num = 4593653;
let strNum = num.toString();
let splNum = strNum.split("");
let maxDig = 0;
let minDig = 10;
for (let i = 0; i < splNum.length; i++) {
  if (i === splNum.length - 1) {
    console.log("ok");
  } else {
    if (+splNum[i] > maxDig) {
      maxDig = +splNum[i];
      //   console.log(maxDig, minDig);
    }
    if (+splNum[i] < minDig) {
      minDig = +splNum[i];
      //   console.log(maxDig, minDig);
    }
  }
}
console.log(maxDig - minDig);
