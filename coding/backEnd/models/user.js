const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
	name :{
		type : String,
		required : [true,"user's name is required"],
		minlength : [3,"name is too short, name must be 3 or more characters long"],
		maxlength : [50,"name is too long, use less then 50 characters"]
	},
	login : {
		username : {
			type : String,
			required : [true, "user's E-mail is required"],
			unique : true,
			index : true
		},
		password : {
			type : String,
			required : [true, "password is reqired"],
			minlength : [6,"password too short, must be 6 or more characters long"],
			maxlength : [50,"password too long, must be less then 50 characters"]
		}
	},
	contact : {
		email : [{
			type : String,
			required : [true,"user's E-mail is reqired"],
			unqiue : true
		}],
		phone : [{
			type : String,
			default : null
			
		}]
	},
	registerationDate : {
		type : Date,
		default : Date.now()
	}
},{collection: 'users'});

userDataSchema.plugin(uniqueValidator, {message: '{VALUE} already in use.'});
var userData = mongoose.model('userData',userDataSchema);
