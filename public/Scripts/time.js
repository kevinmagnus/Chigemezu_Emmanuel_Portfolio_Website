const textElement = document.querySelector(".fade-text");

const texts = [ 

     "Welcome to my website!","Nice to have you!"

];

let index = 0;


function changeText() {

    textElement.textContent = texts[index];

    index = (index + 1) % texts.length;


}

changeText();

setInterval(changeText, 3000);


function greet() {

    const greeting_heading = document.getElementById("greeting-heading");

    const current_time = new Date().getHours();
    
;
if( (current_time >= 0) && (current_time < 12) ) {


    greeting_heading.innerHTML = "Good morning!";

}else if( (current_time >= 12) && (current_time <= 15) ) {

   
   greeting_heading.innerHTML = "Good afternoon!"; 


}else{

    greeting_heading.innerHTML = "Good evening!";

}


}

greet();



const website_creation_date = new Date("2025-08-15");


function calculate_date_created() {




    const today = new Date();

    const diffTime = Math.abs(today - website_creation_date);

    const diffDays = Math.floor(diffTime/ (1000*60*60*24) );

    return diffDays;



}





function show_website_creation_days() {


    const date_show = document.getElementById("coded");

    const days = calculate_date_created();

    date_show.innerHTML = "I coded this website from scratch using HTML, CSS, JavaScript, Node.js and Express.js "+ days +" days ago.";




}

setTimeout( show_website_creation_days() , 1000);



function black_theme() {

    const the_body = document.querySelector('body');

    the_body.style.backgroundColor = "black";

}

function white_theme() {

    const the_body = document.querySelector('body');

    the_body.style.backgroundColor = "white";


}


const textarea = document.getElementById("message_input");

textarea.addEventListener("input", () => {

    textarea.style.height = "auto";

    textarea.style.height = textarea.scrollHeight + "px";

    
});


const curiosity = document.getElementById("curiosity");

const colors = ["turquoise", "pink", "grey", "powderBlue", "yellowGreen"];

let index1 = 0;

setInterval(() => {

    curiosity.style.color = colors[index1];

    index1++;

    if(index1 >= colors.length) {
index1 = 0;
    }

}, 1000);
