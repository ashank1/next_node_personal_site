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
    },
    admin: {
        type: Boolean
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;