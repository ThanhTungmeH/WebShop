const db = require("../../config/db");

const CartController = {
  addToCart: (req, res) => {
    const userId = req.user.id;
    const { product_id, quantity } = req.body;

    // Validate input
    if (!product_id || !quantity) {
      return res.status(400).json({ message: "product_id and quantity are required" });
    }

    if (quantity <= 0) {
      return res.status(400).json({ message: "quantity must be greater than 0" });
    }

    // Step 1: Check product exists and has enough stock
    const checkProductQuery = "SELECT id, stock FROM products WHERE id = ?";
    db.query(checkProductQuery, [product_id], (err, products) => {
      if (err) return res.status(500).json(err);
      
      if (!products || products.length === 0) {
        return res.status(404).json({ message: "Product not found" });
      }

      if (products[0].stock < quantity) {
        return res.status(400).json({
          message: `Not enough stock. Available: ${products[0].stock}`,
        });
      }

      // Step 2: Check if user has a cart, if not create one
      const getCartQuery = "SELECT id FROM carts WHERE user_id = ?";
      db.query(getCartQuery, [userId], (err, carts) => {
        if (err) return res.status(500).json(err);

        const handleAddToCart = (cartId) => {
          // Step 3: Check if product already in cart
          const checkCartItemQuery =
            "SELECT id, quantity FROM cart_items WHERE cart_id = ? AND product_id = ?";
          db.query(
            checkCartItemQuery,
            [cartId, product_id],
            (err, cartItems) => {
              if (err) return res.status(500).json(err);

              if (cartItems.length > 0) {
                // Product already in cart, update quantity
                const updateQuery =
                  "UPDATE cart_items SET quantity = quantity + ? WHERE cart_id = ? AND product_id = ?";
                db.query(
                  updateQuery,
                  [quantity, cartId, product_id],
                  (err) => {
                    if (err) return res.status(500).json(err);
                    return res.status(200).json({
                      message: "Product quantity updated in cart",
                    });
                  }
                );
              } else {
                // Add new item to cart
                const insertQuery =
                  "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)";
                db.query(insertQuery, [cartId, product_id, quantity], (err) => {
                  if (err) return res.status(500).json(err);
                  return res.status(201).json({
                    message: "Product added to cart",
                  });
                });
              }
            }
          );
        };

        if (carts.length > 0) {
          // Cart exists, add/update item
          handleAddToCart(carts[0].id);
        } else {
          // Create new cart first
          const createCartQuery = "INSERT INTO carts (user_id) VALUES (?)";
          db.query(createCartQuery, [userId], (err, result) => {
            if (err) return res.status(500).json(err);
            handleAddToCart(result.insertId);
          });
        }
      });
    });
  },
};

module.exports = CartController;