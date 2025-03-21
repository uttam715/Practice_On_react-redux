import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
export default function Home() {
  const productList = useSelector((state) => state.Product.productList);
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {productList.map((item) => (
              <ProductCard product={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
