const jwt = require("jsonwebtoken")

module.exports = async (req, res, next ) => {
try {
    const atoken = req.headers.cookie.token
    if(!atoken){
        return res.send({success: false, message: "Not Authorized"})
    }
    const decode_token = jwt.verify(atoken, process.env.JWT_SECRET)
    if(decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.send({success: false, message: "Not Authorized"})
    }
    next()
    
} catch (error) {
    console.log(error);
    res.status(401).send({ message: "Auth failed!", success: false });
    
}
}
