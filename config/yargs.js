const port ={alias:'p' ,default: 10}
const argv = require('yargs').command("port","choose the app port",port).help().argv;
module.exports={
    argv
}