// 24. Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1 )
let num = 7;
let fac = 1;
for (let i = num; i > 0; i--) {
  fac *= i;
}
console.log(fac);
