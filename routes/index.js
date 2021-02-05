// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
	console.log("hello", data);
	response.render('index', data);
};