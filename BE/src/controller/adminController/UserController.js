const db=require("../../config/db")
const UserController={
    getAllUser:(req,res)=>{
        const q="SELECT * FROM users"
        db.query(q,(err,data)=>{
            return res.json(data)
        })
    },
    getUserbyId:(req,res)=>{
        const userId=req.params.id
        const q="select * from users where id=?"
        db.query(q,[userId],(err,data)=>{
            return res.json(data[0])
        })

    },
    deleteUser:(req,res)=>{
        const userId = req.params.id;
        const q = "DELETE FROM users WHERE id = ?";
        db.query(q, [userId], (err, data) => {
          if (err) {
            return res.json(err);
          }
            return res.json("User has been deleted");
        })
    },
    
}
module.exports=UserController