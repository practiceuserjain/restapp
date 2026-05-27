const express = require("express");
const router = express.Router();

const User = require("../models/User");

//Auth Middleware
function isAuth(req, res, next) {
  if (req.session.user) next();
  else res.status(401).json({ message: "Unauthorized" });
}




router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) return res.json({ message: "Invalid credentials" });

  req.session.user = user;

  res.json({ message: "Login success", user });
});


router.post("/register", async (req, res) => {

  const { name, age, mobile, gender, address, email, password } = req.body;

  const exist = await User.findOne({ email });

  if (exist) return res.json({ message: "Email exists" });

  await User.create({ name, age, mobile, gender, address, email, password });

  res.json({ message: "Registered successfully" });
});


router.get("/users", isAuth, async (req, res) => {

  const users = await User.find();

  res.json(users);
});


router.put("/user/:id", isAuth, async (req, res) => {

  const id = req.params.id;

  await User.findByIdAndUpdate(id, req.body);

  res.json({ message: "Updated" });
});

router.delete("/user/:id", isAuth, async (req, res) => {

  const id = req.params.id;

  await User.findByIdAndDelete(id);

  res.json({ message: "Deleted" });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
});

router.get("/myparams/:id",(req,res)=>
{
  // console.log(req.params.id)
  console.log(req.query.name)
  console.log(req.query.age)
  res.json(req.query)
})

module.exports=router