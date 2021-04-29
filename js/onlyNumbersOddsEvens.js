// 13.Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
//in a separate array. Arrange them such as from the beginning are the odds and from the ending the
//evens.
let arr = [null, null, 1, undefined, 5, 9, false];
arr = arr.filter((a) => !isNaN(a) && a !== true && a !== null && a !== false);
console.log(arr);
arr.sort((a) => (a % 2 !== 0 ? -1 : 1));
console.log(arr);
