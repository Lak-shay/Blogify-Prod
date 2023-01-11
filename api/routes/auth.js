const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { estimatedDocumentCount } = require("../models/User");

//REGISTER
// ******Learn more about this async function
// here req contains all the details like username, password etc.
router.post("/register", async (req, res) => {
  try {
    // salt is used to hash the password so that no one can identify the password.
    const salt = await bcrypt.genSalt(10);
    // we get the hashed password
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    // creating the new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    // success
    res.status(200).json(user);
  } catch (err) {
    // failure
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    // check if the username exists
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    // check if the password matches for the username
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    // here we don't want to include the password so we are excluding it. user._doc has all the details like username, password, etc.
    const { password, ...others } = user._doc;
    // we'll display the details except the password.
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;