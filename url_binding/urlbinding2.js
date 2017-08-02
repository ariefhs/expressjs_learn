var express = require('express');
var app = express.Router();

app.get('/:id/:name/:status', function(req, res) {
    res.send('id_binding : '+req.params.id + ' name : '+ req.params.name+' status : '+req.params.status);
});
module.exports = app;