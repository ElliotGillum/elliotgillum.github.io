'use strict'


let pic_button = document.querySelector("#pic");
let user_button = document.querySelector("#user");
let heading = document.querySelector("h1");

function setName() {
    let name = prompt("Enter your name.");

    if (!name) {
        heading.textContent = "Hello User!"
        localStorage.setItem("name", "User");
    }
    else {
        localStorage.setItem("name", name);
        heading.textContent = "Hello " + name + "!";
    }
    
}

function changePic() {
    let image = document.querySelector("#background");
    let root = window.location.href;

    if (image.src === (root + "images/binary-code.png")) {
        image.src = "/images/coding.png";
        image.alt = "coding";
    }
    else {
        image.src = "/images/binary-code.png";
        image.alt = "binary-code"
    }
}

user_button.addEventListener("click", setName);

pic_button.addEventListener("click", changePic)

window.addEventListener("load", () => {

    let stored_name = localStorage.getItem("name");

    if (!stored_name) {
        setName();
    }
    else {
        heading.textContent = "Welcome Back " + stored_name + "!";
    }
})

