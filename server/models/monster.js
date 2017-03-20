var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MonsterSchema = new Schema({
    name: String,
    ac: Number,
    hp: Number,
    edition: Number,
    attributes: {
    	str: Number,
    	con: Number,
    	dex: Number,
    	int: Number,
    	wis: Number,
    	cha: Number
    }
});

module.exports = mongoose.model('Monster', MonsterSchema);