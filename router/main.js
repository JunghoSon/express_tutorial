module.exports = function(app, fs){
    app.get('/', function(req, res){
        res.render('index', {
            title: 'MY HOMPAGE',
            length: 5
        });
    });

    app.get('/about', function(req, res){
        res.render('about.html');
    });
};
