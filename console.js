// Node.js 提供了 console 模块，该模块提供了大量非常有用的与命令行交互的方法。

// %s 会格式化变量为字符串
// %d 会格式化变量为数字
// %i 会格式化变量为其整数部分
// %o 会格式化变量为对象

// console.log('我的%s已经%d岁', '猫', 2)
// console.log('我的%s已经%i岁', '猫', 2.5)
// console.log('%o', 'Hello Word', 2.5)
// console.log('%o', Number)

// -------------------------------------------------------------

// 清楚打印
// console.clear();


// -------------------------------------------------------------


// 计数
// console.count();

// const x = 1, y = 2, z = 3;

// console.count(
//     `x的值为${x}且已经检查了几次？`
// )
// console.count(
//     `x的值为${x}且已经检查了几次？`
// )
// console.count(
//     `y的值为${y}且已经检查了几次？`
// )
// console.count(
//     `z的值为${z}且已经检查了几次？`
// )

// -------------------------------------------------------------

// 打印堆栈的印记
// console.trace();
// const f1 = () => console.trace()
// const f2 = f1;
// f2()


// 计算耗时
// const doSomething  = () => console.log("执行耗时")
// const measureDoingSomething = () => {
//     console.time('doSomething()')
//     doSomething();
//     console.timeEnd('doSomething()')
// }
// measureDoingSomething()

// 控制台文本样式
const Chalk = require('chalk')
console.log(Chalk)
// console.log(chalk.yellow('你好'))