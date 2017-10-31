const {Student} = require('../models/user');

var checkAdminStatus = (req,res,next)=>{
	if (req.session.isAdmin == false){
		res.status(400).send({message : `This action require admin privaillage,your account does not have admin privaillage`});
	}
	else 
		next();
}


var authenticateUser = (req,res,userData) => {
	req.session.isLogged = true;
	req.session._id = userData._id;
	req.session.isAdmin = userData.isAdmin;
	res.send(userData);
};

var passLoggedUser = (request, response, next) => {
	if ( request.session.isLogged == false || request.session.isLogged == null )
		response.status(400).send({message:"you are not Logged-In"});
	else
		next();
};

var passNonLoggedUser = (request, response, next ) => {
	if (request.session.isLogged == true)
		response.status(400).send({message : "a user is already Logged-In from this system"});
	else
		next();
}
module.exports = {authenticateUser,passLoggedUser,passNonLoggedUser,authenticateUser,checkAdminStatus};