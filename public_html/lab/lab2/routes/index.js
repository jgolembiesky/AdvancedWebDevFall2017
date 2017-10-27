var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab Numero Dos', msg:'Playing with the pug' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Lab II: Electric Boogaloo'});
});

router.post('/form', function(req, res, next) {
  res.render('form', { div_name: req.body.name, 
                       div_email:req.body.email,
                       div_comments: req.body.comments});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Lab 2. Do Do Do'});
});
module.exports = router;

