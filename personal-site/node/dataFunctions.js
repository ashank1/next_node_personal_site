const Link = require('./db/models/links.js');
const User = require('./db/models/user.js');
const UserStatus = require('./db/models/userStatus.js')
const mongoose = require('mongoose');
let steamInfo = {}

async function getSteamLinks(uId) {
    const linkQuerySteam = await Link.find({ 'site': 'steam', 'uId': uId }, "-_id link").exec()
    Object.assign(steamInfo, linkQuerySteam)
    return steamInfo
}

async function updateStatus(data) {
    const userStatus = await UserStatus.find({ uId: data.uId}).exec()
    //object format userStatus[0].steam.displayName)
    if (data.steam != null) { 
        userStatus[0].steam.displayName = data.steam.displayName
        userStatus[0].steam.avatar = data.steam.avatar
        userStatus[0].steam.status = data.steam.status
        userStatus[0].steam.activity = data.steam.activity
    }
    if (data.discord != null) {
        userStatus[0].discord.displayName = data.discord.displayName
        userStatus[0].discord.avatar = data.discord.avatar
        userStatus[0].discord.status = data.discord.status
        userStatus[0].discord.activity = data.discord.activity
    }
    const res = await UserStatus.updateOne({uId: data.uId}, {steam: userStatus[0].steam, discord: userStatus[0].discord})
}

async function getUsers() {
    let user = await User.find({}, "-_id uId").lean().exec()
    return user
}

module.exports = {
    getSteamLinks, updateStatus, getUsers
}