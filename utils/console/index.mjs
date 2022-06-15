
/**
 * 格式化变量
 * %s 字符串
 * %d 数字
 * %i 整数
 * %o 对象
 */
// const format = `我的%s已经%d岁了！！！`
// let ani = '猫';
// let age = 2;
// console.log(format, ani, age)
// console.log('%o', Number)

/**
 * 清空控制台
 */
// console.clear()


/**
 * 计数，对相同文案打印的数次数
 */
// console.count();
// const x = 1
// const y = 2
// const z = 3
// console.count(
//     'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//     'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//     'y 的值为 ' + y + ' 且已经检查了几次？'
// )
// const oranges = ['橙子', '橙子']
// const apples = ['苹果']
// oranges.forEach(fruit => {
//     console.count(fruit)
// })
// apples.forEach(fruit => {
//     console.count(fruit)
// })

/**
 * 打印栈的踪迹
 */
// console.trace();
// const fun1 = function() {
//     console.trace()
// }
// fun1()


/**
 * 计算耗时
 */
// const f1 = () => console.log('测试')
// const f2 = () => {
//     console.time('f1()')
//     f1()
//     console.timeEnd('f1()')
//     console.log('\x1b[33m%s\x1b[0m', '你好')
// }
// f2()

/**
 * 创建进度条
 */
// const Progress = require('progress')

// const bar = new Progress(':bar', { total: 10 });
// const timer = setInterval(() => {
//     bar.tick()
//     if (bar.complete) {
//         console.log("\ncomplete\n");
//         clearInterval(timer)
//     }
// }, 500)

import ora from 'ora';
import chalk from 'chalk';

const spinner = ora(`Loading...${chalk.red('unicorns')}`).start();
setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
    spinner.succeed("Success ");
}, 5000);