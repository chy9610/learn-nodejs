const http = require('http');

// 列举出所有支持 HTTP 的方法
const methods = http.METHODS;

// 列举出所有 HTTP 状态码及其描述
const status_codes = http.STATUS_CODES;

// 指向 Agent 对象的全局实例
// 用于管理 HTTP 客户端连接的持久性和复用，它是 Node.js HTTP 网络的关键组件。
const globalAgent = http.globalAgent()

// 创建服务
// const server = http.createServer();

// 发送 http 请求至服务器
// 同时创建 http.ClientRequest 类的实例
const request = http.request();

// 发送 get 请求
// 自动地设置 HTTP 方法为 GET，并自动地调用 req.end()。
const get = http.get();



/** Class 类 **/

// HTTP 模块提供了 5 个类：
// 1、http.Agent
// 2、http.ClientRequest
// 3、http.Server
// 4、http.ServerResponse
// 5、http.IncomingMessage


// 一、http.Agent
// Node.js 会创建 http.Agent 类的全局实例
// 以管理 HTTP 客户端连接的持久性和复用，这是 Node.js HTTP 网络的关键组成部分。
// 该对象会确保对服务器的每个请求进行排队并且单个 socket 被复用。
// 它还维护一个 socket 池。 出于性能原因，这是关键
console.log(status_codes)
