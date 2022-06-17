const EventEmitter = require('events');

const events = new EventEmitter();

events.on('start', (number) => {
    console.log('开始', number)
})

events.emit('start', 24)