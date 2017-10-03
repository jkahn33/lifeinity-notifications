var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addDriver', function(req, res){
   console.log("inside the addDriver class!!!!!!!!!!");
   var MongoClient = mongodb.MongoClient;
   var url = 'mongodb://localhost:27017/clients';

   MongoClient.connect(url, function(err, db){
      if(err){
         console.log("Unable to connect to server", err);
      }
      else{
         console.log("Connected to db server");

         var collection = db.collection('drivers');
         var driver1 = {name: req.body.name,
                         phone: req.body.phone};
         collection.insert([driver1], function(err, result){
            if(err){
               console.log("error");
            }
            else{
               console.log("SUCCESS DRIVER!!!!");
               // res.redirect("thelist");
            }
            db.close();
         });
      }
   });
});
router.post('/addUser', function(req, res){
   console.log("inside the addDriver class!!!!!!!!!!");
   var MongoClient = mongodb.MongoClient;
   var url = 'mongodb://localhost:27017/clients';

   MongoClient.connect(url, function(err, db){
      if(err){
         console.log("Unable to connect to server", err);
      }
      else{
         console.log("Connected to db server");

         var collection = db.collection('users');
         var user1 = {name: req.body.name,
                         phone: req.body.phone};
         collection.insert([user1], function(err, result){
            if(err){
               console.log("error");
            }
            else{
               console.log("SUCCESS USER!!!!");
               // res.redirect("thelist");
            }
            db.close();
         });
      }
   });
});

module.exports = router;
