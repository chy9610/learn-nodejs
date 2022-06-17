const fs = require('fs')

const getFile = (fileName) => {
    return new Promise((resolve, rejects) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                rejects(err)
                return
            }

            resolve(data)
        })
    })
}

getFile('../../json/test.json')
    .then(data => { console.log(data.toString()) })
    .catch(err => { console.log(err) })

// export { getFile }