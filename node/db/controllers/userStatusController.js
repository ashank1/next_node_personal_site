const UserStatus = require('../models/userStatus');

//All links
const getUserStatus = async (req, res) => {
    try {
        const userStatus = await UserStatus.find();
        res.json(userStatus)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getUserStatusById = async (req, res) => {
    try {
      const userStatus = await UserStatus.find({ uId: req.params.id});
      if (userStatus == null) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(userStatus);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

const addUserStatus = async (req, res) => {
    const userStatus = new UserStatus({
        uId: req.body.uId,
        steam: req.body.steam,
        discord: req.body.discord
    })
    try {
        const newUserStatus = await userStatus.save();
        console.log("User's Status Added: ", req.body)
        res.status(201).json(newUserStatus);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

const updateUserStatus = async (req, res) => {
    try {
        const status = await UserStatus.find({ uId: req.params.uId});
        if (status == null) {
          return res.status(404).json({ message: 'Status of User not found' });
        }
        if (req.body.uId != null) {
            status.uID = req.body.uId
        }
        if (req.body.title != null) {
            status.steam = req.body.steam
        }
        if (req.body.text != null) {
            status.discord = req.body.discord
        }
        console.log("Status Updated: ", req.body)
        const updatedPost = await status.save();
        res.json(updatedPost);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

module.exports = {
    getUserStatus, addUserStatus, updateUserStatus, getUserStatusById
}