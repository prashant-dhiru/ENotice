const {User} = require('../models/user');
const {validateUserInfo} = require('../middleware/userRouteHelperFucntion');
const {hashingPassword} = require('../middleware/userRouteHelperFucntion');
var express = require('express');
var router = express.Router();
const _ = require('lodash');

router.put('/user',validateUserInfo,hashingPassword, (req,res)=>{
		body = req.body;
		var user = new User({
			name : body.name,
			password : body.password,
			email : body.email
		});

		user.save((err, insertedData) =>{
			if (err && err.name == 'ValidationError')
				for( feilds in err.errors){
					res.json({message : err.errors[feilds].message});
					break;
				}
			else if (err)
				res.json({message : "internl database error"});
			else 
				res.json({message: "registration sucessfull, login to continue."});
		});
});

router.get("/user/:id",(req,res)=> {
	var user = User;

	user.findById(req.params.id)
			.select('_id name email isAdmin')
			.exec(function (err,userData) {
				if (userData == null)
					res.status(400).send({message : "no one found"});
				else{
					res.send(userData);
				}
			});
});


router.get("/users",(req,res)=> {
	var user = User;

	user.find()
			.select('_id name email isAdmin')
			.exec(function (err,userData) {
				if (userData == null)
					res.status(400).send({message : "no one found"});
				else{
					res.send(userData);
				}
			});
});

router.get("/admins",(req,res)=> {
	var user = User;

	user.find({isAdmin : true})
			.select('_id name email isAdmin')
			.exec(function (err,userData) {
				if (userData == null)
					res.status(400).send({message : "no one found"});
				else{
					res.send(userData);
				}
			});
});

router.get("/nonAdmins",(req,res)=> {
	var user = User;

	user.find({isAdmin : false})
			.select('_id name email isAdmin')
			.exec(function (err,userData) {
				if (userData == null)
					res.status(400).send({message : "no one found"});
				else{
					res.send(userData);
				}
			});
});


module.exports = router;