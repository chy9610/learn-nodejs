
// 引入 http 模块儿
const _http = require('http');

_http.createServer(function (resolve, reponse) {

    // http 头部信息
    // 200 状态码
    // 内容格式：text/plain(纯文本), text/html(html)...
    reponse.writeHead(200, { 'Content-Type': 'text/html'})

    // 发送数据
    reponse.sendDate('<h1>Hello Word Nodejs Http 服务</h1>')


console.log('成功 ##', resolve)
console.log('失败 ##', reponse)

}).listen(8080) // 端口

console.log("端口8080服务 已经创建！")
