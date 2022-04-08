var express = require('express');
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connection_ = new MongoClient(process.env.DB_HOST_URL);

var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    connection_.connect().then( async(feedback) => {
       results = await connection_.db(process.env.DBNAME).collection("users").findOne({ username: 'james'});

       if(results){
            res.render('contact-us', { 
                title: 'Express',  
                username: results.username
            });
       }

    })

  
});

module.exports = router;
