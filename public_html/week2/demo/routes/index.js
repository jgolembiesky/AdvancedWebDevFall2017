var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab Numero Dos', msg:'Playing with the pug' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Lab Numero Dos Form'});
});

router.post('/form', function(req, res, next) {
  res.render('form', { title: req.body.email });
});

module.exports = router;

