# Nodejs

> nodejs 本身就是一个单进程、单线程的应用程序，由于 V8 引擎提供了异步执行回调的接口。它通过这些接口处理大的并发请求，且性能很高

## 基础

```javascript
learn node, up up up!!!

http readFile  event buffer
```

## 文件系统模块

> 关于 fs 模块的特殊之处是，所有的方法默认情况下都是异步的，但是通过在前面加上 Sync 也可以同步地工作。例如：

```javascript
const fs = require("fs");

// 异步调用，需要与回调函数一同使用，否则会出现报错
fs.rename("before.json", "after.json", (err) => {
  if (err) {
    return console.error("异步调用失败", err);
  }
  console.log("异步调用成功");
});

// 同步调用，阻塞进程的执行，直至操作完成
try {
  fs.renameSync("before.json", "after.json");
  console.log("同步调用成功");
} catch (err) {
  console.error("同步调用失败", err);
}
```

- **$\colorbox{grey}{fs.access()}$: 检查文件是否存在,以及 nodejs 是否具有访问权限**

- **fs.appendFile(): 追加数据至文件，如果文件不存在，则创建文件**

- **$\colorbox{grey}{fs.chmod()}$: 更改文件（通过传入的文件名称）的权限。相关方法：$\colorbox{grey}{fs.lchmod()}$、$\colorbox{grey}{fs.fchmod()}$**

- **$\colorbox{grey}{fs.chown()}$: 更改文件（通过传入的文件名称）的所有者和群组。相关方法：$\colorbox{grey}{fs.lchown()}$、$\colorbox{grey}{fs.fchown()}$**

- **$\colorbox{grey}{fs.close()}$: 关闭文件描述符。**

- **$\colorbox{grey}{fs.copyFile()}$：拷贝文件。**

- **$\colorbox{grey}{fs.createReadStream()}$: 创建可读的文件流。**

- **$\colorbox{grey}{fs.createWriteStream()}$: 创建可写的文件流。**

- **$\colorbox{grey}{fs.link()}$：新建指向文件的硬链接。**

- **$\colorbox{grey}{fs.mkdir()}$： 新建文件夹。**

- **$\colorbox{grey}{fs.mkdtemp()}$: 创建临时目录。**

- **$\colorbox{grey}{fs.open()}$: 设置文件模式。**

- **$\colorbox{grey}{fs.readdir()}$： 读取目录的内容。**

- **$\colorbox{grey}{fs.readFile()}$： 读取文件的内容。相关方法：$\colorbox{grey}{fs.read()}$**

- **$\colorbox{grey}{fs.readlink()}$： 读取符号链接的值。**

- **$\colorbox{grey}{fs.realpath()}$： 将相对文件的路径指针（.、..）解析为完整路径。**

- **$\colorbox{grey}{fs.rename()}$： 重命名文件或文件夹。**

- **$\colorbox{grey}{fs.rmdir()}$: 删除文件夹。**

- **$\colorbox{grey}{fs.stats()}$: 返回文件（通过传入的文件名称指定）的状态。相关方法：$\colorbox{grey}{fs.lstats()}$、$\colorbox{grey}{fs.fstats()}$**

- **$\colorbox{grey}{fs.symlink()}$： 新建文件的符号链接。**

- **$\colorbox{grey}{fs.truncate()}$： 将传递的文件名标识文件截断为指定长度。相关方法：$\colorbox{grey}{fs.ftruncate()}$**

- **$\colorbox{grey}{fs.unlink()}$： 删除文件或符号链接。**

- **$\colorbox{grey}{fs.watchFile()}$： 开始监视文件上的更改。相关方法：$\colorbox{grey}{fs.watch()}$**

- **$\colorbox{grey}{fs.unwatchFile()}$： 停止监视文件上的更改。**

- **$\colorbox{grey}{fs.utimes()}$： 更改文件（通过传入的文件名称指定）的时间戳。相关方法：$\colorbox{grey}{fs.futimes()}$**

- **$\colorbox{grey}{fs.writeFile()}$： 将数据写入文件。相关方法：$\colorbox{grey}{fs.write()}$**

## 路径模块

> path 模块提供了许多非常实用的函数来访问文件系统并与文件系统进行交互。该模块提供了 path.sep（作为路径段分隔符，在 Windows 上是 \，在 Linux/macOS 上是 /）和 path.delimiter（作为路径定界符，在 Windows 上是 ;，在 Linux/macOS 上是 :）。

- **$\colorbox{grey}{path.basename()}$: 返回路径的最后一部分。 第二个参数可以过滤掉文件的扩展名。**

  ```javascript
  path.basename("/test/something"); //something
  path.basename("/test/something.txt"); //something.txt
  path.basename("/test/something.txt", ".txt"); //something
  ```

- **$\colorbox{grey}{path.dirname()}$: 返回文件的目录路径。**

  ```javascript
  path.dirname("/test/something"); // /test
  path.dirname("/test/something.txt"); // /test/something
  ```

- **$\colorbox{grey}{path.extname()}$: 返回文件路径中的扩展名。**

  ```javascript
  path.extname("/test/something"); // ''
  path.extname("/test/something.txt"); // txt
  ```

- **$\colorbox{grey}{path.isAbsolute()}$: 是否为绝对路径，返回布尔值。**

  ```javascript
  path.isAbsolute('/test/something') // true
  path.isAbsolute('./test/something') // false
  ```

- **$\colorbox{grey}{path.join()}$: 连接两个或多个部分路径。**

  ```javascript
  const name = 'joe'
  path.join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'
  ```

- **$\colorbox{grey}{path.normalize()}$: 当包含类似 .、.. 或双斜杠等相对的说明符时，计算其实际路径。**

  ```javascript
  path.normalize('/users/joe/..//test.txt') //'/users/test.txt'
  ```

- **$\colorbox{grey}{path.parse()}$: 解析对象的路径组成。**

  ```javascript
  const form = path.parse('/users/test.txt')
  // form结果如下:
  {
    root: '/',
    dir: '/users',
    base: 'test.txt',
    ext: '.txt',
    name: 'test'
  }
  ```

- **$\colorbox{grey}{path.relative()}$: 基于当前项目目录，返回第一个路径至第二个路径的相对路径。**

  ```javascript
  path.relative('/Users/joe', '/Users/joe/test.txt') //'test.txt'
  path.relative('/Users/joe', '/Users/joe/something/test.txt') //'something/test.txt'
  ```

- **$\colorbox{grey}{path.resolve()}$: 获得相对路径的绝对路径。**

  ```javascript
  path.resolve('joe.txt') //'/Users/joe/joe.txt' 如果从主文件夹运行
  // 通过指定第二个参数，resolve 会使用第一个参数作为第二个参数的基准：
  path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' 如果从主文件夹运行
  // 如果第一个参数以斜杠开头，则表示它是绝对路径：
  path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'
  ```
