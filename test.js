"use strict";

const passwordbox = document.getElementById("password");
const length=12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";


function generate() {
    let password = "";
    let characters = upperCase + lowerCase + numbers ;
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    passwordbox.value = password;
}
function copy() {
    passwordbox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}