// db.sequences.insertOne({ "maxHollywoodId" : 10 })


var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var schema = new Schema({
    maxHollywoodId: { type: String, required: true},
     
});

module.exports = mongoose.model("Sequence", schema);