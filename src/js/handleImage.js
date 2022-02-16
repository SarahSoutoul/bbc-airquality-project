import cigaretteImage from "../img/ciggarette_icon.png";

function handleImage() {
  const img = document.createElement("img");
  img.className = "cigg-img";
  img.src = cigaretteImage;
  return img;
}

export default handleImage;
