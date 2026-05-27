const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const port = 5000

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true })); //req.body

//middleware cors config
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true
  }
));

//middleware session config
app.use(session({
  secret: "secret123slkdjfljsfj",
  resave: false,
  saveUninitialized: true

}));

//MongoDB Connection
const conn = mongoose.connect("mongodb://127.0.0.1:27017/userdb")

conn.then(() => {
  console.log("Connection successfull...")
}).catch((err) => {
  console.error(err)
})

app.use("/api", userRoutes);

app.listen(port, () => console.log(`Server running http://localhost:${port}`));