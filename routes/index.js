var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'gallery' });
});
router.get('/programmes', function(req, res, next) {
  res.render('programmes', { title: 'events' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
