const express = require('express');
const { Server } = require('http');
const app = express();

app.get('/', (req, res) => {
    res.send("<h2>Hi Express</h2>")
})

const server = app.listen(8081, () => {
    console.log("Server Readly")
})

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})

//  什么是信号？信号是一个 POSIX 互通系统：发送给进程的通知，以便通知它发生的事件。
// SIGKILL 是告诉进程立即终止的信号，理想情况下会像 process.exit() 一样。
// SIGTERM 是告诉进程正常终止的信号。 这是从 upstart 或 supervisord 等进程管理器发出的信号。

// 如果你知道进程的 PID ，那么你可以从服务的内部发起一条指令终止其进程。
// 指令如下：process.kill(process.pid, 'SIGTERM')