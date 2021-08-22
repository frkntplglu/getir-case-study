const handlePagination = (data, options) => {
  const { currentPage, productsPerPage } = options;
  const startPoint = productsPerPage * (currentPage - 1);
  const endPoint = startPoint + productsPerPage;
  return data.slice(startPoint, endPoint);
};

export default handlePagination;
