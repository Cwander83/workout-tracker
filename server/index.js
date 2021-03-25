const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const api = require('./routes/api.routes.js')

mongoose.connect('mongodb://localhost/27017', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected')
});

app.use(express.static(DIST_DIR));

app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.get('/', (req, res) => {
	res.sendFile(HTML_FILE);
});
app.listen(port, function () {
	console.log('App listening on port: ' + port);
});
