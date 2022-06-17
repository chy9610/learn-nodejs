const fs = require('fs');
const fileAddress = './test.json';
const content = '大黄蜂';

fs.appendFile(fileAddress, content, (err) => {
    if (err) {
        console.error('追加写入信息失败', err)
        return
    }

    console.log('追加写入信息成功')
})


try {
    const fileAppend = fs.appendFileSync(fileAddress, content)
    console.log('追加写入信息成功', fileAppend)
} catch (err) {
    console.error('追加写入信息失败', err)
}
