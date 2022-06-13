import VaultBoy from "../images/vaultboy.png";
const Title = () => {
  const titleDiv = document.createElement("div");
  const vaultBoyImg = document.createElement("img");
  const titleH1 = document.createElement("h1");

  vaultBoyImg.src = VaultBoy;
  vaultBoyImg.classList.add("vault-boy");

  titleH1.textContent = "Power Noodles";
  titleH1.classList.add("title");

  titleDiv.classList.add("title-container");
  titleDiv.appendChild(vaultBoyImg);
  titleDiv.appendChild(titleH1);

  return titleDiv;
};

export default Title;
