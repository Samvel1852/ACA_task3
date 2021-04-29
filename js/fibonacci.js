//10. Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1
//+ ak-2)

let num = 20;
let fibNum = 0;
let fibArr;
let arr = [0, 1, 1];
if (num === 0) {
  console.log(0);
} else {
  for (let i = 3; i < num + 1; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    //   console.log(arr);
  }
  // fibNum = arr.reduce((a, b) => a + b);
  console.log(arr[arr.length - 1]);
}
