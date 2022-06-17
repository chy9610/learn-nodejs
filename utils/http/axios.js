const axios = require('axios');

const path = 'http://nodejs.cn/todos';
axios.post(path, {
    todos: '做点事情'
})
    .then(res => {
        console.log('状态码 ####', res.status)
        console.log('数据 ####', res)
    })
    .catch(error => {
        console.log('接口报错', error)
    })