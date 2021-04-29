//20.Print the following pattern:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("1\n2 6\n3 7 10\n4 8 11 13\n5 9 12 14 15");
for (let i = 0; i < arr.length / 3; i++) {
  if (i === 0) {
    console.log(arr[i]);
  } else if (i === 1) {
    console.log(arr[i], arr[i] + 4);
  } else if (i === 2) {
    console.log(arr[i], arr[i] + 4, arr[i] + 7);
  } else if (i === 3) {
    console.log(arr[i], arr[i] + 4, arr[i] + 7, arr[i] + 9);
  } else if (i === 4) {
    console.log(arr[i], arr[i] + 4, arr[i] + 7, arr[i] + 9, arr[i] + 10);
  }
}
