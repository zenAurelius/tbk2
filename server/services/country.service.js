var fs = require('fs');


var service = {};
service.list = list;
service.zones = zones;
module.exports = service;

var countries;

function list() {
	if(!countries) loadCountries();
	return Promise.resolve(countries.filter(c => c.type == 4).sort((a,b) => {return a.name_fr.localeCompare(b.name_fr);}));
}

function zones() {
	if(!countries) loadCountries();
	return Promise.resolve(countries.filter(c => c.type < 4).sort((a,b) => {return a.name_fr.localeCompare(b.name_fr);}));
}

function loadCountries(){
	console.log('load countries...');
	try{
		countries = JSON.parse(fs.readFileSync('./server/utils/countries.json', 'utf-8'));
		console.log('countries size : ' + countries.length);
	} catch(e){
		console.log(e);
	}
}