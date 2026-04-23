require("dotenv").config();

const express = require("express");
const passport = require("./config/passport");
//routes for admin
const productRoutes = require("./routes/adminRoute/products");
const categoryRoutes = require("./routes/adminRoute/category");
const userRoutes = require("./routes/adminRoute/user");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/adminRoute/order");
//routes for user
const userOrderRoutes = require("./routes/userRoute/order");
const userProductRoutes = require("./routes/userRoute/product");


const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);
app.use("/admin/products", productRoutes);
app.use("/admin/categories", categoryRoutes);
app.use("/admin/users", userRoutes);
app.use("/admin/orders", orderRoutes);
app.use("/user/orders", userOrderRoutes);
app.use("/user/products", userProductRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});