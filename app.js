const express = require("express");
const app = express();
const { data } = require("./data.json");
const { projects } = data;
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
    const projectID = req.params.id;
    const project = projects.find(({ id }) => id === +projectID);
    if (project) {
        res.render("project", {name: project.project_name, description: project.description, technologies: project.technologies, link1: project.live_link, link2: project.github_link, photos: project.image_urls}); 
        } else {
            const err = new Error();
            res.status(404);
            res.render("not-found");
            next(err);
        }
});

app.listen("3000", () => {
    console.log("running");
});

module.exports = app;