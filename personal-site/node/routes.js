var express = require('express');
var router = express.Router();
const userController = require('./db/controllers/userController')
const userStatusController = require('./db/controllers/userStatusController')
const linksController = require('./db/controllers/linksController')

//Middle ware that is specific to this router
//user routes
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.post('/user', userController.addUser)
router.put('/user/:id', userController.updateUser)

//user status routes
router.get('/userstatus', userStatusController.getUserStatus)
router.post('/userstatus', userStatusController.addUserStatus)
router.put('/userstatus/:id', userStatusController.updateUserStatus)

//links routes
router.get('/links', linksController.getLinks)
router.get('/user/:id', linksController.getLinksById)
router.post('/links', linksController.addLink)
//router.put('/links/:id', linksController.updateUserStatus)

module.exports = router;