
const express = require('express');
const ProductController = require('../../controller/adminController/ProductController');
const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/get/:id', ProductController.getProductbyId);
router.post('/create', ProductController.addproduct);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:id', ProductController.deleteProduct);
module.exports = router;