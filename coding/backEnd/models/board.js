//artical list

const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const User = require('./user');


mongoose.Promise = global.Promise;

var boardSchema = new mongoose.Schema({
	boardName : {
		type : String,
		unique : true,
		required : [true,"name for notice board is required"],
		minlength : [3,"name is too short, name must be 3 or more charcater long"],
		maxlength : [50,"name is too long, use less then 50 charcater"]
	},
	subscriberList:[{ 
		type: mongoose.Schema.Types.ObjectId,
		ref:'User'
	}],
	buildDate : {
		type : Date,
		default : Date.now()
	},
	isPrivate: {
		type: Boolean,
		default : false
	},
	memberList:[{						//only for private boards
		type: mongoose.Schema.Types.ObjectId, 
		ref:'User'
	}] ,
	// artcialHosted:[{
	// 	type : mongoose.Schema.Types.ObjectId,
	// 	ref: 'Artical'
	// }],
	discription:{
		type:String,
		require : [true,"discription of the board is required"],
		maxlength : [1024,"discribe the notice board within 1024 character"]
	}

},{collection: 'boards'});

boardSchema.plugin(uniqueValidator, {message: '{VALUE} already in use.'});
var Board = mongoose.model('boardSchema',boardSchema);

module.exports = {Board};