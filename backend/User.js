// the schema for a user and is used to create a Mongoose Mode .
const mongoose = require("mongoose");


const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);


module.exports = mongoose.model("UserInfo", UserDetailsScehma);

