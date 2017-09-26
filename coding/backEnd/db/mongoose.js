require('../config/config');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //for depricated Promise

mongoose.connect(process.env.MONGODB_URI,{
	useMongoClient: true
}).then(()=> {
	console.log('Successfully connected to database: ' + process.env.db);
},(error)=>{
	console.log("database says : " + error.message);
});

module.exports = {mongoose};