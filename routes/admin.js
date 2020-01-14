const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.send('<h1>seen</h1>')
});


module.exports = router;