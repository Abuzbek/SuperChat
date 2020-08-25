const mongoose= require('mongoose')
const Schema = mongoose.Schema

const ChatUsers = new Schema({
    name:{
        type:String,
        required:true
    },
    select:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('chatUser' , ChatUsers)