
const { get } = require("../../routes/auth")
const db = require("../../config/db")
 
const ProductController={
    getAllProducts:(req,res)=>{
        const q="SELECT * FROM products"
        db.query(q,(err,data)=>{
            return res.json(data)
        })
    },
    getProductbyId:(req,res)=>{
        const productId=req.params.id
        const q="select * from products where id=?"
        db.query(q,[productId],(err,data)=>{
            return res.json(data[0])
        })
    },
    addproduct:(req,res)=>{
        const {name,description,price,stock,image,category_id}=req.body
        const q="insert into products(name,description,price,stock,image,category_id) values(?,?,?,?,?,?)"
        const values=[
            name,
            description,
            price,
            stock,
            image,
            category_id
        ]
        db.query(q,values,(err,data)=>{
            return res.json(data)
            
        })
    },
    updateProduct:(req,res)=>{
        const productId=req.params.id
        const {name,description,price,stock,image,category_id}=req.body
        const q="update products set name=?,description=?,price=?,stock=?,image=?,category_id=? where id=?"
        const values=[
            name,
            description,
            price,
            stock,
            image,
            category_id,
            productId
        ]
        db.query(q,values,(err,data)=>{
            
            return res.json("Product has been update")
        })
    },
    deleteProduct:(req,res)=>{
        const productId = req.params.id;
        const q = "DELETE FROM products WHERE id = ?";
        db.query(q, [productId], (err, data) => {
          if (err) {
            return res.json(err);
          } 
            return res.json("Product has been deleted");
        })
    },

}
module.exports=ProductController