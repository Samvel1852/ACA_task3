//18. Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a new
//array where each element from that array is placed under the index of its value. Start from the smallest
//value and end with the biggest one. If there are missing values, put in its places undefined.
let arr = [26, 30, 19, 5];
arr.sort((a, b) => (a > b ? 1 : -1));
console.log(arr[arr.length - 1]);
for (let i = 0; i < arr[arr.length - 1]; i++) {
  if (!arr.includes(i)) {
    arr.splice(i, 0, undefined);
  }
  if (arr[0] === undefined) {
    arr.shift();
  } else if (arr[arr.length - 1] === undefined) {
    arr.pop();
  }
}
console.log(arr);
