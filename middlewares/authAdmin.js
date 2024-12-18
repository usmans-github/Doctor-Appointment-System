const jwt = require("jsonwebtoken")

module.exports = async (req, res, next ) => {
try {

    
    const { admin_token } = req.headers
    
    if(!admin_token){
        return res.send({success: false, message: "Not Authorized"})
    }
    const decode = jwt.verify(admin_token, process.env.JWT_SECRET)
    if(decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.send({success: false, message: "Not Authorized"})
    }
    req.body.adminId = decode.id
    next()
    
} catch (error) {
    console.log(error);
    res.status(401).send({ message: "Auth failed!", success: false });
    
}
}
