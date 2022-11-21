const express = require("express");
const ejs = require("ejs");
const PORT = 3000;
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/Users');

mongoose.connect('mongodb://localhost:27017/usersDB');

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}))


app.get("/", (req, res) => {
    res.render('index');
});

app.get("/register", (req, res) => {
    res.render('register');
});

app.get("/login", (req, res) => {
    res.render('login');
});

//////// PORT REQUESTS ARE HERE /////////
app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        email: email,
        password: password
    });

    newUser.save(err => {
        err ? console.log(err) : res.send('Successfully Created User');
    });
});

app.post("/login", (req, res) => {
    
});


app.listen(PORT, () => console.log("Server Started On Port 3000"));