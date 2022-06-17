// import fetch from "node-fetch";
const path = require('path')
// const fetch = require("node-fetch");
console.log('fetch ####', path.resolve(__dirname))

const status = response => {
    if (response.status >= 200 && response.status <= 300) {
        return Promise.resolve(response)
    }

    return Promise.reject(new Error(response.statusTexts))
}

const json = response => response.json()

// fetch('./utils/promise/test.json')
//     .then(status)
//     .then(json)
//     .then(data => {
//         data.text()
//         console.log('获取data数据 ####', data)
//     })
//     .catch(error => {
//         console.error('加载文件失败 ###', error)
//     })