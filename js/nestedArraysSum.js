//19. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
//row and print them as an array.
let arr = [[1], [2], [3], [4]];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].reduce((a, b) => a + b));
}
console.log(newArr);
