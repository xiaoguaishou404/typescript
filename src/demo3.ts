
// 联合类型和类型守护
interface Waiter2 {
    anjiao: boolean
    say: () => {}
}
interface Teacher2 {
    anjiao: boolean
    skill: () => {}
}
// 第一种方式
// function judgeWho(animal: Waiter | Teacher2) {
//     if (animal instanceof Teacher2) {
//         (animal as Teacher2).skill()
//     } else {
//         (animal as Waiter).say()
//     }
// }
// 第二种方式
function judgeWho(animal: Waiter2 | Teacher2) {
    if ("skill" in animal) {
        animal.skill()
    } else {
        (animal as Waiter2).say()
    }
}

const waiter2: Waiter2 = {
    anjiao: true,
    say: () => {
        console.log("say");
        return {}
    }
}
judgeWho(waiter2);

function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`
    } else {
        return first + second;
    }
}

class NumberObj {
    count: number;
    constructor(count: number) {
        this.count = count;
    }
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    } else {
        return 0;
    }
}
// // 枚举类型
enum Status {
    MESSAGE,//0
    SUCCESS,//1
    ERROR,//2
}
enum Status2 {
    MESSAGE = 1,//1
    SUCCESS,//2
    ERROR,//3
}
function getStatus(status: Status) {
    switch (status) {
        case Status.MESSAGE:
            return "message";
        case Status.SUCCESS:
            return "success";
        case Status.ERROR:
            return "error";
    }
}

console.log(getStatus(Status.MESSAGE));// message
console.log(getStatus(1));// success
console.log(Status);
// {
//     '1': 'MESSAGE',
//     '2': 'SUCCESS',
//     '3': 'ERROR',
//     MESSAGE: 1,
//     SUCCESS: 2,
//     ERROR: 3
//   }
console.log(Status[2]); // ERROR

// 泛型
function join<sls>(first: sls, second: sls) {
    return `${first}${second}`;
}
join<string>("sls", "sls");
// join<string>("sls", 1);这样就不行
// 泛型就是要求传入的是同一种类型，不管传入的是什么类型，必须是同一种
// 泛型的值取决于传入的是什么值
// Array<ANY>和ANY[]是一样的，两种写法

function myFun<ANY>(params: ANY[], second: ANY, third: Array<ANY>) {
    params.push(second)
    return params;
}
console.log(myFun<string>(["sls", "sls"], "sls", ["sls", "sls"]));
// 尽量使用T,多个泛型
function join2<T, P>(first: T, second: P) {
    return `${first}${second}`;
}
console.log(join2<string, number>("sls", 6));
// 类型推断，能写尽量写类型
console.log(join2("sls", 6));





