var mongoose = require('mongoose')
var passport = require('passport')
var express = require('express')

var bodyParser = require('body-parser')
var LocalStrategy = require('passport-local')

var User = require  ('./models/user')
var app = express()

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/crud-cream");


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));


app.use(require("express-session")({
    secret: "Ana",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Crear usuario global
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
 });


var OrderSchema = new mongoose.Schema({
    name: String, 
    description: String, 
    author: {   
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username: String
    }

});

//A continuacion los procesos necesarios para realizar un CRUD
var Order = mongoose.model("Order", OrderSchema);


app.get("/",function(req, res){
    res.render("welcome");
});


app.get("/order", function(req,res){
   Order.find({}, function(err, allorders){
        if(err){
            console.log(err);
        }else{
        res.render("index", {order:allorders});

        }

    });
});

app.get("/order/new", isLog, function(req, res){
    res.render("New");
});

app.post("/order", isLog, function(req, res){

    var name = req.body.name;
    var description = req.body.description;
    var username = res.locals.currentUser = req.user;
    var neworders = {name: name, description: description, username: username}
   
    Order.create(neworders,function(err, newlyAdded){
        if(err){
            console.log(err);
        }else{
            res.redirect("/order");
        }
    });
});

app.get("/register", function(req, res){
    res.render("register"); 
 });


app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/order"); 
        });
    });
});

app.get("/login", function(req, res){
    res.render("login"); 
 });

 app.post("/login", passport.authenticate("local", 
     {
         successRedirect: "/order",
         failureRedirect: "/login"
     }), function(req, res){
 });

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
 });
 
 function isLog(req, res, next){
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect("/login");
 }

app.listen(3000, function(){
    console.log('Database connected.');
});








