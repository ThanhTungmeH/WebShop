require("dotenv").config();

const express = require("express");
const passport = require("./config/passport");
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/category");
const authRoutes = require("./routes/auth");

const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});