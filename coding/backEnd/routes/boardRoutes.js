const {Board} = require('../models/board');
var express = require('express');
var router = express.Router();
const _ = require('lodash');

const {passLoggedUser} = require("../middleware/authenticationFunction");
const {checkAdminStatus}= require('../middleware/authenticationFunction');

router.put('/board',passLoggedUser,checkAdminStatus,(req,res)=>{
	body = req.body;
	console.log(body);

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


router.patch('/board/:boardName',passLoggedUser,checkAdminStatus,(req,res)=>{
	body = req.body;
	body = _.pick(body,["boardName","isPrivate"]);
	console.log(body);

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

module.exports = router;