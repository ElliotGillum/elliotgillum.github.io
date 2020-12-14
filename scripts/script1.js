'use strict'

let pic_button = document.querySelector("#pic");
let user_button = document.querySelector("#user");
let heading = document.querySelector("h1");
let dynamic_list = document.querySelector("#dynamic_list");



dynamic_list.addEventListener("click", () => {
    let list_item = document.createElement("li");
    let list_content = prompt("Enter list content.");

    list_item.textContent = list_content;
    dynamic_list.appendChild(list_item);

    list_item.addEventListener("click", e => {

        e.stopPropagation();

        let list_content = prompt("Enter new list content.");
        list_item.textContent = list_content;
    })
})

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
    let root = window.location.origin;

    if (image.src === (root + "/images/binary-code.png")) {
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

