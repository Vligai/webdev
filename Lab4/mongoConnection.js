/*
Vladislav Ligai
Lab 4
taken from lecture 4 code
https://github.com/Stevens-CS546/CS-546-WS-Summer-1/blob/master/Lecture%20Code/lecture_04/mongoConnection.js
*/

const MongoClient = require("mongodb").MongoClient;
const settings = require("./settings");
const mongoConfig = settings.mongoConfig;

let fullMongoUrl = `${mongoConfig.serverUrl}${mongoConfig.database}`;
let _connection = undefined;

let connectDb = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(fullMongoUrl);
  }

  return _connection;
};

module.exports = connectDb;