const readline = require('readline');

const readQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readQuestion.question('你叫什么名字？', (name) => {
    console.log(`你好，${name}！！`)
    readQuestion.close()
})
