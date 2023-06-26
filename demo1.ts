function jspang() {
    let name: string = "sls";
    console.log(name);
}
jspang();
// interface和type的区别，interface是一种约束类型，type是一种类型，interface约束一组，type可以约束一个也可以一组
type name = string;
interface User {
    name: string;
    age?: number;
}
const user: User = {
    name: "sls",
    age: 18
}
// 对象类型
const user2: {
    name: string;
    age: number;
} = {
    name: "sls",
    age: 18
}
// 数组类型
const users: User[] = [
    {
        name: "sls",
        age: 18
    },
    {
        name: "zhangqian",
        age: 18
    }
]
const users2: {
    name: string;
    age: number;
}[] = [
        {
            name: "sls",
            age: 18
        },
        {
            name: "zhangqian",
            age: 18
        }
    ]

// 类型别名
type User2 = {
    name: string;
    age?: number;
}
const user3: User2[] = [
    {
        name: "sls",
        age: 18
    }
]

// 类类型
class Person {
    name: string = "sls";
    age: number = 18;
}
const person: Person = new Person();
const person2: Person = {
    name: "zhangqiang",
    age: 18
};
// 函数类型
const getName: (name: string) => string = (name: string) => {
    return name;
}

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));

// never类型，永远不会返回，执行不完的函数
function error(message: string): never {
    throw new Error(message);
    console.log("error");

}
// never类型，死循环
function loop(): never {
    while (true) {
    }
    console.log("loop");
}
// 对象参数函数
function add2({ one, two }: { one: number, two: number }): number {
    return one + two;
}
add2({ one: 1, two: 2 });

// 联合类型
const arr: (number | string)[] = [1, 2, "hello"];

// 元组,数组项的类型被指定，项顺序不能乱
const arr2: [number, string,string] = [1, "hello", "world"];

