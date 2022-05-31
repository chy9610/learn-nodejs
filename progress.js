const Progress = require('progress');
const bar = new Progress('【:bar】:current/:total :rate/bps :percent :etas', {
    total: 10,
    complete: '=',
    incomplete: ' ',
    width: 20,
})

const time = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(time)
    }
}, 700)