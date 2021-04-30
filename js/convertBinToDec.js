// 22. Convert base-2 number to base-10
let binNum = "0101011";
let decNum = 0;
// let strBinNum = binNum.toString();
let splBinNum = binNum.split("");
let l = splBinNum.length - 1;
// console.log(splBinNum);
for (let i = 0; i < splBinNum.length; i++) {
  decNum += +splBinNum[i] * 2 ** l;
  --l;
  //   console.log(splBinNum[i], splBinNum);
}
console.log(decNum);
