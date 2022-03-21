function sortedProducts(state, products) {
  if (state.sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a.price - b.price);
  }
  if (state.sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b.price - a.price);
  }
  return products;
}

const filterByCategory = (state, products) => {
  if (state.category.length !== 0) {
    return products.filter((product) =>
      state.category.includes(product.category)
    );
  }
  return products;
};

const filterByIntention = (state, products) => {
  if (state.intention.length !== 0) {
    return products.filter((product) =>
      state.intention.includes(product.intention)
    );
  }
  return products;
};

const filterByUserRatings = (state, products) => {
  switch (state.userRatings) {
    case 4:
      return [...products].filter((product) => product.rating >= 4);
    case 3:
      return [...products].filter((product) => product.rating >= 3);
    case 2:
      return [...products].filter((product) => product.rating >= 2);
    default:
      return products;
  }
};

const filterByPriceRange = (state, products) => {
  switch (state.priceRange) {
    case "1000":
      return [...products].filter((product) => product.price <= 1000);
    case "2000":
      return [...products].filter((product) => product.price <= 2000);
    case "3000":
      return [...products].filter((product) => product.price <= 3000);
    case "4000":
      return [...products].filter((product) => product.price <= 4000);
    case "5000":
      return [...products].filter((product) => product.price <= 5000);
    default:
      return products;
  }
};

const composeAll = (state, products, ...allFunctions) => {
  return allFunctions.reduce((acc, curr) => curr(state, acc), products);
};

export {
  sortedProducts,
  filterByCategory,
  filterByIntention,
  filterByUserRatings,
  filterByPriceRange,
  composeAll,
};
