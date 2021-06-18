import evenementService from '../services/evenement.service';

export const list = function(req, res) {
	
	var id = req.params['travelId'];
	evenementService.list(id)
		.then( liste => res.status(200).json(liste))
		.catch( err => res.status(404).send(err) );
}

export const add = function(req, res) {
	evenementService.add(req.body)
		.then( result => res.status(200).send(result) )
		.catch(err => res.status(404).send(err) );
}

export const deleteEvenement = function(req, res){
	var id = req.params['evenementId'];
	evenementService.deleteEvenement(id)
		.then( result => res.status(200).send(result) )
		.catch(err => res.status(404).send(err) );
}

export const update = function(req, res) {
	evenementService.update(req.body)
		.then( result => res.status(200).send(result) )
		.catch( err => res.status(404).send(err) )
}