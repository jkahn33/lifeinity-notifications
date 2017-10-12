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
  res.render('index', { title: 'Express' });
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 });

router.post('/addDriver', function(req, res){
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
});
router.post('/addUser', function(req, res){
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
});
router.get('/thankyou', function(req, res){
   res.render('thankyou');
});
module.exports = router;
