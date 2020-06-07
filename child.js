setTimeout(() => {
  process.send('这是 child 传来的消息')
}, 3000)

process.on('message', message => {
  console.log('这里接受父传子的消息')
  console.log(message)
})