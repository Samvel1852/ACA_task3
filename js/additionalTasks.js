// make function to capitalize the string
let capitStr = "iamastring";
capitStr = capitStr.substring(0, 1).toUpperCase() + capitStr.slice(1);
console.log(capitStr);

//convert the string to kebab_case

let kebStr = "kebabCaseStringIsFun";
kebStr = kebStr.split("");
// console.log(kebStr);
for (let i = 0; i < kebStr.length; i++) {
  if (kebStr[i] === "_" || kebStr[i] === " ") {
    kebStr.splice(i, 1, "-");
  } else if (kebStr[i] === kebStr[i].toUpperCase()) {
    kebStr.splice(i, 1, "-" + kebStr[i].toLocaleLowerCase());
  }
}
kebStr = kebStr.join("");
console.log(kebStr);

// make string's first character toLowerCase

let lowerStr = "Iamastring";
capitStr = capitStr.substring(0, 1).toLowerCase() + capitStr.slice(1);
console.log(capitStr);

//write function work as repeat
// let repStr = "iamaRepeatString";
// let q = 3;

function repeatMe(string, quantity) {
  let newString = "";
  if (quantity === 0) {
    newString = "";
  } else {
    for (let i = 0; i < quantity; i++) {
      newString += string;
    }
  }
  return newString;
}
console.log(repeatMe("abc", 4));

// make from sentence an array composed from the words of the following sentence
let sentenceForArray = "London is the Capital of Great Britain";
let arrayFromString = sentenceForArray.split(" ");
console.log(arrayFromString);
