// Show / Hide About

const toggleBtn = document.getElementById("toggleBtn");
const aboutText = document.getElementById("aboutText");

toggleBtn.addEventListener("click", function () {
    if (aboutText.style.display === "none") {
        aboutText.style.display = "block";
    } else {
        aboutText.style.display = "none";
    }
});


// Dark / Light Mode

const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


// Image Slider

const images = [
    "images/2762.jpg",
    "images/4649.jpg",
    "images/4656.jpg"
];

let index = 0;

const sliderImage = document.getElementById("sliderImage");

document.getElementById("next").addEventListener("click", function () {

    index++;

    if(index >= images.length){
        index = 0;
    }

    sliderImage.src = images[index];
});

document.getElementById("prev").addEventListener("click", function () {

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    sliderImage.src = images[index];
});



// To Do List

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function(){

    const task = taskInput.value;

    if(task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";

    delBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});


// Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if(name === ""){
        document.getElementById("nameError").textContent = "Name required";
        valid = false;
    }

    if(email === ""){
        document.getElementById("emailError").textContent = "Email required";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").textContent = "Message required";
        valid = false;
    }

    if(valid){
        alert("Form submitted successfully!");
        form.reset();
    }
});









   
