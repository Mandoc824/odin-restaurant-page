import PowerNoodles from "../images/power-noodles.jpg";
const About = () => {
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  const contentTitle = document.createElement("h2");
  contentTitle.textContent = "About Us!";

  const contentImg = document.createElement("img");
  contentImg.src = PowerNoodles;

  const contentP = document.createElement("p");
  contentP.textContent =
    "Power Noodles is an unmarked location in the Diamond City market in 2287. It is operated by the Protectron Takahashi, and was founded in 2272.";

  const contentExtraP = document.createElement("p");

  contentExtraP.textContent =
    "This structure directly opposite the city's main entrance in the center of the market is a small outdoor restaurant. Counters encircle a central pillar, with Takahashi behind one of them";

  mainContentDiv.appendChild(contentTitle);
  mainContentDiv.appendChild(contentImg);
  mainContentDiv.appendChild(contentP);
  mainContentDiv.appendChild(contentExtraP);

  return mainContentDiv;
};

export default About;
