// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//call  the packages for mongodb
var dbFunction = require('./dbFunction');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'welcome to taskket api service' });   
});

// more routes for our API
router.route('/signup')
	.post(function(req, res) {
		dbFuction.registerUser(req.body,res);    
	});

router.route('/login')
	.post((req,res)=> {
		dbFuction.loginUser(req.body,res);
	});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use('/api', router);   //middle-ware for api routes

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
