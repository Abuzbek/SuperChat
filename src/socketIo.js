const socket = require('socket.io')
const moment = require('moment')
const io = socket()
//  ======= foydalanuvchi qoshilganda ==================
io.sockets.on('connection' , (socket)=>{

    console.log('foydalanuvchi boglandi');
    //  ======= foydalanuvchi boglanganda ==================

    socket.emit('message' , sendMessage( 'AbuzGram','hush kelibsiz User','user.png'))
    //  ======= foydalanuvchi boglanganda ==================
    //  ======= foydalanuvchi qolganlarga korinuvchi qismi ==================

    socket.broadcast.emit('message' , sendMessage( 'AbuzGram','yangi user qoshildi','user.png'))
    //  ======= foydalanuvchi qolganlarga korinuvchi qismi ==================

    //  ======= foydalanuvchi chiqib ketganda ==================

    socket.on('disconnect' , ()=>{
        socket.broadcast.emit('message' , sendMessage( 'AbuzGram','user honani tark etdi!!!','user.png'))
    })
    //  ======= foydalanuvchi boglanganda ==================
    //  ======= habar yuborilsa  ==================

    socket.on('msg' , (data)=>{
        console.log(data);
        io.emit('message' ,sendMessage( 'AbuzGram',data,'user.png') )
    })
    //  ======= habar yuborilsa  ==================

})

//  =========== moment js ulanish  ==============
const sendMessage = (username,msg , img)=>{
    return{
        img,
        username,
        msg,
        time:moment().format('h:mm a')
    }
}
//  =========== moment js ulanish  ==============



module.exports = io


