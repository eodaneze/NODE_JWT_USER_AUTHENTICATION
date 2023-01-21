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


module.exports = router;
