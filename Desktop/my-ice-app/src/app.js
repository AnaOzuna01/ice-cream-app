const express = require('express');
const mongoose = require('mongoose');


const app = express();


//connecting to db
mongoose.connect('mongodb://localhost/crud-cream')
.then(db => console.log('DataBase connected'))
.catch(e => console.log(err));
//importing routes
const indexRoutes = require('./routes/index');

//settings) 
app.set('port', process.env.PORT || 3000);

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