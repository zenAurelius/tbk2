var operationService = require('../services/operation.service');

module.exports.list = function(req, res) {
	
	var id = req.params['travelId'];
	operationService.list(id)
		.then( liste => res.status(200).json({'operations' : liste} ))
		.catch( err => res.status(404).send(err) );
	
}

module.exports.add = function(req, res) {
	operationService.add(req.body)
		.then( result => res.status(200).send(result) )
		.catch(err => res.status(404).send(err) );
}

module.exports.delete = function(req, res){
	var id = req.params['operationId'];
	operationService.delete(id)
		.then( result => res.status(200).send(result) )
		.catch(err => res.status(404).send(err) );
}

module.exports.update = function(req, res) {
	operationService.update(req.body)
		.then( result => res.status(200).send(result) )
		.catch( err => res.status(404).send(err) )
}