const { createReadStream } = require('fs')

const stream = createReadStream('./content/big-file.txt', {highWaterMark: 90000, encoding: 'utf8'})

stream.on('data', (res) => {
  console.log(res)
}, 'utf-8')

stream.on('error', (err) => {
  console.log(err)
})