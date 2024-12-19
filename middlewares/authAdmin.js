const jwt = require("jsonwebtoken")

module.exports = async (req, res, next ) => {
try {

    
    const  {admin_token}  = req.cookies
    console.log(admin_token);
    
    if(!admin_token)  {
        return res.send({success: false, message: "Access denied. Admin token is required."})
    }
    const decode = jwt.verify(admin_token, process.env.JWT_SECRET)
    if(decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.send({success: false, message: "Invalid or expired token"})
    }
    
    next()
    
} catch (error) {
    console.log(error);
    res.status(401).send({ message: "Auth failed!", success: false });
    
}
}
