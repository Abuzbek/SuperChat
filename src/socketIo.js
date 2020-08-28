const socket = require('socket.io')
const moment = require('moment')
const io = socket()
const socketApi = {}
socketApi.io = io
const ChatUser = require('../model/ChatUsers')
io.sockets.on('connection' , (socket)=>{
    console.log('foydalanuvchi boglandi');
    socket.emit('message' , sendMessage( 'AbuzGram','hush kelibsiz User','user.png'))
    socket.broadcast.emit('message' , sendMessage( 'AbuzGram','yangi user qoshildi','user.png'))
    socket.on('disconnect' , ()=>{
        socket.broadcast.emit('message' , sendMessage( 'AbuzGram','user honani tark etdi!!!','user.png'))
    })
    socket.on('msg' , (data)=>{
        console.log(data);
        io.emit('message' ,sendMessage( 'AbuzGram',data,'user.png') )
    })
})


const sendMessage = (username,msg , img)=>{
    return{
        img,
        username,
        msg,
        time:moment().format('h:mm a')
    }
}



module.exports = socketApi.io


