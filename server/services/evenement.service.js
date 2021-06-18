import fs from 'fs';

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

export const list = (travelId) => {
	if(!evenements){
		loadEvenements();
	}
	return Promise.resolve(evenements.filter(e => e.travel == travelId));
}


export const add = (evenement) => {
	if(!evenements){
		loadEvenements();
	}

	let nextId;
	try{
		nextId = parseInt(evenements[evenements.length-1].id) + 1;
		evenement.id = nextId;
		evenements.push(evenement);
		console.log(evenement);
		fs.writeFileSync('./server/utils/evenements.json', JSON.stringify(evenements));
	} catch(error){
		console.log(error);
	}
	return Promise.resolve(nextId);
};

export const update = (evenement) => {
	if(!evenements) loadEvenements();
	try{
		let index = evenements.findIndex(t => t.id == travel.id);
		if(index >= 0) {
			evenements[index] = evenement;
		} else {
			throw 'evenement not found';
		}
		fs.writeFileSync('./server/utils/evenements.json', JSON.stringify(evenements));
	} catch(error){
		console.log(error);
		return Promise.reject(error);
	}
	return Promise.resolve('ok');
}


 export const deleteEvenement = (id) => {
	if(!evenements) loadEvenements();
	try{
		evenements.splice(evenements.findIndex(t => t.id == id),1);
		fs.writeFileSync('./server/utils/evenements.json', JSON.stringify(evenements));
	} catch(error){
		console.log(error);
		return Promise.reject(error);
	}
	return Promise.resolve('ok');
}