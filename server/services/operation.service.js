import fs from 'fs';

var service = {};
service.list = list;
service.add = add;
service.delete = deleteOperation;
service.update = update;

module.exports = service;

var operations;

function loadOperations(){
	console.log('load operations...');
	try{
		operations = JSON.parse(fs.readFileSync('./server/utils/operations.json', 'utf-8'));
		console.log('operations size : ' + operations.length);
	} catch(e){
		console.log(e);
	}
}

function list(travelId) {
	if(!operations){
		loadOperations();
	}
	return Promise.resolve(operations.filter(e => e.travel == travelId));
}


function add(operation) {
	if(!operations){
		loadOperations();
	}

	let nextId;
	try{
		nextId = parseInt(operations[operations.length-1].id) + 1;
		operation.id = nextId;
		operations.push(operation);
		console.log(operation);
		fs.writeFileSync('./server/utils/operations.json', JSON.stringify(operations));
	} catch(error){
		console.log(error);
	}
	return Promise.resolve(nextId);
};

function update(operation) {
	if(!operations) loadOperations();
	try{
		let index = operations.findIndex(t => t.id == travel.id);
		if(index >= 0) {
			operations[index] = operation;
		} else {
			throw 'operation not found';
		}
		fs.writeFileSync('./server/utils/operations.json', JSON.stringify(operations));
	} catch(error){
		console.log(error);
		return Promise.reject(error);
	}
	return Promise.resolve('ok');
}


service.delete = function deleteEvenement(id) {
	if(!operations) loadOperations();
	try{
		operations.splice(operations.findIndex(t => t.id == id),1);
		fs.writeFileSync('./server/utils/operations.json', JSON.stringify(operations));
	} catch(error){
		console.log(error);
		return Promise.reject(error);
	}
	return Promise.resolve('ok');
}