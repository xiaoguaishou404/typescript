// 联合类型和类型守护
interface Waiter {
    anjiao: boolean
    say: () => {}
}
interface Teacher2 {
    anjiao: boolean
    skill: () => {}
}
// 第一种方式
// function judgeWho(animal: Waiter | Teacher) {
//     if (animal instanceof Teacher) {
//         (animal as Teacher).skill()
//     } else {
//         (animal as Waiter).say()
//     }
// }
// 第二种方式
function judgeWho(animal: Waiter | Teacher) {
    if ("skill" in Teacher) {
        (animal as Teacher).skill()
    } else {
        (animal as Waiter).say()
    }
}
console.log(judgeWho({
    anjiao: true,
    say: ()=>{}
}));
