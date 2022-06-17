const fs = require('fs');

const fileAddress = './test.json';

// 异步读取文件
fs.readFile(fileAddress, (err, file) => {
    if (err) {
        console.error('读取文件失败 ###', err)
        return
    }

    console.log('读取文件信息  ####', file.toString());
})

// 同步读取文件
try {
    const readFileInfo = fs.readFileSync(fileAddress)
    console.log('同步读取的文件信息 ##', readFileInfo)
} catch (err) {
    console.error('读取文件失败 ###', err)
}
