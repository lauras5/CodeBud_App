const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// validate email 
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
 
const User = new Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required : true,
        min: 5
    },
    email : {
        type: String,
        required: true,
        validate: [validateEmail, 'Please enter a valid email :)']
    }
});
 
User.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', User);