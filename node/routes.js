var express = require('express');
var router = express.Router();
const userController = require('./db/controllers/userController')
const userStatusController = require('./db/controllers/userStatusController')
const linksController = require('./db/controllers/linksController')
const userTabsController = require('./db/controllers/userTabsController')
const bookMarkController = require('./db/controllers/bookMarkController')
const userBookTabsController = require('./db/controllers/userBookTabsController')

//Middle ware that is specific to this router
//user routes
router.get('/user', userController.getUsers)//Done
router.get('/user/:id', userController.getUserById)
router.post('/user', userController.addUser)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/:id', userController.updateUser)
router.post('/login/', userController.loginUser)//Done
router.delete('/logout/', userController.logoutUser)
router.get('/validate/:params', userController.getSession)//Done

//user status routes
router.get('/userstatus', userStatusController.getUserStatus)//Done
router.get('/userstatus/:id', userStatusController.getUserStatusById)//Done
router.post('/userstatus', userStatusController.addUserStatus)
router.put('/userstatus/:id', userStatusController.updateUserStatus)

//links routes
router.get('/links', linksController.getLinks)//Done
router.get('/links/:id', linksController.getLinksById)//Done
router.post('/links', linksController.addLink)//Done
router.put('/links/:id', linksController.updateLink)//Done

//link marks routes
router.post('/linkMark/:id', userTabsController.updateLinkMarkById)//Done
router.get('/linkMark/:id', userTabsController.getLinkMarkById)//Done
router.get('/linkMarks/:params', userTabsController.getAllLinkMarks)//Done
router.put('/linkMarks/', userTabsController.addLinkMark)// Done
router.delete('/linkMark/:id', userTabsController.removeLinkMark)//Done
//book mark routes
router.post('/bookMark/:id', bookMarkController.updateBookMarkById)//Done
router.get('/bookMark/:id', bookMarkController.getBookMarkById)//Done
router.get('/bookMarks/:params', bookMarkController.getAllBookMarks)//Done
router.put('/bookMark/', bookMarkController.addBookMark)// Done
router.delete('/bookMark/:id', bookMarkController.removeBookMark)//Done
//tabs routes
router.get('/tabs', userTabsController.getUserTabs) //Done
router.get('/tabs/:id', userTabsController.getUserTabsById)//Done
router.put('/tabs/:id', userTabsController.addUserTabs)
router.post('/tabs/:id', userTabsController.updateUserTabs)//Done
//Book Tabs routes
router.get('/bookTabs', userBookTabsController.getUserBookTabs) //Done
router.get('/bookTabs/:id', userBookTabsController.getUserBookTabsById)//Done
router.put('/bookTabs/:id', userBookTabsController.addUserBookTabs)
router.post('/bookTabs/:id', userBookTabsController.updateUserBookTabs)//Done

module.exports = router;