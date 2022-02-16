function setButtons(data) {
  const citiesContainer = document.querySelector(".cities");

  for (let property in data) {
    if (property.includes("name")) {
      var button = document.createElement("button");
      button.className = "city-button";
      button.innerHTML = data[property];
      citiesContainer.appendChild(button);
      button.setAttribute("value", data[property]);
    } else if (property.includes("aqi")) {
      button.setAttribute("aqi", data[property]);
    } else if (property.includes("cigg")) {
      button.setAttribute("cigg", data[property]);
    }
  }
}

export default setButtons;
