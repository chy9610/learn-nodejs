// 命令行参数信息
const argvs = process.argv;
// 额外参数
const args = argvs.slice(2);

/**
 * 第一个参数：node的完整路径
 * 第二个参数：执行文件的完整路径
 * 后续的参数：额外参数
 * [
    'C:\\Program Files\\nodejs\\node.exe',
    'F:\\Learn\\Learn_nodejs\\utils\\command\\index.js',
    'HelloWord'
    ]
 */

// 最好的方法是使用 minimist 库，该库有助于处理参数,但是需要在每个参数前面加上双破折号
const arg = require('minimist')(args)

console.log('命令行参数 ####', arg)
