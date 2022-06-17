const fs = require('fs');

// 异步获取文件属性
// fs.stat('./test.json', (err, stats) => {
//     if (err) {
//         console.error('获取文件属性失败 ##', err)
//         return
//     }

//     console.log('文件属性 ####', stats)
// })

// 同步获取文件属性
try {
    const statsFile = fs.statSync('./test.json')

    // 判断是目录还是文件
    statsFile.isFile(); //true   文件
    statsFile.isDirectory(); // false    目录
    statsFile.isSymbolicLink(); // false 符号链接
    statsFile.size; // 文件大小（字节为单位）

    console.log('获取文件属性 ###', statsFile)
} catch (err) {
    console.error('同步获取文件属性失败', err)
}

