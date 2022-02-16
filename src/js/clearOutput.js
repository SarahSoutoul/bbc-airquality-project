import { getQuerySelector } from "../helpers/helpers";

function clearOutput() {
  const imageGallery = getQuerySelector(".image-gallery");
  const cityName = getQuerySelector(".city-name");
  const cityInfo = getQuerySelector(".city-info");
  const citiesContainer = getQuerySelector(".cities");

  if (citiesContainer.children) {
    citiesContainer.innerHTML = "";
  }

  imageGallery.innerHTML = " ";
  cityName.innerHTML = "";
  cityInfo.innerHTML = "";
}

export default clearOutput;
