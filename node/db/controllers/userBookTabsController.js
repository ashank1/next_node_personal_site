const UserBookTabs = require('../models/userBookTabs');


//All tabs from Users
const getUserBookTabs = async (req, res) => {
  try {
      const userBookTabs = await UserBookTabs.find();
      res.json(userBookTabs)
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}
//User tabs by ID
const getUserBookTabsById = async (req, res) => {
  try {
    const userBookTabs = await UserBookTabs.find({ uId: req.params.id});
    if (userBookTabs == null) {
      return res.status(404).json({ message: 'User\'s Tabs not found' });
    }
    res.json(userBookTabs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//Adds a tab to user
//needs user ID 
//tab Index for position (1 to 4)
//tab label for text
const addUserBookTabs = async (req, res) => {
  const userBookTabs = new UserTabs({
      uId: req.body.uId,
      tabIndex: req.body.tabId,
      tabLabel: req.body.tabLabel
  })
  try {
    const newUserBookTabs = await userBookTabs.save();
    console.log("UserBookTabs Added: ", req.body)
    res.status(201).json(newUserBookTabs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
//Updates tab label
const updateUserBookTabs = async (req, res) => {
  try {
    const updateUserBookTabs = await UserTabs.findOneAndUpdate({_id: req.params.id},{tabLabel: req.body.tabLabel, blank: null})
    if (updateUserBookTabs == null) {
      return res.status(404).json({ message: 'User\'s Tabs not found' });
    }
    res.json(updateUserBookTabs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



module.exports = {
    getUserBookTabs, getUserBookTabsById, addUserBookTabs, updateUserBookTabs
}