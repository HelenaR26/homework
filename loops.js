// the initial changes for wirk with JS
// author Elena

// //while
// let num = 10;

// while (num <= 7) {
//     console.log(num)
//     num++
// }


//do while
// do {
//     num--
//     console.log(num)
// } while (num <= 7)

//for

// let sumOfLoop = 0;
// for (let i = 0; i <= num; i+=2) {
//     console.log(i);
//     if (i == 6) break;
//     sumOfLoop += i;
// };

// for (let i = 0; i <= num; i+=2) {
//     // if (i == 6) continue;
//     console.log(i);
//     sumOfLoop += i;
// };


// console.log(sumOfLoop);


//for in - objects, 
//for of - arrays

// const obj1 = {
//     prop1: 1,
//     prop2: 2,
//     prop3: 'value3'
// }
// for (let prop in obj1) {
//     console.log(prop)
// }


const obj1 = {
    prop1: 1,
    prop2: 2,
    prop3: 'value3'
}
for (let prop in obj1) {
    console.log(`${obj1[prop]}`)
    if (`${obj1[prop]}` == 'New') {
        console.log()
    }
}

const arr1 = ['valArr1', 'valArr2', 'valArr3']

for (valueOfArr of arr1) {
    console.log(valueOfArr)
}