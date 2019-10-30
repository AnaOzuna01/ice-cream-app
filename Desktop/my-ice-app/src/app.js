const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const app = express();


//connecting to db
mongoose.connect('mongodb://localhost/crud-cream')
.then(db => console.log('DataBase connected'))
.catch(e => console.log('Error to connect'));


//importing routes
const indexRoutes = require('./routes/index');



//settings) 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use('/', indexRoutes);
//app.set('view engine', 'ejs');


//middleawares
app.use(express.urlencoded({
    extended:false
}));



//routes
app.use('/', indexRoutes);


//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});