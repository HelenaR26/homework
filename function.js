

// //синхронная функция
// function clickButton() {
//     console.log('Click the element')
//     frameworkPlaywright.clickTheButton()
// }

// //асинхронная функция
// // let ownVariable1 = 'sss'
// // function clickButton(selector, text='Hello') {
// //     console.log('Click the element')
// //     // frameworkPlaywright.clickTheButton(selector)
// //     ownVariable1 = 'local value'
// //     //assert txtOnUI == text
// // }
// // clickButton()
// // console.log(ownVariable1)

// let ownVariable1 = 'sss'
// function clickButton(selector, text='Hello') {
//     console.log('Click the element')
//     // frameworkPlaywright.clickTheButton(selector)
//     let ownVariable2 = 'local value'
//     return ownVariable2
//     let ownVar22 = 'another local value'
//     return ownVar22
// }
// let valueFromFunction = clickButton()
// console.log(valueFromFunction)

//function expression
let getTheValue = function() {
    console.log('Fetching the data from UI')
    // frameworkPlaywright.getTheText()
}

let copygetTheValue = getTheValue
copygetTheValue()
// console.log(getTheValue)