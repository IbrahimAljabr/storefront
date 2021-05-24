const initialState = {
  arrOfProducts: [
    {
      name: "Apple",
      category: "FOOD",
      description: "you can eat . ",
      url: "https://post.healthline.com/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg",
      price: "73$",
    },
    {
      name: "Carrots",
      category: "FOOD",
      description: "you can eat .",
      url: "https://media.healthyfood.com/wp-content/uploads/2019/07/The-lost-plot-growing-carrots-iStock-471680420.jpg",
      price: "67$",
    },
    {
      name: "MB&F ",
      category: "ELECTRONICS",
      description: "To know the time at the currunt time . ",
      url: "https://oracleoftime.com/wp-content/uploads/2019/07/MBF-Legacy-Machine-No.2-Red-Gold-Blue-Watch-3.jpg",
      price: "1175$",
    },
    {
      name: "Iphone12",
      category: "ELECTRONICS",
      description: "Make a phone call . ",
      url: "https://www.kickmobiles.com/images/thumbs/0013868_apple-iphone-12-pro-max_808.jpeg",
      price: "186$",
    },
  ],
};

const productsList = (state, action) => {
  state = initialState;
  const { type, payload } = action;
  let arrOfProducts;
  switch (type) {
    case "ELECTRONICS":
      arrOfProducts = state.arrOfProducts.filter((product) => {
        return product.category === payload;
      });
      return { arrOfProducts };

    case "FOOD":
      arrOfProducts = state.arrOfProducts.filter((product) => {
        return product.category === payload;
      });
      return { arrOfProducts };
    default:
      return null;
  }
};

export default productsList;
