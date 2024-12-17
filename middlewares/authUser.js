const jwt = require("jsonwebtoken")

module.exports = async (req, res, next ) => {
try {

    
    const { user_token } = req.cookies
    
    if(!user_token){
        return res.send({success: false, message: "Not Authorized"})
    }
    const decode_token = jwt.verify(user_token, process.env.JWT_SECRET)
    if(decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.send({success: false, message: "Not Authorized"})
    }
    next()
    
} catch (error) {
    console.log(error);
    res.status(401).send({ message: "Auth failed!", success: false });
    
}
}