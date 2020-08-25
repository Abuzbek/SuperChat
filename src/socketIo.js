const socket = require('socket.io')
const io = socket()
io.sockets.on('connection' , (socket)=>{
    console.log('foydalanuvchi boglandi');
})
module.exports = io


