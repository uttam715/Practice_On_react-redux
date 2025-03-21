import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import Product from "./src/reducers/Product";
import { Provider } from "react-redux";
import "./index.scss";
import { combineReducers, legacy_createStore } from "redux";
import CartItem from "./src/reducers/CartItem";

const combineReducer = combineReducers({
  Product: Product,
  cartItem : CartItem,
});

const store = legacy_createStore(combineReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
