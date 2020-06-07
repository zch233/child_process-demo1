const child_process = require('child_process')

const { spawn } = child_process

const userInput = '.' // '-al && rm -fm *'
const options = { pwd: 'C:\\', env: { NODE_ENV: 'development' } }
const streams = spawn('ls', ['-al', userInput], options)
streams.stdout.on('data', chunk => {
  console.log(chunk.toString())
})