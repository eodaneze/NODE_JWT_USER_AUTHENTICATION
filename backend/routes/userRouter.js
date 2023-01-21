const router = require("express").Router();
const Users = require("../models/userModels");
// regustring a user

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await Users({
      name,
      email,
      password,
    });
    const data = await user.save();
    user &&
      res.json({
        message: "Your account has been created successfully",
        result: data,
      });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// login user

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await Users.findOne({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User does not exist" });
    } else {
      res.json({
        message: "You have successfully logged in",
        result: existingUser,
      });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
