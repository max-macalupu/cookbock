var express = require('express');
var apps = express();
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://mongo-db:27017/';

//Define request response in root URL (/)
apps.get('/', function (req, res) {
    res.send('Hello World Max, testing! Inside docker');
});

//Launch listening server on port 8081
apps.listen(8081, function () {
  console.log('apps listening on port 8081!');
});

//Configuration to create database
mongo.connect(url, function(error, db) {
  if (error) throw error;
  console.log("Database was created.");

  var _db = db.db("mydb");
  _db.createCollection("receipt", function(err, resp) {
    if (err) throw err;
    console.log("Collection was created.");
    db.close();
  });
});
