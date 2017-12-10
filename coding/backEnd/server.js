require('./config/config');

const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const router = express.Router();
const port = process.env.PORT || 3000;

const {mongoose} = require('./db/mongoose');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
app.use(bodyParser.json());
//app.use(express.static(__dirname + '/Client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use( session ({
	name : 'connect.sid',
	httponly: false,
	secret : process.env.SESSION_KEY,
	resave: false,
	saveUninitialized: true,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


app.use('/api',require('./routes/userRoutes'));
app.use('/api',require('./routes/boardRoutes'));
app.use('/api',require('./routes/noticeRoutes'));

app.use(express.static(path.join(__dirname,'../frontEnd/dist')));
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname,'../frontEnd/dist/index.html'));
})

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.listen(port, (err) => {
  console.log(`Server is up on port ${port}`);
});

module.exports = {app};