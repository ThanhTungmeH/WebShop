
const express = require('express');
const ProductController = require('../controller/ProductController');
const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.post('/create', ProductController.addproduct);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:id', ProductController.deleteProduct);
module.exports = router;