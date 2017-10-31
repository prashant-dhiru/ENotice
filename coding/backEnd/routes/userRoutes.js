//to do update user info and reset password
//send activation link to email
//user update database
//delete me and deleteuser routes


const {User} = require('../models/user');
const bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();
const _ = require('lodash');

const {validateUserInfo} = require('../middleware/userRouteHelperFucntion');
const {hashingPassword} = require('../middleware/userRouteHelperFucntion');
const {passNonLoggedUser} = require("../middleware/authenticationFunction");
const {authenticateUser} = require("../middleware/authenticationFunction");
const {passLoggedUser} = require("../middleware/authenticationFunction");
const {checkAdminStatus}= require('../middleware/authenticationFunction');

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

router.post("/user/login",passNonLoggedUser,(req,res)=>{

	body = req.body;
	body = _.pick(body,['email','password']);
	var user = User;
	
	user.findOne({ email:body.email})
			.exec(function (err,userData){
				if( userData == null )
					res.send({ message: "Username was not found" });
				else if(bcrypt.compareSync(body.password, userData.password))
					authenticateUser(req,res,userData);
				else
					res.send({ message: "password does not match" });
			});
});

router.post("/user/logout",passLoggedUser,(req,res)=>{
	req.session.isLogged = false;
	req.session.destroy();
	res.send({ message : "user logged out"});
});


router.get("/user/:id",passLoggedUser,(req,res)=> {
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

router.get("/me",passLoggedUser,(req,res)=> {
	var user = User;
	user.findById(req.session._id)
			.select('_id name email isAdmin')
			.exec(function (err,userData) {
					res.send(userData);
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


router.post("/user/turnAdmin/:id",passLoggedUser,checkAdminStatus,(req,res)=>{
	var user=User;
	user.findById(req.params.id,(err, userData)=>{
		if (userData == null)
			res.status(400).send({message:"User not found!!"});
		else{
			userData.save();
			res.send({message: "user changed to admin"});
		} 
	});
});

router.delete("/user/me",passLoggedUser,(req,res)=>{
	var user=User;
	user.findByIdAndRemove(req.session._id,(err,result)=>{
		if(result != null){
			res.send('your account is deleted');
		}else{
			res.send('your account was not found!!');
		}
		req.session.destroy();
	})
});

router.delete("/user/:id",passLoggedUser,checkAdminStatus,(req,res)=>{
	var user=User;
	user.findByIdAndRemove(req.params.id,(err,result)=>{
		if(result != null){
			res.send('user ' + req.params.id + ' is deleted');
		}else{
			res.send('your account was not found!!');
		}
	})
});

module.exports = router;