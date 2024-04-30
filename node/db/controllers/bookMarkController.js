const BookMark = require('../models/bookMark')
  //gets all links
  const getBookMarkById = async (req,res) => {
    try {
      const tabContent = await BookMark.findById(id = req.params.id)
        if (tabContent == null) {
            return res.status(404).json({ message: 'User\'s Book Mark was not found' });
          }
          res.json(tabContent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  }
  //Updates single link
  const updateBookMarkById = async (req, res) => {
      try {
        const updateBookMark = await BookMark.findByIdAndUpdate(req.params.id, {link: req.body.link, label: req.body.label})
        /*if (updateBookMark == null) {
          return res.status(404).json({ message: 'User\'s Book Mark was not found' });
        }*/
        res.json(updateBookMark)
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
  }
  //Gets all links
  const getAllBookMarks = async (req, res) => {
    const combinedParams = req.params.params;
    const [quId, tId] = combinedParams.split('&');
    try {
        const tabContent = await BookMark.find().where({uId: quId}).where({tabId: tId})
        if (tabContent == null) {
            return res.status(404).json({ message: 'User\'s Book Mark was not found' });
          }
          res.json(tabContent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  }
  //Adds a link
  const addBookMark = async (req, res) => {
    const bookMark = new BookMark({
      uId: req.body.uId,
      tabId: req.body.tabId,
      label: req.body.label,
      link: req.body.link
  })
    try {
      const response = await bookMark.save()
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  //removes a link
  const removeBookMark = async (req, res) => {
    try {
      const response = await BookMark.findByIdAndDelete(req.params.id)
      res.json(response)
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  

module.exports = {
    getBookMarkById, updateBookMarkById, getAllBookMarks, addBookMark, removeBookMark
}