AOS.init();


const navToggle = document.querySelector(".burger__menu");
const mainMenu = document.querySelector(".nav");
const tBody = document.querySelector("body");
const langRuToggle = document.querySelector(".lang__ru");
const langEngToggle = document.querySelector(".lang__eng");

navToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("burger__active");
  tBody.classList.toggle("lock");
});

mainMenu.addEventListener("click", (event) => {
  if(event.target){
    mainMenu.classList.remove("burger__active");
    tBody.classList.remove("lock");
  }
});

langRuToggle.addEventListener("click", () => {
  langRuToggle.classList.toggle("avtive-lang");
  langRuToggle.style.color = '#070707';
});

langRuToggle.addEventListener("click", (event) => {
  if(event.target){
    langEngToggle.classList.remove("active-lang");
    langEngToggle.style.color = 'inherit';
  }
});

langEngToggle.addEventListener("click", () => {
  langEngToggle.classList.toggle("avtive-lang");
  langEngToggle.style.color = '#070707';
});

langEngToggle.addEventListener("click", (event) => {
  if(event.target){
    langRuToggle.classList.remove("active-lang");
    langRuToggle.style.color = 'inherit';
  }
});
