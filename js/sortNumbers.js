// 5.Given three numbers. Sort them by the ascending order.
let numbers = [-23, -456, 0];
// numbers.sort();
numbers.sort((a, b) => (a > b ? 1 : -1));
console.log(numbers);
