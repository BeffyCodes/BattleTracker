var express = require('express');
var fs = require('fs');
var app = express();
var router = express.Router();

app.use(express.static('../_app'));
app.use('/_api', router);

router.get('/', function(req, res) {
    fs.readFile('_api/test.json', 'utf8', function(err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);
        res.send(obj);
    });
});
router.get('/characters/:name', function(req, res) {
    fs.readFile('_api/characters.json', 'utf8', function(err, data) {
        if (err) throw err;
        var characters = JSON.parse(data);
        var character = null;
        character = characters[req.params.name];
        if (character) {
            res.type('json').send(character);
        } else {
            res.sendStatus(404);
        }
    });
});

router.get('/monsters/:type', function(req, res) {
    fs.readFile('_api/monsters.json', 'utf8', function(err, data) {
        if (err) throw err;
        var monsters = JSON.parse(data);
        var monster = null;
        monster = monsters[req.params.type];
        if (monster) {
            res.type('json').send(monster);
        } else {
            res.sendStatus(404);
        }
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});