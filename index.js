var express = require('express');
var app = express();

//test route
var things = require('./things.js');
var urlbinding = require('./url_binding/urlbinding1.js');
var urlMultipleBinding = require('./url_binding/urlbinding2.js');

// @learn router get and post
app.use('/things', things);

// @lear url binding
app.use('/urlbinding', urlbinding);

// @learn url multiple binding get url
app.use('/multiplebinding', urlMultipleBinding);

app.get('/hello', function(req, res){
	res.send("Hello World!");
});

app.post('/hello', function(req, res) {
	res.send("You just called the post method at '/hello'!\n");
});
app.listen(3000);