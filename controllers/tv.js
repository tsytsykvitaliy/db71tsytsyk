var tv = require('../models/tvschema'); 
 
// List of all tvs 
exports.tv_list = async function(req, res) { 
    try{ 
        theTVs = await tv.find(); 
        res.send(theTVs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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

// VIEWS 
// Handle a show all view 
exports.tv_view_all_Page = async function(req, res) { 
    try{ 
        theTVs = await tv.find(); 
        res.render('TVs', { title: 'TV Search Results', results: theTVs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 