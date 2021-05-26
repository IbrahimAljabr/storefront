import { createStore, combineReducers } from "redux";
import productsReducer from "./products";
import categoriesReducer from "./categories";
import cart from "./cart";

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cartList: cart,
});
const store = () => {
  return createStore(reducers);
};

export default store();
