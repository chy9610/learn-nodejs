const inquirer = require('inquirer');

let questions = [
    {
        type: 'input',
        name: 'name',
        message: "你叫什么名字?"
    },
    {
        type: 'input',
        name: 'grade',
        message: "你上几年级?"
    },
    {
        type: 'input',
        name: 'motion',
        message: "你喜欢什么运动?"
    }
];

inquirer.prompt(questions).then(answers => {
    console.log(`你好 ${answers['name']}!`)
    console.log(`期望你在${answers['grade']}获得好的成绩!`)
    console.log(`有空一起${answers['motion']}!`)
})