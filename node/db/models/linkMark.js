const mongoose = require('mongoose');

const linkMarkSchema = new mongoose.Schema({
    uId: {
        type: Number
    },
    tabId: {
        type: String
    },
    image: {
        Type: String
    },
    link: {
        Type: String
    },
    
})

const LinkMark = mongoose.model('LinkMark', linkMarkSchema);
module.exports = LinkMark;