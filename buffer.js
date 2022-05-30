const fs = require('fs');

const mine = 'image/png'; // 图片类型
const encoding = 'base64'; // 图片编码格式

// 文件生成 data URI 
const base64Data = fs.readFileSync(`${__dirname}/monkey.png`).toString(encoding);
const createUri = `data:${mine};${encoding},${base64Data}`
console.log(createUri); 


// data URI 转文件
const uri = `data:images/png;base64,asdlkjngoasnm....`;
const uriBase64Data = uri.split(',')[1];
const buff = Buffer(uriBase64Data, encoding);
fs.writeFileSync(`${__dirname}/doubleMonkey.png`, buff)