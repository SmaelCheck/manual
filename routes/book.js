/**
 * Created by smael on 01/05/2017.
 */
let express = require('express'),
    mongo   = require('mongoose'),
    router  = express.Router();

router.get('/book',(req,res,next)=>{
    res.send('Get all books.');
});
router.get('/book/add',(req,res,next)=>{
    res.send('Add a book.');
});
router.get('/book:id',(req,res,next)=>{
    res.send('get a book.');
});
router.post('/book/register',(req,res,next)=>{
    // res.send('Add a book.');
    console.log(req.body);
});
router.post('/book',(req,res,next)=>{
    res.send('Post a book.');
});
router.put('/book:id',(req,res,next)=>{
    res.send('Update a book.');
});
router.delete('/book:id',(req,res,next)=>{
    res.send('Delete a book.');
});
module.exports = router;