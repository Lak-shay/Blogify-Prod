// creating the user model/schema using mongoose.
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
//   timestamps will create 'updated at', 'created at'
  { timestamps: true }
);

// exporting this module as user
module.exports = mongoose.model("User", UserSchema);