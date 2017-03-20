var campaignRouter = require('express').Router();
var Campaign = require('../models/campaign');


// Get Functions

// Get all
campaignRouter.get('/', function (req, res) {
    Campaign.find()
        .populate('characters')
        .exec(function (err, campaigns) {
            err ? res.status(500).send(err) : res.json(campaigns);
        });
});

// Get one
campaignRouter.get('/:campaignId', function (req, res) {
    Campaign.findById(req.params.campaignId)
        .populate('characters')
        .exec(function (err, campaign) {
            err ? res.status(500).send(err) : res.json(campaign);
        });
});


// Post Functions

// Create new campaign
campaignRouter.post('/', function (req, res) {
    var campaign = new Campaign(req.body);
    campaign.save(function (err, savedCampaign) {
        err ? res.status(500).send(err) : res.json(savedCampaign);
    });
});


// Put Functions

// Edit existing campaign
campaignRouter.put('/:campaignId', function (req, res) {
    Campaign.findById(req.body._id, function (findErr, campaign) {
        if (findErr) {
            res.status(500).send(findErr);
        } else {
            Object.keys(campaign._doc).forEach(function (key) {
                if (key !== "_id" && key !== "__v" && campaign[key]) {
                    campaign[key] = req.body[key];
                }
            });

            campaign.save(function (saveErr, savedCampaign) {
                saveErr ? res.status(500).send(saveErr) : res.json(savedCampaign);
            });
        }
    });
});


// Delete Functions

// Delete campaign
campaignRouter.delete('/:campaignId', function (req, res) {
    Campaign.remove({ _id: req.params.campaignId }, function (err, campaign) {
        err ? res.status(500).send(err) : res.json({ message: 'Campaign deleted' });
    });
});

module.exports = campaignRouter;