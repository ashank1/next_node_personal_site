const mongoose = require('mongoose');

const bookMarkSchema = new mongoose.Schema({
    uId: {
        type: Number
    },
    tabId: {
        type: String
    },
    label: {
        type: String
    },
    link: {
        type: String
    },
    
})

const BookMark = mongoose.model('BookMark', bookMarkSchema);
module.exports = BookMark;