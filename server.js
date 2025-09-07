import express from "express";
import nodemon from "nodemon";
import ejs from "ejs";
import path from "path";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const corsOptions = {
origin: "*",
methods: ['GET', 'POST'],

    };
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(cors(corsOptions));
const port = process.env.PORT || 3900;
const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "public")));
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));



const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true, // or 'STARTTLS'
  auth: {
    user: 'chigemezuemmanuel641@gmail.com',
    pass: '2151852618',
  },
});



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


app.get("/Certificates.html", (req, res) => {


  const filePath = path.join(_dirname,"public/Pages", "Certificates.html");

res.sendFile(filePath);

});



app.get("/Volunteer.html", (req, res) => {

    const filePath = path.join(_dirname,"public/Pages", "Volunteer.html");

res.sendFile(filePath);


});
    

app.get("/Work-Experiences.html", (req, res) => {

    const filePath = path.join(_dirname,"public/Pages", "Work-Experiences.html");

res.sendFile(filePath);


});
    



// Route to handle email form submission

app.post('/submit', (req, res) => {

  const message = req.body.message;

  const first_name = req.body.first_name;

  res.render('success', { first_name: first_name});
  
    
});


app.listen(port, "0.0.0.0", () => {

    console.log(`Server is running on port ${port}.`);

});
