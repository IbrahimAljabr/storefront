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
  activeCategory: [],
};

const categoriesList = (state, action) => {
  state = initialState;
  let activeCategory,
    categories = [];
  const { type, payload } = action;
  switch (type) {
    case "FOOD":
      activeCategory = payload;
      state.activeCategory = state.categories.filter((category) => {
        return category.name === payload;
      });
      return { categories: state.activeCategory };
    case "ELECTRONICS":
      activeCategory = payload;
      state.activeCategory = state.categories.filter((category) => {
        return category.name === payload;
      });
      return { categories: state.activeCategory };
    default:
      return { categories: state.activeCategory };
  }
};

export default categoriesList;
