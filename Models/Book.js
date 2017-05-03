/**
 * Created by smael on 03/05/2017.
 */
let mongoose   = require('mongoose');
let bcrypt     = require('bcryptjs');
let config     = require('../config/database');

// Schema of the MongoDb collection
const book_schema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    pub_date:{
        type: String,
        required: true
    }
});
// Exports the Book model
const book = module.exports = mongoose.model('book',book_schema);

// Have to get a book by its id
module.exports.getBookById = function (id,callback) {
    book.findById(id, callback);
};

// Have to get a book by its title
module.exports.getBookByTitle = function (title,callback) {
    const q = {title:title};
    book.findByOne(q, callback);
};

// Have to get a book by its Author
module.exports.getBookByTitle = function (author,callback) {
    const q = {author:author};
    book.find(q, callback);
};

// Have to get a book by its publication date
module.exports.getBookByTitle = function (pub_date,callback) {
    const q = {pub_date:pub_date};
    book.find(q, callback);
};