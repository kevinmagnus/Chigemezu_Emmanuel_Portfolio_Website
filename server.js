import express from "express";
import nodemon from "nodemon";
import ejs from "ejs";
import path from "path";

const app = express();
const port = process.env.PORT || 3900;
const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "public")));

app.get("/", (req, res) => {

const filePath = path.join(_dirname,"public/Pages", "Home-Page.html");

    res.sendFile(filePath);

});

app.get("/Bio.html", (req, res) => {

const filePath = path.join(_dirname,"public/Pages", "Bio.html");

res.sendFile(filePath);

});


app.get("/Home-Page.html", (req, res) => {

const filePath = path.join(_dirname,"public/Pages", "Home-Page.html");

res.sendFile(filePath);

});


app.get("/Portfolio.html", (req, res) => {

    const filePath = path.join(_dirname,"public/Pages", "Portfolio.html");

res.sendFile(filePath);


});

app.get("/Elevator-Pitch.html", (req, res) => {

    const filePath = path.join(_dirname,"public/Pages", "Elevator-Pitch.html");

res.sendFile(filePath);


});


app.get("/Pitch-video.html", (req, res) => {

    const filePath = path.join(_dirname,"public/Pages", "Pitch-video.html");

res.sendFile(filePath);


});

app.listen(port, "0.0.0.0", () => {

    console.log(`Server is running on port ${port}.`);
});
