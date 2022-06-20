const os = require('os');

// 返回标识底层架构的字符串，例如 arm、x64、arm64。
const arch = os.arch();

// 返回关于系统上可用的 CPU 的信息。
const cpus = os.cpus();

// 根据是使用大端序或小端序编译 Node.js，返回 BE 或 LE。
const endianness = os.endianness()

// 返回代表系统中可用内存的字节数。
const freemem = os.freemem()

// 返回当前用户的主目录路径
const homedir = os.homedir();

// 返回主机名
const hostName = os.hostname()

// 返回操作系统对平均负载的计算。
// 仅在linux 或 nginx 系统中有用
const loadavg = os.loadavg();

// 返回系统上可用的网络接口的详细信息
const networkInterfaces = os.networkInterfaces()

// 返回nodejs编译的平台
const platform = os.platform()

// 返回标识操作系统版本号的字符串
const release = os.release()

// 返回指定的临时文件夹路径
const tmpdir = os.tmpdir();

// 返回系统中可使用总内存的字节数
const totalmem = os.totalmem();

// 返回标识操作系统
// Linux
// macOS 上为Darwin
// Windows 上为 Windows_NT
const systemType = os.type();

// 返回至上次重启以来计算机持续运行的秒数
const uptime = `${Math.abs(os.uptime() / 60)} Mins`

// 返回用户信息对象
// 包含当前 username、uid、gid、shell 和 homedir 的对象。
const userInfo = os.userInfo();

console.log(userInfo)