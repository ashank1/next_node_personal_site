const mongoose = require('mongoose');

const userBookTabsSchema = new mongoose.Schema({
    uId: {
        type: Number
    },
    tabIndex: {
        type: Number
    },
    tabLabel: {
        Type: String
    }
})

const UserBookTabs = mongoose.model('UserBookTabs', userBookTabsSchema);
module.exports = UserBookTabs;