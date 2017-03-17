var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: String,
    class: String,
    hp: Number
});

module.exports = mongoose.model('Character', CharacterSchema);