const data = [{ item: 'play' }, { item: 'walk' }, { item: 'sleep' }];


module.exports = function (app) {

    app.get('/todo', function (req, res) {
        res.render('todo', {todos:data});
    });

    app.post('/todo', function (req, res) {

    });

    app.delete('/todo', function (req, res) {

    });
};