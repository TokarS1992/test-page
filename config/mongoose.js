const mongoose = require('mongoose');
const config = require('./config');

const db = mongoose.createConnection(config.url);

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;