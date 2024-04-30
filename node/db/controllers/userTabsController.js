const UserTabs = require('../models/userTabs');
const LinkMark = require('../models/linkMark');

//All tabs from Users
const getUserTabs = async (req, res) => {
  try {
      const userTabs = await UserTabs.find();
      res.json(userTabs)
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}
//User tabs by ID
const getUserTabsById = async (req, res) => {
  try {
    const userTabs = await UserTabs.find({ uId: req.params.id});
    if (userTabs == null) {
      return res.status(404).json({ message: 'User\'s Tabs not found' });
    }
    res.json(userTabs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//Adds a tab to user
//needs user ID 
//tab Index for position (1 to 4)
//tab label for text
const addUserTabs = async (req, res) => {
  const userTabs = new UserTabs({
      uId: req.body.uId,
      tabIndex: req.body.tabId,
      tabLabel: req.body.tabLabel
  })
  try {
    const newUserTabs = await userTabs.save();
    res.status(201).json(newUserTabs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
//Updates tab label
const updateUserTabs = async (req, res) => {
  try {
    const updateUserTabs = await UserTabs.findOneAndUpdate({_id: req.params.id},{tabLabel: req.body.tabLabel, blank: null})
    if (updateUserTabs == null) {
      return res.status(404).json({ message: 'User\'s Tabs not found' });
    }
    res.json(updateUserTabs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getLinkMarkById = async (req,res) => {
  try {
    const tabContent = await LinkMark.findById(id = req.params.id)
      if (tabContent == null) {
          return res.status(404).json({ message: 'User\'s Link Mark was not found' });
        }
        res.json(tabContent);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}
//Updates single link
const updateLinkMarkById = async (req, res) => {
    try {
      const updateLinkMark = await LinkMark.findByIdAndUpdate(req.params.id, {link: req.body.link, image: req.body.image})
      if (updateLinkMark == null) {
        return res.status(404).json({ message: 'User\'s Link Mark was not found' });
      }
      res.json(updateLinkMark)
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}
//Gets all links
const getAllLinkMarks = async (req, res) => {
  const combinedParams = req.params.params;
  const [quId, tId] = combinedParams.split('&');
  try {
      const tabContent = await LinkMark.find().where({uId: quId}).where({tabId: tId})
      if (tabContent == null) {
          return res.status(404).json({ message: 'User\'s Link Mark was not found' });
        }
        res.json(tabContent);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}
//Adds a link
const addLinkMark = async (req, res) => {
  const linkMark = new LinkMark({
    uId: req.body.uId,
    tabId: req.body.tabId,
    image: req.body.image,
    link: req.body.link
})
  try {
    const response = await linkMark.save()
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const removeLinkMark = async (req, res) => {
  try {
    const response = await LinkMark.findByIdAndDelete(req.params.id)
    res.json(response)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
    getUserTabs, getUserTabsById, addUserTabs, updateUserTabs, 
    getLinkMarkById, updateLinkMarkById, getAllLinkMarks, addLinkMark, removeLinkMark
}