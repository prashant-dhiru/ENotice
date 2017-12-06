const {Student} = require('../models/user');

var checkAdminStatus = (req,res,next)=>{
	if (req.session.isAdmin == false){
		res.status(401).send(`This action require admin privaillage,your account does not have admin privaillage`);
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
		response.status(401).send("you are not Logged-In");
	else
		next();
};

var passNonLoggedUser = (request, response, next ) => {
	if (request.session.isLogged == true)
		response.status(401).send("a user is already Logged-In from this system");
	else
		next();
}
module.exports = {authenticateUser,passLoggedUser,passNonLoggedUser,authenticateUser,checkAdminStatus};