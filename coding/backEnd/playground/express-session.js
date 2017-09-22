var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var app = express();

app.use(session({
	secret : "mysecretkey",
	resave:true,
	saveUninitialized:true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess;

app.get('/login',function(req,res){
if(req.session.views){
	req.session.views++;
	res.end("viwe updated for this user");
}	else{
	req.session.views = 1;
	res.end("Welecome to new session demo,refresh now");
	console.log("new session created");
}
});

app.listen(3000,function(){
console.log("App Started on PORT 3000");
});

app.get('/dash',function(req,res){
	console.log(req.sessionID);
	if(typeof req.session.views !== 'undefined' && req.session.views !== null )
		res.end('view count : ' + req.session.views);
	else
		res.end("Session for this user is not created, pls go to /login link");
})