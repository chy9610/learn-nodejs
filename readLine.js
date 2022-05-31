// 使得nodejs 更具有交互性
// const readLine = require('readline');
// const line = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// line.question('你叫什么名字？？  ', name => {
//     console.log(`你好 ${name} ！！`)
//     line.close()
// })

// readLine 封装版
const inquirer = require('inquirer');
const questions = [
    {
        type: 'input',
        name: 'name',
        message: '你叫什么名字？'
    }
]
inquirer.prompt(questions).then(answers => {
    console.log(`你好 ${answers['name']}!!`)
})