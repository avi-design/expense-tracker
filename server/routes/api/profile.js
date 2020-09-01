const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("config");
const User = require("../../model/User");
const auth = require("../../middleware/auth");
const Profile = require("../../model/Profile");
const Transaction = require("../../model/Transaction");
const {check, validationResult} = require("express-validator");
//@route GET api/profile/me
//@desc  get current user profile
//@route Private
router.get("/me", auth, async(req, res)=> {
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate('user',['name','email']);
        if(!profile){
            return res.status(400).send({msg:"There is no profile for this user"});
        }
        res.status(200).json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(400).send({msg:'server error...'});  
    }
});

//@route GET api/profile/createAndUpdate
//@desc  Create current user profile or update
//@route Private

router.post("/createAndUpdate",[auth,[
    check("firstname", "first name is requied").not().isEmpty(),
    check("lastname", "last name is requied").not().isEmpty()
]], async (req, res)=>{
        const profileError = validationResult(req);
        if(!profileError.isEmpty()){
            return res.status(400).json({error: profileError.array()});
        }
        
const {firstname, lastname, address, city, country, aboutme } = req.body;

const profileFeilds = {};

profileFeilds.user = req.user.id;
if(firstname) profileFeilds.firstname = firstname;
if(lastname) profileFeilds.lastname = lastname;
if(address) profileFeilds.address = address;
if(city) profileFeilds.city = city;
if(country) profileFeilds.country = country;
if(aboutme) profileFeilds.aboutme = aboutme;

try {
    //update profile
    let profile = await Profile.findOne({user:req.user.id});
    if (profile){
        profile = await Profile.findOneAndUpdate(
            {user:req.user.id},
            {$set:profileFeilds},
            {new:true}
        )
        return res.json(profile);
    }
    //create profile
    profile = new Profile(profileFeilds)

    await profile.save();
    res.json(profile);
} catch (error) {
    console.error(error.message);
    res.status(500).send("server error")
}

});

//@route GET api/profile/deleteProfile
//@desc  Delete Profile & Tansaction etc
//@route Private

router.delete("/delete", auth, async(req,res)=>{
    try {
    //remove profile
    const profile = await Profile.findOneAndRemove({ user:req.user.id });
    //remove user transaction
    const transaction = await Transaction.findOneAndRemove({ user:req.user.id });
    //remove user
    const user = await User.findOneAndRemove({ _id:req.user.id });
    
    res.json("User deleted...");
    
   // There is no such profile to delete
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: "There is no such profile to delete"});
    }

});


//@route GET api/profile/github/:username
//@desc  Get github user Profile
//@route Public

router.get("/github/:username",(req, res) =>{
    try {
        const options ={
            uri:`https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client-id=${config.get('gitHubClientId')}&client_secret=${config.get('gitHubClientSecret')}`,
            method:'GET',
            headers: {'user-agent':'node.js'}
        }
        request(options,(error, response, body)=>{
            if(error) console.error(error);
        if(response.statusCode !== 200){
            res.status(404).json({msg:"No Profile found...!!!"});
        }
        res.json(JSON.parse(body));
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error..!!!");
    }
})


module.exports = router;