var express = require('express');
var bodyParser = require('body-parser');


//var path = require("path");
//var dbProvider = require('./server/utils/dbProvider');
//var passport = require('passport');

//if(process.env.DB == "INTE"){
//	require('dotenv').config();
//}

var app = express();
port = 3080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

//require('./server/utils/configPassport');
//app.use(passport.initialize());
var router = require('./server/utils/apiRoutes');
app.use('/api', router);

//Catch des erreurs de token venant de passport
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

//dbProvider.initialize(function(err) {
//	if (err) {
//		console.log(err);
//		process.exit(1);
//	}
	
//	var server = app.listen(process.env.PORT || 3000, function () {
//		var port = server.address().port;
//		console.log("App now running on port", port);
//	});
//});
