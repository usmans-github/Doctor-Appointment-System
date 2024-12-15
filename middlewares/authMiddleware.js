const jwt = require("jsonwebtoken")

module.exports = async (req, res, next ) => {
try {
    const atoken = req.headers["authorization"].split(" ")[1];
 
    
    jwt.verify(atoken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
             return  res.status(200).send({
                message: "Auth failed"
            })
        } else {
            req.body.userId = decoded.id
            next()
        }
    })
    
} catch (error) {
    console.log(error);
    res.status(401).send({ message: "Auth failed!", success: false });
    
}
}