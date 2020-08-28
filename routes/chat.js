const express = require('express');
const router = express.Router();
const ChatUsers = require('../model/ChatUsers')
const upload = require('../middleware/file.js')
const toDeleteFile = require('../utils/toDelete.js');


router.get('/', function (req, res, next) {
  ChatUsers.find({}, (err, user) => {
    if (err) {
      console.log(err + 'javob yoq');
    }
    else {
      res.render('chatOn', {
        title: 'Express',
        user: user
      });
    }
  })
});
router.get('/:id', (req, res) => {
  ChatUsers.findById(req.params.id, (err, user) => {
    res.render('accountEdit', {
      user: user,
      title: 'Update Account',
    })
  })
})
// Music edit page ById with post method
router.post('/:id', upload.single('accountImg'), async (req, res) => {
  try {
      let user = {
        name:req.body.name
      }
      const account = await ChatUsers.findById(req.params.id)
      console.log(account.accountImg);
      if (account.accountImg) {
          toDeleteFile(account.accountImg);
      }
      console.log(req.file);
      if (req.file) {
          user.accountImg = '/images/' + req.file.filename
      }
      const query = { _id: req.params.id }
      ChatUsers.updateOne(query, user, (err) => {
          if (err) console.log(err);
          else {
              res.redirect('/chat');
          }
      })
  } catch (error) {
      console.log(error);
  }

})
module.exports = router;
