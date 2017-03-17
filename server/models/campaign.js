var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampaignSchema = new Schema({
    name: String,
    characters: [{type: Schema.Types.ObjectId, ref: 'Character'}]
});

module.exports = mongoose.model('Campaign', CampaignSchema);