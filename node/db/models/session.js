const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const expiryDate = new Date()

const sessionSchema = new mongoose.Schema({
    uId: {
        type: Number
    },
    admin: {
        type: Boolean
    },
    sessionId: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        expires: 10,
        default: expiryDate.setDate(expiryDate.getDate() + 10)
    }
})

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;