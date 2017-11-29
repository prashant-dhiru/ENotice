const bcrypt = require('bcryptjs');


var validateUserInfo = (request,response,next)=>{
	body = request.body;
	
	if(body.email == '' || body.name == '' || body.password == '' || body.rtpassword == '')
		return response.status(400).send("Please enter all the fields");
	else if(body.email == null || body.name == null || body.password == null || body.rtpassword == null)
		return response.status(400).send("Please enter all the fields");
	else if(body.password.length < 6 || body.password.length >50 )
		return response.status(400).send("Password should be between 6 and 50 character long");
	else if(body.password != body.rtpassword)
		return response.status(400).send("Password does not match");
	else
		return next();
};


var validateUpdateInfo = (request,response,next)=>{
	body = request.body;
	
	if(body.email == '' || body.name == '')
		return response.status(400).send({message : "Please enter all the required fields"});
	else if(body.email == null || body.name == null)
		return response.status(400).send({message : "Please enter all the required fields"});
	else
		return next();
};


var hashingPassword = (req, res, next)=>{
	bcrypt.genSalt(10, (error, salt) => {
  	bcrypt.hash(req.body.password, salt, (error, hash) => {
    	req.body.password = hash;
      next();
    });
  });
};

module.exports = {hashingPassword,validateUserInfo,validateUpdateInfo};