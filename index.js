const questionContainer = document.querySelector(".click-event");
const paris = document.getElementById("btn-1");
const lyon = document.getElementById("btn-2");
const answer = document.querySelector("p");
const mousemove = document.querySelector(".souris");

questionContainer.style.borderRadius = "100px";

paris.addEventListener("click", () => {
  answer.style.visibility = "visible";
  answer.style.color = "green";
});

lyon.addEventListener("click", () => {
  answer.style.visibility = "visible";
  answer.style.color = "red";
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "black";
});

answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(-3deg)";
});

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = () => {
  const audio = new Audio();
  audio.src = "/home/utilisateur/Documents/Cours-JS-From-Scratch0222/z.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  // ajouter ici "ring();"" pour jouer le son
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("change", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (CGV.checked) {
    document.querySelector(
      "form > div"
    ).innerHTML = ` "mon prénom est : " ${pseudo}`;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

window.addEventListener("load", () => {
  console.log("doc Chargé !");
});
