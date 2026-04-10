const express = require('express');
const CategoryController = require('../controller/Category');
const router = express.Router();
router.get('/', CategoryController.getAllCategories);
router.post('/create', CategoryController.addCategory);
router.delete('/delete/:id', CategoryController.deleteCategory);
module.exports = router;