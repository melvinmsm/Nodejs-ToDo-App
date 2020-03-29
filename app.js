const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();


//setting up template engine
app.set('view engine', 'ejs');

//static files using inbuilt express middleware
app.use(express.static('./public'));

//firing contoller
todoController(app);

app.listen(3002);
console.log('You are listening to 3002');