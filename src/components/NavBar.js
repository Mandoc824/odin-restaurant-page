const NavBar = () => {
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";

  const aboutButton = document.createElement("button");
  aboutButton.textContent = "About";

  const NavDiv = document.createElement("div");
  NavDiv.classList.add("nav-bar");

  const buttons = [homeButton, menuButton, aboutButton];
  buttons.forEach((button) => {
    NavDiv.appendChild(button);
  });

  return NavDiv;
};

export default NavBar;
