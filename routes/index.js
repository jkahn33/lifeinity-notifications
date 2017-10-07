var express = require('express');
var router = express.Router();
var pg = require('pg');
// var pool = new Pool();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addDriver', function(req, res){
   console.log("back in the post");
   // pg.connect(process.env.DATABASE_URL, function(err, client, done){
   //    if(err){
   //       return console.error("error adding to driver pool", err);
   //    }
   //    client.query('INSERT INTO drivers(name, phone) VALUES($1, $2)',
   //       [req.body.name, req.body.phone]);
   //    done();
   //    console.log("Successfully added: " + req.body.name + ":" + req.body.phone);
   //    res.redirect('/thankyou');
   // });
   res.redirect('/');
});
router.post('/addUser', function(req, res){
   pg.connect(process.env.DATABASE_URL, function(err, client, done){
      if(err){
         return console.error("error adding to user pool", err);
      }
      client.query('INSERT INTO users(name, phone) VALUES($1, $2)',
         [req.body.name, req.body.phone]);
      done();
      res.redirect('/thankyou');
   });
});
router.get('/thankyou', function(req, res){
   res.render('thankyou');
});
module.exports = router;
