#!/usr/bin/env node

// 引入 http 模块儿
const _http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

_http.createServer(function (req, res) {

    // http 头部信息
    // 200 状态码
    // 内容格式：text/plain(纯文本), text/html(html)...
    // res.writeHead(200, { 'Content-Type': 'text/html' })

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')

    // 发送数据
    res.sendDate('<h1>Hello Word Nodejs Http 服务</h1>')


    console.log('成功 ##', req)
    console.log('失败 ##', res)

})

_http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
}) // 端口

console.log("端口8080服务 已经创建！")
