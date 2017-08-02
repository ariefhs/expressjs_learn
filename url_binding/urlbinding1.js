var express = require('express');
var app = express.Router();

app.get('/:id', function(req, res) {
    res.send('This id your specified is : ' + req.params.id);
});

module.exports = app; 