/**
 * 客户端
 */
const net = require('net');
// 定义客户端数据
const client = new net.Socket();
// 定义心跳
const hearBeat = 'HeartBeat';
// 设置请求头
const getHeader = (num) => {
    return `length: ${(Array(13).fill(0) + num).slice(-13)}`
}
client.connect('9000', '127.0.0.1', function () { });
// 定义数据集合
let chunks = [];
// 定义长度
let length = 0;
// 接收到数据时触发
client.on('data', (chunk) => {
    let content = chunk.toString()
    console.log('客户端内容 ###', content)
    console.log('客户端内容长度 ###', content.length);

    if (content === 'HeartBeat') {
        console.log('收到服务端发送的一个心跳包')
    } else {
        if (content.indexOf('length:') === 0) {
            length = parseInt(content.substring(7, 20))
            console.log('length', length)
            chunks = [chunk.slice(20)];
        } else {
            chunks.push(chunk)
        }

        // 将返回的数据进行数据流合并
        let heap = Buffer.concat(chunks);
        console.log('heap.length', heap.length);

        // 如果新的数据流长度大于已知数据流长度，则返回收到数据；否则返回解析失败。
        if (heap.length >= length) {
            try {
                console.log('收到数据', JSON.parse(heap.toString()))
            } catch (err) {
                console.error('数据解析失败', err)
            }
        }
    }
})

// 定时向服务端发送数据
setInterval(() => {
    // 根据时间创建数据
    let data = new Date().toUTCString();
    // 数据转换数据流
    let dataBuff = Buffer.from(JSON.stringify(data));
    // 设置请求头
    let header = getHeader(dataBuff.length);
    // 写入请求头
    client.write(header);
    // 写入数据流
    client.write(dataBuff);
}, 5000);

// 定时向服务端发送心跳
setInterval(() => {
    client.write(hearBeat)
}, 10000)
