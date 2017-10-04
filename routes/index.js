var express = require('express');
var router = express.Router();
var Pool = require('pg-pool');
var pool = new Pool({database:'clientsdb',
                        user:'root',
                        password:'abacus',
                        port:5432});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addDriver', function(req, res){
   console.log("inside the addDriver class!!!!!!!!!!");
   pool.connect(function(err, client, done){
      if(err){
         return console.error("error adding to driver pool", err);
      }
      client.query('INSERT INTO drivers(name, phone) VALUES($1, $2)',
         [req.body.name, req.body.phone]);
      done();
      res.redirect('/');
   });
});
router.post('/addUser', function(req, res){
   console.log("inside the addDriver class!!!!!!!!!!");
   pool.connect(function(err, client, done){
      if(err){
         return console.error("error adding to users pool", err);
      }
      client.query('INSERT INTO users(name, phone) VALUES($1, $2)',
         [req.body.name, req.body.phone]);
      done();
      res.redirect('/');
   });
});

module.exports = router;
