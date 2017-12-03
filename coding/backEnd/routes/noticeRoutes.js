const {Notice} = require('../models/notice');
var express = require('express');
var router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
var upload = multer({ //multer settings
		dest: 'uploads/',
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error("I know nothing"));
        }
        callback(null, true)
    },
    limits:{
				files : 5,
        fileSize: 1024 * 1024 * 5
    }
}).array('attachedFiles');

const {passLoggedUser} = require("../middleware/authenticationFunction");
const {checkAdminStatus}= require('../middleware/authenticationFunction');


router.put('/notice',passLoggedUser,checkAdminStatus,(req,res)=>{
  upload(req, res, function (err) {
    if (err) {
      res.send("all file must be of type png/jpeg/jpg");
      console.log(err);
      return;
		}

    body = req.body;
    body = _.pick(body,['textData','publisher','publishBoards','title']);
		fileName = _.map(req.files,"filename");
    _.set(body,'attachedFiles',fileName);
    _.set(body,'publisher',req.session._id);
    
    var notice = new Notice(body);
    notice.save((err, insertedData) =>{	
		  if (err){
        console.log(err);
				res.json({message : "internl database error"});
      }
			else 
				res.json({
          message : "notice has been published",
          uploadedFile : fileName 
        });
		});
  });

});

//get single board using id

router.get('/notice/:noticeId',(req,res)=>{
	var notice = Notice;
	notice.findById(req.params.noticeId)
	.exec(function(err,result){
		if(result == null){
			res.send("no result found");
		}else{
      res.send(result);
    }
	});
});

router.get('/noticeForBoard/:boardId',(req,res)=>{
  var notice = Notice;
  notice.find({publishBoards:req.params.boardId})
  .populate('publisher','name')
  .populate('userViwed','name')
  .sort({publishDate: -1})
  .exec(function(err,result){
    if(result == null ||  result.length == 0){
      res.status(404).send("no artical in this board");
    }else{
      res.send(result)
    }
  });
});

router.get('/notice/viewed/:noticeId',(req,res)=>{
  Notice.findByIdAndUpdate(req.params.noticeId,{$addToSet:{userViwed: req.session._id }})
  .exec(function(err,result){
    if(err){
      res.status(500).send("internal database error");
    }else if(result == null ){
      res.status(404).send("this artical is not present for viewing.");
    }else{
      res.send("notice marked as viewed");
    }
  })
});
module.exports = router;	