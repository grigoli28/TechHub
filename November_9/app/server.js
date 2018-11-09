const express = require("express");
const fs = require("fs");
const path = require("path");
const data = require("./data/data.json");

const app = express();

let id = 0;

app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.get("/api/todos", (req, res) => {
  res.send(data);
});

app.get("*", (req, res) => {
  fs.readFile(`${__dirname}/public/index.html`, (err, hmtl) => {
    if (err) throw err;
    res.setHeader("Content-Type", "text/html");
    res.send(hmtl);
  });
});

app.listen(app.get("port"), () => {
  console.log(`Listening on - ${app.get("port")}`);
});
