import { createStore, combineReducers } from "redux";
import productsReducer from "./products";
import categoriesReducer from "./categories";

const reducers = combineReducers({ products: productsReducer, categories: categoriesReducer });
const store = () => {
  return createStore(reducers);
};

export default store();
