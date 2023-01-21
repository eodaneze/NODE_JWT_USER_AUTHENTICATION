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

module.exports = createToken
