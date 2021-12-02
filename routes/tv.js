var express = require('express');
const tv_controlers = require('../controllers/tv'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
} 

/* GET TVs */ 
router.get('/', tv_controlers.tv_view_all_Page); 

/* GET detail tv page */ 
router.get('/detail', tv_controlers.tv_view_one_Page); 

/* GET create tv page */ 
router.get('/create', secured, tv_controlers.tv_create_Page); 

/* GET delete tv page */ 
router.get('/delete', secured, tv_controlers.tv_delete_Page); 

/* GET update tv page */ 
router.get('/update', secured, tv_controlers.tv_update_Page); 

module.exports = router; 
