var express = require('express');
var router = express.Router();
const userController = require('./db/controllers/userController')
const userStatusController = require('./db/controllers/userStatusController')
const linksController = require('./db/controllers/linksController')
const userTabsController = require('./db/controllers/userTabsController')

//Middle ware that is specific to this router
//user routes
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.post('/user', userController.addUser)
router.put('/user/:id', userController.updateUser)
//router.get(/cards/:id&:cid, cardController.updateCard)
//user status routes
router.get('/userstatus', userStatusController.getUserStatus)
router.get('/userstatus/:id', userStatusController.getUserStatusById)
router.post('/userstatus', userStatusController.addUserStatus)
router.put('/userstatus/:id', userStatusController.updateUserStatus)

//links routes
router.get('/links', linksController.getLinks)
router.get('/links/:id', linksController.getLinksById)
router.post('/links', linksController.addLink)
router.put('/links/:id', linksController.updateLink)

//link marks routes
router.put('/linkMark/:id', userTabsController.updateLinkMarkById)
router.get('/linkMark/:id', userTabsController.getLinkMarkById)
router.get('/linkMarks/:params', userTabsController.getAllLinkMarks)


//tabs routes
router.get('/tabs', userTabsController.getUserTabs) 
router.get('/tabs/:id', userTabsController.getUserTabsById)
router.post('/tabs/:id', userTabsController.addUserTabs)
router.put('/tabs/:id', userTabsController.updateUserTabs)

module.exports = router;