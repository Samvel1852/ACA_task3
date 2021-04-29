let nums = [-14, 5, 0];
// let pos = 0;
let neg = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 0) {
    console.log("unsigned");
    break;
  }
  if (nums[i] < 0) {
    ++neg;
  }
}
if (neg % 2 === 0) {
  console.log("+");
} else if (!nums.includes(0)) {
  console.log("-");
}
