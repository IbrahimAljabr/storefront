import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./products";
import categoriesReducer from "./categories";
import cart from "./cart";

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cartList: cart,
});
const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
