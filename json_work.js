const values = require('./values.json')

// let obj1 = {name: "Elena", lname: "Rydvan", age: 28}
// console.log(obj1)

// let jsonObj1 = JSON.stringify(obj1)
// console.log(jsonObj1)


// let jsonObj1 = '{"name":"Elena","lname":"Rydvan","age":28}'

// let obj2 = JSON.parse(jsonObj1)
// console.log(obj2)
// console.log(obj2.name)

// obj2.city = "Odessa"
// console.log(obj2)

// jsonObj1 = JSON.stringify(obj2)
// console.log(jsonObj1)
console.log(values)



const { writeFile, readFile } = require('fs');
const path = './values.json'
const newData = {phone : 12313, address : 'Street'}
readFile(path, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const parsedData = JSON.parse(data);
  parsedData.createdAt = new Date().toISOString();
  writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
    if (err) {
      console.log('Failed to write updated data to file');
      return;
    }
    console.log('Updated file successfully');
  });
});

// const values = require('./values.json')
// const fs = require('fs-extra')
// let jsonObj1 = '{"name" : "den", "lname" : "pavliuk", "age" : 100500}'
// let obj2 = JSON.parse(jsonObj1)
// console.log(obj2.name)

// obj2.city = "York"

// console.log(obj2)

// jsonObj1 = JSON.stringify(obj2)

// console.log(values)



// let readData
// // try {code with problems} catch (error) {cons}
// try {
// fs.readData(path, 'utf8', (error, data) => {
//     if(error) {
//         console.log('Error during reading file')
//     } else {
//         readData = JSON.parse(data)
//         readData.address = 'Street'
//     }
   
// })
// } catch(err) {
//     console.log('Error during code actions: ${err}')
// }
// // function Func() {
// //     fetch("./sample.json")
// //         .then((res) => {
// //         return res.json();
// //     })
// //     .then((data) => console.log(data));
// // }
// console.log(readData)
// fs.writeFile(path, JSON.stringify(newData));


// const fs = require('fs-extra');
// let path = "./values6.json";
// let data, jsonData;
// try {
//     if(fs.existsSync(path)) {
//         data = fs.readFileSync(path, 'utf8');
//         if(data) {
//             jsonData = JSON.parse(data);
//             if(typeof jsonData === 'object' && jsonData !== null && !Array.isArray(jsonData)) {
//                 jsonData.test = 'test';
//                 jsonData.email = 'test@gmail.com';
//                 fs.writeFileSync(path, JSON.stringify(jsonData));
//             } else {
//                 throw new Error("Parsed JSON data is not an object");
//             }
//         } else {
//             throw new Error("No data read from the file");
//         }
//     } else {
//         throw new Error("File does not exist");
//     }
// } catch (err) {
//     console.error(err.message);
// }