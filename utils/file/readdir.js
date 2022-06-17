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



// 读取测试文件夹，删除其中全部内容（递归删除）
const folderRm = (folder) => {
    const fileTest = fs.readdirSync(folder);
    fileTest.forEach(fileName => {
        let filePath = path.join(folder, fileName);
        if (fs.lstatSync(filePath).isFile()) {
            fs.rmSync(filePath)
        } else {
            folderRm(filePath)
        }
    })
    
    if (fs.lstatSync(filePath).isDirectory()) {
        fs.unlink(folder)
    }
}
folderRm('./test-sub')