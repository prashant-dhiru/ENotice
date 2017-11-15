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
    body = _.pick(body,['textData','publisher','publishBoards'])
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
/*
router.get('notice/:noticeId',(req,res)=>{
	var notice = Notice;
	notice.findById(req.params.noticeId)
	.exec(function(err,result){
		if(result == null){
			res.send("no result found");
		}else if (){}
	});
});
*/
module.exports = router;	