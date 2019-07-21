const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const multer  = require('multer');
const fs = require('fs');
const path = require('path');
const async = require('async');
const cors = require('cors')
const logger = require('morgan');
const config = require('./ServerConfig');

const app = express();
const router = express.Router();

//import API 
const userAPI = require('./API/user');
const newsAPI = require('./API/news');
const threadAPI = require('./API/thread');
const postAPI = require('./API/post');

// this is our MongoDB database
const dbRoute = config.DB_ROUTE;

const API_PORT = config.SERVER_PORT;

const upload = multer({ dest: '/tmp/' });

app.use(cors());

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api/user', userAPI);
app.use('/api/thread', threadAPI);
app.use('/api/post', postAPI);
app.use('/api/news', newsAPI);

// append /api for our http requests
/** Form Handling */

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));