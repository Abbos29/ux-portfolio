"use strict";

var navToggle = document.querySelector(".burger__menu");
var mainMenu = document.querySelector(".nav");
var tBody = document.querySelector("body");
navToggle.addEventListener("click", function () {
  mainMenu.classList.toggle("burger__active");
  tBody.classList.toggle("lock");
});
mainMenu.addEventListener("click", function (event) {
  if (event.target) {
    mainMenu.classList.remove("burger__active");
    tBody.classList.remove("lock");
  }
});