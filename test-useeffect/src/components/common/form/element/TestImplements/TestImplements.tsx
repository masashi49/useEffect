interface IUser {
    name: string
    age: number
    sayHello: () => string
}

class User implements IUser {
    name: string;
    age: number;

    constructor() {
        this.name = ''
        this.age = 0
    }
    sayHello() {
        return `こんにちわ${this.name}さん！あなたの年齢は${this.age}ですね。`
    }
}

const user = new User()
user.name = 'こん'
user.age = 20
console.log(user.sayHello())

///////////////////////////////////////////////////

class Queus<T>{
    private array: T[] = []
    push(item: T) {
        this.array.push(item)
    }
    pop(): T | undefined {
        return this.array.shift()
    }
}

const ques = new Queus<number>()
ques.push(100)
ques.push(200)
ques.push(300)
ques.push(400)
//ques.push('ほげ')
console.log(ques)
console.log(ques.pop())
console.log(ques)
