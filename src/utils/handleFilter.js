const filterByBrand = (data, brandList) => {
  if (!brandList.length) return data;
  return data.filter((item) => brandList.includes(item.manufacturer));
};

const filterByTag = (data, tagList) => {
  if (!tagList.length) return data;
  const filteredData = [];
  tagList.forEach((tag) => {
    filteredData.push(...data.filter((item) => item.tags.includes(tag)));
  });

  return filteredData;
};

const filterData = (data, brandList, tagList) => {
  return filterByTag(filterByBrand(data, brandList), tagList);
};

export { filterData };
