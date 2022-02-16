import "./index.css";
import setButtons from "./js/setButtons";
import handleOutput from "./js/handleOutput";
import handleInfo from "./js/handleInfo";
import clearOutput from "./js/clearOutput";

const englishData = import("./data/english.json");
const hindiData = import("./data/hindi.json");

let customData;

function changeLanguage(event) {
  const checked = event.target.checked;
  const value = event.target.value;

  let language = "english";

  if (checked) {
    language = value;
  }

  customData = language === "english" ? englishData : hindiData;

  customData.then((dataset) => {
    clearOutput();
    setButtons(dataset.default);
    handleInfo(dataset.default);

    const buttons = document.querySelectorAll(".city-button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", handleOutput(dataset.default));
    }
  });
}

function initializeData() {
  englishData.then((dataset) => {
    setButtons(dataset.default);
    handleInfo(dataset.default);

    const buttons = document.querySelectorAll(".city-button");
    const languages = document.querySelectorAll('input[name="language"]');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", handleOutput(dataset.default));
    }

    for (let i = 0; i < languages.length; i++) {
      languages[i].addEventListener("click", changeLanguage);
    }
  });
}

initializeData();
