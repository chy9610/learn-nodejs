const { response } = require('express');
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


// 二、http.ClientRequest;
// 当 http.request() 或 http.get() 被调用时，会创建 http.ClientRequest 对象。
// 当响应被接收时，则会使用响应（http.IncomingMessage 实例作为参数）来调用 response 事件。
// ** 返回的数据可以使用以下两种方式读取：
//   1、调用 response.read()
//   2、在 response 事件处理函数中，可以为data事件设置事件监听器，以便可以监听到流入的数据


// 三、http.Server
// 当http.createServer() 创建新服务器的同时，通常会实例化返回此类
// 拥有服务器对象后，就可以访问其方法：
//   1、close() 停止服务器不在接受新的连接
//   2、listen() 启动HTTP服务器并监听连接


// 四、http.ServerResponse
// 由 http.Server 创建，并作为第二个参数传给它触发的 request 事件。
// 通常在代码中用作 res
const server = http.createServer((req, res) => {
    // res 是一个 http.ServerResponse 对象。
    console.log('res ###', res)
})
// 在事件处理器中总是会调用方法 end()，它会响应关闭，当消息完成时则服务器可以将其发送至客户端。必须在每个响应中调用它。
// 以下这些方法用于与 http 消息头进行交互：
getHeaderNames()// 获取已设置的 HTTP 消息头名称的列表
getHeaders()    // 获取已设置的 HTTP 消息头的副本。
setHeader()     // 设置 HTTP 消息头的信值
getHeader()     // 获取已设置的消息头的信息
removeHeader()  // 删除已设置的 HTTP 消息头
hasHeader()     // 如果响应已设置该消息头，则返回 true
headerSent()    // 如果该消息头已发送给客户端，则返回 true
// 在处理消息头之后，可以通过调用 response.writeHead() （该方法接受 statusCode 作为第一个参数，可选的状态消息和消息头对象）将它们发送给客户端。
// 如要在响应正文中发送数据给客户端，则使用 write() 。它会发送缓冲数据至 HTTP 响应流。
// 若消息头还未被发送，则使用 response.writeHead() 先发送消息头，其中包含已被设置好的状态码及消息，也可以通过修改 statusCode 和 statusMessage 的属性值进行编辑。
response.statusCode = 500
response.statusMessage = '内部服务器错误！'


// 五、http.incomingMessage
// 通过以下方式创建：
// 1、http.Server 当监听 request 时。
// 2、http.ClientRequest，当监听 response 时。

// 同样它也可以用来访问响应：
// 1、使用 statusCode 和 statusMessage 方法来访问状态。
// 2、使用 headers 或 rawHeaders 来访问消息头。
// 3、使用 method 方法访问 HTTP 方法。
// 4、使用 httpVersion 访问 HTTP 版本。
// 5、使用 url 访问 URL。
// 6、使用 socket 访问底层的 Socket。

// 因为 http.incomingMessage 实现了可读流接口，因此数据可以使用流访问。

// console.log(status_codes)
