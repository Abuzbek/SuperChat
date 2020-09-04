const express = require('express');
const router = express.Router();
const User = require('../model/ChatUsers')
// =============== GET orqali murojat chatga ===============
router.get('/', function (req, res, next) {
  User.find({} , (err,user)=>{
    if(err)
      console.log(err);
    else  
      res.render('chatOn', {
        title: 'AbuzGram',
        user : user
      });
  })
      
  
});

module.exports = router;
