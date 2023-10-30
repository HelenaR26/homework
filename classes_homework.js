//1 + Additional task
class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        } 
    }
    eat(){console.log('eating')}
    listen() { console.log('listening') }
}

class Worker extends Human {
    constructor(salary, workTime) {
        super()

        this.salary = salary
        this.workTime = workTime
    }

    greet() {
        console.log('Hi, I am a worker')
    }

    workFinished() {
        console.log('The work is finished')
    }

    isWorkingNow() {
        const currentHour = new Date().getHours()

        if (currentHour >= 9 && currentHour < 18) {
            console.log('Worker is working now')
        } else {
            console.log('Worker is not working now')
        }
    }
}

const worker = new Worker(1500, '8 hours')
console.log(worker.salary)
console.log(worker.workTime)
worker.eat()
worker.listen()
worker.greet()
worker.workFinished()
worker.isWorkingNow()