const fs = require('fs');
const fileAddress = './test.json';
const content = '大黄蜂';
// 异步写入文件内容
// fs.write(fileAddress, content, (err) => {
//     if (err) {
//         console.error('写入文件失败 ##', err)
//         return
//     }
//     console.log('写入文件成功')
// })

// 同步写入文件内容
// try {
//     const fileContent = fs.writeFileSync(fileAddress, content);
//     console.log('写入文件成功，其文件内容 ###', fileContent)
// } catch (err) {
//     console.error('写入文件失败 ###', err)
// }


/**
 *  r+  打开文件用于读写。
    w+  打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
    a   打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
    a+  打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
 */

// 文件写入也可以使用文件标志
fs.writeFile(fileAddress, content, { flag: 'a+' }, err => {
    if (err) {
        console.error('写入文件失败 ###', err)
        return
    }
    console.log('写入文件成功')
})