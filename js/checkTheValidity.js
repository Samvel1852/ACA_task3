// 5. Write a program to check the validity of password input by users. Validation:
let pass = "Aaza1234566#";
// for (let i = 0; i < pass.length; i++){
// if
// }
if (
  /[a-z]/.test(pass) &&
  /[A-Z]/.test(pass) &&
  /[1-9]/.test(pass) &&
  /[$#@]/.test(pass) &&
  pass.length > 5 &&
  pass.length < 17
) {
  console.log("valid");
} else {
  console.log("invalid");
}
