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
 
// For a specific tv
exports.tv_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await tv.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle tv create on POST. 
exports.tv_create_post = async function(req, res) {
    // Handle Costume create on POST. 
    console.log(req.body);
    let document = new tv(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.brand = req.body.brand; 
    document.screen = req.body.screen; 
    document.screen_size = req.body.screen_size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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
        theTV = await tv.find(); 
        res.render('tv', { title: 'TV Search Results', results: theTV }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 