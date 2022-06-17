const path = require('path');
const file = './index.js'
const dirName = path.dirname(file); // 文件的父文件夹路径
const baseName = path.basename(file); // 当前文件完成名称
const extName = path.extname(file); // 当前文件类型名称
const fileName = path.basename(file, path.extname(file)); // 不带扩展名的文件名称

const name = 'joker';
const fileJoinPath = path.join('/', name)

const fileSolvePath = path.resolve('./', 'text.txt'); // 将文件附加到当前目录中
const fileNormalPath = path.normalize('/utils/..//./test.json') // 将文件路径正规化

console.log('文件的父文件夹', fileNormalPath);
