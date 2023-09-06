//1
let newArr = [
    'text', 
    123, 
    true, 
    false, 
    [1, 2, 3], 
    function() {console.log('Hi from array')}, 
    null, 
    2.5, 
    undefined, 
    'string'
];

console.log(newArr)

//2
function addTo500(array, value) {
    array[500] = value
  }

let newArr2 = []
addTo500(newArr2, "Value for 500 index")
console.log(newArr2[500])

//3
function addNewArrays(firstArr) {
    let stringArr = []
    let numberArr = []
    for (let i = 0; i < firstArr.length; i++) {
        if (typeof firstArr[i] === 'string') {
            stringArr.push(firstArr[i])
        } else if (typeof firstArr[i] === 'number') {
            numberArr.push(firstArr[i])
    }
}
return {
    strings : stringArr, 
    numbers : numberArr}
}

let newArr3 = [1, 'one', 2, 'two', 3, 'three']
let result = addNewArrays(newArr3)

console.log('Strings:', result.strings)
console.log('Numbers:', result.numbers)
