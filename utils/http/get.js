const https = require('http');

const options = {
    hostname: 'nodejs.cn',
    port: 443,
    path: '/todos',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log('状态码', res.statusCode)

    res.on('data', (data) => {
        console.log('数据', data.toString())
        process.stdout.write(data)
    })

    res.on('error', () => {
        console.log('报错', error)
    })
})

req.end();