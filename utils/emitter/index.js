// 事件模块
const emitter = require('events')

// 当监听器被添加时返回 newListener。
// 当监听器被移除时返回 removeListener.
const door = new emitter()

// emitter.on() 别名, 监听事件
// 添加当事件触发时调用的函数
const addListener = emitter.addListener()

// 触发事件，按照事件被注册的顺序同步地调用每个事件的监听器
const emit = emitter.emit()

// 返回字符串（表示在当前 emitter 对象上注册的事件）数组
const eventNames = door.eventNames();

// 获取可以添加到 emitter 对象的监听器的最大数量（默认为10个，但是可以使用setMaxListeners()进行增加或减少）
const getMaxListeners = door.getMaxListeners();

// 获取作为参数传入的事件监听器的计数
const listenerCount = door.listenerCount('open');

// 获取作为参数传入的事件监听器的数组
const listeners = door.listeners('open')

// 移除特定的事件监听器
// removeListener() 别名
const off = door.off('open');

// 添加事件在注册之后首次被触发的回调函数。该函数只会执行一次
const once = door.once('open');

// 添加监听事件时，监听事件会被放在监听器队列最后，并且最后一个被调用。
// 使用 prependListener 则可以在其他监听器之前添加并调用
const prependListener = door.prependListener();

// 移除所有事件监听特定事件的监听器
const removeAllListeners = door.removeAllListeners()

// 删除特定的监听器，可以通过回调函数保存在变量中（添加时），以便以后更加方便的引用它
const doSomething = () => { }
door.on('open', doSomething)
door.removeListener('open', doSomething)

// 设置可以添加至 door 对象中监听器的最大数量（默认为10个，可以增加或减少）
const setMaxListeners = door.setMaxListeners();
