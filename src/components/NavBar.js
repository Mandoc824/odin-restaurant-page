const NavBar = () => {
  const homeButton = document.createElement("button");
  homeButton.classList.add("home-btn");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.add("menu-btn");

  const aboutButton = document.createElement("button");
  aboutButton.textContent = "About";
  aboutButton.classList.add("about-btn");

  const NavDiv = document.createElement("div");
  NavDiv.classList.add("nav-bar");

  const buttons = [homeButton, menuButton, aboutButton];
  buttons.forEach((button) => {
    NavDiv.appendChild(button);
  });

  return NavDiv;
};

export default NavBar;
