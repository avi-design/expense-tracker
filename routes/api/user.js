const express = require("express");
const router = express.Router();
const {body, validationResult} = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const User = require("../../model/User");
const jwt = require("jsonwebtoken");
const config = require("config")
//@route POST api/register user
//@desc register route
//@route Public
router.post("/register", 
[
    //  must be an name
    body('name', 'Name is required').not().isEmpty(),
    //  must be an email
    body('email', 'Please use a valid email ID').isEmail(),
    // password must be at least 5 chars long
    body('password', 'please use atleast 6 or more character').isLength({ min: 6 })
  ],
async (req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    const { name, password, email } = req.body;
    //check email id exists or not
    try {
        let user = await User.findOne({ email });
        if(user){
            return res.status(500).json({errors:[{ msg: "User already exists"}]}); 
        }
         
   // grvatar for image

   const avatar = gravatar.url(email, {
    s: "200",
    r:"pg",
    d:"mm"
})

user = new User({
    name,
    email,
    password,
    avatar
})

//bcrypt password
const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(password, salt);
await user.save(); 
//res.send("user registered"); 
 //json webtoken;

 const payLoad = {
     user:{
         id:user.id
     }
 }
 jwt.sign(payLoad,
     config.get("jwtToken"),
     {expiresIn:360000},
     (err, token)=>{
         if(err) throw err;
         res.json({token});
     })
    } catch (error) {
       console.log(error.message);
       res.status(500).send("Server Error!!!...") 
    }

   

});

//router.get("/login", (req, res)=> res.send("login user route...."));

module.exports = router;