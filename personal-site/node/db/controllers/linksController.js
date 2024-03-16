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
    try {
      const link = await Link.find({ uId: req.params.id});
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

module.exports = {
    getLinks, getLinksById, addLink
}