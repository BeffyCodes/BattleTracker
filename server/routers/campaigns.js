var campaignRouter = require('express').Router();
var Campaign = require('../models/campaign');


// Get Functions

// Get All
campaignRouter.get('/', function (req, res) {
    Campaign.find()
        .populate('characters')
        .exec(function (err, campaigns) {
            if (err) res.status(500).send(err);

            res.json(campaigns);
        });
});

// Get One
campaignRouter.get('/:campaignId', function (req, res) {
    Campaign.findById(req.params.campaignId)
        .populate('characters')
        .exec(function (err, campaign) {
            if (err) res.status(500).send(err);

            res.json(campaign);
        });
});


// Post Functions
campaignRouter.post('/', function (req, res) {
    var campaign = new Campaign();
    campaign.name = req.body.name;
    campaign.characters = [];

    campaign.save(function (err) {
        if (err) res.status(500).send(err);

        res.status(200).json({ message: 'Campaign created' });
    })
});


// Put Functions
campaignRouter.put('/addCharacters', function (req, res) {
    var campaignId = req.body.campaignId;
    var characters = req.body.characters;

    Campaign.findById(campaignId, function (err, campaign) {
        if (err) res.status(500).send(err);

        campaign.characters.push.apply(campaign.characters, characters);
        campaign.save(function (err) {
            if (err) res.status(500).send(err);

            res.json({ message: 'Characters added!' });
        });
    });
});

module.exports = campaignRouter;