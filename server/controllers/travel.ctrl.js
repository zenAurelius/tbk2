var travelService = require('../services/travel.service');

module.exports.list = function(req, res) {
	
	var userId = req.params['userid'];
	
	travelService.list(userId)
		.then( liste => res.status(200).json(liste))
		.catch( err => res.status(404).send(err) );
	
}

module.exports.add = function(req, res) {
	console.log('ok');
	console.log(req.body);
	travelService.add(req.body)
		.then( result => res.status(200).send(result) )
		.catch(err => res.status(404).send(err) );
}

module.exports.deleteTravel = function(req, res){
	var id = req.params['travelid'];
	console.log('delete', id);
	travelService.deleteTravel(id)
		.then( result => res.status(200).send(result) )
		.catch(err => res.status(404).send(err) );
}


module.exports.update = function(req, res){
	console.log('là');
	travelService.update(req.body)
		.then( result => res.status(200).send(result) )
		.catch(err => {
			console.log(err);
			res.status(404).send(err) });
}