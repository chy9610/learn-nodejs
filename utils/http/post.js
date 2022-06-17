const https = require('http');

const data = JSON.stringify({
    todo: '做点事情'
});

const options = {
    hostname: 'nodejs.cn',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length
    }
}

const req = https.request(options, res => {
    console.log(`状态码: ${res.statusCode}`)

    res.on('data', (data) => {
        process.stdout.write(data)
        console.log('数据 ###', data.toString())
    })
    res.on('error', err => {
        console.log('报错信息 ####', err)
    })
})

req.write(data);

req.end();