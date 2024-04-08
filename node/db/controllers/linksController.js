const Link = require('../models/links');

//All links
const getLinks = async (req, res) => {
    try {
        const link = await Link.find();
        res.json(link)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getLinksById = async (req, res) => {
  //console.log(req.params.id)
    try {
      const link = await Link.findById(req.params.id);
      if (link == null) {
        return res.status(404).json({ message: 'User\'s links not found' });
      }
      res.json(link);
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

const addLink = async (req, res) => {
    const link = new Link({
        uId: req.body.uId,
        link: req.body.link,
        site: req.body.site
    });
}

const updateLink = async (req, res) => {
  console.log(req.body)
  try {
    const link = await Link.findById(req.params.id);
    if (link == null) {
      return res.status(404).json({ message: 'User\'s link not found' });
    }
    if (req.body.link != null) {
      link.link = req.body.link
    }
    if (req.body.site != null) {
      link.site = req.body.site
    }
    const updatedLink = await link.save();
    res.json(updatedLink);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
    getLinks, getLinksById, addLink, updateLink
}