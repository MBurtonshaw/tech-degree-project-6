const express = require("express");
const app = express();
const { data } = require("./data.json");
const { projects } = { data };
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: false}))
app.use("/static", express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", { projects });
});

app.get("/about", (req, res) => {
    res.render("about", { projects });
});

app.get('/projects/:id', (req, res, next) => {
  // Log out home route handler indication
    const { id } = req.params;
    const project = projects[id];
    res.render("project", { project });
});

app.listen("3000", () => {
    console.log("running");
});

