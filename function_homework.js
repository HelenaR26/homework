function lettersCheck(name) {
    if (name === "" || !/[a-zA-Z]/.test(name)) {
        return false
    }
    return name === name.toUpperCase()
}

let name1 = 'TEST'
let name2 = 'TeSt'
let name3 = '000'
let name4 = ''

console.log(lettersCheck(name1))
console.log(lettersCheck(name2))
console.log(lettersCheck(name3))
console.log(lettersCheck(name4))
