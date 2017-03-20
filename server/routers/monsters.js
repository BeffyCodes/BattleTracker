var monsterRouter = require('express').Router();
var Monster = require('../models/monster');


// Get Functions

// Get all
monsterRouter.get('/', function (req, res) {
    Monster.find(function (err, monsters) {
            err ? res.status(500).send(err) : res.json(monsters);
        });
});

// Get one
monsterRouter.get('/:monsterId', function (req, res) {
    Monster.findById(req.params.monsterId, function (err, monster) {
            err ? res.status(500).send(err) : res.json(monster);
        });
});


// Post Functions

// Create new monster
monsterRouter.post('/', function (req, res) {
    var monster = new Monster(req.body);
    monster.save(function (err, savedMonster) {
        err ? res.status(500).send(err) : res.json(savedMonster);
    });
});


// Put Functions

// Edit existing monster
monsterRouter.put('/:monsterId', function (req, res) {
    Monster.findById(req.body._id, function (findErr, monster) {
        if (findErr) {
            res.status(500).send(findErr);
        } else {
            Object.keys(monster._doc).forEach(function (key) {
                if (key !== "_id" && key !== "__v" && monster[key]) {
                    monster[key] = req.body[key];
                }
            });

            monster.save(function (saveErr, savedMonster) {
                saveErr ? res.status(500).send(saveErr) : res.json(savedMonster);
            });
        }
    });
});


// Delete Functions

// Delete monster
monsterRouter.delete('/:monsterId', function (req, res) {
    Monster.remove({ _id: req.params.monsterId }, function (err, monster) {
        err ? res.status(500).send(err) : res.json({ message: 'Monster deleted' });
    });
});

module.exports = monsterRouter;