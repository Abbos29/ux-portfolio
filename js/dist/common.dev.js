"use strict";

AOS.init();
var navToggle = document.querySelector(".burger__menu");
var mainMenu = document.querySelector(".nav");
var tBody = document.querySelector("body");
var langRuToggle = document.querySelector(".lang__ru");
var langEngToggle = document.querySelector(".lang__eng");
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
langRuToggle.addEventListener("click", function () {
  langRuToggle.classList.toggle("avtive-lang");
  langRuToggle.style.color = '#070707';
});
langRuToggle.addEventListener("click", function (event) {
  if (event.target) {
    langEngToggle.classList.remove("active-lang");
    langEngToggle.style.color = 'inherit';
  }
});
langEngToggle.addEventListener("click", function () {
  langEngToggle.classList.toggle("avtive-lang");
  langEngToggle.style.color = '#070707';
});
langEngToggle.addEventListener("click", function (event) {
  if (event.target) {
    langRuToggle.classList.remove("active-lang");
    langRuToggle.style.color = 'inherit';
  }
});