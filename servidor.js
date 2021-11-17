//Modules
const path = require('path');//Module join directories
const express = require('express'); //Module Servidor 
const morgan = require('morgan'); //Module Console
const mongoose = require('mongoose');//Module Mongoose Data Base

const app = express();

//Connect Data Base
mongoose.connect('mongodb+srv://user:password@prueba.aqjq3.mongodb.net/nameofdatabase?retryWrites=true&w=majority') //MongoDb Atlas 
.then(db => console.log("Data Base Connect"))
.catch(err => console.error(err))


//Settings
app.set('port', process.env.PORT || 3000); //Choose Port
app.set('views', path.join(__dirname, 'views')) //Get views
app.set('view engine', 'ejs')//Module views


//Importing routes
const indexRoutes = require('./routes/index');//Routes Data Base


//Middlewares
app.use(morgan('dev'));//Show data for console
app.use(express.urlencoded({extended: false}));//Transform data HTML in JSON

//Routes
app.use('/', indexRoutes);//Show Routes in the Page


//Starting Server
app.listen(app.get('port'), () =>{ //Connect the Port with the Server
    console.log('Server on port ' + app.get('port'));
});