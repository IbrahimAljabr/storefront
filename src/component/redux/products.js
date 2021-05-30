import axios from "axios";

const initialState = {
  arrOfProducts: [],
  products: [],
};

const productsList = (state, action) => {
  state = initialState;
  const { type, payload } = action;
  let arrOfList = [];
  switch (type) {
    case "ELECTRONICS":
      state.products = state.arrOfProducts.filter((product) => {
        return product.category === payload.toLowerCase();
      });
      return { ...state, arrOfProducts: state.products };

    case "FOOD":
      state.products = state.arrOfProducts.filter((product) => {
        return product.category === payload.toLowerCase();
      });
      return { ...state, arrOfProducts: state.products };

    case "ADD":
      arrOfList = state.arrOfProducts.filter((product) => {
        if (product === payload) {
          product.inventory -= 1;
        }

        return product === payload;
      });

      return { ...state, arrOfProducts: state.products, arrOfList: arrOfList };

    case "GET":
      const product = async () => {
        state.arrOfProducts = await axios
          .get("https://api-js401.herokuapp.com/api/v1/products")
          .then((res) => {
            return res.data.results;
          });
      };
      product();
      return { ...state, state: state.arrOfProducts };

    default:
      return null;
  }
};

export default productsList;
