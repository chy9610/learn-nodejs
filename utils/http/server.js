const http = require('http');
const os = require('os');
const port = 3000;
const hostname = os.hostname().toString();
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'utf-8');
    res.end('Hello Word!!!')
})

server.listen(port, () => {
    console.log(`服务器运行在http://${hostname}:${port}`)
})