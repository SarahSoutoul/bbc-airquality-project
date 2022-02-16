import { shortenPharagraphs, getQuerySelector } from "../helpers/helpers";

function newName(data) {
  const paragraphs = shortenPharagraphs(data);
  return {
    ...paragraphs,
    languageTitle: data["language-choice"],
    author: data["article-info_1_byline"],
    articleUrl: data["article-info_1_category_url"],
    articleImage: data["hero_1_image"],
    articleTitle: data["hero_1_title"],
    creationDate: data["article-info_1_date"],
    articleCountry: data["article-info_1_category"],
    compareFact: data["compare-tabs_1_method"],
    selectTitle: data["compare-tabs_1_title"],
  };
}

function handleInfo(data) {
  const newData = newName(data);
  const title = getQuerySelector(".article-title");
  const image = getQuerySelector(".article-image");
  const articleInfo = getQuerySelector(".article-info");
  const articleIntro = getQuerySelector(".article-intro");
  const instructions = getQuerySelector(".article-instructions");
  const articleCompare = getQuerySelector(".article-compare");
  const description = getQuerySelector(".article-description");
  const select = getQuerySelector(".select");
  const methodology = getQuerySelector(".methodology");
  const languageTitle = getQuerySelector(".language-title");

  image.src = newData.articleImage;
  title.innerHTML = newData.articleTitle;
  articleInfo.innerHTML = `${newData.author} | ${newData.creationDate} | ${newData.articleCountry}`;
  articleIntro.innerHTML = newData.p1;
  languageTitle.innerHTML = newData.languageTitle;

  instructions.innerHTML = newData.p5;
  articleCompare.innerHTML = newData.compareFact;
  select.innerHTML = newData.selectTitle;

  description.innerHTML = `<p>${newData.p2}</p> <p>${newData.p3}</p> <p>${newData.p4}</p>`;
  methodology.innerHTML = `<p>${newData.p6}</p> <p>${newData.p7}</p> <p>${newData.p8}</p> <p>${newData.p9}</p> <p>${newData.p10}</p>`;
}

export default handleInfo;
