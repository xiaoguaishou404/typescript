// class Person2 {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }

// }
// 等同于上面的写法
class Person2 {
    constructor(public name: string) {
    }

}
class Teacher extends Person2 {
    constructor(public age: number) {
        super("sls");
    }
}
const person3: Person2 = new Teacher(18);
console.log(person3);

class XiaoJieJie {
    static sayLove() {
        return "I love you ";
    }
    constructor(private _age: number,  name: string) {
        this._name = name;
    }
    get age(): number {
        return this._age;
    }
    set age(value: number) {
        this._age = value;
    }
    public readonly _name: string;
}
const xiaojiejie2 = new XiaoJieJie(18, "sls");
console.log(xiaojiejie2);



abstract class Girl { 
    abstract skill(): string;
}
class Waiter extends Girl {
    skill(): string {
        return "waiter";
    }
}
class BaseTeacher { }
class seniorTeacher { }
