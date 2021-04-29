// 17. Given a sentence as a string. Split it according to space and comma and create an array consisting of the
//words of the array. The last word should not contain the last . or! .
let str = "Keep your friends close, but your enemies closer.";
str = str.split(/[\s,]+/);
// console.log(str);
if (
  str[str.length - 1][str[str.length - 1].length - 1] === "." ||
  str[str.length - 1][str[str.length - 1].length - 1] === "!"
) {
  let lastItem = str[str.length - 1].split("");
  console.log(lastItem);
  lastItem.pop();
  str.pop();
  lastItem = lastItem.join("");
  str.push(lastItem);
}
console.log(str);
