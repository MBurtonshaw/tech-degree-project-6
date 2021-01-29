const express = require("express");
const app = express();
const infoFile = require("./data.json");
const { data } = infoFile;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
app.use("/static", express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {
        data
        });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get('/projects/:id', (req, res, next) => {
  // Log out home route handler indication
    res.render("project", data.projects[req.params.id]);
});

app.listen("3000", () => {
    console.log("running");
});

module.exports = app;