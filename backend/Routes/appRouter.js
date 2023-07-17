const express = require("express");
const router = express.Router();
const User = require("../Schemas/UserSchema");
const auth = require("../auth");
const {postUser, getUserByNumber, updateUserGivenRespects, updateUser, updateRecievedRespects, createNonExistingUser, searchUserPartialNumber, pushNotification, addToContacts, getContacts} = require('../Controller/Authorization');
const {loginByNumber,logout,loginByToken} = require('../Controller/Tasks');


router.post('/postUsers',postUser);
router.get('/getUsers/:number',getUserByNumber)
router.post('/loginByNumber',loginByNumber)
router.post('/loginByToken',auth,loginByToken)
router.post('/logout',auth,logout)
router.post('/updateGivenRespects',auth,updateUserGivenRespects)
router.post('/updateUser',auth,updateUser)
router.post('/updateRecievedRespects',auth,updateRecievedRespects)
router.post('/createNonExistingUser',auth,createNonExistingUser)
router.get('/searchUserPartialNumber/:id',auth,searchUserPartialNumber)
router.post('/pushNotification',auth,pushNotification)
router.post('/addToContacts',auth,addToContacts)
router.get('/getContacts/:id',auth,getContacts);

module.exports = router;