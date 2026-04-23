const express = require('express');
const UserController = require('../../controller/adminController/UserController');
const router = express.Router();
router.get('/', UserController.getAllUser);
router.get('/get/:id', UserController.getUserbyId);
router.delete('/delete/:id', UserController.deleteUser);
module.exports = router;
