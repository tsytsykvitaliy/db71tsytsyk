var express = require('express');
const tv_controlers= require('../controllers/tv'); 
var router = express.Router();

/* GET TVs */ 
router.get('/', tv_controlers.tv_view_all_Page); 
module.exports = router; 
