const fs = require('fs');


// r + 打开文件用于读写。
// w + 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
// a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
// a + 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。


// 异步打开文件
fs.open('./test.json', 'w+', (err, fd) => {
    if (err) {
        console.error('异步打开文件失败', error)
        return
    }
    console.log('异步打开 ####', fd)
})


// 同步打开文件
// try {
//     const readFile = fs.openSync('./test.json', 'r');
// } catch (err) {
//     console.error('同步读取文件失败', err)
// }
