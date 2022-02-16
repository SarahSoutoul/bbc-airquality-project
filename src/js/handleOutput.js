import handleImage from "./handleImage";
import { getQuerySelector } from "../helpers/helpers";

function handleOutput(data) {
  return function handleClick(event) {
    const imageGallery = getQuerySelector(".image-gallery");
    const cityName = getQuerySelector(".city-name");
    const cityInfo = getQuerySelector(".city-info");
    const firstOutputText = data["output-text-1"];
    const secondOutputText = data["output-text-2"];

    imageGallery.innerHTML = " ";

    const city = event.target.value;
    const aqi = event.target.getAttribute("aqi");
    const cigg = event.target.getAttribute("cigg");
    let isPlural = cigg < 1 || cigg > 1 ? "cigarettes" : "cigarette";

    cityName.innerHTML = city;

    cityInfo.innerHTML = `${firstOutputText} ${city} ${secondOutputText} ${cigg} ${isPlural} - ${aqi}`;

    for (let i = 0; i < cigg; i++) {
      imageGallery.appendChild(handleImage());
    }
  };
}

export default handleOutput;
