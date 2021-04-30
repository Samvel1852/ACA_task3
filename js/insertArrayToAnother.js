// 23. Takes two arrays and insert the second array in the middle of the first array. The first array always has
//two elements.
let arr1 = [
  [1, 2],
  [5, 6],
];
let arr2 = [[3, 4]];
// arr1.splice(1, 0, arr2);
let index = 1;
for (let i = 0; i < arr2.length; i++) {
  arr1.splice(index++, 0, arr2[i]);
}
console.log(arr1);
