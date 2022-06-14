import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import "./styles.css";

const contentDiv = document.getElementById("content");

//helper functions
function appendToContentDiv(element) {
  contentDiv.appendChild(element);
}

function removeMainContentDiv() {
  const mainContentDiv = document.querySelector(".main-content");
  mainContentDiv.remove();
}

function loadTab(target, className, content) {
  if (target.disabled === true) return;
  const buttons = [...document.querySelector(".nav-bar").childNodes];
  buttons.forEach((button) => {
    if (!button.classList.contains(className)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
  removeMainContentDiv();
  appendToContentDiv(content());
}

//Initial Load
appendToContentDiv(Title());
appendToContentDiv(NavBar());
const homeButton = document.querySelector(".home-btn");
homeButton.disabled = true;

appendToContentDiv(Home());

//Event Listeners with event delegation

const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("home-btn"))
    return loadTab(e.target, "home-btn", Home);
  if (e.target.classList.contains("menu-btn"))
    return loadTab(e.target, "menu-btn", Menu);
  if (e.target.classList.contains("about-btn"))
    return loadTab(e.target, "about-btn", About);
});
