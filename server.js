/**
 * Created by smael on 01/05/2017.
 */
"use strict";
let express     = require('express');
let body_parser = require('body-parser');
let path        = require('path');
let cors        = require('cors');
let mongo       = require('mongoose');
let password    = require('passport');
// let jwt         = require('jwt');

// The local variables
let app         = express();
let port        = process.env.PORT || 3000;
let index       = require('./routes/index');
let book        = require('./routes/book');
let author      = require('./routes/author');
let config      = require('./config/database');

// MongoDB connect
mongo.connect(config.database);
mongo.connection.on('connected',()=>{
    console.log('Successfully connected.');
});

mongo.connection.on('error',(error)=>{
    console.log('Unsuccessfully connected to database :\n'+error);
});


// View Engine
// app.set('views',path.join(__dirname, 'views'));
// app.set('view engine','ejs');
// app.engine('html',require('ejs').renderFile);

// Cors MD
app.use(cors());
// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

// Body Parser MW
app.use(body_parser.json());
// app.use(body_parser.urlencoded({extended:false}));

// Routes
app.use('/',index);
app.use('/',book);
app.use('/',author);

app.listen(port,() =>{
    console.log('Server is running on http://localhost:'+port);
});