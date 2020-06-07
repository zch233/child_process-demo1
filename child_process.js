const child_process = require('child_process')

const { execFile } = child_process

const userInput = '-al && pwd' // '-al && rm -fm *'
const options = { pwd: 'C:\\', env: { NODE_ENV: 'development' } }
execFile('ls', ['-al', userInput], options, (error, stdout, stderr) => {
  console.log(error)
  console.log(stdout)
  console.log(stderr)
})
