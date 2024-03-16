const mongoose = require('mongoose');

const userStatusSchema = new mongoose.Schema({
    uId: {
        type: Number
    },
    steam: {
        displayName: {type: String},
        avatar: {type: String},
        status: {type: String},
        activity: {type: String}
    },
    discord: {
        displayName: {type: String},
        avatar: {type: String},
        status: {type: String},
        activity: {type: String}
    }
})

const UserStatus = mongoose.model('userStatus', userStatusSchema);
module.exports = UserStatus;

