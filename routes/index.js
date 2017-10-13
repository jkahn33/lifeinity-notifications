var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var pg = require('pg');
var config = {
   "define": {
       "createdAt": "createdat",
       "updatedAt": "updatedat"
     }
};
var sequelize = new Sequelize(process.env.DATABASE_URL, config);
//var sequelize = new Sequelize('postgres://root:abacus@localhost:5432/clientsdb');
// var pool = new Pool();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
 });

router.post('/addDriver', function(req, res){
   if(isNaN(parseInt(req.body.phone)))
   {
      console.log("nan");
      res.render('bad_phone_driver');
   }
   else{
      if(req.body.phone.length > 11)
      {
         console.log("greater than 11");
         res.render('bad_phone_driver');
      }
      if(req.body.phone.length === 11)
      {
         console.log("equals 11");
         if(req.body.phone.charAt(0) !== '1')
         {
            console.log("does not equal 1");
            res.render('bad_phone_driver');
         }
      }
      if(req.body.length < 10)
      {
         console.log("less than 10");
         res.render('bad_phone_driver')
      }
      else{
         console.log("ok");
         var driver = sequelize.define('drivers', {
           name: {
             type: Sequelize.STRING
           },
           phone: {
             type: Sequelize.STRING
           }
         });
         driver.sync().then(() => {
           return driver.create({
             name: req.body.name,
             phone: req.body.phone
           });
         });
         res.redirect('/thankyou');
      }
   }
});
router.post('/addUser', function(req, res){
   if(isNaN(parseInt(req.body.phone)))
   {
      res.render('bad_phone_user');
   }
   else{
      if(req.body.phone.length > 11)
      {
         res.render('bad_phone_user');
      }
      else if(req.body.phone.length === 11)
      {
         if(req.body.phone.charAt(0) !== '1')
         {
            res.render('bad_phone_user');
         }
      }
      else if(req.body.length < 10)
      {
         res.render('bad_phone_user')
      }
      else{
         var user = sequelize.define('users', {
           name: {
             type: Sequelize.STRING
           },
           phone: {
             type: Sequelize.STRING
           }
         });
         user.sync().then(() => {
           return user.create({
             name: req.body.name,
             phone: req.body.phone
           });
         });
         res.redirect('/thankyou');
      }
   }
});
router.get('/thankyou', function(req, res){
   res.render('thankyou');
});
module.exports = router;
