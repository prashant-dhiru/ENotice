const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const User = require('./user');


mongoose.Promise = global.Promise;

var noticeSchema = new mongoose.Schema({
	title:{
		type : String,
		require : [true,"The notice must have a subject"],
		maxlength : [140,"the subject should not be more then 140 character long"]
	},
	textData : {
		type : String,
		require : [true, "The Notice must have text data"],
		//	maxlength : [1000, "The text should not be more then 1000 character long"]
	},
	publishDate:{
		type : Date,
		default : Date.now()
	},
	publisher : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'user', 
	},
	publishBoards :[{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'board',
	}],
	attachedFiles : [{
		type : String,
	}],
	userViwed : [{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'user'
	}],
	comment : [{
		commentId : {
			type:Date,
			default: Date.now()
		},
		userId : {
			type : mongoose.Schema.Types.ObjectId,
			ref : 'user'
		},
		commentText : {
			type : String,
			require : true
		}
	}]
},{collection: 'notice'});

noticeSchema.plugin(uniqueValidator, {message: '{VALUE} already in use.'});
var Notice = mongoose.model('noticeSchema',noticeSchema);

module.exports = {Notice};