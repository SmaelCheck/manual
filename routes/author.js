/**
 * Created by smael on 01/05/2017.
 */
let express = require('express'),
    router  = express.Router();

router.get('/author',(req,res,next)=>{
    res.send('Get all authors');
});

module.exports = router;