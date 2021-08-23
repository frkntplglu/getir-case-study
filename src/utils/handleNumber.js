const numberOfProductOfBrand = (data, brand) => {
  if (!brand) return data.length;
  return data.filter((item) => item.manufacturer === brand).length;
};

const numberOfProductOfTag = (data, tag) => {
  if (!tag) return data.length;
  return data.filter((item) => item.tags.includes(tag)).length;
};

export { numberOfProductOfBrand, numberOfProductOfTag };
