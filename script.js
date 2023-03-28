"use strict";

const btn = document.querySelectorAll(".buttons");
console.log(btn);

btn.forEach(function (buttons) {
    buttons.addEventListener("click", function () {
        this.classList.toggle("active");
    })
})