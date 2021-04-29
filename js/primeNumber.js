//9.Enter a number. Reverse its first and last digits. Print the new number.
let num = 63;
let q = 0;
for (let i = 2; i < num / 2; i++) {
  if (num % i === 0) {
    q++;
  } else {
    q += 0;
  }
}
if (q > 0) {
  console.log("no");
} else {
  console.log("yes");
}
