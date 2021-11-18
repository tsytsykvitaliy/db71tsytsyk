var express = require('express');
const tv_controlers = require('../controllers/tv'); 
var router = express.Router();
link(rel='stylesheet', href='/stylesheets/tv.css')

/* GET TVs */ 
router.get('/', tv_controlers.tv_view_all_Page); 

/* GET detail tv page */ 
router.get('/detail', tv_controlers.tv_view_one_Page); 

/* GET create tv page */ 
router.get('/create', tv_controlers.tv_create_Page); 

/* GET create update page */ 
router.get('/update', tv_controlers.tv_update_Page);

/* GET delete tv page */ 
router.get('/delete', tv_controlers.tv_delete_Page); 

module.exports = router; 
