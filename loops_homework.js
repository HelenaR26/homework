//1
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

//2
for (let i = 0; i <= 10; i++) {
    let NotDivide = i % 2 !== 0;
  
    if (NotDivide) {
      console.log(i);
    }
  }

//3
  for (let i = 0; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
  
    console.log(i);
  }

//4
const number = 12;

if (number < 10) {
  console.log('Hello');
} else {
  console.log('Bye');
}