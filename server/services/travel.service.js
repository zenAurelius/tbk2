var fs = require('fs');

var service = {};
service.list = list;
service.add = add;
service.update = update;
service.deleteTravel = deleteTravel;
module.exports = service;

var travels;

function loadTravel(){
	console.log('load travels...');
	try{
		travels = JSON.parse(fs.readFileSync('./server/utils/travels.json', 'utf-8'));
		console.log('travels size : ' + travels.length);
	} catch(e){
		console.log(e);
	}
}

export const list = (userId) => {
	if(!travels){
		loadTravel();
	}
	return Promise.resolve(travels.filter(t => t.users.includes(userId)));
}

export const add = (travel) => {
	
	if(!travels){
		loadTravel();
	}
	let nextId;
	try{
		nextId = parseInt(travels[travels.length-1].id) + 1;
		travel.id = nextId;
		travels.push(travel);
		console.log(travel);
		fs.writeFileSync('./server/utils/travels.json', JSON.stringify(travels));
	} catch(error){
		console.log(error);
	}
	return Promise.resolve(nextId);
};


export const update = (travel) => {
	if(!travels) loadTravel();
	try{
		let index = travels.findIndex(t => t.id == travel.id);
		if(index >= 0) {
			travels[index] = travel;
		} else {
			throw 'travel not found';
		}
		fs.writeFileSync('./server/utils/travels.json', JSON.stringify(travels));
	} catch(error){
		console.log(error);
		return Promise.reject(error);
	}
	return Promise.resolve('ok');

};


export const deleteTravel = (id) => {
	if(!travels) loadTravel();
	try{
		travels.splice(travels.findIndex(t => t.id == id),1);
		fs.writeFileSync('./server/utils/travels.json', JSON.stringify(travels));
	} catch(error){
		console.log(error);
		return Promise.reject(error);
	}
	return Promise.resolve('ok');
}
