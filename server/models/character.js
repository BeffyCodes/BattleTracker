var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: String,
    playerName: String,
    race: String,
    class: String,
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

/*CharacterSchema.pre('remove', function (next) {
	var characterId = this._id;
	console.log(characterId);
	this.model('Campaign').find({
		characters: { $in: [characterId] }
	}).then(function (err, campaign) {
		console.log(campaign._doc._id);
	});
});*/

module.exports = mongoose.model('Character', CharacterSchema);