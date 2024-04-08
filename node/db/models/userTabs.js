const mongoose = require('mongoose');

const userTabsSchema = new mongoose.Schema({
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

const UserTabs = mongoose.model('UserTabs', userTabsSchema);
module.exports = UserTabs;