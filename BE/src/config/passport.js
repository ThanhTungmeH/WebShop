const passport= require("passport")
const GoogleStrategy= require("passport-google-oauth20").Strategy;
const db=require("./db.js")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
  async (accessToken, refeshToken, profile, done )=>{
    const googleId= profile.id;
    const name= profile.displayName;
    const email= profile.emails[0].value;
    const avatar= profile.photos[0].value;
    db.query ("select * from users where google_id=?", [googleId],(err, results)=>{
        if(err){
          console.error("Database error:", err);
          return done(err);
        }
        if(results.length>0){
            return done (null, results[0]);
        }
       db.query("insert into users (google_id, name, email, avatar, role) values (?,?,?,?,?)",
        [googleId, name, email, avatar, 'user'],
        (err, results)=> {
            if(err){
              console.error("Database insert error:", err);
              return done(err);
            }
            const newUser ={
                id: results.insertId,
                googleId,
                name,
                email,
                avatar,
                role: 'user'
            };
            done(null, newUser);
        }
       ) 
    })
  }
));
module.exports=passport;