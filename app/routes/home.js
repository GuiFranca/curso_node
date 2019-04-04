module.exports = function(app){
    app.get('/', function(req,res){
        app.app.controllers.home(app, req, res)
    });
}