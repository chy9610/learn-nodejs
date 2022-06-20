/**
 * 服务端
 */

// 加载网络模块儿
const net = require('net');
// 创建服务
const server = net.createServer();
// 定义心脏内容，确保和平时发送的内容不会发生冲突
const hearBeat = 'HearBeat';
// 创建请求集合
const clientList = [];
// 获取心跳内容
const getHeader = (num) => {
    return `length: ${(Array(13).fill(0) + num).slice(-13)}`
}
// 建立服务连接时触发
server.on('connection', (client) => {
    // 服务名称：地址 + 端口
    client.name = client.remoteAddress + client.remotePort;
    console.log('客户端建立链接 ###', client.name)

    clientList.push(client);
    let chunks = [];
    let length = 0;
    client.on('data', chunk => {

        const content = chunk.toString();

        if (content === 'HeartBeat') {
            console.log('收到客户端发送的心跳')
        } else {
            if (chunk.indexOf('length:') === 0) {
                length = parseInt(content.slice(7, 20))
                console.log('length: ', length)
                chunks = [chunk.slice(20)]
            } else {
                chunks.push(chunk)
            }

            // 将返回的数据进行数据流合并
            let heap = Buffer.concat(chunks);
            console.log('heap.length', heap.toString());

            // 如果新的数据流长度大于已知数据流长度，则返回收到数据；否则返回解析失败。
            if (heap.length >= length) {
                try {
                    // console.log('收到数据', JSON.parse(heap.toString()))
                    let data = `服务端的数据： ${heap.toString()}`
                    let dataBuff = Buffer.from(JSON.stringify(data));
                    let header = getHeader(dataBuff.length);
                    client.write(header);
                    client.write(dataBuff)
                } catch (err) {
                    console.error('数据解析失败')
                }
            }
        }
    })
    client.on('end', () => {
        console.log('收到客户端客户端 end')
        clientList.splice(clientList.indexOf(client), 1);
    })
    client.on('error', () => {
        console.error('收到客户端的链接报错')
        clientList.splice(clientList.indexOf(client), 1);
    })
    // console.log('client ###', client)
})
// 服务启动
server.listen('9000', () => {
    console.log('服务已启动 ！！！！')
});
// 设置定时器
setInterval(broadCast, 10000)

function broadCast() {
    console.log('broadCase heartBeat', clientList.length)
    let cleanup = [];
    for (let i = 0; i < clientList.length; i++) {
        if (clientList[i].writable) {
            // 重新发起心跳
            // clientList[i].write(hearBeat)
        } else {
            console.error('一个无效的客户端')
            // 将此连接放入待处理的请求池中
            cleanup.push(clientList[i]);
            // 销毁流并关闭连接
            clientList[i].destroy();
        }
    }

    for (let i = 0; i < cleanup.length; i++) {
        console.log('删除无效的客户端');
        clientList.splice(clientList.indexOf(cleanup[i]), 1)
    }
}