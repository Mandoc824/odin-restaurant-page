import noodleCup from "../images/Noodle_cup.jpg";

import bottleCap from "../images/bottle-cap.png";

const Menu = () => {
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  const contentTitle = document.createElement("h2");
  contentTitle.textContent = "Noodle Cup";

  const contentImg = document.createElement("img");
  contentImg.src = noodleCup;

  const contentP = document.createElement("p");
  contentP.textContent =
    "A cup holding some noodles. It heals a moderate amount of health. This is it. That's all we serve.";

  const priceDiv = document.createElement("div");
  priceDiv.classList.add("price");

  const bottleCapImg = document.createElement("img");
  bottleCapImg.src = bottleCap;

  const priceP = document.createElement("p");
  priceP.textContent = "55 Bottle Caps";

  priceDiv.appendChild(bottleCapImg);
  priceDiv.appendChild(priceP);

  mainContentDiv.appendChild(contentTitle);
  mainContentDiv.appendChild(contentImg);
  mainContentDiv.appendChild(contentP);
  mainContentDiv.appendChild(priceDiv);

  return mainContentDiv;
};

export default Menu;
