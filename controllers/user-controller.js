const  userModel = require("../models/user-model")
const bcrypt = require("bcrypt")


const register = async(req, res) => {
    
    const { email, password, name,  }  = req.body
    
    try {
           const existingUser = await userModel.findOne({email: email})
            if(existingUser) return res.status(200).send({success: false, message: "User already exists"})

            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, async function(err, hash) {
                    // Store hash in your password DB.
                    const newUser = await userModel.create({
                        name: name,
                        email: email,
                        password: hash  
        
                    })
                    newUser.save()    
                    res.status(201).send({success: true, message: "User registered successfully", data: newUser})
                });
            }); 

           

          
           
       
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: `Register controller ${error.message}`})    
    }

}
const login = () => {}


module.exports = {
    register,
    login
}