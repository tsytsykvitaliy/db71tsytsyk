var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tv_controller = require('../controllers/tv'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// tv ROUTES /// 
 
// POST request for creating a tv.  
router.post('/tv', tv_controller.tv_create_post); 
 
// DELETE request to delete tv. 
router.delete('/tv/:id', tv_controller.tv_delete); 
 
// PUT request to update tv. 
router.put('/tv/:id', 
tv_controller.tv_update_put); 
 
// GET request for one tv. 
router.get('/tv/:id', tv_controller.tv_detail); 
 
// GET request for list of all tv items. 
router.get('/tv', tv_controller.tv_list); 
 
module.exports = router; 