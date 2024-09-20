const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/eventsDB');
//name the db you want - eventsdb

module.exports = mongoose.connection;