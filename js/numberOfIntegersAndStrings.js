//14. Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.
let arr = [1, 4, "i am a string", "456"];
let intQuant = 0;
let strQuant = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    ++strQuant;
  } else {
    ++intQuant;
  }
}
console.log("Numbers: " + intQuant, "Strings: " + strQuant);
