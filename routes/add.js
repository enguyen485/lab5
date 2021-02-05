var data = require("../data.json");

exports.addFriend = function(request, response) {  
	var name = request.query.name
	var description = request.query.description
	var image = "http://lorempixel.com/500/500/people"

	var jsonObj = { "name": name,
					"description": description,
					"imageURL": image			
					}

	data.friends.push(jsonObj);
	response.render('index', data);
 }