const router = require("express").Router();
const Users = require("../models/userModels");
const bcrypt = require("bcryptjs");
// regustring a user

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password)
  try {
    const user = await Users({
      name,
      email,
      password: hashedPassword,
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
    } 

    const comparePassword = bcrypt.compareSync(password, existingUser.password);

    if(!comparePassword){
        res.status(404).json({ message: "Password is wrong" });
    }else{
        res.json({message: "You have logged in successfully", result: existingUser})
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
