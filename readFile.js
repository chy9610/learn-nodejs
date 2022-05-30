const fs = require('fs');

// readFile 异步读取文件
fs.readFile("./json/test.json", function (err, _data) {
    if (err) return err
    console.log(_data.toString())
    console.log('异步读取文件，回调执行完成')
})

// readFileSync 同比读取文件
let _data = fs.readFileSync('json/test.json')
console.log(_data.toString())
console.log('同步读取文件完成！！')
