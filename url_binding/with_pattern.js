var express = require("express");
var app = express.Router();

/**
 * @regex dengan 
 *  harus angka 
 *  harus 5 digit
 */
app.get('/:id([0-9]{5})', function(req, res) {
    res.send('id : '+ req.params.id);
});

module.exports = app;