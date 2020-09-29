const jwt =  require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next){
    const token = req.header("x-auth-token");

    //check if not token
    if (!token){
        return res.status(401).json({msg:"not a valid user, Token is not authenticated"});
    }

    //verify token
    try {
        const decoded = jwt.verify(token, config.get("jwtToken"));
        req.user = decoded.user;
        //console.log("user ID request"+ req.user.id);
        next();
    } catch (error) {
        res.status(401).json({ msg: "token is expired" });
    } 
}