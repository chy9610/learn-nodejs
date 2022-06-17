const fs = require('fs');
const fileAddress = '../os';

fs.access(fileAddress, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('获取访问成功')
});


if (!fs.existsSync('./test')) {
    // 异步创建文件夹
    fs.mkdir('./test', (err) => {
        if (err) {
            console.error('异步创建文件夹失败 ##', err)
            return
        }
        console.log('异步创建文件夹成功')
    });
}

// 同步创建文件夹
try {
    if (fs.existsSync('./test2')) return
    const mkdirFolder = fs.mkdirSync('./test2');
    console.log('同步创建文件夹成功', mkdirFolder)
} catch (err) {
    console.error('同步创建文件夹失败 ###', err)
}