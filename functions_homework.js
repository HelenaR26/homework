//1
function makeUppercase(value) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else {
      console.log('Incorrect type of data');
      return 'Value must be a string'; 
    }
  }
  
  const lowercaseString = "string";
  const uppercaseString = makeUppercase(lowercaseString);
  console.log(uppercaseString); //'STRING'
  
  const number = 42;
  const result = makeUppercase(number); 
  console.log(result); //'Incorrect type of data'
                       //'Value must be a string'

  //2
  function addNumberProperty(obj, propName, propValue) {
    if (typeof propValue === "number") {
      obj[propName] = propValue;
    } else {
      console.log(`Property "${propName}" can't be added. Value must be a number.`);
    }
  }
  
  const obj3 = {};
  
  addNumberProperty(obj3, "age", 30);
  console.log(obj3); //{ age: 30 }

  addNumberProperty(obj3, "name", "John"); 
  console.log(obj3); //'Property "name" can't be added. Value must be a number.'

  //3
  const human = {
    firstName : "John",
    lastName : "Smith",
    age : 50,
    isWorker : true,
    workStatus : {
        career : "QA Engineer",
        company : "Test Company"
    }
  }

  //4
  function addNumberProperty(obj, propName, propValue) {
    if (typeof propValue === "number") {
      obj[propName] = propValue;
    } else {
      console.log(`Property "${propName}" can't be added. Value must be a number.`);
    }
  }

  addNumberProperty(human, "city", "Odessa"); 
  console.log(human); //'Property "name" can't be added. Value must be a number.'
  addNumberProperty(human, "workerID", 12345); 
  console.log(human); // Property "workerID: 12345" is added to the object

  //5 Correct syntax:
  let sum = function (a, b) {
    return a + b;
}