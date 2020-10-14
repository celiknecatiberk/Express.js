const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    // MongoClient.connect("mongodb://localhost/node-app")                                                                                          //local server
    MongoClient.connect("mongodb+srv://necatiberkcelik:JMJ4cXbV22mQLJ9@cluster0.r092k.mongodb.net/node-app?retryWrites=true&w=majority")            //global server (Atlas)  
        .then(client => {
            console.log('connected');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;                  
        })
}

const getdb = () => {
    if (_db)  {
        return _db;                  
    }
    throw "No Database";
}

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;