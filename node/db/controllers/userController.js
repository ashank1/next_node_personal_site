const User = require('../models/user');

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
    const user = new User({
        uId: req.body.uId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
      const newUser = await user.save();
      console.log("User Added: ", req.body)
      res.status(201).json(newUser);
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
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

module.exports = {
    getUsers, getUserById, addUser, updateUser
}