var countryService = require('../services/country.service');

module.exports.list = function(req, res) {
	console.log('list countries');
	countryService.list()
		.then( (liste) => {
			res.status(200).json(liste);})
		.catch( (err) => {res.status(404).send(err)} );
	
}

module.exports.zones = function(req, res) {
	console.log('list zones');
	countryService.zones()
		.then( (liste) => {
			res.status(200).json(liste);})
		.catch( (err) => {res.status(404).send(err)} );
}