const fs = require('fs');
// console.log('文件模块儿 #####', fs)

// 创建可读流文件
const readStream = fs.createWriteStream('Hello word.txt')

// 设置可读流的编码格式 utf-8
readStream.setDefaultEncoding('utf-8')

// 处理流的事件，data、err、end 
readStream.on('data',function(_d) {
    data += __d
})

readStream.on('end',function() {
    console.log(data)
})

console.log('读取完毕')

// console.log(readStream)