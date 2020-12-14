'use strict'


let pic_button = document.querySelector("#pic");
let user_button = document.querySelector("#user");
let root = window.location.href;
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
    let image = document.querySelector("img");

    if (image.src === (root + "images/binary-code.png")) {
        image.src = (root + "images/coding.png");
    }
    else {
        image.src = (root + "images/binary-code.png");
    }
}

window.addEventListener("load", () => {
    user_button.addEventListener("click", setName);
    pic_button.addEventListener("click", changePic)

    let stored_name = localStorage.getItem("name");

    if (!stored_name) {
        setName();
    }
    else {
        heading.textContent = "Welcome Back " + stored_name + "!";
    }
})

