const _events = require('events')

function compleOperations() {
    // 事件绑定类
    const _eventsEmit = new _events.EventEmitter()

    // nextTick 方法允许你把一个回调函数放在下一次时间轮询列表的头上
    // 这种使用方式要比 setTimeout 更有效率。
    process.nextTick(function () {
        _eventsEmit.emit('click')
    })

    return _eventsEmit;
}

compleOperations().on('success', function () {
    console.log('执行成功 ！！！！')
})
// 一个实例中可以 on 绑定多个事件，并通过同一个 emit 触发