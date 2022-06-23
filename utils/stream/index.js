// 什么是流？
// 流 是 Nodejs 应用程序中提供动力的基本概念之一。
// 它们是一种以高效的方式处理读/写文件、网络通信、或任何类型的端到端的信息交换。
// 流 不是 Nodejs 特有的概念。它们是几十年前在Unix系统中引入的，程序中可以通过管道运算符（|）对流进行相互交互。
// 在传统的方式中，我们通常会将文件头到尾读取到内存中，然后再进行处理。
// 使用 流 的方式，可以分段的读取并处理。（无需全部保存在内存中）。
// Nodejs 中 Stream 模块提供了所有流的API基础。所有的流都是 EventEmit 的实例。


// 流 基本上提供了两个优点：
// 1、内存效率：无需加载大量的数据至内存中处理
// 2、时间效率：在获取数据之后，即可立即开始处理数据；不必等到整个数据有效负载可用才开始。


// 流的示例：
// 典型示例就是从磁盘读取文件
// 使用 Node.js 的 fs 模块，可以读取文件，并在与 HTTP 服务器建立新连接时通过 HTTP 提供文件：
const fs = require('fs');
const http = require('http');
const zlib = require('zlib');
const net = require('net');

const server = http.createServer((req, res) => {
    // fs.readFile(__dirname, '/data/txt', (data) => {
    //     res.send(data)
    // })
    // 如果文件很大，则该操作会花费较多的时间。 以下是使用流编写的相同内容：
    const stream = fs.createReadStream(__dirname + '/data/txt');
    stream.pipe(res);
})
server.listen(9000, () => {
    console.log('服务启动成功！！')
})

// pipe()： 返回值是目标流，该方法可以链式调用
// 它获取来源流，并将其通过管道传输到目标流。

// 流驱动的 Nodejs API
// 由于它们的优点，许多 Nodejs 核心模块提供了原生的流处理能力，最值得注意的有以下这些：
process.stdin()     // 返回连接到 stdin 的流。
process.stdout()    // 返回连接到 stdout 的流。
process.stderr()    // 返回连接到 stderr 的流。
fs.createReadStream()   // 创建文件的可读流。
fs.createWriteStream()  // 创建文件的可写流。
net.connect();      //启动基于流的连接
http.request();     // 返回 http.ClientRequest 类的实例，该实例是可写流。
zlib.createGzip();      // 使用 gzip (压缩算法)将数据压缩到流中。
zlib.createGunzip();    // 解压 gzip 流。
zlib.createDeflate();   // 使用 deflate (压缩算法) 将数据压缩到流中。
zlib.createInflate();   // 解压 deflate 流。 

// 不同类型的流,分为四类：
// 1、Readable: 可以通过管道读取，但不能通过管道写入流（可以接收数据，但不能向其发送数据）。
//              当推送数据到可读流中时，会对其进行缓冲，直到使用者开始读取数据为止
// 2、Writable: 可以通过管道写入，但是不能通过管道读取的流（可以发送数据，但不能从中接收数据）。
// 3、Duplex: 可以通过管道读取和写入的流。
// 4、Transform: 类似于双工流、但其输出是输入的转换的转换流。


// 如何创建可读流?
// 从 Stream 模块获取可读流，对其进行初始化并实现 readable._read() 方法。
// 首先创建流对象
const Stream = require('stream');
const { endsWith } = require('lodash');
let readableStream = new Stream.Readable();
// 实现 _read:
readableStream._read = () => { };
// 也可以使用 read 选项实现 _read:
let readableStream = new Stream.Readable({
    read() { }
})
// 流已初始化完成，可以向其发送数据
readableStream.push('hi');
readableStream.push('surprise');


// 如何创建可写流
// 如要创建可写流，则需要继承基本的 Writable 对象，并实现其 _write 方法
// 首先创建流对象：
const writableStream = new Stream.Writable();
// 同样实现 _write :
writableStream._write = (chunk, encoding, next) => {
    // 所要写入的数据
    console.log(chunk.toString())
    // 如果 chunk 为字符串，则为编码。 默认值: 'utf8'
    console.log(encoding);
    // 回调函数
    next()
}
// 可以通过以下方式传输可读流
process.stdin.pipe(writableStream);


// 从可读流中获取数据
// 1、可写流,以上写法的总结。
// 创建可读流之后，将两种 _read 和 _write 两种方法实现之后，再使用相关传输方式，传输数据即可。（目前不太理解此做法！！）
// 2、使用 readable 事件直接地消费可读流
readableStream.on('readable', () => {
    console.log(readableStream.read())
})

// 如何发送数据至可写流？
// 1、使用流数据中 write() 直接写入。

// 使用信号通知已结束写入的可写流
// 1、使用 end() 方法。