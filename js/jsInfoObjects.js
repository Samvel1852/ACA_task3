//Write the code, one line for each action:
//
//Create an empty object user.
//Add the property name with the value John.
//Add the property surname with the value Smith.
//Change the value of the name to Pete.
//Remove the property name from the object.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(user));

//We have an object storing salaries of our team:
//Write the code to sum all salaries and store in the variable sum.

let salaryObj = {
  John: 100,
  George: 150,
  Jonathan: 120,
  Bill: 200,
};
let sumSal = 0;
function sumSalaries(obj) {
  for (let key in obj) {
    sumSal += obj[key];
  }
  return sumSal;
}
console.log(sumSalaries(salaryObj));

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "my menu",
};
for (let key in menu) {
  if (!isNaN(menu[key])) {
    menu[key] *= 2;
  }
}
console.log(menu);
