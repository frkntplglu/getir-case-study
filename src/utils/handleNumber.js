const numberOfProductOfBrand = (data, brand) => {
  return data.filter((item) => item.manufacturer === brand).length;
};

const numberOfProductTag = (data, tag) => {
  return data.filter((item) => item.tags.includes(tag)).length;
};

export { numberOfProductOfBrand, numberOfProductTag };
