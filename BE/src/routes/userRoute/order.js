const express = require("express");
const OrderController = require("../../controller/userController/OrderController");
const authMiddleware = require("../authMiddleware");

const router = express.Router();

router.post("/checkout", authMiddleware, OrderController.createOrder);

module.exports = router;