const {Board} = require('../models/board');
var express = require('express');
var router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');

const {passLoggedUser} = require("../middleware/authenticationFunction");
const {checkAdminStatus}= require('../middleware/authenticationFunction');

router.put('/board',passLoggedUser,checkAdminStatus,(req,res)=>{
	body = req.body;
	//console.log(body);

	var board = new Board({
		boardName: body.boardName,
		isPrivate: body.isPrivate
	});

	board.save((err, insertedData) =>{
		if (err && err.name == 'ValidationError')
			for( feilds in err.errors){
				res.json({message : err.errors[feilds].message});
				break;
			}
		else if (err)
			res.json({message : "internl database error"});
		else 
			res.json({message: "New board successfully created"});
	});
});


router.get('/board/:boardId',(req,res)=>{
	var board = Board;
	var condition = null;
	
	if(req.session.isLogged != true)
		condition = {isPrivate: false}; //send all public boards
	else if(req.session.isLogged == true && req.session.isAdmin != true)
		condition = {$or : [{isPrivate:false},{memberList : mongoose.Types.ObjectId(req.session._id)}]}
	else if(req.session.isAdmin == true)
		condition = {}

	board.findOne({_id : req.params.boardId}).
	where(condition).
	then((result,err)=>{
		if(err)
			res.status(500).send("internal database error = "+ err);
		else if(result == null)
			res.status(404).send( req.params.boardName + " board was not found");
		else
			res.send(result);
	})
});

router.patch('/board/:boardName',passLoggedUser,checkAdminStatus,(req,res)=>{
	body = req.body;
	body = _.pick(body,["boardName","isPrivate"]);
	//console.log(body);

	var board = Board;
	board.findOne({boardName: req.params.boardName},(err,doc)=>{
		if(doc == null)
			res.status(400).send("no board found!!");
		else{
			doc.boardName = body.boardName;
			doc.isPrivate = body.isPrivate;
			doc.save((err, insertedData) =>{
				if (err && err.name == 'ValidationError')
					for( feilds in err.errors){
						res.json({message : err.errors[feilds].message});
						break;
					}
				else if (err)
					res.json({message : "internl database error"});
				else 
					res.json({message: "Name of the notice board changed"});	
			});
		}
	});
});

router.delete('/board/:boardName',passLoggedUser,checkAdminStatus,(req,res)=>{
	body = req.body;
	var board = Board;
	board.findOneAndRemove({boardName : req.params.boardName}).exec(function(err,result){
		if(err)
			res.send("internl database error");
		else if (result == null)
			res.send("board was not found");
		else 
			res.send("board deleted");
	})
});


router.get('/boards',(req,res)=>{
	var board = Board;
	var query = null;
	//console.log(req.session._id);
	if(req.session.isLogged != true)
		query = {isPrivate : false}; //send all public boards
	else if(req.session.isLogged == true && req.session.isAdmin != true)
		query = {$or : [{isPrivate : false},{memberList : mongoose.Types.ObjectId(req.session._id) }]}
	else if(req.session.isAdmin == true)
		query = {}
	
	board.find(query)
	.sort({buildDate:1})
	.exec(function (err,result){
		if(err)
			res.send("internal database error");
		else
			res.send(result);
	})
});

router.get('/subscribe/:boardName',passLoggedUser,(req,res)=>{
	var baord = Board;
	query = {$addToSet:{subscriberList:req.session._id}};
	Board.findOneAndUpdate({boardName:req.params.boardName},query,(err,doc)=>{
		if(err)
			res.send("internal database error");
		else
			res.send("you have successfully subscribed the board");
	});
});

router.get('/unSubscribe/:boardName',passLoggedUser,(req,res)=>{
	var baord = Board;
	query = {$pull:{subscriberList:req.session._id}};
	Board.findOneAndUpdate({boardName:req.params.boardName},query,(err,doc)=>{
		if(err)
			res.send("internal database error");
		else
			res.send("you have successfully unsubscribed the board");
	});
});

router.get('/addMember/:boardName/:userId',passLoggedUser,checkAdminStatus,(req,res)=>{
	var baord = Board;
	query = {$addToSet:{memberList:req.params.userId}};
	Board.findOneAndUpdate({boardName:req.params.boardName},query,(err,doc)=>{
		if(err)
			res.send("internal database error");
		else
			res.send("you have successfully added member to the board");
	});
});

router.get('/removeMember/:boardName/:userId',passLoggedUser,checkAdminStatus,(req,res)=>{
	var baord = Board;
	query = {$pull:{memberList:req.params.userId}};
	Board.findOneAndUpdate({boardName:req.params.boardName},query,(err,doc)=>{
		if(err)
			res.send("internal database error");
		else
			res.send("you have successfully removed member from the board");
	});
});

router.get('/revokeAllMembership/:userId',passLoggedUser,checkAdminStatus,(req,res)=>{
	
	query = {$pull:{memberList:req.params.userId}};
	Board.update({memberList : req.params.userId},query,{multi:true},(err,raw)=>{
		if(err){
			res.send("Internal database error");
		}else
			res.send("true");
	});
})

router.get('/revokeAllSubscription/:userId',passLoggedUser,checkAdminStatus,(req,res)=>{
	
	query = {$pull:{subscriberList:req.params.userId}};
	Board.update({subscriberList : req.params.userId},query,{multi:true},(err,raw)=>{
		if(err){
			res.send("Internal database error");
		}else
			res.send("true");
	});
})

router.get('/getAllSubscribedBoard',passLoggedUser,(req,res)=>{
	Board.find({subscriberList:req.session._id},(err,result)=>{
		if(err)
			res.status(500).send("internal database error");
		else
			res.send(result);
	});
});

module.exports = router;