var express = require('express');
var router = express.Router();
var campaignRouter = require('./routers/campaigns');
var charactersRouter = require('./routers/characters');

router.use('/campaigns', campaignRouter);
router.use('/characters', charactersRouter);
router.get('/', function(req, res) {
    res.status(200).send("API is accessible");
});

module.exports = router;