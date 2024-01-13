const MyParseServer = require('./ParseServer'); 
const express = require('express');
const http = require('http');

const appId = 'APPLICATION_ID';
const masterKey = 'MASTER_KEY';
const databaseURI = 'mongodb://localhost/test';

console.log(typeof(MyParseServer))
const parseServer = new MyParseServer({
  databaseURI,
  appId,
  masterKey,
  serverURL: 'http://localhost:1337/parse', // Don't forget to configure the correct URL
});

const app = express();

// Serve the Parse API on the /parse URL prefix
app.use('/parse', MyparseServer);

const httpServer = http.createServer(app);
httpServer.listen(1337, function () {
  console.log('parse-server running on http://localhost:1337/parse');
});
