const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    _uId: {
        type: Number
    },
    link: {
        type: String,
    },
    site: {
        type: [String]
    }
})

const Link = mongoose.model('Link', linkSchema);
module.exports = Link;