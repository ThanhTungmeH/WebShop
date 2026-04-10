const db= require("../config/db")

const CategoryController={
    getAllCategories:(req,res)=>{
        const q="SELECT * FROM categories"
        db.query(q,(err,data)=>{
            return res.json(data)
        })
    },
    addCategory:(req,res)=>{
        const {name,description}=req.body
        const q="insert into categories(name,description) values(?,?)"
        const values=[
            name,
            description
        ]
        db.query(q,values,(err,data)=>{
            return res.json(data)
        })
    },
    deleteCategory:(req,res)=>{
        const categoryId = req.params.id;
        const q = "DELETE FROM categories WHERE id = ?";
        db.query(q, [categoryId], (err, data) => {
          if (err) {
            return res.json(err);
          }
          return res.json("Category has been deleted");
        });
    },
}
module.exports=CategoryController