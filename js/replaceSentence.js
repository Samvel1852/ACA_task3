//12. Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
//from the array.

let sen = "May the _ _ _ _.";
let splSen = sen.split("");
let arr = ["Force", "be", "with", "you"];

// sen = sen.join("");
console.log(splSen);
for (let i = 0; i < splSen.length; i++) {
  if (splSen[i] === "_") {
    splSen.splice(i, 1, arr[0]);
    arr.shift();
  }
}
console.log(splSen);
joinedSen = splSen.join("");
console.log(joinedSen);
