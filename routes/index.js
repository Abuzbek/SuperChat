var express = require('express');
var router = express.Router();
// ============== malumotlar ombori ulanish  ==============
const ChatUsers = require('../model/ChatUsers')
// ============== malumotlar ombori ulanish  ==============
// ============== rasim images fayiliga yuklash jarayoni   ==============
const upload = require('../middleware/file')
// ============== rasim images fayiliga yuklash jarayoni   ==============

// ============== rasim images fayilidan ochirish jarayoni   ==============

const toDeleteFile = require('../utils/todelete')
// ============== rasim images fayilidan ochirish jarayoni   ==============



/*============== GET home page. ============== */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/*============== GET home page.============== */

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
    // if (user.accountImg) {
    //   toDeleteFile(user.accountImg);
    // }
    console.log(req.file, req.body);
  } catch (error) {
    console.log(error);
  }

});
//  ========= logaut qismi =============

router.get('/logout', (req, res, next) => {
  res.redirect('/')
})

//  ========= logaut qismi =============

module.exports = router;
