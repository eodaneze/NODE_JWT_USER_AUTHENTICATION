const { sign, verify } = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
// create your token
const createToken = (user) => {
  const accessToken = sign(
    {
      email: user.email,
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  return accessToken;
};

// creating a validateToken middleware
const validateToken = (req, res, next) => {
  const accessToken = req.cookies["your-access-token"];

  if (!accessToken)
    return res.status(400).json({ message: "User not Authenticated" });
  try {
    const validateToken = verify(accessToken, process.env.JWT_SECRET);
    if (validateToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { createToken, validateToken };
