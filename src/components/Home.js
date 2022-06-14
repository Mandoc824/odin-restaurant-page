import Takahashi from "../images/takahashi.jpg";
const Home = () => {
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  const contentTitle = document.createElement("h2");
  contentTitle.textContent = "Meet your Cook!";

  const contentImg = document.createElement("img");
  contentImg.src = Takahashi;

  const contentP = document.createElement("p");
  contentP.textContent =
    "An unusual robotic chef, Takahashi has been operating Power Noodles at the center of Diamond City's market for fifteen years. He continuously stirs an unspecified substance in a stockpot. Takahashi is only able to say one thing, and according to a terminal in Mayor McDonough's office, this appears to be a malfunction. However, McDonough refuses to repair the robot because he believes it is a symbol of Diamond City's culture.";

  mainContentDiv.appendChild(contentTitle);
  mainContentDiv.appendChild(contentImg);
  mainContentDiv.appendChild(contentP);

  return mainContentDiv;
};

export default Home;
