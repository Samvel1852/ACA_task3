//4.Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
let num = 24;
if (num % 7 === 0 && num % 3 === 0 && num % 5 === 0) {
  console.log(num + " is multiple of 3, 5 and 7");
} else if (num % 3 == 0 && num % 5 === 0) {
  console.log(num + " is multiple of 3 and 5");
} else if (num % 3 === 0 && num % 7 === 0) {
  console.log(num + " is multiple to 3 and 7");
} else if (num % 5 === 0 && num % 7 === 0) {
  console.log(num + " is multiple to 5 and 7");
} else if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
  if (num % 3 == 0) {
    console.log(num + " is multiple to 3");
  } else if (num % 5 === 0) {
    console.log(num + " is multiple to 5");
  } else if (num % 7 === 0) {
    console.log(num + " is multiple to 7");
  }
} else {
  console.log(num + " is not multiple to 3, 5 or 7");
}
