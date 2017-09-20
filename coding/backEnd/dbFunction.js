//////////////////////////////////////////////////////////////////////////
//dbFucntion contains list of all the mongo db query our api will needed//
//////////////////////////////////////////////////////////////////////////

//all the packages we need
var assert = require('assert');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//constant and veriables we will require later
var Schema = mongoose.Schema;
var URL = 'mongodb://localhost:27017/taskket';
mongoose.Promise = global.Promise; //for depricated functions

//connet to database
mongoose.connect(URL,{useMongoClient: true}, function(error) {
  if (error)
		console.log('database is down!! :(');
});

/****************
** User schema **
****************/

var userDataSchema = new Schema({
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


//////////////////////
// export fucntions //
//////////////////////

module.exports = {	
  registerUser : function(data,res) {
		if(data.password != data.rtpassword){
			res.json({
				success : false,
				message : "password doesn't match"
			});
			return;
		}

		var	user = new userData({
			name : data.name,
			defaultCompany : "590c4acdc20465806f5de116",
			login : {
				username : data.email,
				password : data.password
			},
			contact:{
				email : [data.email]
			},
			joinedCompanies : [{companyId:"590c4acdc20465806f5de116",privillage:0}]
		});
		user.save((err, insertedData) =>{
			if (err && err.name == 'ValidationError'){
				for( feilds in err.errors){
					res.json({
						success : false,
						message : err.errors[feilds].message
					});
					break;
				}
			}
			else if (err){
				res.json({
						success : false,
						message : "internl database error"
					});
			} 
			else
				res.json({
					success: true,
					message: "registration sucessfull, login to continue."
				});
		});
},

	loginUser : (data,res) => {
		if(data.username == '' || data.username == null || data.password == '' || data.password == null ){
			res.json({
				loginSuccess : false,
				message : 'please provide username and password'
			});
			return
		}
		userData.findOne({'login.username' : data.username})
		.limit(1)
		.select('login')
		.exec((err, user)=>{
			if (err) res.json({
				loginSuccess : false,
				message : 'internal database error (code: 502XX01)'
			});
			else if (user == null) res.json({
				loginSuccess : false,
				message : 'user not found, please register..'
			});
			else if ( user.login.password != data.password) res.json({
				loginSuccess : false,
				message : 'wrong password, try forgot password option'
			});
			else res.json({
				loginSuccess : true,
				message : 'login successfull'
			});
			//console.log(user);
/////////////////////////////////////////////////////////////////
////  GENERATE REDIS SESSIONS AND SEND THEM BACK WITH RESPOSNE //
/////////////////////////////////////////////////////////////////

		})
	}
};
