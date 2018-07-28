const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb')
const mongoose = require('mongoose');
const passport = require('passport');
const passportlocal = require('passport-local-mongoose');

const PORT = process.env.PORT || 3001

const app = express();

// allows you to use nexted js objects together
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/codebudDb');

const User = require('./models/userModel');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function (req, res) {
    res.send('Hello World')
})

const testUsers = require('./scripts/seeds').testUsers();

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });


