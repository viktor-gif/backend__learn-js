var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hello test!',
    body: `<div style='font-size: 25px; text-align: center; max-width: 1000px;'>
      <p><b>1. </b>lorem ipsum dolor lorem ipsum dolor 
      lorem ipsum dolor lorem ipsum dolor 
      lorem ipsum dolor lorem ipsum dolor
      lorem ipsum dolorlorem ipsum dolor</p>
      <p><b>2. </b>lorem ipsum dolor lorem ipsum dolor 
      lorem ipsum dolor lorem ipsum dolor 
      lorem ipsum dolor lorem ipsum dolor
      lorem ipsum dolorlorem ipsum dolor</p>
      <p><b>3. </b>lorem ipsum dolor lorem ipsum dolor 
      lorem ipsum dolor lorem ipsum dolor 
      lorem ipsum dolor lorem ipsum dolor
      lorem ipsum dolorlorem ipsum dolor</p></div>`
  });
});

module.exports = router;
