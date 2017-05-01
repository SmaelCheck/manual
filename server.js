/**
 * Created by smael on 01/05/2017.
 */
"use strict";
let express     = require('express'),
    body_parser = require('body-parser'),
    path        = require('path');

let
    app         = express(),
    port        = process.env.PORT || 3000;

// Routes
let index       = require('./routes/index'),
    book        = require('./routes/book'),
    author      = require('./routes/author');

// View Engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

// Body Parser MW
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

app.use('/',index);
app.use('/',book);
app.use('/',author);

app.listen(port,() =>{
    console.log('Server is ruuning on http://localhost:'+port);
});