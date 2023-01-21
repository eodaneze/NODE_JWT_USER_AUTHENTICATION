const router = require("express").Router();
const Users = require("../models/userModels");
const bcrypt = require("bcryptjs");
const {createToken, validateToken} = require("../auth/token");
const { signUpUser, loginUser } = require("../controller/controller");
// regustring a user

router.post("/signup", signUpUser);

// login user

router.post("/login", loginUser);

router.get("/profile", validateToken, (req, res) => {
    res.send("This is user profile")
})
module.exports = router;
