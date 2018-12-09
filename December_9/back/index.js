const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();

const secret = "demo__system";

const encrypt = data => {
  const hash = crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("hex");
  return hash;
};

app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const User = {
  username: "admin",
  password: encrypt("123"),
};

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.post("/login", (req, res) => {
  let { username, password } = req.body;
  password = encrypt(password);

  if (User.username === username && User.password === password) {
    res.json({
      username,
      password,
      auth: true,
    });
  } else {
    res.json({
      auth: false,
      message: "Uesr not found",
    });
  }
});

app.listen(5000, () => {
  console.log(`Port - 5000`);
});
