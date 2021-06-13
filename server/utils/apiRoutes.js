var express = require('express');
var router = express.Router();
//var jwt = require('express-jwt');
//var auth = jwt({
//  secret: process.env.JWT_SECRET,
//  algorithms: ['HS256'],
//  userProperty: 'payload'
//});

// AUTHENTICATION
//var ctrlAuth = require('../controllers/authent.ctrl');
//router.post('/login', ctrlAuth.login);
//router.post('/register', ctrlAuth.register);

//USER
//var ctrlUser = require('../controllers/user.ctrl');
//router.get('/users/:id', auth, ctrlUser.get);
//router.get('/user/:id/friends', auth, ctrlUser.getFriends);

//TRAVEL
var ctrlTravel = require('../controllers/travel.ctrl');
router.get('/users/:userid/travels', ctrlTravel.list);//auth, 
router.post('/travels', ctrlTravel.add);//auth,  
router.put('/travels', ctrlTravel.update);//auth, 
router.delete('/travels/:travelid', ctrlTravel.deleteTravel);//auth, 

//COUNTRY
var ctrlCountry = require('../controllers/country.ctrl');
router.get('/countries', ctrlCountry.list);
router.get('/zones', ctrlCountry.zones);

// EVENEMENT
var ctrlEvenement = require('../controllers/evenement.ctrl');
router.get('/travels/:travelId/evenements', ctrlEvenement.list);
//ACCOUNT
//var ctrlAccount = require('../controllers/account.ctrl');
//router.get('/travel/:travelId/accounts', ctrlAccount.list);
//router.post('/accounts', ctrlAccount.add);
//router.delete('/accounts/:accountId', auth, ctrlAccount.deleteAccount);

//OPERATION
//var ctrlOperation = require('../controllers/operation.ctrl');
//router.get('/account/:travelId/operations/', ctrlOperation.list);
//router.post('/operations', ctrlOperation.add);
//router.put('/operations', ctrlOperation.update);
//router.delete('/operations/:operationId', auth, ctrlOperation.deleteOperation);

module.exports = router;