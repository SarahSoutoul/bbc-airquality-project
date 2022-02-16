const shortenPharagraphs = (data) => {
  let property;
  let pharagraphObj = {};
  let count = 1;
  for (property in data) {
    let string = `p_`;
    let condition = property.toLowerCase().includes(string.toLowerCase());

    if (condition) {
      pharagraphObj = {
        ...pharagraphObj,
        [`p${count}`]: data[`${string}${count}_value`],
      };
      count++;
    }
  }
  return pharagraphObj;
};

const getQuerySelector = (selector) => document.querySelector(`${selector}`);

export { shortenPharagraphs, getQuerySelector };
