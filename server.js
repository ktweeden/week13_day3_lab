const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());
server.use(express.static('client/public'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if(err){
    console.error(err);
    return;
  }
  const db = client.db('countriesdb');
  console.log('Connected to DB');
  const countriesCollection = db.collection('countries');

  server.listen(3000, function(){
    console.log('Listening on port 3000');
  });

  server.get('/countries', function(req, res) {
    countriesCollection.find().toArray(function(err, result) {
      if(err) {
        console.error(err);
        res.status(500);
        res.send();
      }

      res.json(result);
    });
  });

  server.post('/countries', function (req, res) {
    const newCountry = req.body

    countriesCollection.save(newCountry, function(err, result) {
      if (err) {
        console.error(err);
        res.status(500);
        res.send();
      }
      console.log('Saved!');
      res.status(201);
      console.log(result);
      res.json(result.ops[0]);
    });
  })

});
