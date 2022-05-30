const _events = require('events')

// 事件绑定类
const _eventsEmit = new _events.EventEmitter()

// 绑定点击事件，这里绑定的事件名称指的是一个标识，并不能代表浏览器中事件名称
_eventsEmit.on('click',function() {
    console.log('点击事件触发了 #####')
})
_eventsEmit.emit('click')

// 一个实例中可以 on 绑定多个事件，并通过同一个 emit 触发