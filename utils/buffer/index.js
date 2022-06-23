// Buffer 模块儿

// 什么是Buffer?
// Buffer 是内存区域。它表示在 V8 JavaScript 引擎外部分配的固定大小的内存块（无法调整大小）；
// 可以将 Buffer 视为整数数组，每一个整数代表一个数据字节；
// 它由 Nodejs 中的 Buffer 类实现。

// 为什么需要 BUffer ?
// Buffer 被引用以帮助开发者处理二进制数据，在此生态系统中传统上只处理字符串而不是二进制数据。
// Buffer 与流紧密相连。当流处理器接受数据的速度快于消化的速度时，则会将数据放入 Buffer 中。

// 如何创建 Buffer ?
// 使用 Buffer.from()、Buffer.alloc()、Buffer.allocUnsafe() 方法创建 Buffer
const buffer = Buffer.from('Hey!')

// 我们可以使用 toString() 来访问打印 Buffer 的全部数据。
// 注：如果使用数字(设置其大小)初始化Buffer，则可以访问到包含随机数据的已预初始化的内存（而不是空的Buffer）
const bufContent = buffer.toString();


// Buffer.form() 方法的参数类型都有哪些？
// 1、Buffer.from(array)
// 2、Buffer.from(array[, byteOffset[, length]])
// 3、Buffer.from(buffer)
// 4、Buffer.from(string[,encoding])

// 也可以只初始化 Buffer (传大小), 以下两种都可以
const buf = Buffer.alloc(1024)
const buf1 = Buffer.allocUnsafe(1024)
// 虽然 alloc 和 allocUnsafe 均分配指定大小的 Buffer (以字节为单位)；
// 但是 alloc 创建的 Buffer 会被使用零初始化，而 allocUnsafe 创建的 Buffer 不会被初始化。
// 这意味着尽管 allocUnsafe 比 alloc 快的多，但是分配的内存片段可能包含可能敏感的旧数据。
// 当 Buffer 内存读取时，如果内存中存在较旧的数据，则可以被访问或泄露。
// 这就是真正使用 allocUnsafe 不安全的原因，在使用它时需要格外小心。


// 获取 Buffer 的长度
const len = buffer.length;
// 迭代 Buffer 的内容
for (let item of buffer) {
    // console.log('Buffer 数组内容', item)
}
// 更换 Buffer 的内容
// 可以使用 write() 方法将整个字符串写入 Buffer；
const bufWrite = Buffer.alloc(4);
bufWrite.write('Hey!')
// 也可以通过遍历数组将其中某一项的数据改变，从而达到修改 Buffer 内容的效果。
bufWrite[1] = 100

// 复制 Buffer
// 使用 copy() 方法可以复制 Buffer 
const bufCopy = Buffer.from('key!');
const bufAlloc = Buffer.alloc(4); // 分配 4 个字节
bufCopy.copy(bufAlloc)
// 默认情况下会将整个 Buffer 完整复制下来; 另外的3个参数可以定制开始位置、结束位置、以及新的 Buffer 长度.
const bufAlloc2 = Buffer.alloc(2); // 分配 2 个字节
bufCopy.copy(bufAlloc2, 0, 0, 2)

// 切片 Buffer 
// 如果要创建 Buffer 的局部视图，则可以创建切片。
// 切片不是副本：原先 Buffer 仍然是数据的真正来源。如果原先的数据改变了，则切片数据也会改变。
// 使用 slice() 创建它；第一个参数是起始位置，可以指定第二参数作为结束位置：
const bufSlice = Buffer.from('hello!');
console.log(bufSlice.slice(0).toString())


// console.log(bufAlloc2.toString())