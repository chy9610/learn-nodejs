const car = {
    name: '东风',
    color: 'blue'
}

// module.exports = car     // output: { name: '东风', color: 'blue' }
exports.car = car;       // output: { car: { name: '东风', color: 'blue' } }
// exports = car            // output: {}   这种使用方式失败,不能直接将变量赋值给 exports,否则返回空对象