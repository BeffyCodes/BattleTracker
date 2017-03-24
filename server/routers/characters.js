var characterRouter = require('express').Router();
var Character = require('../models/character');


// Get Functions

// Get all
characterRouter.get('/', function (req, res) {
    Character.find(function (err, characters) {
        err ? res.status(500).send(err) : res.json(characters);
    });
});

// Get one
characterRouter.get('/:characterId', function (req, res) {
    Character.findById(req.params.characterId, function (err, character) {
        err ? res.status(500).send(err) : res.json(character);
    });
});


// Post Functions

// Create new character
characterRouter.post('/', function (req, res) {
    var character = new Character(req.body);
    character.save(function (err, savedCharacter) {
        err ? res.status(500).send(err) : res.json(savedCharacter);
    });
});


// Put Functions

// Edit existing character
characterRouter.put('/:characterId', function (req, res) {
    Character.findById(req.body._id, function (findErr, character) {
        if (findErr) {
            res.status(500).send(findErr);
        } else {
            Object.keys(character._doc).forEach(function (key) {
                if (key !== "_id" && key !== "__v" && character[key]) {
                    character[key] = req.body[key];
                }
            });

            character.save(function (saveErr, savedCharacter) {
                saveErr ? res.status(500).send(saveErr) : res.json(savedCharacter);
            });
        }
    });
});


// Delete Functions

// Delete character
characterRouter.delete('/:characterId', function (req, res) {
    Character.remove({ _id: req.params.characterId }, function (err, character) {
        err ? res.status(500).send(err) : res.json({ message: 'Character deleted' });
    });
});

module.exports = characterRouter;
