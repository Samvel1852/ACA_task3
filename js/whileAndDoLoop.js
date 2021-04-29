//try to write the following loop with while and do-while
let a = [];
for (let i = 0; i < a.length; i++) {
  console.log("for", i, a[i]);
}

let i = 0;
while (i < a.length) {
  console.log("for", i, a[i]);
  i++;
}

let j = 0;
do {
  console.log("for", j, a[j]);
  j++;
} while (j < a.length);
