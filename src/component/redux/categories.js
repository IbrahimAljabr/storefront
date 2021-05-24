const initialState = {
  categories: [
    {
      name: "FOOD",
      displayName: "Food",
      description: "Where you can buy Food .",
    },
    {
      name: "ELECTRONICS",
      displayName: "Electronics",
      description: "Where you can buy Electronics .",
    },
  ],
  activeCategory: null,
};

const categoriesList = (state, action) => {
  state = initialState;
  let activeCategory,
    categories = [];
  const { type, payload } = action;
  switch (type) {
    case "FOOD":
      activeCategory = payload;
      categories = state.categories.filter((category) => {
        return category.name === payload;
      });
      return { categories, activeCategory };
    case "ELECTRONICS":
      activeCategory = payload;
      categories = state.categories.filter((category) => {
        return category.name === payload;
      });
      return { categories, activeCategory };
    default:
      return null;
  }
};

export default categoriesList;
