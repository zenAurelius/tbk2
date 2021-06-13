var fs = require('fs');

var service = {};
service.list = list;
//service.add = add;
//service.deleteOperation = deleteOperation;
//service.update = update;

module.exports = service;

var evenements;

function loadEvenements(){
	console.log('load evenements...');
	try{
		evenements = JSON.parse(fs.readFileSync('./server/utils/evenements.json', 'utf-8'));
		console.log('evenements size : ' + evenements.length);
	} catch(e){
		console.log(e);
	}
}

function list(travelId) {
	if(!evenements){
		loadEvenements();
	}
	return Promise.resolve(evenements.filter(e => e.travel == travelId));
}

/*
function add(operation) {
	
	var deferred = Q.defer();
	dbProvider.db.collection(COLNAME).insert(operation, (err, result) => {

		if (err){
			deferred.reject(err);
		} else {
			deferred.resolve(result);
		}
	})
	
	return deferred.promise;
};

function update(operation) {
	var deferred = Q.defer();
	var id = operation._id;
	delete operation._id;
	dbProvider.db.collection(COLNAME).update({ _id: dbProvider.getID(id) }, operation, {}, (err, result) => {

		if (err){
			deferred.reject(err);
		} else {
			deferred.resolve(result);
		}
	})
	
	return deferred.promise;
}


function deleteOperation(id) {
	var deferred = Q.defer();
	
	dbProvider.db.collection(COLNAME).remove({ _id: dbProvider.getID(id) }, (err, result) => {
		if (err){
			deferred.reject(err);
		} else {
			deferred.resolve(result);
		}
	})
	
	return deferred.promise;
}*/