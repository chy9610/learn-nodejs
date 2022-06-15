const os = require('os');

function getNetworkIp() {
    let needHost = ''; // 打开的host
    try {
        // 获得网络接口列表
        let network = os.networkInterfaces();
        console.log("network", os)
        for (let dev in network) {

            let iface = network[dev];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    needHost = alias.address;
                    // console.log("alias.address",alias.address)
                }
                // console.log("alias",alias)
            }
        }
    } catch (e) {
        needHost = 'localhost';
    }
    return needHost;
}
const ip = getNetworkIp()