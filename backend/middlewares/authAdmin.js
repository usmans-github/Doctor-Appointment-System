const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const { admin_token } = req.cookies;

    if (!admin_token) {
      return res
        .status(401)
        .send({ success: false, message: "Access denied. No token provided." });
    }

    // Verify the token
    const decode = jwt.verify(admin_token, process.env.JWT_SECRET);

    // Check if the decoded token matches the admin credentials
    if (
      decode.email === process.env.ADMIN_EMAIL &&
      decode.password === process.env.ADMIN_PASSWORD
    ) {
      next(); // Allow access
    } else {
      return res
        .status(401)
        .send({ success: false, message: "Invalid or expired token." });
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({ success: false, message: "Auth failed!" });
  }
};
