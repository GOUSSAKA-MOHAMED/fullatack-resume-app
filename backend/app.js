const express = require("express");
const mongoose = require("mongoose");
const app = express();

const User = require("./User")


app.use(express.json());
const cors = require("cors");
app.use(cors({
  origin: "*"
}));

// // cripting password with jwt 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

// urI to connect db 
const mongoUrl ="mongodb+srv://mohamed:eWAeWA@ewaproject.3hapfqm.mongodb.net/?retryWrites=true&w=majority";

// check if connecting with db
mongoose.connect(mongoUrl).then(() => {
  console.log("Connected to database");
})  .catch((e) => console.log(e));




// register 
app.post("/register", async (req, res) => {
  const { firstName: fname , lastName: lname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
      const newUser = await User.create({
        fname,
        lname,
        email,
        password: encryptedPassword,
      });

      res.json({ status: "ok", user: newUser.toObject()});

  } catch (error) {
    res.json({ status: "error" });
  }
});



// login 
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token, message: 'Login successful' });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});



// listening to port 5000
app.listen(5000, () => {
  console.log("Server Started");
});
