import express from "express";
import nodemon from "nodemon";
import ejs from "ejs";
import path from "path";

const app = express();
const port = process.env.PORT || 3900;
const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "public")));
app.use(express.json());
app.use(express.urlencoded());

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



app.post("/message", (req, res) => {



    const message_body = req.body;

    const the_message = message_body.message;

    const name = message_body.name;



    if(!message_body && !message_body.description) {

        var description = message_body.description.trim();

        if(description === "") {

            res.status(400).send("Please enter your message");


        } 
    
    }else{

        

        res.status(201).send(  
            
            `<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Chigemezu Emmanuel's Portfolio Home Page</title>
    <link rel = "icon" type= "image/x-icon" href = "Images/android-chrome-192x192.png">
    <link href="Stylesheet/style.css" rel = "stylesheet">

</head> 
 <body>
 
 <nav>

  <ul> <li> <a href = '/'>Home</a>  </li> </ul>
  
  </nav>  <br> 
  
  <div style = 'color: powderblue'> ${name}, your message was received successfully! Look forward to get my response sooner.</div>
 
 </body>` );


    }

});





app.listen(port, "0.0.0.0", () => {

    console.log(`Server is running on port ${port}.`);

});
