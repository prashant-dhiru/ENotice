var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar'},"myPassword");
console.log(token);