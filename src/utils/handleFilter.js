const filterByBrand = (data, brandList) => {
  data.filter((item) => brandList.includes(item.manufacturer));
};

const filterByTag = (data, tagList) => {
  data.filter((item) => tagList.includes(item.tags));
};

export { filterByBrand, filterByTag };
