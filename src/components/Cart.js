import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../actions/action";
export default function Cart() {
  const cartProduct = useSelector((state) => state.cartItem.product);
  const totalItem = useSelector((state)=> state.cartItem.itemCount);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Added product", cartProduct);
  }, [cartProduct]);

  function handleCancel() {
    dispatch(setCartOpen(false));
  }

  return (
    <>
      <div id="cart">
        <div className="cart_content">
          <div className="cart_head">
            <h2>
              Cart <small></small>
            </h2>
            <div title="Close" className="close_btn" onClick={handleCancel}>
              <span>&times;</span>
            </div>
          </div>
          <div className="cart_body">
            {cartProduct.map((product) => (
              <div key={product.id} className="cart_items">
                <img
                  src={product.image}
                  className="cart_items_img"
                  alt="product-img"
                />
                <div className="cart_items_info">
                  <h4>{product.title}</h4>
                  <h3 className="price">{product.price}</h3>
                </div>
                <div className="cart_items_quantity">
                  <span>&#8722;</span>
                  <b>{totalItem}</b>
                  <span>&#43;</span>
                </div>
                <div title="Remove Item" className="cart_items_delete">
                  <span>&times;</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cart_foot">
            <h3>
              <small>Total:</small>
              <b>₹ 200</b>
            </h3>

            <button type="button" className="checkout_btn">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
