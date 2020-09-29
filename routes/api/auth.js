const express = require("express");
const router = express.Router();
const authUser = require("../../middleware/auth");
const User = require("../../model/User");
const {body, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
//@route GET api/token authentication
//@desc test route
//@route Public
router.get("/", authUser, async (req, res)=> {
    try {
      const userDetails = await User.findById(req.user.id).select("-password");
      res.json(userDetails); 
    } catch (error) {
    console.error(error.message);  
    res.status(500).send("server error...");    
    }
});

//@route GET api/login
//@desc aunthenticate and get
//@route Public

router.post("/login", 
[
    //  must be an email
    body('email', 'Please use a valid email ID').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Password Required').not().isEmpty().exists()
  ],
async (req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    const {password, email } = req.body;
    //check email id exists or not
    try {
        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({errors:[{ msg: "Invalid Credentials"}]}); 
        }

const isMatch = await bcrypt.compare(password, user.password);

if(!isMatch){
    return res.status(400).json({errors:[{ msg: "Invalid Credentials"}]}); 
}


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
       console.error(error.message);
       res.status(500).send("Server Error!!!...") 
    }

   

});

module.exports = router;