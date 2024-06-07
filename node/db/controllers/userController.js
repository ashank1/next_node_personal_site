const User = require('../models/user');
const Session = require('../models/session')
const Links = require('../models/links')//uId, link, site X2
const BookTabs = require('../models/userBookTabs') //uId, tabIndex, tabLabel X3
const LinkTabs = require('../models/userTabs')//uId, tabIndex, tabLabel X4
const Status = require('../models/userStatus')
const { randomUUID } = require('crypto');
const UserStatus = require('../models/userStatus');

//All Users
const getUsers = async (req, res) => {
  try {
      const user = await User.find();
      res.json(user)
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}
//User by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.find({ uId: req.params.id});
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addUser = async (req, res) => {
  let userId = 0
  let idCheck = false
  const checkUserID = async (userId)=>{
    let user = await User.find({uId: userId})
    if (user == null) {
      return false
    } else {
      return true
    }
  }

  while (idCheck == false) {
    userId = Math.floor(Math.random() * 9991) + 10;
    console.log(userId)
    idCheck = await checkUserID(userId)
  }

  const user = new User({
      uId: userId,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      admin: req.body.admin
  })
  const linkSteam = new Links({uId: userId, link: 'steam', site: 'steam'})
  const linkDiscord = new Links({uId: userId, link: 'discord', site: 'discord'})
  const linkSpotify = new Links({uId: userId, link: 'spotify', site: 'spotify'})
  const BookGroupOne = new BookTabs({uId: userId, tabIndex: 1, tabLabel: 'tabs'})
  const BookGroupTwo = new BookTabs({uId: userId, tabIndex: 2, tabLabel: 'tabs'})
  const BookGroupThree = new BookTabs({uId: userId, tabIndex: 3, tabLabel: 'tabs'})
  const LinkGroupOne = new LinkTabs({uId: userId, tabIndex: 1, tabLabel: 'links'})
  const LinkGroupTwo = new LinkTabs({uId: userId, tabIndex: 2, tabLabel: 'links'})
  const LinkGroupThree = new LinkTabs({uId: userId, tabIndex: 3, tabLabel: 'links'})
  const LinkGroupFour = new LinkTabs({uId: userId, tabIndex: 4, tabLabel: 'links'})
  const DefaultStatus = new UserStatus({uId: userId, steam: {displayName: 'unset', status: "Currently Offline", activity: "" }, discord: {displayName: 'unset', status: "Currently Offline", activity: ""}})
//https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b5/b5bd56c1aa4644a474a2e4972be27ef9e82e517e_full.jpg
  try {
    const newUser = await user.save(); await linkSpotify.save()
    await linkSteam.save(); await linkDiscord.save(); await BookGroupOne.save()
    await BookGroupTwo.save(); await BookGroupThree.save(); await LinkGroupOne.save()
    await LinkGroupTwo.save(); await LinkGroupThree.save(); await LinkGroupFour.save()
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  console.log("User Added: ", req.body.username)
}

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({uId: req.body.uId})
    if (user == null) {
      return res.status(404).json({ message: 'user not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (req.body.username != null) {
      user.username = req.body.username
    }
    if (req.body.email != null) {
      user.email = req.body.email
    }
    if (req.body.password != null) {
      user.password = req.body.password
    }
    if (req.body.admin == null) {
      user.admin = req.body.admin
    }
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getSession = async (req, res) => {
  const sesh = await Session.findOne({sessionId: req.params.params})
  if (sesh == null) {
    return res.status(404).json({ message: 'Session not found' });
  } else {
    return res.json(sesh)
  }
}
//recives username and password,
//finds user then checks if password match
//if they match record a session id and store it in db
const loginUser = async (req, res) => {
  const user = await User.findOne({username: req.body.username})
  let sesId = randomUUID();
  if (user == null) {
    return res.status(404).json({ message: 'User not found' });
  }
  if (user.password == req.body.password) {
    await Session.create({uId: user.uId, sessionId: sesId, admin: user.admin})
    return res.json(sesId)
  } else {
    let res = "Password didnt match"
    return res
  }
}

const logoutUser = async (req, res) => {
  try {
    const sesh = await Session.findOneAndDelete({sessionId: req.body.sessionID})
    if (sesh == null) {
      return res.status(404).json({ message: 'session not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
    getUsers, getUserById, addUser, deleteUser, updateUser, loginUser, logoutUser, getSession
}