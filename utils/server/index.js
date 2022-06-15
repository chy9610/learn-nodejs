/**
 * Express 是一个在底层使用 http 模块的框架，app.listen() 返回一个 http 实例。 
 * 如果您需要使用 HTTPS 为您的应用程序提供服务，则使用 https.createServer，因为 app.listen 仅使用 http 模块。
 */
const express = require('express');
const app = express();

// 接口定义并返回相关数据
app.get('/', (req, res) => {
    res.send('Hi Boy')
})


// 启动服务
const server = app.listen(8080, () => { console.log('Server Ready') })


// 监听信号事件
// 什么是信号？信号是一个 POSIX 互通系统：发送给进程的通知，以便通知它发生的事件。

// SIGKILL: 立即终止的信号，理想情况下会像 process.exit() 一样
// SIGTERM: 正常终止的信号。 这是从 upstart 或 supervisord 等进程管理器发出的信号。
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('服务关闭~~~ Process terminated')
    })
})


// 终止服务
function closeServer() {
    setTimeout(() => {
        console.log(`This process is pid ${process.pid}`);
        process.kill(process.pid, 'SIGTERM')
    }, 4000)
}


// 获取环境变量
const env = process.env.NODE_ENV // "development"
console.log('环境变量 #####', process.env)