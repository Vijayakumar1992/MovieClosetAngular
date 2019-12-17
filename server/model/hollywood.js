const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var hollywoodSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    genre: {type: String, required: true}
});

module.exports = mongoose.model('Hollywood', hollywoodSchema);