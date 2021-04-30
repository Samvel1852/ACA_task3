// 16. Given an array of numbers and a number. Find the index of a first element which is equal to that number.
//If there is not such a number, that find the index of the first element which is the closest to it.
let arr = [5, 46, 17, -2, 89, 0, 26];
let num = 36;
let diff = Infinity;
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    console.log(arr.indexOf(arr[i]));
  } else {
    if (Math.abs(Math.abs(arr[i]) - Math.abs(num)) < diff) {
      diff = Math.abs(Math.abs(arr[i]) - Math.abs(num));
      index = i;
    }
  }
}
console.log(index);
// console.log(diff);
