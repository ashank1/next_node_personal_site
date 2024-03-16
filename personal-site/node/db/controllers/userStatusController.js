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

const addUserStatus = async (req, res) => {
    const userStatus = new UserStatus({
        uId: req.body.uId,
        steam: req.body.steam,
        discord: req.body.discord
    });
}

const updateUserStatus = async (req, res) => {
    try {
        const status = await Status.findById(req.params.uId);
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
    getUserStatus, addUserStatus, updateUserStatus
}