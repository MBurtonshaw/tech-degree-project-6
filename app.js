const express = require("express");
const app = express();
//variable requiring/allowing access to data.json
const { data } = require("./data.json");
//that same data, wrapped in the "projects" object
const { projects } = data;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//setting up a static server for files within the "public" folder
app.use("/static", express.static("public"));
//setting up the view engine so that pages can be rendered with Pug
app.set("view engine", "pug");

//root GET route; renders index.pug with the "projects" object data
app.get("/", (req, res, next) => {
    res.render("index", { projects });
});

//about GET route; renders about.pug with the "projects" object data
app.get("/about", (req, res) => {
    res.render("about", { projects });
});

//GET route based on the project id from data.json; renders project.pug with the "projects" object data
app.get("/projects/:id", (req, res) => {
    //variable targeting the id in the url
    const projectID = req.params.id;
    //variable using .find to search through data.json for the id corresponding to the url id
    const project = projects.find(({ id }) => id === +projectID);
    //if that id exists, render project.pug with the project data for the project containing the corresponding id
    if (project) {
        res.render("project", { project });
    } else {
        //otherwise, throw a new 404 error and render not-found.pug
        res.status(404);
        res.render("not-found");
    }
});

//route to test a 500 error
app.get("/error_demo", (req, res, next) => {
    throw new Error("This is a test");
});


//404 error handler
app.use((req, res, next) => {
    res.status(404).render("not-found", {msg: "You got a 404 error"});
    console.log(err.status);
});

//500 error handler
app.use((err, req, res, next) => {
    res.status(500).render("error", { err });
    console.log(err.message);
});

//local server
app.listen("3000", () => {
    console.log("running");
});
