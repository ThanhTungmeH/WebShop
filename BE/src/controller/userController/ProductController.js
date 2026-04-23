const db=require("../../config/db")
const ProductController={
    getAllProducts:(req,res)=>{
        const q=`select id, name, description, price, image , stock from products `
        db.query(q,(err,data)=>{
            return res.json(data)
        })
    },
    getProductById:(req,res)=>{
        const productId=req.params.id
        const q=`select id, name, description, price, image , stock from products where id=?`
        db.query(q,[productId],(err,data)=>{
            return res.json(data);
        })
    },
}
module.exports=ProductController
