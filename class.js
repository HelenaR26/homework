class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        }
    }
    eat() {console.log('eating')}
    listen() {console.log('listening')}
}

class User extends Human {
    _arms = 2
    static planet = 'Earth'
    #legs = 2
    fingers = 10
    constructor(name, legs, arms) {
        this.name = name
        this.#legs = legs
        this._arms = arms
        this.fingers = this.fingers
    }
    static sayHello() {
        console.log('Hello')
    }

    getName() {
        return this.name
    }
    setName(val) {
        if (typeof(val) !== 'string' || val.length < 5) {
            throw new Error('Please fill only letters')
        }
        this.name = val
    }
}

class Student extends User {
    mark  = 5
    speak() {
        console.log("Yes, I know answer")
    }
}

class SchoolStudent extends Student {
    speak() {
        super.speak()
        console.log('My answer very short and correct')
    }
}

let student1 = new Student("jenkins", 2, 2)
student1.speak()
console.log(student1.getName())
console.log('student1 ^^^')
let student2 = new SchoolStudent("travis", 2, 2)
student2.speak()

let student3 = new SchoolStudent("mimimi", 2, 2, 9)
console.log(student3.fingers)
student3.fingers = 4
console.log(student3.fingers)
// let userD = new User('Birds', 22, 2)
// let nnn = userD.getName
// console.log(nnn)
// console.log(User.planet)
// // userD.legs = 3
// console.log(userD.legs)

let animal = {
    eats: true,
    walk() {
        console.log('Animal is walking')
    },
    eat() {}
};

let rabbit = {
    jumps: true,
    eat() {
        console.log ('Rabbit eats some food')
    },
    __proto__: animal
};


let r2 = {
    earLength: 5,
    __proto__:rabbit
}

rabbit.walk();
rabbit.eat()