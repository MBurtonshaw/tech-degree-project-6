const express = require("express");
const app = express();
//const cookieParser = require("cookie-parser");
//app.use(cookieParser);

app.use("/static", express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/project", (req, res) => {
    res.render("project");
});

app.get("/unit_one", (req, res) => {
    res.render("unit_one");
});

app.get("/unit_two", (req, res) => {
    res.render("unit_two");
});

app.get("/unit_three", (req, res) => {
    res.render("unit_three");
});

app.get("/unit_four", (req, res) => {
    res.render("unit_four");
});

app.get("/unit_five", (req, res) => {
    res.render("unit_five");
});

app.listen("3000");