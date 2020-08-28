var express = require('express');
var router = express.Router();
const ChatUsers = require('../model/ChatUsers')
const upload = require('../middleware/file')
const toDeleteFile = require('../utils/todelete')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', upload.single('accountImg'), (req, res, next) => {
  try {
    let user = {
      name:req.body.name
    }
    const promis = new ChatUsers({
      name:req.body.name,
      select:req.body.select,
      accountImg:req.file.filename
    })
    promis.save((err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        res.redirect('/chat')
      }
    })
    if (user.accountImg) {
      toDeleteFile(user.accountImg);
    }
    console.log(req.file, req.body);
  } catch (error) {
    console.log(error);
  }

});

router.get('/logout', (req, res, next) => {
  res.redirect('/')
})
module.exports = router;
