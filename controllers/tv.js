var tv = require('../models/tvschema'); 
 
// List of all tv 
exports.tv_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: tv list'); 
}; 
 
// for a specific tv
exports.tv_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: tv detail: ' + req.params.id); 
}; 
 
// Handle tv create on POST. 
exports.tv_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: tv create POST'); 
}; 
 
// Handle tv delete form on DELETE. 
exports.tv_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tv delete DELETE ' + req.params.id); 
}; 
 
// Handle tv update form on PUT. 
exports.tv_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: tv update PUT' + req.params.id); 
}; 