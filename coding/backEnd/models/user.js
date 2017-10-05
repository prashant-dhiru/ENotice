const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
	name :{
		type : String,
		required : [true,"user's name is required"],
		minlength : [3,"name is too short, name must be 3 or more characters long"],
		maxlength : [50,"name is too long, use less then 50 characters"]
	},
	password : {
		type : String,
		required : [true, "password is reqired"],
		minlength : [6,"password too short, must be 6 or more characters long"],
	//maxlength : [50,"password too long, must be less then 50 characters"]
	},
	email : {
		type : String,
		required : [true,"user's E-mail is reqired"],
		unique : true,
		validate: {
      validator: value => validator.isEmail(value),
      message: '{VALUE} is not a valid E-mail address'
    }
	},
	phone : [{
		type : String,		
		default : null,
		validate: {
      validator: value => validator.isMobilePhone(value, 'en-IN'),
      message: '{VALUE} is not a valid phone number.'
    }	
	}],
	isAdmin:{																							
		type : Boolean,																				  
		default : false
	},
	registerationDate : {
		type : Date,
		default : Date.now()
	}
},{collection: 'users'});


userSchema.plugin(uniqueValidator, {message: '{VALUE} already in use.'});
var User = mongoose.model('userData',userSchema);

module.exports = {User};