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
 
// Handle tv delete on DELETE. 
exports.tv_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await tv.findByIdAndDelete(req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};  
 
// Handle tv update form on PUT. 
exports.tv_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await tv.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.brand)  
            toUpdate.brand = req.body.brand; 
        if(req.body.screen)
            toUpdate.screen = req.body.screen; 
        if(req.body.screen_size)
            toUpdate.screen_size = req.body.screen_size; 
        let result = await toUpdate.save(); 
        console.log("Success " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
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

 // Handle a show one view with id specified by query 
 exports.tv_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await tv.findById( req.query.id) 
        res.render('tvdetail',  
{ title: 'TV Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.tv_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('tvcreate', { title: 'TV Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a tv. 
// query provides the id 
exports.tv_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await tv.findById(req.query.id) 
        res.render('tvupdate', { title: 'TV Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};