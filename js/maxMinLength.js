//15. Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
// their lengths.
let arr = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];
let maxLength = 0;
let minLength = 0;
// for (let i = 0; i < arr.length; i++) {
arr.sort((a, b) => (a.length > b.length ? 1 : -1));
// }
// console.log(arr);
maxLength = arr[arr.length - 1].length;
minLength = arr[0].length;
console.log(maxLength + minLength);
