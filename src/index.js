import Title from "./components/Title";
import NavBar from "./components/NavBar";
import "./styles.css";

const contentDiv = document.getElementById("content");

function appendToContentDiv(element) {
  contentDiv.appendChild(element);
}

appendToContentDiv(Title());
appendToContentDiv(NavBar());
