var express = require('express')
var bodyParser = require('body-parser');
var app = express();

var scores = [   

  ];

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// GET /scores
app.get('/scores', function(req, res){
    console.log("tuut");
    res.json({scores: scores});
});

// POST /scores
app.post('/scores', function(req, res){
    scores.push({
        name: req.body.name,
        score: req.body.score
    });

    res.sendStatus(200);
});


app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
})