var characterRouter = require('express').Router();
var Character = require('../models/character');


// Get
characterRouter.get('/', function(req, res) {
    Character.find(function (err, characters) {
        if (err) res.status(500).send(err);

        res.json(characters);
    });
});


// Post
characterRouter.post('/', function(req, res) {
    var character = new Character();
    character.name = req.body.name;
    character.class = req.body.class;
    character.hp = req.body.hp;

    character.save(function(err) {
        if (err) res.status(500).send(err);

        res.status(200).json({message: 'Character created'});
    })
});


// Post
characterRouter.put('/:characterId', function(req, res) {
});

module.exports = characterRouter;