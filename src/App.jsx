import React, { useEffect, useState } from "react";
import fetchProductList from "./utils/getApiCallProduct";
import { useSelector, useDispatch } from "react-redux";
import { setProductList } from "./actions/action";
import ProductCard from "./components/ProductCard";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
export default function App() {
  const isOpen = useSelector((state)=> state.cartItem.isOpen)
  const dispatch = useDispatch();

  useEffect(async () => {
    const productList = await fetchProductList();
    console.log("data", productList);
    dispatch(setProductList(productList));
  }, []);

  return (
    <div>
      <Header />
      {
        isOpen ? <Cart /> :  <Home />
      }
      <Footer />
    </div>
  );
}
