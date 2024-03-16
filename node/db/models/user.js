const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uId: {
        type: Number
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;