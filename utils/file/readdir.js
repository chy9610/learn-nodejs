const fs = require('fs');
const path = require('path');
const folderAddress = './test'

// 确认此目录是否有访问权限，如果没有则终止进程
// try {
//     fs.accessSync(folderAddress)
// } catch (err) {
//     console.error('目录bu允许访问')
//     return
// }

// 选出目录中得文件，而不是文件夹
const isFile = (fileName) => {
    return fs.lstatSync(fileName).isFile()
}

// 异步读取目录
// fs.readdir(folderAddress, (err) => {
//     if (err) {
//         console.error('异步读取目录失败 ###', err)
//         return
//     }
//     console.log('异步读取目录成功')
// })

// 同步读取目录
// try {
//     if (!fs.existsSync(folderAddress)) return
//     let folder = fs.readdirSync(folderAddress);

//     folder = folder.map(fileName => {
//         return path.join(folderAddress, fileName)
//     }).filter(isFile)
//     console.log('同步读取目录成功', folder)
// } catch (err) {
//     console.error('同步读取目录失败 ###', err)
// }


// 异步重写文件夹名称
// fs.rename('./test2', './test-sub', err => {
//     if (err) {
//         console.error('重写文件夹名称失败', err)
//         return
//     }
//     console.log('重新文件夹名称成功！')
// })

// 同步修改文件夹名称
// fs.renameSync()


// 删除文件夹
// fs.rmdir(); // 异步
// fs.rmdirSync(); // 同步

// 删除文件
// fs.rm(); // 异步
// fs.rmSync() // 同步


// 完整化文件路径
const filePullPath = (filePrefix, files) => files.map(fileName => path.join(filePrefix, fileName))

// 读取测试文件夹，删除其中全部内容（递归删除）
const folderRm = (filePath) => {
    // 命令式删除当前目录及以下文件
    // fs.rmSync(filePath, { force: true, recursive: true })
    // return

    const file = fs.lstatSync(filePath);
    // 判断是否为目录
    if (file.isDirectory()) {
        // 读取目录
        const fileTest = filePullPath(filePath, fs.readdirSync(filePath));

        // 判断目录是否存在
        if (Array.isArray(fileTest)) {
            // 只有单纯目录时，删除目录
            if (fileTest.length === 0) {
                fs.rmdirSync(filePath)
            }

            // 遍历目录
            fileTest.forEach(fileItem => {
                folderRm(fileItem)
            })
        }
    }
    
    if (file.isFile()) {
        fs.unlinkSync(filePath)
    }

}
folderRm('./test')