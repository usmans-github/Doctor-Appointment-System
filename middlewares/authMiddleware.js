const jwt = require("jsonwebtoken")

module.exports = async (req, res, next ) => {
try {
    const token = req.cookies.token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(200).send({
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