var express = require('express');
var app = express();
var request = require('request');
app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/story', function(req, res) {
	res.send("<p> hey " + req.query.name + " yolo </p>");
});

app.get('/boiler', function(req, res) {
	res.sendfile('./boiler/index.html');
});

app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});


/*slides.com/dancadden/deck-2/*/
