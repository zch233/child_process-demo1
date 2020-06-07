const child_process = require('child_process')

const child = child_process.fork('./child.js')

child.on('message', message => {
  console.log(message)
})

// 或父给子发信息
// child.send({ hello: 'world' })