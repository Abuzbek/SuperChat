var express = require('express');
var router = express.Router();
const ChatUsers = require('../model/ChatUsers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});
router.post('/', function(req, res, next) {
  const promis = new ChatUsers(req.body)
  promis.save((err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        res.redirect('/chat')
    }
})
});
router.get('/chat', function(req, res, next) {
  ChatUsers.find({} , (err,user)=>{
    if (err) {
      console.log(err + 'javob yoq');
   }
   else {
     res.render('chatOn', {
        title: 'Express' ,
        user:user
      });
   }
})
});
router.get('/chat/:id', function(req, res, next) {
  ChatUsers.find({} , (err,user)=>{
    if (err) {
      console.log(err + 'javob yoq');
   }
   else {
     res.render('chat', {
        title: 'Express' ,
        user:user
      });
   }
})
});
router.get('/logout', (req, res, next) => {
  res.redirect('/')
})

module.exports = router;
